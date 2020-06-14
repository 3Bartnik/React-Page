import React from "react";
import "./Contact.css";
import {
  EmailElement,
  PhoneNumber,
  PostAddress,
} from "./components/ContactData";
const colorFont = {
  color: "#4782c1",
  marginBottom: "70px",
};
const contactData = {
  phone: "+48 505-123-345",
  e_mail: "session@edithphotography.pl",
  address: "ul. Nibylandii 5/13, 01-513 Warszawa",
};

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 style={colorFont}>Zapraszam do kontaktu </h1>
        <div className="row justify-content-center">
          <PostAddress address={contactData.address} />
          <EmailElement e_mail={contactData.e_mail} />
          <PhoneNumber phone={contactData.phone} />
        </div>
      </div>
    </section>
  );
};
export default Contact;
