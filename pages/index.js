import Layout from "@components/Layouts";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="main-body"></div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
