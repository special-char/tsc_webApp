import React from "react";

const OurTeam = () => {
  const employeeDetails = [
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    ,
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    ,
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
    {
      photo:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
      name: "Virat Kohli",
      designation: "front-end developer",
    },
  ];
  return (
    <>
      <section className="pt-10 bg-neutral-700">
        <div className="max-w-7xl mx-auto py-20">
          <h1 className="capitalize text-center text-neutral-100">
            we have amazing team
          </h1>
          <div className="avatar-container flex flex-wrap justify-center gap-3">
            {employeeDetails.map((val) => {
              return (
                <div className="employee-data min-w-[300px] max-w-[400px] text-center rounded-lg">
                  <div className="p-3 ">
                    <img src={val.photo} alt="" className="rounded-full" />
                  </div>
                  <h4 className="text-neutral-100">{val.name}</h4>
                  <p className="text-neutral-400">{val.designation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
