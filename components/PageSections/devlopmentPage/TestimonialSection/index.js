import StarSvg from "@public/icons/star.svg";
import Testimonial from "@components/testimonial";
import LeftSvg from "/public/icons/left.svg";
import RightsSvg from "/public/icons/rights.svg";
import { root } from "postcss";
import Carousal from "@components/Carousal";

const TestimonialSection = () => {
  const testimonialDetails = [
    {
      id: 1,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      svg: <StarSvg />,
    },
    {
      id: 2,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      svg: <StarSvg />,
    },
    {
      id: 3,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      svg: <StarSvg />,
    },
    {
      id: 3,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
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

  // const TestimonialSection = document.querySelector(".number");
  // const number = new IntersectionObserver(
  //   (entries, observer) => {
  //     const [number] = entries;
  //     if(!entry.isIntersecting)

  //     return (

  //     const coutnum = document.querySelectorAll("TestimonialSection");
  //     const speed =200;

  //     counternum.forEach(curElem => {
  //       const updateNumber = () => {
  //         const targetNumber = parseInt (curElem.dataset.number);
  //         const initialNum = parseInt (curElem.InnerText);
  //         const incrementNumber = Math. trunc (targetNumber / speed);
  //         if (initialNum < targetNumber) {
  //           curElem. innertext = `${initialNum + incrementNumber}+`;
  //           setTimeout (updateNumber, 10)
  //         }

  //         };
  //         updateNumber();
  //     });

  //   },
  //   {
  //     root: null,
  //     threshold: 0,
  //   }
  //   );
  // number.observer(TestimonialSection);

  return (
    <>
      <section className="relative overflow-hidden px-4 md:p-6 pt-28 py-36 lg:py-44 bg-neutral-200">
        <h2 className="md:py-8 md:p-12 text-center justify-center">
          What Our Clients Say
        </h2>
        <Carousal data={testimonialDetails} testimonial />
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
      </section>
    </>
  );
};

TestimonialSection.displayName = "Testimonial Section";
export default TestimonialSection;
