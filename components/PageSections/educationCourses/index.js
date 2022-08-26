import Link from "next/link";
import React from "react";
const EducationCourses = () => {
  return (
    <div className="home-wrapper flex">
      <div className="container items-center justify-center text-center">
        <h2>Grow your career today with the Education courses</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="button-wrapper">
          <Link href={"/courses"}>
            <a>
              <button className="btn btn--secondary">Explore Courses</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EducationCourses;
