import Layout from "@components/Layouts";
import ContactPage from "@components/pageSections/contactPage";
import ContactQuery from "@queries/contactQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Contact = ({ data }) => {
  return <ContactPage data={data} path="development" />;
};
Contact.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
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
