import React from "react";

const Achievements = () => {
  const AchievementsData = [
    {
      Number: "100,000+",
      heading: "Students",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing.",
    },
    {
      Number: "5,000+",
      heading: "Five star reviews",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing.",
    },
    {
      Number: "75,000+",
      heading: "Students community",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing.",
    },
  ];
  return (
    <div className="w-screen py-24 md:py-36 lg:py-44">
      <div className="container mx-auto max-w-[1210px] flex flex-col items-center">
        <h2 className="lg:min-w-1/2 text-center">
          A few numbers that we <br /> are proud of
        </h2>

        <div className="flex flex-wrap justify-center items-center ">
          {AchievementsData.map((val) => (
            <div className=" text-center px-7 min-w-[300px] flex-1">
              <h2 className="text-secondary3">{val.Number}</h2>
              <h3>{val.heading}</h3>
              <p>{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
