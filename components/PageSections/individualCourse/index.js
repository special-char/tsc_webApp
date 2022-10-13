import React from "react";
import Design from "@public/icons/design.svg";
import TSCImage from "@components/TSCImage";
import CourseReview from "./courseReview";
import Testimonial from "@components/testimonial";
import PlayVideo from "@public/icons/playVideo.svg";
import ChipNavData from "@components/chipNavigation/chipNavData";
import ChipNavigation from "@components/chipNavigation";
import GetCourseCard from "@components/getCourseCard";

const ChipData = [
  {
    link: "#about",
    label: "About",
  },
  {
    link: "#result",
    label: "Results",
  },
  {
    link: "#topics",
    label: "Topics",
  },
  {
    link: "#reviews",
    label: "Reviews",
  },
];

const IndividualCourse = ({ data }) => {
  return (
    <section className="h-auto w-full overflow-clip">
      <div className="relative h-full w-full ">
        <div className="w-full h-[500px] lg:h-[600px] absolute -z-10 bg-neutral-700"></div>
        <div className="h-[500px] w-[500px] rounded-full absolute -right-96 -top-96 md:-right-48 md:-top-80 lg:-right-36 lg:-top-60 -z-10 bg-secondary3"></div>
      </div>
      <div className="wrapper max-w-7xl mx-auto py-20">
        <div className="wrapper-content h-auto flex flex-col lg:flex-row gap-4 px-4 md:px-6s w-full pt-20">
          <div className="left-section lg:max-w-[63%] h-auto">
            <div className="chip-container chip relative">
              <div className="chip chip--white px-6 py-2 absolute -top-8 left-0 flex gap-1 items-center">
                <Design className="w-4" />
                <span className="font-bold">Design</span>
              </div>
            </div>
            <h1 className="text-neutral-100 mb-0">{data?.title}</h1>
            <p className="text-secondary1">{data?.titleDescription}</p>
            <div className="course-preview mb-10 relative w-full min-h-[162px] sm:min-h-[333px] md:min-h-[400px]">
              <TSCImage
                className="rounded-3xl brightness-50"
                objectFit="cover"
                layout="fill"
                src={data?.courseImage?.url}
              />

              <div className="w-full h-full absolute flex items-center justify-center">
                <a href="https://media.geeksforgeeks.org/wp-content/uploads/20200513195558/Placement100-_-GeeksforGeeks-1.mp4">
                  <div className="bg-secondary1 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-full">
                    <PlayVideo className="w-4 md:w-9 fill-primary" />
                  </div>
                </a>
              </div>
            </div>
            <div className="get-course">
              <div className="lg:hidden">
                <GetCourseCard
                  enroll={data.enroll}
                  data={data.courseMinimalDetails}
                  price={data.price}
                />
              </div>
              <div className="course-navigation flex flex-wrap gap-3 px-3 py-3 rounded-3xl md:rounded-full">
                {ChipData.map((val) => (
                  <ChipNavigation
                    link={val.link}
                    label={val.label}
                    key={val.id}
                  />
                ))}
              </div>
              <div
                className="about-text-wrapper py-20 border-b-[1px] border-neutral-400"
                id="about"
              >
                <h2>{data.aboutCourse?.title}</h2>
                <p>{data.aboutCourse?.description}</p>
              </div>

              <div
                id="topics"
                className="topics-text-wrapper py-20 border-b-[1px] border-neutral-400"
              >
                <h2>What will you learn</h2>
                <p>{data.result?.description}</p>
                {data.curriculum.map((val) => {
                  return (
                    <ol className="pl-0" key={val.id}>
                      <li>
                        <h4>{val.title}</h4>
                        <p>{val.description}</p>
                      </li>
                    </ol>
                  );
                })}
              </div>

              <div
                id="result"
                className="result-text-wrapper py-20 border-b-[1px] border-neutral-400"
              >
                <h2>{data.result?.title}</h2>
                <p>{data.result?.description}</p>

                <div className="course-preview relative w-full min-h-[162px] md:min-h-[400px]">
                  <TSCImage
                    className="rounded-3xl"
                    objectFit="cover"
                    layout="fill"
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f294e56e6b00b752780af_image-course-results-education-x-template.jpg"
                  />
                </div>
              </div>
            </div>
            {/* <div className="course-review py-20">
              <h2 className="text-center">What our students say</h2>
              <div className="px-3 flex flex-col gap-2">
                {CourseReview.map((obj) => {
                  const name = `${obj.firstName} ${obj.lastName}`;
                  return (
                    <Testimonial
                      description={obj.description}
                      img={obj.img}
                      designation={obj.designation}
                      name={name}
                      svg={obj.svg}
                    />
                  );
                })}
              </div>
            </div> */}
          </div>
          <div className="right-section max-w-sm mx-auto hidden lg:block">
            <div className="rate-card sticky top-3">
              <GetCourseCard
                enroll={data.enroll}
                data={data.courseMinimalDetails}
                price={data.price}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualCourse;
