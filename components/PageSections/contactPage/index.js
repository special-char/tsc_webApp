import React from "react";
import AskQuesList from "./askedQues/askedQuesData";
import ContactForm from "./contactForm";

const ContactPage = ({ data }) => {
  console.log("Contact Page data:", data);
  return (
    <>
      <ContactForm data={data.contactPage} />
      <AskQuesList data={data.contactPage} />
    </>
  );
};

export default ContactPage;
