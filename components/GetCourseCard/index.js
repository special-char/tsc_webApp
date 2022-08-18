import CourseFeatures from "@components/PageSections/individualCourse/courseData";
import React from "react";
import { Field, Form, Formik } from "formik";

const GetCourseCard = () => {
  return (
    <div>
      <div className="rate-card flex flex-col md:flex-row lg:flex-col px-0 py-9 gap-4 mb-10 ">
        <div className="get-course-content mb-10">
          <div className="text-xl text-neutral-700 font-bold">$ 199.00 USD</div>
          <p>
            Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit purus
            vivera.
          </p>
          <div className="select-course">
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
                  className="w-full py-4 px-2 rounded-full bg-secondary1"
                >
                  <option value="0">Select Course Plan</option>
                  <option value="basic">Basic</option>
                  <option value="premium">Premium</option>
                </Field>
                <button
                  type="submit"
                  className="btn btn--primary btn--small w-full"
                >
                  ADD TO CART
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="course-fetures">
          {CourseFeatures.map((val) => (
            <div className="flex  py-3 gap-2">
              <div>{val.svg}</div>
              <span>{val.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetCourseCard;
