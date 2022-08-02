import Image from "next/image";
import React from "react";
import RightArrow from "@public/icons/rArrow.svg";
import LeftArrow from "@public/icons/lArrow.svg";
const Home = () => {
  return (
    <>
      <div className="index-wrapper flex flex-wrap items-center">
        <div className="training-section section  flex-1 h-screen">
          <div className="w-full h-screen bg-secondary3 overflow-hidden relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              }
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
            <div className="w-full h-full px-2 absolute flex justify-between items-center bg-secondary3 opacity-60 z-50">
              <div className="flex flex-col flex-wrap items-start justify-center">
                <h1 className="m-0 text-neutral-100">Training</h1>
                <button className="btn btn--primary">Explore</button>
              </div>
              <RightArrow className="right-arrow w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="section development-section flex-1 h-screen relative ">
          <div className="w-full h-screen overflow-hidden relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              }
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
            <div className="w-full h-full px-2 absolute flex justify-between items-center bg-primary opacity-60 z-50">
              <LeftArrow className="left-arrow w-4 h-4" />
              <div className="flex-col flex-wrap items-end justify-end">
                <h1 className="m-0 text-neutral-100">Development</h1>
                <button className="btn btn--primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
