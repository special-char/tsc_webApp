import IndividualTeacherPage from "@components/pageSections/IndividualTeacher";
import { useRouter } from "next/router";

const CourseId = () => {
  const TeacherData = [
    {
      id: 1,
      name: "Teacher 1",
      about: "about teacher",
    },
    {
      id: 2,
      name: "Teacher 2",
      about: "about teacher",
    },
    {
      id: 3,
      name: "Teacher 3",
      about: "about teacher",
    },
    {
      id: 4,
      name: "Teacher 4",
      about: "about teacher",
    },
  ];
  const router = useRouter();
  const { teacherid } = router.query;

  return (
    <>
      {TeacherData.filter((teacher) => teacher.id == teacherid).map((val) => (
        <div key={val.id}>
          <IndividualTeacherPage />
        </div>
      ))}
    </>
  );
};

export default CourseId;
