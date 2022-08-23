import Head from "next/head";
import CourseSection from "../components/PageSections/CourseSection";
import Footer from "../components/Footer";
import Features from "../components/PageSections/Features";
import HomeSection from "../components/PageSections/HomeSection";
import styles from "../styles/Home.module.css";
import BrowseCourse from "@components/PageSections/coursesByCategory";
import Chip from "@components/chip";
import PlayIcon from "../public/icons/play.svg";
import EducationCourses from "@components/PageSections/educationCourses";
import AboutEducation from "@components/PageSections/aboutEducation";
import About from "@components/PageSections/about";
import Achievements from "@components/PageSections/achievements";
import Courses from "@components/PageSections/courses";
import Blog from "@components/PageSections/blog";
import Card from "@components/PageSections/brand&identity";
import Grid from "@components/PageSections/grid";
import Foter from "@components/PageSections/foter";
import CustomImage from "@components/CustomImage";
import src from "@tailwindcss/typography";

export default function Home() {
  return (
    <CustomImage
      src={
        "https://assets.website-files.com/607de2d8e8911e32707a3efe/607ee9511b8768627aa63e05_image-home-about-education-x-template.jpg"
      }
      height={500}
      width={500}
      Shight={500}
      Swidth={500}
    />
  );
}
