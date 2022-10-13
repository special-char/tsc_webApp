import React from "react";
import CardGrid from "./CardGrid";
import TeacherIntro from "./teacherIntro";

const IndividualTeacherPage = ({ data }) => {
  return (
    <>
      <TeacherIntro data={data} />
      {/* <CardGrid /> */}
    </>
  );
};

export default IndividualTeacherPage;
