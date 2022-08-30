import { userRouter } from "next/router";

function Teachers() {
  const router = userRouter();
  const { TeachersId } = router.query.teachersId;
  return <div> Teacher content {teachersId}! </div>;
}

export default Teachers;
