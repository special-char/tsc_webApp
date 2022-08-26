import { useRouter } from "next/router";
import IndividualCourse from "@components/pageSections/individualCourse";

const CourseId = () => {
  const CourseData = [
    {
      id: 1,
      slug: "react-course",
      title: "React",
      rate: 1000,
    },
    {
      id: 2,
      slug: "react-course",
      title: "Flutter",
      rate: 1000,
    },
    {
      id: 3,
      slug: "react-course",
      title: "Node js ",
      rate: 1000,
    },
    {
      id: 4,
      slug: "react-course",
      title: "Next js",
      rate: 1000,
    },
  ];
  const router = useRouter();
  const { courseid } = router.query;

  return (
    <>
      {CourseData.filter((course) => course.id == courseid).map((val) => (
        <div key={val.id}>
          <IndividualCourse title={val.title} />
        </div>
      ))}
    </>
  );
};

export default CourseId;

{
  /* <h1>{val.title}</h1>
          <p>{val.rate}</p> */
}
