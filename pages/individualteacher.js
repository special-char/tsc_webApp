import IndividualTeacherPage from "@components/pageSections/IndividualTeacher";
import React from "react";
import Layout from "@components/Layouts";

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
