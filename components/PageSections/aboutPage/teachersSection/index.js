import React from "react";
import Teachers from "@components/teachers";
import RightSvg from "@public/icons/right.svg";
import SearchSvg from "@public/icons/search.svg";
import GlobleSvg from "@public/icons/globle.svg";
import InovetionSvg from "@public/icons/inovetion.svg";
import Link from "next/link";

const TeachersSection = () => {
  const TeachersDetails = [
    {
      id: 1,
      title: "John Carter",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svgData: [
        {
          id: 1,
          svg: <RightSvg className="w-10" />,
          svgLink: "twitter.com",
        },
        {
          id: 2,
          svg: <SearchSvg className="w-10" />,
          svgLink: "/linkedin.com",
        },
        {
          id: 3,
          svg: <GlobleSvg className="w-10" />,
          svgLink: "/facebook.com",
        },
      ],
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 2,
      title: "Sophie Moore",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svgData: [
        {
          id: 1,
          svg: <RightSvg className="w-10" />,
          svgLink: "/twitter.com",
        },
        {
          id: 2,
          svg: <SearchSvg className="w-10" />,
          svgLink: "/linkedin.",
        },
        {
          id: 3,
          svg: <GlobleSvg className="w-10" />,
          svgLink: "/facebook.com",
        },
      ],
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 3,
      title: "Matt Cannon",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svgData: [
        {
          id: 1,
          svg: <RightSvg className="w-10" />,
          svgLink: "/twitter.com",
        },
        {
          id: 2,
          svg: <SearchSvg className="w-10" />,
          svgLink: "/linkedin.",
        },
        {
          id: 3,
          svg: <GlobleSvg className="w-10" />,
          svgLink: "/facebook.com",
        },
      ],
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 4,
      title: "Kathie Corl",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svgData: [
        {
          id: 1,
          svg: <RightSvg className="w-10" />,
          svgLink: "/twitter.com",
        },
        {
          id: 2,
          svg: <SearchSvg className="w-10" />,
          svgLink: "/linkedin.",
        },
        {
          id: 3,
          svg: <GlobleSvg className="w-10" />,
          svgLink: "/facebook.com",
        },
      ],
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
    {
      id: 5,
      title: "Mike Warren",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.",
      svgData: [
        {
          id: 1,
          svg: <RightSvg className="w-10" />,
          svgLink: "/twitter.com",
        },
        {
          id: 2,
          svg: <SearchSvg className="w-10" />,
          svgLink: "/linkedin.",
        },
        {
          id: 3,
          svg: <GlobleSvg className="w-10" />,
          svgLink: "/facebook.com",
        },
      ],
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659699458/607f20a1af14fe2620952c2a_image-6-profile-picture-teacher-education-x-template-p-500_n2tpzc.webp",
    },
  ];

  return (
    <>
      <section className="lg:w-full bg-neutral-100 py-44">
        <div className="container w-full mx-auto max-w-7xl">
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
                <Link href={`teacher/${obj.id}`}>
                  <a>
                    <Teachers {...obj} key={obj.id} />
                  </a>
                </Link>
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
