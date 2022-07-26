import Industry from "@components/Industry";
// import CourseSection from "@components/PageSections/CourseSection";
import Head from "next/head";
import CourseSection from "../components/PageSections/CourseSection";
import Footer from "../components/Footer";
import Features from "../components/PageSections/Features";
import HomeSection from "../components/PageSections/HomeSection";
import styles from "../styles/Home.module.css";
import BrowseCourse from "@components/PageSections/coursesByCategory";
import Chip from "@components/chip";
import PlayIcon from "../public/icons/play.svg";

export default function Home() {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <h6>Lorem ipsum dolor sit amet.</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui!
      </p>
      <p className="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui!
      </p>
      <p className="large">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui!
      </p>
      <a href="">Lorem, ipsum.</a>
      <blockquote>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
        excepturi ducimus magni? Magni perspiciatis ad quaerat porro dicta,
        incidunt aperiam amet laboriosam sunt quam tenetur ratione deserunt
        officia odio qui!
      </blockquote>

      <div>
        <button className="btn btn--primary btn--large">Explore Courses</button>
        <button className="btn btn--primary">Explore Courses</button>
        <button className="btn btn--primary btn--small">Explore Courses</button>
        <button className="btn btn--secondary">Explore Courses</button>
        <button className="btn btn--white">Explore Courses</button>

        <button class="btn btn--round btn--secondary w-24">
          <span class="text-3xl">K</span>
        </button>

        <div className="chip chip--primary">
          <span>X</span>
          <span>12 Courses</span>
        </div>

        <div class="avatar">
          <div class="w-14">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>

        <div class="avatar placeholder bg-primary rounded-full">
          <div class="w-14">
            <span className="text-lg">YM</span>
          </div>
        </div>

        <div class="rating">
          <input
            type="radio"
            name="rating"
            class="mask mask--heart bg-secondary2"
          />
          <input
            type="radio"
            name="rating"
            class="mask mask--heart bg-secondary2"
          />
          <input
            type="radio"
            name="rating"
            class="mask mask--heart bg-secondary2"
          />
          <input
            type="radio"
            name="rating"
            class="mask mask--heart bg-secondary2"
            checked
          />
          <input
            type="radio"
            name="rating"
            class="mask mask--heart bg-secondary2"
          />
        </div>

        <div className="card">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="card__body">
            <h3 className="card__title">hello</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, deleniti.
            </p>
            <div className="card__actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
