import { useRouter } from "next/router";
import IndividualCourse from "@components/pageSections/individualCourse";
import axiosInstance from "lib/axiosInstance";
import CoursesQuery from "@queries/coursesQuery";

const CourseId = ({ data }) => {
  const router = useRouter();
  const { courseid } = router.query;
  // we have to put courses data here
  // console.log("indiividual courses data:", data);
  return (
    <>
      {data.courses
        .filter((course) => course.id == courseid)
        .map((val) => (
          <div key={val.id}>
            <IndividualCourse data={val} />
          </div>
        ))}
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: CoursesQuery,
      variables: {},
    });
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}

export default CourseId;
