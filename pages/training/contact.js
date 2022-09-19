import Layout from "@components/Layouts";
import ContactPage from "@components/pageSections/contactPage";
import AskedQues from "@components/pageSections/contactPage/askedQues";
import AskQuesList from "@components/pageSections/contactPage/askedQues/askedQuesData";
import ContactForm from "@components/pageSections/contactPage/contactForm";
import ContactQuery from "@queries/contactQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Contact = ({ data }) => {
  return (
    <>
      <ContactPage data={data} />
    </>
  );
};
Contact.getLayout = function getLayout(page) {
  return <Layout path="training">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: ContactQuery,
      variables: {},
    });
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}

export default Contact;
