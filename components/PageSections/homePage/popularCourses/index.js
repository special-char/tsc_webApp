import Card from "@components/card";
import LeftArrow from "@public/icons/lessthan.svg";
import RightArrow from "@public/icons/greaterthan.svg";
import React from "react";
import Link from "next/link";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Graphic Design 101",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 2,
      title: "Web Design & Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 3,
      title: "Brand & Identity Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 3,
      title: "Brand & Identity Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
  ];
  return (
    <>
      <section className="py-20 overflow-hidden">
        <h2 className="text-center mb-10">Browse our popular courses</h2>
        <div className="card-container container ml-auto max-w-7xl px-6">
          <div className="relative pb-10">
            <div className="flex flex-col md:flex-row md:inline-flex gap-4 justify-center md:text-left">
              {courses.map((obj) => {
                return (
                  <div className="md:min-w-[550px] relative">
                    <Link href={`course/${obj.id}`}>
                      <a>
                        <Card {...obj} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* <div className="absolute flex w-full justify-between bg-secondary2">
              <button class="btn btn--round btn--white w-24">
                <span class="text-3xl">
                  <LeftArrow className="w-4" />
                </span>
              </button>
              <button class="btn btn--round btn--white w-24">
                <span class="text-3xl">
                  <RightArrow className="w-4" />
                </span>
              </button>
            </div> */}
          </div>
        </div>
        <div className="container mx-auto  flex items-center justify-center">
          <button className="btn btn--primary uppercase">
            explore all courses
          </button>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
