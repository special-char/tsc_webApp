import Card from "@components/Card";
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
      <section className="py-52 overflow-hidden bg-neutral-200">
        <h2 className="text-center mb-10">Our Projects</h2>
        <div className="card-container container ml-auto max-w-7xl px-6">
          <div className="relative pb-10">
            <div className="navigation flex flex-row justify-between w-full lg:w-[93%] overflow-hidden  absolute z-10  top-40">
              <div className="avatar placeholder bg-neutral-100 hover:bg-primary hover:fill-neutral-100 rounded-full">
                <div className="w-16 md:w-20">
                  <span className=" w-4">
                    <LeftSvg />
                  </span>
                </div>
              </div>
              <div class="avatar placeholder bg-neutral-100  hover:bg-primary hover:fill-neutral-100 rounded-full">
                <div class="w-16 md:w-20 ">
                  <span className=" w-4">
                    <RightsSvg />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-nowrap overflow-hidden  md:flex-row md:inline-flex gap-4 justify-center md:text-left">
              {Projects.map((obj) => {
                return (
                  <div
                    className="w-[300px] md:min-w-[550px] relative"
                    key={obj.id}
                  >
                    <Link href={`/allProjects`}>
                      <a>
                        <Card {...obj} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

OurProjectsSection.displayName = "OurProject Section";
export default OurProjectsSection;
