import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSction";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";

const EmployeeDetails = () => {
  return (
    <>
      {/* <EmployeeHeaderSection /> */}
      <EmployeeCertificateSection />
      <EmployeeAchievementSection />
    </>
  );
};

export default EmployeeDetails;
