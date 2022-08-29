import Layout from "@components/Layouts";
import ContactPage from "@components/pageSections/contactPage";
import AskedQues from "@components/pageSections/contactPage/askedQues";
import AskQuesList from "@components/pageSections/contactPage/askedQues/askedQuesData";
import ContactForm from "@components/pageSections/contactPage/contactForm";
import React from "react";

const Contact = () => {
  return (
    <>
      <ContactPage/>
    </>
  );
};
Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contact;
