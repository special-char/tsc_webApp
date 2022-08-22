import LevelSvg from "@public/icons/courseLevel.svg";
import DurationSvg from "@public/icons/courseDuration.svg";
import Lesson from "@public/icons/courseLesson.svg";
import Access from "@public/icons/courseAccess.svg";
import Device from "@public/icons/courseDevice.svg";

const CourseFeatures = [
  {
    svg: <LevelSvg className="w-8" />,
    description: "Level:Advanced",
  },
  {
    svg: <DurationSvg className="w-8" />,
    description: "Duration:8hr 12m",
  },
  {
    svg: <Lesson className="w-8" />,
    description: "Lesson:80",
  },
  {
    svg: <Access className="w-8" />,
    description: "Lifetime Access",
  },
  {
    svg: <Device className="w-10" />,
    description: "Access From Any Computer, Tablet or Mobile",
  },
];

export default CourseFeatures;
