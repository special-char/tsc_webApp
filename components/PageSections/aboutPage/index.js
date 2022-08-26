import React from "react";
import BannerAbout from "./bannerSection";
import HistorySection from "./historySection";
import OfficesSection from "./OfficesSection";
import Achievements from "./statsSection";
import StorySection from "./storySection";
import TeachersSection from "./teachersSection";
import WorkValues from "./workValues";

const AboutPage = () => {
  return (
    <>
      <BannerAbout />
      <Achievements />
      <StorySection />
      <WorkValues />
      <TeachersSection />
      <HistorySection />
      <OfficesSection />
    </>
  );
};

export default AboutPage;
