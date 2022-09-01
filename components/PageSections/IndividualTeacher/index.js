import React from "react";
import CardGrid from "./CardGrid";
import TeacherIntro from "./teacherIntro";

const IndividualTeacherPage = ({ data }) => {
  console.log("IndividualTeacherPage data:", data);
  return (
    <>
      <TeacherIntro data={data} />
      <CardGrid />
    </>
  );
};

export default IndividualTeacherPage;
