import { Field, Form, Formik, ErrorMessage } from "formik";
import TSCImage from "@components/TSCImage";
import TrashIcon from "@public/images/filled-trash.png";
import React from "react";

import * as Yup from "yup";
import ContactLinkData from "./contactLinksData";

const options = [
  {
    id: 1,
    value: "Select your role",
    option: "Select your role",
  },
  {
    id: 2,
    value: "front-end developer",
    option: "front-end developer",
  },
  {
    id: 3,
    value: "back-end developer",
    option: "back-end developer",
  },
  {
    id: 4,
    value: "full-stack developer",
    option: "full-stack developer",
  },
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ContactSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  selectdesignation: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const CareerForm = () => {
  return (
    <>
      <section className="w-full h-auto relative overflow-hidden">
        <div className="wrapper max-w-7xl mx-auto px-8 py-24">
          <div className="flex flex-col text-center max-w-lg mx-auto">
            <h1 className="capitalize">Career</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              nesciunt.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center rounded-3xl justify-between gap-3">
            <div className="contact-form rounded-3xl bg-neutral-100 shadow-base  w-[100%] py-16 px-6">
              <Formik
                validationSchema={ContactSchema}
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  selectdesignation: "",
                  message: "",
                }}
                onSubmit={(values) => {
                  console.log("values:", values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-3">
                    <div className="md:flex gap-6">
                      <div className="w-full mb-4">
                        <label className="">Name</label>
                        <Field
                          id="name"
                          placeholder="Full Name"
                          className="bg-neutral-200 w-[90%] focus:outline-neutral-500 rounded-full py-4 px-12"
                          name="name"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="w-full mb-4">
                        <label className="">Email Address</label>
                        <Field
                          id="email"
                          placeholder="example@youremail.com"
                          className="bg-neutral-200 w-[90%] focus:outline-neutral-500 rounded-full py-4 px-7"
                          name="email"
                          type="email"
                        />
                        {errors.email && touched.email ? (
                          <div>{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="md:flex gap-6">
                      <div className="w-full mb-4">
                        <label className="">Phone Number</label>
                        <Field
                          id="phone"
                          placeholder="123-456-789"
                          className="bg-neutral-200 w-[90%] focus:outline-neutral-500 rounded-full py-4 px-7"
                          name="phone"
                          type="tel"
                        />
                        {errors.phone && touched.phone ? (
                          <div>{errors.phone}</div>
                        ) : null}
                      </div>
                      <div className="w-full mb-4">
                        <label>Designation</label>

                        <Field
                          name="selectdesignation"
                          as="select"
                          className="select py-5 px-8 w-[90%] rounded-full bg-neutral-200"
                          placeholder="select your designation"
                        >
                          {options.map((val) => (
                            <option key={val.id} value={val.value}>
                              {val.option}
                            </option>
                          ))}
                        </Field>

                        {errors.selectdesignation &&
                        touched.selectdesignation ? (
                          <div>{errors.selectdesignation}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label for="myfile gap-6">Upload CV</label>
                      <div className="flex items-center md:w-[280px]">
                        <label class="block">
                          <span class="sr-only ">Choose profile photo</span>

                          <input
                            type="file"
                            class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-neutral-200 file:text-violet-700
      hover:file:bg-neutral-300 
    "
                          />
                        </label>
                        <div className="items-center">
                          <TSCImage src={TrashIcon} height="28" width="28" />
                        </div>
                      </div>
                    </div>

                    <label className="">Message</label>
                    <Field
                      id="textarea"
                      placeholder="Write your message here"
                      className="bg-neutral-200  focus:outline-neutral-500 rounded-2xl py-4 px-7 mb-8"
                      name="message"
                      as="textarea"
                      rows="5"
                    />
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="btn btn--primary btn--small md:w-1/5 lg:w-1/5 uppercase"
                      >
                        submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
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

export default CareerForm;
