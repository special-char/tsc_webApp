import React from "react";
import TSCImage from "@components/TSCImage";
import { useRef } from "react";

const DevelopmentHeader = ({ data }) => {
  // const DevelopmentHeader = () => {
  const videoRef = useRef();

  // useEffect(() => {
  //   videoRef.current.play();
  // }, []);

  return (
    <>
      <section className="main flex items-center h-[100vh] relative overflow-hidden py-16">
        <div className="container flex flex-wrap items-center justify-center gap-16 max-w-7xl mx-auto px-4">
          <div className="aspect-h-9 w-11/12 ">
            <video
              className="rounded-xl"
              src="https://res.cloudinary.com/pruthvish/video/upload/v1662962258/WhatsApp_Video_2022-09-09_at_4.17.00_PM_mghr9b.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="bg-secondary2 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-52 lg:-left-52 -z-10"></div>
        <div className="bg-primary  w-full h-[300px] absolute top-3/4 -z-10 lg:top-0 lg:h-[100%] lg:w-1/2 lg:right-0"></div>
        <div className="bg-secondary3 rounded-full w-[500px] h-[500px] absolute -bottom-80 -right-72  lg:-bottom-80 lg:-right-20 -z-10"></div>
      </section>
    </>
  );
};

DevelopmentHeader.displayName = "DevelopmentHeader";
export default DevelopmentHeader;
