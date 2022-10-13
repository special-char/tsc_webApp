import { Field, Form, Formik } from "formik";
import CloseLineIcon from "@public/icons/closelineicon.svg";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ModalSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <section className="modalWrapper relative h-auto w-auto flex items-center justify-center">
      <div className="close-button-container w-20 relative">
        <CloseLineIcon
          className="absolute w-5 left-72 -top-[370px] z-10 hover:fill-primary hover:scale-125 duration-300"
          onClick={onClose}
        />
      </div>
      <div className="modal absolute -top-96 bottom-0 right-400 form-container ">
        <div className="contact-form rounded-3xl bg-neutral-100 shadow-base max-w-[750px] w-[100%] py-16 px-6">
          <Formik
            validationSchema={ModalSchema}
            initialValues={{
              firstname: "",
              lastname: "",
              phone: "",
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-3">
                <div className="md:flex gap-6">
                  <div className="w-full">
                    <label className="">First Name</label>
                    <Field
                      id="fname"
                      placeholder="First Name"
                      className="bg-neutral-200 w-full focus:outline-neutral-500 rounded-full py-4 px-7"
                      name="firstname"
                      type="text"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label className="">Last Name</label>
                    <Field
                      id="lname"
                      placeholder="Last Name"
                      className="bg-neutral-200 w-full focus:outline-neutral-500 rounded-full py-4 px-7"
                      name="lastname"
                      type="text"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
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
                <div className="">
                  <Link href={"#"}>
                    <a>
                      <button
                        type="submit"
                        className="btn btn--primary btn--small w-full mt-6 md:w-1/3 lg:w-1/3"
                      >
                        SUBMIT
                      </button>
                    </a>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Modal;
