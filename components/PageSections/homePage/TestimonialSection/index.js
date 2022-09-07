import StarSvg from "@public/icons/star.svg";
import Testimonial from "@components/testimonial";
import LeftSvg from "/public/icons/left.svg";
import RightsSvg from "/public/icons/rights.svg";
import Link from "next/link";

const TestimonialSection = ({ data, data2 }) => {
  const testimonialDetails = [
    {
      id: 1,
      firstName: "Pruthvish",
      lastName: "Modi",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      img: "https://placeimg.com/192/192/people",
      svg: <StarSvg />,
    },
    {
      id: 2,
      firstName: "Pruthvish",
      lastName: "Modi",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      img: "https://placeimg.com/192/192/people",
      svg: <StarSvg />,
    },
    {
      id: 3,
      firstName: "Pruthvish",
      lastName: "Modi",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      img: "https://placeimg.com/192/192/people",
      svg: <StarSvg />,
    },
    {
      id: 3,
      firstName: "Pruthvish",
      lastName: "Modi",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      img: "https://placeimg.com/192/192/people",
      svg: <StarSvg />,
    },
  ];
  const numberDetails = [
    {
      numbers: "100,000+",
      title: "students worldwide",
    },
    {
      numbers: "200,000+",
      title: "Total course views",
    },
    {
      numbers: "5,000+",
      title: "Five-star course reviews",
    },
    {
      numbers: "75,000+",
      title: "Students community",
    },
  ];
  console.log("TestimonialSection data2:", data2);
  return (
    <>
      <section className="relative overflow-hidden px-4 md:p-6 pt-28 py-36 lg:py-44 bg-neutral-200 ">
        <h2 className="md:py-8 md:p-12 text-center justify-center">
          {data.heading?.title}
        </h2>
        <div className="container ml-auto max-w-7xl overflow-hidden relative">
          <div className="navigation flex flex-row justify-between w-full lg:w-[90%] overflow-hidden absolute z-10 top-44">
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
          <div className="inline-flex gap-4 text-center justify-center md:text-left relative">
            {data2.map((obj) => {
              const name = `${obj.firstName} ${obj.lastName}`;
              //console.log("TestimonialSection obj:", obj);
              return (
                <Testimonial
                  key={obj.id}
                  data={obj}
                  // description={obj.description}
                  // img={obj.img}
                  // designation={obj.designation}
                  // name={name}
                  // svg={obj.svg}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-6 lg:w-full md:gap-8 md:w-2/3 text-center lg:flex-row mx-auto py-14 ">
            {numberDetails?.map((e, i) => (
              <div
                key={i}
                className="flex-[50%] lg:flex-1 text-primary text-center justify-center"
              >
                <h2 className="text-neutral-700 md:text-4xl text-2xl mb-2 ">
                  {e.numbers}
                </h2>
                <p className="text-neutral-500 mb-0">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Link href={"/Courses"}>
            <a>
              <button className="btn btn--primary  md:w-2/5 lg:w-80 ">
                EXPLORE COURSES
              </button>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

TestimonialSection.displayName = "Testimonial Section";
export default TestimonialSection;
