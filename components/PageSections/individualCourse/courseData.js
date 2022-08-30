import Chart from "@public/icons/courseLevel.svg";
import DurationSvg from "@public/icons/courseDuration.svg";
import Lesson from "@public/icons/courseLesson.svg";
import Access from "@public/icons/courseAccess.svg";
import Device from "@public/icons/courseDevice.svg";

const CourseFeatures = [
  {
    svg: <Chart />,
    label: "Level",
    description: "Advanced",
  },
  {
    svg: <DurationSvg />,
    label: "Duration",
    description: "8hr 12m",
  },
  {
    svg: <Lesson />,
    label: "Lesson",
    description: "80",
  },
  {
    svg: <Access />,
    description: "Lifetime Access",
  },
  {
    svg: <Device />,
    description: "Access From Any Computer, Tablet or Mobile",
  },
];

export default CourseFeatures;
