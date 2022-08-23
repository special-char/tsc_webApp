import dynamic from "next/dynamic";
import Footer from "@components/footer";
import Layout from "@components/Layouts";
// import BannerAbout from "@components/pageSections/aboutPage/bannerSection";
// import OfficesSection from "@components/pageSections/aboutPage/officesSection";
// import Achievements from "@components/pageSections/aboutPage/statsSection";
// import StorySection from "@components/pageSections/aboutPage/storySection";
// import TeachersSection from "@components/pageSections/aboutPage/teachersSection";
// import WorkValues from "@components/pageSections/aboutPage/workValues";
import React, { Suspense } from "react";

const BannerAbout = dynamic(
  () => import("@components/pageSections/aboutPage/bannerSection"),
  {
    ssr: false,
  }
);
const StorySection = dynamic(
  () => import("@components/pageSections/aboutPage/storySection"),
  {
    ssr: false,
  }
);
const OfficesSection = dynamic(
  () => import("@components/pageSections/aboutPage/officesSection"),
  {
    ssr: false,
  }
);
const Achievements = dynamic(
  () => import("@components/pageSections/aboutPage/statsSection"),
  {
    ssr: false,
  }
);
const TeachersSection = dynamic(
  () => import("@components/pageSections/aboutPage/teachersSection"),
  {
    ssr: false,
  }
);
const WorkValues = dynamic(
  () => import("@components/pageSections/aboutPage/workValues"),
  {
    ssr: false,
  }
);

const About = () => {
  return (
    <>
      <BannerAbout />
      <Achievements />
      <StorySection />
      <WorkValues />
      <TeachersSection />
      {/* <HistorySection /> */}
      <OfficesSection />
      <Footer />
    </>
  );
};
// AboutPage.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default About;
