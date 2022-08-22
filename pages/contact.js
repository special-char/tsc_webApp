import AskedQues from "@components/pageSections/contactPage/askedQues";
import AskQuesList from "@components/pageSections/contactPage/askedQues/askedQuesData";
import ContactForm from "@components/pageSections/contactPage/contactForm";
import React from "react";

const Contact = () => {
  return (
    <>
      <ContactForm />
      <AskQuesList />
    </>
  );
};

export default Contact;
