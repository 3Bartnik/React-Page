import React from "react";
import "./Contact.css";
import {
  contactData,
  EmailElement,
  PhoneNumber,
  PostAddress,
} from "./components/ContactData";
const colorFont = {
  color: "#4782c1",
  marginBottom: "70px",
};

const Contact = (props) => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 style={colorFont}>Bądźmy w kontakcie </h1>
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
