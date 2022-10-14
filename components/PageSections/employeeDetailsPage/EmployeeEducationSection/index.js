import React from "react";

const EmployeeEducationSection = () => {
  const educations = [
    {
      id: "1",
      course: "Bachelor of technology in Computer Engineering",
      university: "Nirma Institute of Technology, Ahmedabad, Gujarat, India",
      startDate: "Aug 2008",
      endDate: "Jul 2011",
      shortDescription:
        "Completed B.Tech in Computer Engineering with First Class Honors",
    },
    {
      id: "2",
      course: "Diploma in Computer Engineering",
      university:
        "Swami Sacchidanand Polytechnic College, Visnagar, Gujarat, India",
      startDate: "Jan 2004",
      endDate: "Jan 2008",
      shortDescription:
        "Completed Diploma in Computer Engineering with high distinction.",
    },
  ];
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-2 md:px-8 flex flex-col md:flex-row min-h-screen py-24">
        <div className="lg:flex-[0.8] flex-1 px-4 flex flex-col">
          <h2 className="m-0">Education</h2>
          <span className="w-1/5 rounded-md h-1 bg-neutral-800" />
        </div>
        <div className="flex-[2] px-4 h-full">
          {educations.map((education, index) => {
            return (
              <>
                <div className="flex flex-col">
                  <span className="mb-4 text-xl md:text-2xl text-neutral-700 font-semibold">
                    {education.course}
                  </span>
                  <span className="text-sm md:text-base text-neutral-700 font-semibold">
                    {education.university}
                  </span>
                  <span className="italic text-xs md:text-sm mb-4">{`${education.startDate} - ${education.endDate}`}</span>
                  <p className="text-sm text-neutral-700 font-medium">
                    {education.shortDescription}
                  </p>
                </div>
                {index !== educations.length - 1 && (
                  <div className="w-full h-[0.5px] bg-neutral-300 rounded-md my-12" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployeeEducationSection;
