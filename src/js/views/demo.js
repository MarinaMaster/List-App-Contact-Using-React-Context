// Demo.js
import React, { useState } from "react";
import "../../styles/demo.css";

export const Demo = () => {
  const [newContact, setNewContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "marina_agenda", // Use your actual agenda_slug
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const addContact = (contactData) => {
    fetch("https://playground.4geeks.com/apis/fake/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((response) => {
        if (!response.ok) {
          // Log detailed error for debugging
          return response.text().then((text) => {
            throw new Error(
              `HTTP error! Status: ${response.status} Response Body: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Contact added successfully", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(newContact);
    setNewContact({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      agenda_slug: "marina_agenda",
    });
  };

  return (
    <div className="text-center mt-5">
      <h2>Add a New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            required
            value={newContact.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            value={newContact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter phone"
            required
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address"
            required
            value={newContact.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
