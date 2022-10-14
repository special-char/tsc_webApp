import Layout from "@components/Layouts";
import EmployeeDetails from "@components/PageSections/employeeDetailsPage";
import React from "react";

const Employee = () => {
  return <EmployeeDetails />;
};

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Employee;
