import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { ContactCard } from "./ContactCard";
import "../../styles/home.css";

export const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(
      "https://playground.4geeks.com/apis/fake/contact/agenda/marina_agenda"
    )
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("ERROR:", error));
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button, bootstrap is working
      </a>
      {contacts.map((contact) => (
        <ContactCard key={contact.key} {...contact} />
      ))}
    </div>
  );
};
