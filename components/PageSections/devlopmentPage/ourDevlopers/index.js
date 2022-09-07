import React from "react";

const OurDevlopers = () => {
  //console.log("About Success Data:", data);
  const Data = [
    {
      number: "14",
      title: "flutter",
      description: "xyz",
    },
    {
      number: "30",
      title: "frontedDevlopers",
      description: "xyz",
    },
    {
      number: "10",
      title: "designer uxi",
      description: "xyz",
    },
    {
      number: "5",
      title: "full-stack Devlopers",
      description: "xyz",
    },
  ];
  return (
    <section className="w-full py-24 md:py-36 lg:py-44">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <h2 className="lg:min-w-1/2 text-center md:pb-6">Our Devlopers</h2>
        <div className="flex flex-wrap justify-center items-center ">
          {Data.map((val) => (
            <div
              className=" text-center px-7  min-w-[300px] flex-1"
              key={val.id}
            >
              <h1 className="text-secondary3">{val.number}+</h1>
              <h3>{val.title}</h3>
              <p>{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDevlopers;
