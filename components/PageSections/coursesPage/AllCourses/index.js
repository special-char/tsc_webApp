import React from "react";
import Card from "@components/card";
import Link from "next/link";

const AllCoursesSection = ({ data }) => {
 
  const courseCategories = [
    {
      path: "#",
      title: "all",
    },
    {
      path: "/development",
      title: "development",
    },
    {
      path: "/design",
      title: "design",
    },
    {
      path: "/marketing",
      title: "marketing",
    },
  ];
  return (
    <>
      <section className="courses-section-wrapper lg:w-full px-4 pt-28">
        <div className="container mx-auto max-w-7xl p-4 flex flex-wrap flex-col lg:flex-row md:items-center md:justify-center lg:justify-between ">
          <h2 className="text-neutral-800 text-center lg:text-left ">
            All Courses
          </h2>
          <Link href={"/courses"}>
            <span className="flex bg-neutral-200 p-4 rounded-full flex-wrap gap-4 text-base font-bold">
              {courseCategories.map((button) => {
                return (
                  <a
                    className={`capitalize px-6 py-4 pt-4 rounded-full ${
                      button.title === "all"
                        ? "text-secondary1 bg-primary"
                        : "bg-neutral-100 text-neutral-700 hover:bg-primary hover:text-secondary1"
                    }`}
                  >
                    {button.title}
                  </a>
                );
              })}
            </span>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 text-left justify-center gap-8 md:p-8 w-full mx-auto">
            {data.map((obj) => {
              return (
                <Link key={obj.id} href={`course/${obj.id}`}>
                  <a>
                    <Card {...obj} />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

AllCoursesSection.displayName = "AllCourses Section";
export default AllCoursesSection;
