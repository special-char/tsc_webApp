import StarSvg from "@public/icons/star.svg";
import Link from "next/link";
import Carousal from "@components/Carousal";

const TestimonialSection = ({ data, data2 }) => {
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
      <section className="relative overflow-hidden px-8 md:p-6 md:pt-20 pt-28 py-36 lg:py-44 bg-neutral-200  ">
        <h2 className="md:py-6 md:p-12 text-center justify-center">
          {data.heading?.title}
        </h2>
        <Carousal data={data2} testimonial />
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-6 lg:w-full md:gap-8 md:w-full text-center lg:flex-row mx-auto py-14 ">
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
        <div className="flex items-center justify-center ">
          <Link href={"/Courses"}>
            <a>
              <button className="btn btn--primary  md:w-full lg:w-80 ">
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
