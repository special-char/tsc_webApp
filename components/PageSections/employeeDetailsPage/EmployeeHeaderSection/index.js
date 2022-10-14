import React from "react";
import TSCImage from "@components/TSCImage";

const EmployeeHeaderSection = () => {
  const data = {
    profileImage:
      "https://images.unsplash.com/photo-1663524789665-781c971fcbbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    employeeName: "Pruthvish Modi",
    buttonText: "Download Resume",
  };
  return (
    <section className="main flex items-center h-auto relative overflow-hidden py-16 lg:py-32">
      <div className="container flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-8">
        <div className="text-content md:max-w-[535px] flex-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="font-semibold">{data.employeeName}</h1>
          <button className="btn btn--primary btn-small max-w-xs">
            {data.buttonText}
          </button>
        </div>
        <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden skew-x-0 skew-y-0 scale-100 rotate-0 translate-x-1 translate-y-1 duration-1000 delay-1000 transition-all">
          <TSCImage
            src={data.profileImage}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </div>
      </div>
      <div className="bg-secondary2 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-52 lg:-left-52 -z-10"></div>
      <div className="bg-primary  w-full h-[300px] absolute top-3/4 -z-10 lg:top-0 lg:h-[100%] lg:w-5/12 lg:right-0"></div>
      <div className="bg-secondary3 rounded-full w-[500px] h-[500px] absolute -bottom-80 -right-72  lg:-bottom-80 lg:-right-20 -z-10"></div>
    </section>
  );
};

export default EmployeeHeaderSection;
