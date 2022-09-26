import React from "react";
import TSCImage from "@components/TSCImage";

const ProjectsPage = ({ children, data, index }) => {
  // const ourRef = useRef(null);
  // const [animate, setanimate] = useState(false);

  // useLayoutEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // const onScroll = () => {
  //   const topPosition = ourRef.current.getBoundingClientRect().top;
  //   const scrollPosition = window.scrollY;
  //   if (topPosition < scrollPosition) {
  //     // trigger animation
  //     setanimate((prev) => true);
  //     console.log("====================================");
  //     console.log("hi", index);
  //     console.log("====================================");
  //   } else {
  //     setanimate((prev) => false);
  //   }
  // };

  return (
    <>
      <section className="max-w-7xl mx-auto  flex flex-col my-12 w-screen relative overflow-hidden">
        <div
          className={`w-full flex mb-8 bg-neutral-100 rounded-3xl py-8 shadow-dark px-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col gap-4 items-center justify-start`}
        >
          <div
            className={`w-full flex-1 z-10 ${
              true
                ? "motion-safe:animate-fadeIn"
                : "motion-safe:animate-fadeOut"
            }`}
          >
            <figure className="relative h-80">
              <TSCImage layout="fill" objectFit="cover" src={data.img} alt="" />
            </figure>
          </div>
          <div
            className={`w-full flex-1 flex flex-col text-left z-10 ${
              index % 2 === 0
                ? "motion-safe:animate-fadeIn"
                : "motion-safe:animate-fadeOut"
            }`}
          >
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h4>{data.details}</h4>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
