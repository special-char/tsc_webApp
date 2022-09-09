import IndividualTeacherPage from "@components/pageSections/IndividualTeacher";
import AboutQuery from "@queries/aboutQuery";
import axiosInstance from "lib/axiosInstance";
import { useRouter } from "next/router";

const TeacherId = ({ data }) => {
  const router = useRouter();
  const { teacherid } = router.query;
  console.log("all teachers data:", data);
  return (
    <>
      {data.aboutTeacher?.teachers
        .filter((teacher) => teacher.id == teacherid)
        .map((val) => (
          <div key={val.id}>
            <IndividualTeacherPage data={val} />
          </div>
        ))}
    </>
  );
};

export async function getServerSideProps() {
  try {
    console.log("hello");
    const res = await axiosInstance.post("graphql", {
      query: AboutQuery,
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

export default TeacherId;
