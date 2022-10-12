import React from "react";
import AskQuesList from "./askedQues/askedQuesData";
import ContactForm from "./contactForm";

const ContactPage = ({ data, path }) => {
  return (
    <>
      <ContactForm />
      {/* <AskQuesList data={data.contactPage} /> */}
    </>
  );
};

export default ContactPage;
