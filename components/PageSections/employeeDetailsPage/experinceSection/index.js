import React from "react";

const Experince = ({ data }) => {
  console.log("Experince:", data);

  return (
    <section className="w-full py-10 bg-neutral-200">
      <div className="flex max-w-7xl mx-auto flex-col px-4 md:flex-row md:px-6">
        <div className="flex-1 lg:flex-[0.8] w-full mb-4">
          <h2 className="border-b-4 w-24 border-secondary2 hover:w-40 duration-200 ">
            Experience
          </h2>
        </div>
        <div className="flex-[2] md:px-4 ">
          {data.map((val) => (
            <div className="" key={val.id}>
              <h3 className="mb-5">{val.Title}</h3>
              <div>
                <span>{val.startDate}</span>
                <span>{val.endDate}</span>
                <p>{val.employeeType}</p>
              </div>
              <h4>{val.companyName}</h4>
              <p>{val.industry}</p>
              <p className="mt-3">{val.description}</p>
              <p>{val.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experince;
