import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Demo } from "./demo.js";
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
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          contact={contact}
          contacts={contacts}
          setContacts={setContacts}
        />
      ))}
    </div>
  );
};
