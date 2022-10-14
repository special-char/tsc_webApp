import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSection";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeEducationSection from "./EmployeeEducationSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";
import Experince from "./experinceSection";
import EmployeeProjectsSection from "./EmployeeProjectsSection";

const EmployeeDetails = () => {
  return (
    <>
      <Experince />
      <EmployeeHeaderSection />
      <EmployeeCertificateSection />
      <EmployeeAchievementSection />
      <EmployeeProjectsSection />
      <EmployeeEducationSection />
    </>
  );
};

export default EmployeeDetails;
