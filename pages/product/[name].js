import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

const Home = () => {
  const router = useRouter();
  const { name } = router.query;
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    data.map((item) => {
      if (item.name === name) {
        setdescription(item.name + ": " + item.description);
      }
    });
  }, [router.query.name, router.isReady]);
  return (
    <>
      {data.map((data) => (
        <div key={data.id}>
          <button
            className="btn btn--primary"
            onClick={() => router.push(`${data.id}`)}
          >
            add id
          </button>
          <br />
        </div>
      ))}
    </>
  );
};

export default Home;
