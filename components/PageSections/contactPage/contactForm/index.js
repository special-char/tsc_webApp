import { Field, Form, Formik } from "formik";
import TSCImage from "@components/TSCImage";
import Link from "next/link";
import React from "react";

import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ContactSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = ({ data, path }) => {
  return (
    <>
      <section className="w-full h-auto relative overflow-hidden">
        <div className="wrapper max-w-7xl mx-auto px-8 py-24">
          <div className="flex flex-col text-center max-w-lg mx-auto">
            <h1>{data.bannerHeading?.title}</h1>
            <p>{data.bannerHeading?.description}</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center rounded-3xl justify-between gap-3">
            <div className="contact-form rounded-3xl bg-neutral-100 shadow-base max-w-[750px] w-[100%] py-16 px-6">
              <Formik
                validationSchema={ContactSchema}
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={(values) => {}}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-3">
                    <div className="md:flex gap-6">
                      <div className="w-full">
                        <label className="">Name</label>
                        <Field
                          id="name"
                          placeholder="Full Name"
                          className="bg-neutral-200 w-full focus:outline-neutral-500 rounded-full py-4 px-7"
                          name="name"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <label className="">Email Address</label>
                        <Field
                          id="email"
                          placeholder="example@youremail.com"
                          className="bg-neutral-200 w-full focus:outline-neutral-500 rounded-full py-4 px-7"
                          name="email"
                          type="email"
                        />
                        {errors.email && touched.email ? (
                          <div>{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="md:flex gap-6">
                      <div className="w-full">
                        <label className="">Phone Number</label>
                        <Field
                          id="phone"
                          placeholder="123-456-789"
                          className="bg-neutral-200 w-full focus:outline-neutral-500 rounded-full py-4 px-7"
                          name="phone"
                          type="tel"
                        />
                        {errors.phone && touched.phone ? (
                          <div>{errors.phone}</div>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <label className="">
                          {path === "development" ? "Role" : "Subject"}
                        </label>
                        <Field
                          id="text"
                          placeholder={
                            path === "development"
                              ? "Ex. Front-end developer"
                              : "Ex. Courses"
                          }
                          className="bg-neutral-200 w-full rounded-full focus:outline-neutral-500 py-4 px-7"
                          name="subject"
                          type="text"
                        />
                        {errors.subject && touched.subject ? (
                          <div>{errors.subject}</div>
                        ) : null}
                      </div>
                    </div>
                    <label className="">Message</label>
                    <Field
                      id="textarea"
                      placeholder="Write your message here"
                      className="bg-neutral-200  focus:outline-neutral-500 rounded-2xl py-4 px-7"
                      name="message"
                      as="textarea"
                      rows="5"
                    />
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}
                    <Link href={"/courses"}>
                      <a>
                        <button
                          type="submit"
                          className="btn btn--primary btn--small w-full mt-6 md:w-1/3 lg:w-1/3"
                        >
                          SUBMIT
                        </button>
                      </a>
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="contact-links flex flex-col gap-5 w-full lg:w-[423px] ">
              {data.contactDetails?.map((val) => (
                <div
                  key={val.id}
                  className="rounded-3xl w-full mx-auto shadow-base hover:shadow-dark h-auto bg-neutral-100 py-10 px-5 flex flex-col gap-2 items-center justify-around  hover:-translate-y-3 duration-200"
                >
                  <div className="rounded-full relative w-10 h-10">
                    <TSCImage
                      className="rounded-full"
                      layout="fill"
                      objectFit="cover"
                      src={val.icon?.url}
                      alt=""
                      objectPosition={"center"}
                    />
                  </div>
                  <div className="text-center text-xl">
                    <span className="font-bold text-neutral-700 ">
                      {val.contactType}
                    </span>
                    <a href={val.link}>
                      <address className="">{val.displayText}</address>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-secondary2 rounded-full w-[400px] h-[400px] absolute md:top-[10%] md:-right-[49%] lg:top-24 lg:-right-48 -z-10"></div>
        <div className="bg-secondary3 rounded-full w-[400px] h-[400px] top-[68%] -left-[90%] absolute md:top-[63%] md:-left-36 lg:top-[65%] lg:-left-20 -z-10"></div>
        <div className="bg-secondary1 rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-left-44 lg:-top-[24%] lg:-left-20 -z-10"></div>
      </section>
    </>
  );
};

export default ContactForm;
