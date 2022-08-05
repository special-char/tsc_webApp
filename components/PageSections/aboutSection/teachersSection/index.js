import React from "react";
import Teachers from "@components/Teachers";
import RightSvg from "@public/icons/right.svg";
import SearchSvg from "@public/icons/search.svg";
import GlobleSvg from "@public/icons/globle.svg";
import InovetionSvg from "@public/icons/inovetion.svg";

const TeachersSection = () => {
  const TeachersDetails = [
    {
      id: 1,
      title: "John Carter",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svg: <RightSvg />,
      svg2: <RightSvg />,
      svg3: <RightSvg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 2,
      title: "Sophie Moore",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svg: <GlobleSvg />,
      svg2: <GlobleSvg />,
      svg3: <GlobleSvg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 3,
      title: "Matt Cannon",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svg: <SearchSvg />,
      svg2: <GlobleSvg />,
      svg3: <GlobleSvg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 4,
      title: "Kathie Corl",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svg: <InovetionSvg />,
      svg2: <GlobleSvg />,
      svg3: <GlobleSvg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 5,
      title: "Mike Warren",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svg: <InovetionSvg />,
      svg2: <GlobleSvg />,
      svg3: <GlobleSvg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 6,
      title: "Andy Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svg: <InovetionSvg />,
      svg2: <GlobleSvg />,
      svg3: <GlobleSvg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
  ];

  return (
    <>
      <section className="lg:w-screen bg-neutral-100  py-44">
        <div className="container w-full mx-auto max-w-[1210px]">
          <h2 className="text-neutral-800 lg:text-left px-4 text-center ">
            Our teachers
          </h2>
          <div className="flex flex-col lg:flex-row md:items-center justify-between p-4 ">
            <p className="text-neutral-600 md:w-[520px] w-auto  text-center lg:text-left">
              Presenting Academy, the tech school of the future. We teach you
              the right skills to be prepared for tomorrow.
            </p>
            <button className="btn btn--primary text-center px-10 py-6">
              BECOME A TEACHER
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-left justify-center gap-9 md:p-8 w-full px-4">
            {TeachersDetails.map((obj) => {
              return (
                <Teachers
                  description={obj.description}
                  title={obj.title}
                  svg={obj.svg}
                  svg2={obj.svg}
                  svg3={obj.svg}
                  img={obj.img}
                  id={obj.id}
                  key={obj.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

TeachersSection.displayName = "Teachers Section";
export default TeachersSection;
