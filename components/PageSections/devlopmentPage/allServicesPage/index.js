import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TSCImage from "@components/TSCImage";

const AllServicesPage = ({ children, service, index }) => {
  const ourRef = useRef(null);
  const [animate, setanimate] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const topPosition = ourRef.current.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    if (topPosition < scrollPosition) {
      // trigger animation
      setanimate((prev) => true);
      console.log("====================================");
      console.log("hi", index);
      console.log("====================================");
    } else {
      setanimate((prev) => false);
    }
  };

  return (
    <>
      <section className="w-full px-8 my-12 bg-neutral-200 overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ourRef}
            className={`w-full flex mb-8  ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } flex-wrap gap-4 items-center justify-center `}
          >
            <div
              className={`w-full  ${
                animate ? "animate-fadeIn" : "animate-fadeOut"
              }md:w-[45%] flex-1  items-center justify-center`}
            >
              <figure
                className={`relative ${
                  animate ? "animate-fadeIn" : "animate-fadeOut"
                } h-96`}
              >
                <TSCImage
                  layout="fill"
                  objectFit="cover"
                  // src={service.img}
                  src={
                    "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  }
                  alt=""
                />
              </figure>
            </div>
            <div
              className={`w-full ${
                animate ? "animate-fadeIn" : "animate-fadeOut"
              } md:w-[41.6%]  flex-col text-left `}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllServicesPage;
