import React from "react";
import BannerAbout from "./bannerSection";
import HistorySection from "./historySection";
import OfficesSection from "./OfficesSection";
import Achievements from "./statsSection";
import StorySection from "./storySection";
import TeachersSection from "./teachersSection";
import WorkValues from "./workValues";

const AboutPage = ({ data }) => {
  return (
    <>
      <BannerAbout data={data.aboutBanner} />
      <Achievements data={data.aboutSuccess} />
      <StorySection data={data.aboutMission} />
      <WorkValues data={data.aboutValue} />
      {/* <TeachersSection data={data.aboutTeacher} /> */}
      <HistorySection data={data.aboutHistory} />
      <OfficesSection data={data.aboutOffice} />
    </>
  );
};

export default AboutPage;
