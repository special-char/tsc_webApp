import React from "react";
import Carousal from "@components/Carousal";

const PopularCourses = ({ data }) => {
  console.log("popular courses data:", data);
  return (
    <>
      <section className="py-20 overflow-hidden">
        <h2 className="text-center mb-10">Browse our popular courses</h2>
        <Carousal data={data.courses} carousalID="card" />
      </section>
    </>
  );
};

export default PopularCourses;
