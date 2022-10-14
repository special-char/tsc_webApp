import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSection";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeEducationSection from "./EmployeeEducationSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";
import SkillBar from "./EmployeeTechnologies";
import EmployeeProjectsSection from "./EmployeeProjectsSection";
import EmployeeTechnologies from "./EmployeeTechnologies";

const EmployeeDetails = () => {
  return (
    <>
      <EmployeeHeaderSection />
      <EmployeeTechnologies />
      <EmployeeCertificateSection />
      <EmployeeAchievementSection />
      <EmployeeProjectsSection />
      <EmployeeEducationSection />
    </>
  );
};

export default EmployeeDetails;
