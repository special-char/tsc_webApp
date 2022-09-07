import React from "react";
import AboutPage from "@components/aboutPage";
import InovetionSvg from "@public/icons/inovetion.svg";
import RightSvg from "@public/icons/right.svg";
import SearchSvg from "@public/icons/search.svg";
import GlobleSvg from "@public/icons/globle.svg";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const WorkValues = () => {
  const AboutDetails = [
    {
      id: 1,
      title: "Commitment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      svg: <RightSvg />,
      chip: "01",
    },
    {
      id: 1,
      title: "Accessibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      svg: <GlobleSvg />,
      chip: "02",
    },
    {
      id: 1,
      title: "Openness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      svg: <SearchSvg />,
      chip: "03",
    },
    {
      id: 1,
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas non consequat pellentesque iaculis nunc, est, mollis. Nulla.",
      svg: <InovetionSvg />,
      chip: "04",
    },
  ];

  return (
    <>
      <section className="w-full lg:w-screen bg-neutral-700 relative py-24">
        <div className="container w-full mx-auto p-4 gap-6 ">
          <div className="pb-8 flex flex-col text-center justify-center">
            <h2 className="text-secondary1">Our work values</h2>
            <p className="text-neutral-100 md:w-[520px] w-auto m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="grid md:grid-cols-2 text-left justify-center gap-9 md:p-8 ">
            {AboutDetails.map((obj) => {
              return (
                <AboutPage
                  description={obj.description}
                  title={obj.title}
                  svg={obj.svg}
                  chip={obj.chip}
                  id={obj.id}
                  key={obj.id}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full absolute -bottom-16 md:-bottom-24 lg:-bottom-32 flex justify-center">
          <OrangearrowSvg className="w-11 text-secondary3 md:w-16 lg:w-20" />
        </div>
      </section>
    </>
  );
};
WorkValues.displayName = "Values";
export default WorkValues;
