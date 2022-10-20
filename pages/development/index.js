import Layout from "@components/Layouts";
import Loader from "@components/loader";
import DevelopmentPage from "@components/PageSections/devlopmentPage";
import React, { useEffect, useState } from "react";

const Development = ({ teams }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  console.log("Development page data:", teams);
  return <>{loading ? <Loader /> : <DevelopmentPage data={teams} />}</>;
};

Development.getLayout = function getLayout(page) {
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
                id
                attributes {
                  firstName
                  lastName
                  avatar{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                  experience{
                    Title
                  }
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

Development.displayName = "Development";
export default Development;

// export async function getServerSideProps() {
//   try {
//     const res = await axiosInstance.post("graphql", {
//       query: DevelopmentQuery,
//       variables: {},
//     });
//     return {
//       props: {
//         data: res.data.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: error,
//       },
//     };
//   }
// }
