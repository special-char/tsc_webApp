import React from "react";

const EmployeeEducationSection = ({ data }) => {
  console.log("EmployeeEducationSection:", data);
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
    <section className="w-full h-auto py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row">
        <div className="lg:flex-[0.8] md:flex-1">
          <h2 className="capitalize border-b-4 w-20 hover:w-36 hover:duration-200 border-secondary2">
            Education
          </h2>
        </div>
        <div className="flex-[2] h-full">
          {data.map((education, index) => {
            return (
              <>
                <div className="flex flex-col">
                  <span className="mb-4 text-xl md:text-2xl text-neutral-700 font-semibold">
                    {education.degree}
                  </span>
                  <span className="text-sm md:text-base text-neutral-700 font-semibold">
                    {education.school}
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
