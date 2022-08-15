import React from "react";
import Design from "@public/icons/design.svg";
import Image from "next/image";
import CourseReview from "./courseReview";
import Testimonial from "@components/Testimonial";
import PlayVideo from "@public/icons/playVideo.svg";
import ChipNavData from "@components/chipNavigation/chipNavData";
import ChipNavigation from "@components/chipNavigation";

import GetCourseCard from "@components/GetCourseCard";

const IndividualCourse = () => {
  return (
    <section className="h-auto w-full overflow-clip">
      <div className="relative h-full w-full ">
        <div className="w-full h-[500px] lg:h-[600px] absolute -z-10 bg-neutral-700"></div>
        <div className="h-[500px] w-[500px] rounded-full absolute -right-96 -top-96 md:-right-48 md:-top-80 lg:-right-36 lg:-top-60 -z-10 bg-secondary3"></div>
      </div>
      <div className="wrapper max-w-[1210px] mx-auto">
        <div className="wrapper-content h-auto flex flex-col lg:flex-row gap-4 px-4 md:px-6s w-full pt-20">
          <div className="left-section lg:max-w-[63%] h-auto">
            <div className="chip-container chip px-0">
              <div className="chip chip--white w-32 py-2 flex gap-1 items-center">
                <Design className="w-4" />
                <span className="font-bold">Design</span>
              </div>
            </div>
            <h1 className="text-neutral-100 mb-0">Brand & Identity Design</h1>
            <p className="text-secondary1">
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus vestibulum lorem sed risus ultricies.
            </p>
            <div className="course-preview mb-10 relative w-full min-h-[162px] sm:min-h-[333px] md:min-h-[400px]">
              <Image
                className="rounded-3xl brightness-50"
                objectFit="cover"
                layout="fill"
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
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
                <GetCourseCard />
              </div>
              <div className="course-navigation flex flex-wrap gap-3 px-3 py-3 bg-secondary1 rounded-3xl md:rounded-full">
                {ChipNavData.map((val) => (
                  <ChipNavigation link={val.link} label={val.label} />
                ))}
              </div>
              <div className="course-text-wrapper py-20">
                <h2>About the course</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Purus viverra praesent felis
                  consequat pellentesque turpis et quisque platea. Eu, elit ut
                  nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit
                  massa sapien, risus diam. In lorem eu sed euismod laoreet
                  urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a
                  bibendum nisl et tellus. Aliquet elit senectus iaculis netus
                  gravida.
                </p>
              </div>
              <hr />
              <div className="course-text-wrapper py-20">
                <h2>What will you learn</h2>
                <p>
                  Euismod sem purus rutrum in. Tortor varius a bibendum nisl et
                  tellus. Aliquet elit senectus iaculis netus gravida.
                </p>
                <ol start={1} className="pl-0">
                  <li>
                    Sed viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida.
                  </li>
                  <li>At urna condimentum mattis pellentesque id nibh.</li>
                  <li>Magna etiam tempor orci eu lobortis elementum.</li>
                  <li>
                    Bibendum est ultricies integer quis. Semper eget duis at
                    tellus.
                  </li>
                </ol>
              </div>
              <hr />
              <div className="course-text-wrapper py-20">
                <h2>Results after course completion</h2>
                <p>
                  Eget aliquet nibh praesent tristique magna sit amet purus.
                  Consequat id porta nibh venenatis cras sed felis. Nisl rhoncus
                  mattis rhoncus urna neque viverra justo nec. Habitant morbi
                  tristique senectus et netus et malesuada fames ac. Et tortor
                  consequat id porta nibh venenatis cras sed felis.
                </p>
                <p>
                  Mi sit amet mauris commodo quis. Eget arcu dictum varius duis
                  at consectetur lorem.Venenatis cras sed felis eget velit
                  aliquet.
                </p>
                <div className="course-preview relative w-full min-h-[162px] md:min-h-[400px]">
                  <Image
                    className="rounded-3xl"
                    objectFit="cover"
                    layout="fill"
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f294e56e6b00b752780af_image-course-results-education-x-template.jpg"
                  />
                </div>
              </div>
              <hr />
            </div>
            <div className="course-review py-20">
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
            </div>
          </div>
          <div className="right-section max-w-[396px] hidden lg:block">
            <div className="rate-card sticky top-3 bg-neutral-100 rounded-2xl flex flex-col px-6 py-9 gap-0 mb-10">
              <GetCourseCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualCourse;
