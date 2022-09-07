import IndividualTeacherPage from "@components/pageSections/IndividualTeacher";
import React from "react";

const Individualteacher = () => {
  return (
    <>
      <IndividualTeacherPage />
    </>
  );
};
Individualteacher.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Individualteacher;
