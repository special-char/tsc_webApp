import IndividualEventBanner from "@components/PageSections/eventPage/individualEventBanner";
import IndividualEvent from "@components/pageSections/individualEvent";
import { useRouter } from "next/router";
import React from "react";

const data = [
  {
    id: 1,
    title: "React crash Course",
  },
  {
    id: 2,
    title: "Flutter crash Course",
  },
  {
    id: 3,
    title: "Node js crash Course",
  },
  {
    id: 4,
    title: "Next js",
  },
];

const Eventid = () => {
  const router = useRouter();
  const { eventid } = router.query;
  console.log("event id:", eventid);
  return (
    <>
      {data
        .filter((event) => event.id == eventid)
        .map((val) => (
          <div key={val.id}>
            <IndividualEvent data={val} />
          </div>
        ))}
    </>
  );
};

export default Eventid;
