import CourseFeatures from "@components/pageSections/individualCourse/courseData";
import React from "react";
import { Field, Form, Formik } from "formik";

const options = [
  {
    id: 1,
    value: "0",
    option: "Select Course Plan",
  },
  {
    id: 2,
    value: "1",
    option: "Basic",
  },
  {
    id: 3,
    value: "2",
    option: "Premium",
  },
];

const GetCourseCard = () => {
  return (
    <section className="rate-card flex flex-col bg-neutral-100 rounded-3xl px-6  pt-16 md:px-8 md:flex-row lg:flex-col gap-6 shadow-dark">
      <div className="get-course-content">
        <span className="text-4xl text-neutral-700 font-bold">
          $ 199.00 USD
        </span>
        <p>
          Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit purus
          vivera.
        </p>
        <Formik
          initialValues={{ selectcourse: " " }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <Field
              name="selectcourse"
              as="select"
              className="w-full py-5 px-8 rounded-full bg-neutral-200"
            >
              {options.map((val) => (
                <option key={val.id} value={val.value}>
                  {val.option}
                </option>
              ))}
            </Field>
            <button type="submit" className="btn btn--primary w-full">
              ADD TO CART
            </button>
          </Form>
        </Formik>
      </div>
      <div className="flex flex-col gap-6 lg:gap-4 items-start">
        {CourseFeatures.map((val) => (
          <div className="flex items-start gap-2">
            <div className="w-8">{val.svg}</div>
            <span>
              {val.label && `${val.label}: `}
              <span className="text-neutral-700 font-bold">
                {val.description}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetCourseCard;
