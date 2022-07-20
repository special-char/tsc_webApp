import React from "react";
// import { ReactComponentElement as FacebookSvg } from "../public/assets/images/svgs/icons8-facebook.svg";
import "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className="bg-[#1e3d60]">
      <div className="flex flex-col p-4 border-2 border-b-red-500 md:flex-row md:justify-around">
        <h1 className="text-4xl font-bold text-white  pb-4">TSC</h1>
        <p className="text-white text-lg md:max-w-[468px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt aliqua.
        </p>
      </div>
      <div className="pb-4 py-16 md:p-12">
        <svg
          className="rounded-full  "
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" fill="#E1EDFB" />
          <circle cx="36" cy="36" r="36" fill="#E1EDFB" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.3414 18.5137H45.6055C48.3831 18.5448 51.0269 19.7191 52.921 21.7629C54.8151 23.8068 55.7942 26.5419 55.6303 29.3312V42.6696C55.7942 45.4589 54.8151 48.194 52.921 50.2379C51.0269 52.2817 48.3831 53.456 45.6055 53.4871H26.3414C20.3751 53.4871 16.3539 48.6334 16.3539 42.6696V29.3312C16.3539 23.3674 20.3751 18.5137 26.3414 18.5137Z"
            fill="white"
            stroke="#1E3D60"
            stroke-width="2.59321"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M47.5517 32.2402L38.8361 39.2575C37.1867 40.5507 34.8746 40.5507 33.2252 39.2575L24.4348 32.2402"
            stroke="#064EA4"
            stroke-width="2.59321"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 className="text-2xl font-bold text-white py-4">
          Subscribe to our newsletter
        </h2>
        <p className="text-white text-lg md:max-w-[468px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo.
        </p>
        <div className="flex flex-col md:relative md:w-2/5 md:p-0 md:mt-4 gap-4 p-4">
          <input
            className="rounded-full w-full py-5 flex text-slate-300 pl-4 md:px-6 "
            type="text"
            placeholder="Enter Your email"
          />
          <button className="rounded-full w-full md:w-32 md:py-3 md:absolute md:right-[0.75rem] md:top-2  py-5 flex items-center justify-center text-white text-base font-bold bg-[#064ea4] ">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="items-center justify-center border-2 border-b-red-500 ">
        <h3 className="text-2xl font-semibold text-white p-4">Pages</h3>
        <div className=" pl-4 flex border-2">
          <ul className="links text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Individual Course</li>
            <li>Blog</li>
            <li>Blog Post</li>
          </ul>
          <ul className="links text-gray-300">
            <li>Events</li>
            <li>Individual Event</li>
            <li>Teachers</li>
            <li>Individual Techers</li>
            <li>Contact</li>
          </ul>
        </div>
        <h3 className="text-2xl font-semibold text-white p-4">Utility Pages</h3>
        <div className="links p-4">
          <ul className="links text-gray-300">
            <li>Start Here</li>
            <li>Start Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licenses</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
      <div>{/* <FacebookSvg /> */}</div>
      <div className="text-lg text-white">
        Copyright © Education X | Designed by BRIX Templates - Powered by
        Webflow
      </div>
    </footer>
  );
};

export default Footer;
