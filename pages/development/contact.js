import Layout from "@components/Layouts";
import ContactPage from "@components/pageSections/contactPage";
import { Formik, FastField } from "formik";
import cn from "classnames";
import ContactQuery from "@queries/contactQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";
import Input from "@components/formikInput";
import TextArea from "@components/formikTextArea";

const fields = [
  {
    name: "name",
    component: Input,
    id: "txtName",
    label: "Name",
  },
  {
    name: "email",
    component: Input,
    id: "txtEmail",
    label: "Email",
    type: "email",
  },
  {
    name: "age",
    component: Input,
    id: "txtAge",
    label: "Age",
    type: "number",
  },
  {
    name: "phone",
    component: Input,
    id: "txtPhone",
    label: "Phone Number",
    type: "tel",
  },
  {
    name: "subject",
    component: Input,
    id: "txtSubject",
    label: "Subject",
  },
  {
    name: "message",
    component: TextArea,
    id: "txtMessage",
    label: "Message",
  },
];

const Contact = ({ data }) => {
  return (
    <div>
      <ContactPage data={data} path="development" />
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required...";
          }
          if (!values.email) {
            errors.email = "Required...";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.phone) {
            errors.phone = "Required...";
          }
          if (!values.subject) {
            errors.subject = "Required...";
          }
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              {fields.map((x) => (
                <FastField {...x} />
              ))}

              <button
                type="submit"
                disabled={!(dirty && isValid)}
                className={cn("btn btn--primary disabled:cursor-not-allowed")}
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
Contact.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

// export async function getServerSideProps() {
//   try {
//     const res = await axiosInstance.post("graphql", {
//       query: ContactQuery,
//       variables: {},
//     });
//     return {
//       props: {
//         data: res.data.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: error,
//       },
//     };
//   }
// }

export default Contact;
