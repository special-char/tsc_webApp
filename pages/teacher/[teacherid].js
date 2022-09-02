import IndividualTeacherPage from "@components/pageSections/IndividualTeacher";
import AboutQuery from "@queries/aboutQuery";
import axiosInstance from "lib/axiosInstance";
import { useRouter } from "next/router";

const TeacherId = ({ data }) => {
  // const TeacherData = [
  //   {
  //     id: 1,
  //     name: "Teacher 1",
  //     about: "about teacher",
  //   },
  //   {
  //     id: 2,
  //     name: "Teacher 2",
  //     about: "about teacher",
  //   },
  //   {
  //     id: 3,
  //     name: "Teacher 3",
  //     about: "about teacher",
  //   },
  //   {
  //     id: 4,
  //     name: "Teacher 4",
  //     about: "about teacher",
  //   },
  // ];
  const router = useRouter();
  const { teacherid } = router.query;
  console.log("teacher data:", data.aboutTeacher);
  return (
    <>
      {data.aboutTeacher.teachers
        .filter((teacher) => teacher.id == teacherid)
        .map((val) => (
          <div key={val.id}>
            <IndividualTeacherPage data={data.aboutTeacher.teachers} />
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
