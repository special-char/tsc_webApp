import LandingPage from "@components/LandingPage";
import React from "react";
import { LayoutContext } from "context/layoutContext";
const Home = () => {
  return (
    <LayoutContext.Consumer>
      {(data) => {
        return <LandingPage data={data} />;
      }}
    </LayoutContext.Consumer>
  );
};

Home.displayName = "Home";
export default Home;
