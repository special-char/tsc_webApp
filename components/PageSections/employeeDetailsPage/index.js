import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSection";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeEducationSection from "./EmployeeEducationSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";
import SkillBar from "./EmployeeTechnologies";
import Experince from "./experinceSection";
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
      <Experince />
    </>
  );
};

export default EmployeeDetails;
