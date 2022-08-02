import StarSvg from "@public/icons/star.svg";
import Testimonial from "@components/Testimonial";

const TestimonialSection = () => {
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
  return (
    <>
      <div className="relative overflow-hidden p-4">
        <h2 className="py-8 md:p-12 text-center justify-center">
          What our students say about us
        </h2>
        <div className="flex flex-col md:flex-row md:inline-flex gap-4 relative">
          {testimonialDetails.map((obj) => {
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
        <div className="flex flex-wrap lg:flex-row mx-auto md:justify-evenly items-center justify-center py-20">
          {numberDetails?.map((e, i) => (
            <div key={i} className=" text-primary text-center justify-center ">
              <h3 className="text-neutral-700">{e.numbers}</h3>
              <p className="text-neutral-500">{e.title}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center ">
          <button className="btn btn--primary w-full md:w-1/2 lg:w-80 ">
            EXPLORE COURSES
          </button>
        </div>
      </div>
    </>
  );
};

TestimonialSection.displayName = "Testimonial Section";
export default TestimonialSection;
