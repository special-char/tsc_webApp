import React from "react";
import Image from "next/image";

const ProjectsPage = ({ children, data, index }) => {
  return (
    <>
      <section className="max-w-7xl mx-auto  flex flex-col my-12 w-screen relative overflow-hidden">
        <div
          className={`w-full flex mb-8 bg-neutral-100 rounded-3xl py-8 shadow-dark px-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col gap-4 items-center justify-start`}
        >
          <div className="w-full flex-1 z-10">
            <figure className="relative h-80">
              <Image layout="fill" objectFit="cover" src={data.img} alt="" />
            </figure>
          </div>
          <div className="w-full flex-1 flex flex-col text-left z-10">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h4>{data.details}</h4>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
