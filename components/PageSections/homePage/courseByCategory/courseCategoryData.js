import DesignCourse from "@public/icons/design_course.svg";
import Development from "@public/icons/development.svg";
import Marketing from "@public/icons/marketing.svg";
import Play from "@public/icons/play.svg";

const CourseCategoryData = [
  {
    photo: <DesignCourse />,
    label: "Design",
    description:
      "lorem ipsum dolor sit amet,dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, accusantium? sit consectetor adipiscing elit.",
    icon: <Play className="w-3" />,
    courses: "12 Courses",
  },
  {
    photo: <Development />,
    label: "Development",
    description:
      "lorem ipsum dolor sit amet,dolor sit consectetor adipiscing elit.",
    icon: <Play className="w-3" />,
    courses: "5 Courses",
  },
  {
    photo: <Marketing />,
    label: "Marketing",
    description:
      "lorem ipsum dolor sit amet,dolor sit consectetor adipiscing elit.",
    icon: <Play className="w-3" />,
    courses: "7 Courses",
  },
];

export default CourseCategoryData;
