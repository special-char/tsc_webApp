import Head from "next/head";
import CourseSection from "../components/PageSections/CourseSection";
import Footer from "../components/Footer";
import Features from "../components/PageSections/Features";
import HomeSection from "../components/PageSections/HomeSection";
import styles from "../styles/Home.module.css";
import BrowseCourse from "@components/PageSections/coursesByCategory";
import Chip from "@components/chip";
import PlayIcon from "../public/icons/play.svg";
import SplitScreen from "@components/SplitScreen";

export default function Home() {
  return <SplitScreen />;
}
