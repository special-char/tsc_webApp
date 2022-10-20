import Layout from "@components/Layouts";
import EmployeeDetails from "@components/pageSections/employeeDetailsPage";
import React from "react";

const Members = ({ teams }) => {
  console.log("Members:", teams);
  return <div>something</div>;
};
Members.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await fetch("http://65.20.70.84:1337/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `
          {
            teams {
              data {
                attributes {
                  firstName
                  lastName
                }
              }
            }
          }`,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await res.json();
    return {
      props: {
        teams: json?.data?.teams?.data,
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

export default Members;
