import Layout from "@components/Layouts";
import Loader from "@components/loader";
import DevelopmentPage from "@components/PageSections/devlopmentPage";
import React, { useEffect, useState } from "react";

const Development = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return <>{loading ? <Loader /> : <DevelopmentPage />}</>;
};

Development.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

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

Development.displayName = "Development";
export default Development;
