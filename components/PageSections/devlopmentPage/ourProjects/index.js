import Card from "@components/Card";
import Carousal from "@components/Carousal";
import Link from "next/link";
import LeftSvg from "/public/icons/left.svg";
import RightsSvg from "/public/icons/rights.svg";

const OurProjectsSection = () => {
  const Projects = [
    {
      id: 1,
      title: "Graphic Design 101",
      titleDescription:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      courseImage: {
        url: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      },
    },
    {
      id: 2,
      title: "Web Design & Development",
      titleDescription:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      courseImage: {
        url: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      },
    },
    {
      id: 3,
      title: "Brand & Identity Design",
      titleDescription:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      courseImage: {
        url: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      },
    },
    {
      id: 4,
      title: "Advanced Logo Design",
      titleDescription:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      courseImage: {
        url: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      },
    },
    {
      id: 5,
      title: "Marketing Analytics 101",
      titleDescription:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      courseImage: {
        url: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      },
    },
    {
      id: 6,
      title: "Mobile App Development",
      titleDescription:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      courseImage: {
        url: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      },
    },
  ];

  return (
    <>
      <section className="py-32 overflow-hidden bg-neutral-200">
        <h2 className="text-center mb-10">Our Projects</h2>
        <Carousal data={Projects} href={`/allProjects`} />
      </section>
    </>
  );
};

OurProjectsSection.displayName = "OurProject Section";
export default OurProjectsSection;
