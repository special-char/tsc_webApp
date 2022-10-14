import Layout from "@components/Layouts";
import ContactPage from "@components/pageSections/contactPage";
import { Formik, FastField } from "formik";
import cn from "classnames";
import ContactQuery from "@queries/contactQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";
import Input from "@components/formikInput";
import TextArea from "@components/formikTextArea";
import Image from "next/image";
import Data from "../../components/pageSections/contactPage/contactForm/contactLinksData";

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
    <section className="relative overflow-hidden py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 ">
        {/* <ContactPage data={data} path="development" /> */}
        <div className="text-center lg:text-left">
          <h1 className="capitalize">get in touch!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui iste
            nostrum nulla autem, architecto magnam sit quis.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4 gap-y-10 md:gap-y-16 w-full">
          <div className="w-full shadow-dark col-span-2 py-9 px-6 md:py-12 md:px-10 bg-neutral-100 rounded-2xl">
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
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-10 md:gap-x-6">
                      {fields.map((x) => (
                        <FastField {...x} />
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={!(dirty && isValid)}
                      className={cn(
                        "btn btn--primary btn--small disabled:cursor-not-allowed w-full md:w-1/3 mt-8"
                      )}
                    >
                      Submit
                    </button>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className="grid gap-y-5 rounded-2xl">
            {Data.map((val) => (
              <div className="rounded-3xl w-full shadow-base hover:shadow-dark h-auto bg-neutral-100 py-9 px-0 md:py-10 flex flex-col gap-2 items-center justify-around  hover:-translate-y-3 duration-200">
                <div className="rounded-full relative w-10 h-10">
                  <Image
                    className="rounded-full"
                    layout="fill"
                    objectFit="cover"
                    src={
                      "https://images.unsplash.com/photo-1665510394335-a6453ce125c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt=""
                    objectPosition={"center"}
                  />
                </div>
                <div className="text-center text-xl">
                  <span className="font-bold  text-neutral-700">
                    {val.title}
                  </span>
                  <a href="#">
                    <address className="">{val.data}</address>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-secondary2 rounded-full w-[400px] h-[400px] absolute md:top-[10%] md:-right-[49%] lg:top-24 lg:-right-48 -z-10"></div>
      <div className="bg-secondary3 rounded-full w-[400px] h-[400px] top-[68%] -left-[90%] absolute md:top-[68%] md:-left-40 lg:top-[65%] lg:-left-20 -z-10"></div>
      <div className="bg-secondary1 rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-left-44 lg:-top-[24%] lg:-left-20 -z-10"></div>
    </section>
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

// grid grid-cols-2 md:grid-cols-2 gap-x-10
