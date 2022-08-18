import Footer from "@components/Footer";
import BannerAbout from "@components/PageSections/aboutSection/bannerSection";
import HistorySection from "@components/PageSections/aboutSection/historySection";
import OfficesSection from "@components/PageSections/aboutSection/OfficesSection";
import Achievements from "@components/PageSections/aboutSection/statsSection";
import StorySection from "@components/PageSections/aboutSection/storySection";
import TeachersSection from "@components/PageSections/aboutSection/teachersSection";
import WorkValues from "@components/PageSections/aboutSection/workValues";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <BannerAbout />
      <Achievements/>
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
