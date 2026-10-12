import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactLocation from "../components/contact/ContactLocation";
import React from "react";

const Contact = () => {
  return (
    <main>
      <ContactHero />

      <ContactDetails />

      <ContactForm/>

      <ContactLocation />

    </main>
  );
};

export default Contact;