import React from "react";
import Testi from "@components/pageSections/IndividualTeacher/testi";

const TeacherIntro = ({ data }) => {
  const testiDetails = [
    {
      id: 1,
      name: "Kathie Corl",
      chip: "Design",
      description:
        "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies.",
      img: "https://placeimg.com/192/192/people",
    },
  ];

  return (
    <>
      <section className=" relative overflow-hidden w-full h-auto mx-w-[1024px]">
        <div className="bg-wrapper bg-neutral-700 h-[426px] flex relative overflow-hidden">
          <div className="shape-1 bg-secondary3  w-40 h-40 -top-16 -left-24 md:w-64 md:h-64 md:-top-24 md:-left-32 lg:w-[573px] lg:h-[573px] lg:-top-96 lg:-left-22 absolute rounded-full"></div>
          <div className="shape-2 bg-secondary2 w-72 h-72 bottom-0 -right-44 md:w-64 md:h-64 md:-bottom-2 md:-right-28 lg:w-[573px] lg:h-[573px] lg:-bottom-96 lg:-right-24 absolute rounded-full"></div>
        </div>
        <div className="md:max-w-[767px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center relative lg:mb-48 md:mb-32 mb-72">
            {/* {data.teachers?.map((obj) => {
              console.log("obj:", obj);
              return <Testi data={obj} />;
            })} */}
            <Testi data={data} />
          </div>
          <div className=" md:grid flex flex-col justify-center text-left md:items-center  ">
            <h2>About {data.firstName}</h2>
            <p className="md:w-[720px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra praesent felis consequat pellentesque turpis et quisque
              platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
              Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
              euismod laoreet urna, feugiat et. Euismod sem purus rutrum in.
              Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
              iaculis netus gravida.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherIntro;
