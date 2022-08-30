import { Field, Form, Formik } from "formik";
import React from "react";

const SubscribeToday = () => {
  return (
    <section className="wrapper h-full w-full">
      <div className="wrapper-content container flex items-center justify-center max-w-7xl mx-auto px-3 py-24">
        <div className="bg-primary h-full w-full relative flex flex-col justify-center items-center rounded-3xl gap-3 lg:flex-row  overflow-hidden px-10 py-12 md:px-16 md:py-28">
          <h2 className="text-center z-20 flex-1 text-neutral-100 lg:text-left">
            Subscribe to our weekly newsletter today!
          </h2>
          <Formik
            initialValues={{ email: " " }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form
              action=""
              className="flex flex-col flex-1 z-20 w-full md:relative md:w-11/12 md:p-0 md:mt-4 gap-4 py-4"
            >
              <Field
                id="email"
                placeholder="Enter Your email"
                type="text"
                name="email"
                className="text-neutral-600 md:w-[90%] rounded-full py-5 flex pl-4 md:px-6 focus:outline-none "
              />
              <button className="btn md:py-3 uppercase md:absolute md:right-16 md:top-2.5 flex items-center justify-center text-neutral-100 text-base font-bold bg-neutral-800">
                subscribe
              </button>
            </Form>
          </Formik>
          <div className="bg-secondary2 absolute  rounded-full md:w-[400px] md:h-[400px]  md:-top-80 md:-right-52 lg:-top-52 lg:-right-20  z-10"></div>
          <div className="bg-secondary3 absolute rounded-full w-[380px] h-[380px]  -left-64 -bottom-64 md:-left-52 lg:-bottom-56 lg:-left-32 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeToday;
