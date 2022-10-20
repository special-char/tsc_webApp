import Layout from "@components/Layouts";
import EmployeeDetails from "@components/PageSections/employeeDetailsPage";
import EmployeeData from "@queries/new/employeeDataQuery";
import { useRouter } from "next/router";
import React from "react";

const Employee = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("router id:", id);
  console.log("EmployeeDetails page data:", data);
  return (
    <>
      {data
        .filter((emp) => emp.id == id)
        .map((val) => (
          <div>
            <EmployeeDetails data={val} />
          </div>
        ))}
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await fetch("http://65.20.70.84:1337/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: EmployeeData,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await res.json();
    return {
      props: {
        data: json?.data?.teams?.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}

Employee.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export default Employee;

{
  /* <EmployeeDetails empid={val.id} data={teams} /> */
}
