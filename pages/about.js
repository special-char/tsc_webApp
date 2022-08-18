import Footer from "@components/Footer";
import BannerAbout from "@components/PageSections/aboutPage/bannerSection";
import HistorySection from "@components/PageSections/aboutPage/historySection";
import OfficesSection from "@components/PageSections/aboutPage/OfficesSection";
import Achievements from "@components/PageSections/aboutPage/statsSection";
import StorySection from "@components/PageSections/aboutPage/storySection";
import TeachersSection from "@components/PageSections/aboutPage/teachersSection";
import WorkValues from "@components/PageSections/aboutPage/workValues";
import React from "react";

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
      <Footer />
    </>
  );
};

export default AboutPage;
