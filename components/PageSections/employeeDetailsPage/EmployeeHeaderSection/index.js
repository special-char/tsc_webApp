import React from "react";
import TSCImage from "@components/TSCImage";

const EmployeeHeaderSection = () => {
  return (
    <section className=" w-full h-screen">
      <div className="max-w-7xl h-full gap-4 mx-auto px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col relative rounded-full aspect-square w-48 md:w-96">
          <TSCImage
            className="avatar rounded-full "
            layout="fill"
            src="https://images.unsplash.com/photo-1663524789665-781c971fcbbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            // src={data?.avatar?.url}
          />
        </div>
        <h1>Employee Name</h1>
        <button className="btn btn--primary cursor-pointer">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default EmployeeHeaderSection;
