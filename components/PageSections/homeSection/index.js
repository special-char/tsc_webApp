import Footer from "@components/Footer";
import Industry from "@components/Industry";
import Navbar from "@components/Navbar";

import React from "react";

import TestimonialSection from "./testimonialSection";
import WhylearnSection from "../../whylearnSection";

const HomeSection = () => {
  return (
    <main className="flex flex-col w-full items-center gap-10">
      {/* <Navbar /> */}
      <WhylearnSection />

      <Industry />
      {/* <TestimonialSection /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default HomeSection;
