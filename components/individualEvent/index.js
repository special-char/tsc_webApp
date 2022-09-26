import React from "react";

const IndividualEvent = ({ data }) => {
  console.log("data of IndividualEvent:", data);
  return (
    <section>
      <h1>Individual Event:{data.title}</h1>
    </section>
  );
};

export default IndividualEvent;
