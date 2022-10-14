import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSection";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";
import EmployeeProjectsSection from "./EmployeeProjectsSection";

const EmployeeDetails = () => {
  return (
    <>
      <EmployeeHeaderSection />
      <EmployeeCertificateSection />
      <EmployeeAchievementSection />
      <EmployeeProjectsSection />
    </>
  );
};

export default EmployeeDetails;
