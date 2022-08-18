import SVG1 from "@public/icons/home_about.svg";
import SVG2 from "@public/icons/home_about_icon2.svg";
import SVG3 from "@public/icons/home_about_icon3.svg";

const EducationData = [
  {
    icon: (
      <SVG1 className="w-14 mb-4 md:w-24 md:mt-2 md:mr-8 lg:mt-2 lg:w-28 lg:mr-8 rounded-full" />
    ),
    heading: "Industry expert teachers",
    description:
      " Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor",
  },
  {
    icon: (
      <SVG2 className="w-14 mb-4 md:w-24 md:mt-2 md:mr-8 lg:mt-2 lg:w-28 lg:mr-8 rounded-full" />
    ),
    heading: "Up-to-date course content",
    description:
      " Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor",
  },
  {
    icon: (
      <SVG3 className="w-14 mb-4 md:w-24 md:mt-2 md:mr-8 lg:mt-2 lg:w-28 lg:mr-8 rounded-full" />
    ),
    heading: "Students community",
    description:
      " Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor",
  },
];

export default EducationData;
