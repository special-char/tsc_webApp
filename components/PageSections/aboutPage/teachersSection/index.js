import React from "react";
import Teachers from "@components/teachers";
import Link from "next/link";

const TeachersSection = ({ data }) => {
  return (
    <>
      <section id="Teachers" className="lg:w-full bg-neutral-100 py-44">
        <div className="container w-full mx-auto max-w-7xl">
          <h2 className="text-neutral-800 lg:text-left px-4 text-center ">
            {data.heading?.title}
          </h2>
          <div className="flex flex-col lg:flex-row md:items-center justify-between p-4 ">
            <p className="text-neutral-600 md:w-[520px] w-auto  text-center lg:text-left">
              {data.heading?.description}
            </p>
            <Link href={data.buttonText?.link}>
              <button className="btn btn--primary text-center px-10 py-6 uppercase">
                {data.buttonText?.buttonText}
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-left justify-center gap-9 md:p-8 w-full px-4">
            {data.teachers.map((obj) => {
              return (
                <Link href={`teacher/${obj.id}`} key={obj.id}>
                  <a>
                    <Teachers data={obj} />
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

TeachersSection.displayName = "Teachers Section";
export default TeachersSection;
