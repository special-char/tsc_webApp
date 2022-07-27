import Head from "next/head";
import CourseSection from "../components/PageSections/CourseSection";
import Footer from "../components/Footer";
import Features from "../components/PageSections/Features";
import HomeSection from "../components/PageSections/HomeSection";
import styles from "../styles/Home.module.css";
import BrowseCourse from "@components/PageSections/coursesByCategory";
import Chip from "@components/chip";
import PlayIcon from "../public/icons/play.svg";
import CourseByCategory from "@components/PageSections/courseByCategory";
import ResourcesSection from "@components/PageSections/resourcesSection";
import EducationCourses from "@components/PageSections/educationCourses";

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

        <button className="btn btn--round btn--secondary w-24">
          <span className="text-3xl">K</span>
        </button>

        <div className="chip chip--primary">
          <span>X</span>
          <span>12 Courses</span>
        </div>

        <div className="avatar">
          <div className="w-14">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="flex">
        <div className="avatar">
          <div className="w-48">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          </div>  
          <div className="px-5 py-5">
          <p>
            “Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint”
          </p>
          </div>
        </div>

        <div className="avatar placeholder bg-primary rounded-full">
          <div className="w-14">
            <span className="text-lg">YM</span>
          </div>
        </div>

        <div className="rating">
          <input
            type="radio"
            name="rating"
            className="mask mask--heart bg-secondary2"
          />
          <input
            type="radio"
            name="rating"
            className="mask mask--heart bg-secondary2"
          />
          <input
            type="radio"
            name="rating"
            className="mask mask--heart bg-secondary2"
          />
          <input
            type="radio"
            name="rating"
            className="mask mask--heart bg-secondary2"
            checked
          />
          <input
            type="radio"
            name="rating"
            className="mask mask--heart bg-secondary2"
          />
        </div>

        <div className="card w-1/3">
          <figure>
            <img
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-date">April 20, 2022</div>
            <h3 className="card-title">Graphic Design 101</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, nobis libero labore temporibus mollitia neque est
              adipisci enim delectus fugit voluptate unde quisquam perspiciatis
              earum, minus cum dolore molestias error!
            </p>
            <div className="card-actions">
              <div className="author">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="author__name">Yagnesh Modh</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-1/3">
          <figure>
            <img
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Graphic Design 101</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, nobis libero labore temporibus mollitia neque est
              adipisci enim delectus fugit voluptate unde quisquam perspiciatis
              earum, minus cum dolore molestias error!
            </p>
          </div>
        </div>
      </div>
      <HomeSection />
      <CourseByCategory />
      <CourseSection />
      <ResourcesSection />
      <EducationCourses />
    </div>
  );
}
