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
  return (
    <>
      <div className="relative overflow-hidden">
        <h2 className="p-12 text-center justify-center">
          What our students say about us
        </h2>
        <div className="inline-flex gap-4 relative">
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
      </div>
    </>
  );
};

TestimonialSection.displayName = "Testimonial Section";
export default TestimonialSection;
