import React from "react";

const Experince = () => {
  const info = [
    {
      title: "Freelancer",
      companyName: "Turing",
      date: "Feb 2021 - Sep 2021",
      description: "Freelance React Developer/Consultant",
    },
    {
      title: "Consultant",
      companyName: "Thoughtworks",
      date: "Feb 2020 - Jun 2020",
      description:
        "As a consultant, my role was implementation of provided module on the best effective manner. Provide technical support and solve technical issues. Testing solutions to make sure they meet customer requirements.",
    },
    {
      title: "Specialist",
      companyName: "Hewlett Packard Enterprise (DXC Technology)",
      date: "Apr 2016 - Apr 2020",
      description:
        "Responsible for Implementation of software architecture and design GUI, involve in the Analysis and The design process, obtain a full understanding of business requirements, system requirements, technical requirements and project constraints, mentoring to team members as needed",
    },
    {
      title: "IT Analyst",
      companyName: "Tata Consultancy Services",
      date: "Sep 2015 - Mar 2016",
      description:
        "Responsible for planning, processing and performing all jobs in an efficient manner with no assistance, Investigate, analyze and make recommendations to management regarding technology improvements, upgrades and modifications",
    },
    {
      title: "Senior Software Engineer",
      companyName: "Gateway TechnoLabs Pvt. Ltd. (Gateway Group of Companies)",
      date: "Sep 2012 - Sep 2015",
      description:
        "Responsible for Development of software solutions by studying information needs; conferring with client and upper management; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle",
    },
    {
      title: "Software Engineer",
      companyName: "IRIS Business Services Limited",
      date: "Feb 2011 - Jul 2012",
      description:
        "Responsible for Development of code/deliverables according to company standards, within the timeframe and effort Specified, solve project-related problems and identify opportunities for improvement",
    },
  ];

  return (
    <section className="px-4 md:px-8 w-screen py-24 bg-neutral-200">
      <div className="flex max-w-7xl mx-auto flex-col md:flex-row ">
        <div className="lg:flex-[0.8] flex-1 px-4 flex flex-col">
          <h2 className="m-0">Experience</h2>
          <span className="w-1/5 rounded-md h-1 bg-neutral-800" />
        </div>
        <div className="flex-[2] md:px-4 ">
          {info.map((val) => (
            <div className="">
              <h3 className="mb-5">{val.title}</h3>
              <div>
                <h4>{val.companyName}</h4>
                <span>{val.date}</span>
              </div>
              <p className="mt-3">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experince;
