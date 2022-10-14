import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSection";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeEducationSection from "./EmployeeEducationSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";
import EmployeeProjectsSection from "./EmployeeProjectsSection";

const EmployeeDetails = () => {
  return (
    <>
      <EmployeeHeaderSection />
      <EmployeeCertificateSection />
      <EmployeeAchievementSection />
      <EmployeeProjectsSection />
      <EmployeeEducationSection />
    </>
  );
};

export default EmployeeDetails;
