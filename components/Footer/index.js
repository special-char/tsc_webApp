import React from "react";
import MailSvg from "@public/icons/mail.svg";
import Link from "next/link";

const UtilityLink = [
  {
    link: "#",
    title: "Start Here",
  },
  {
    link: "#",
    title: "Start Guide",
  },
  { link: "#", title: "Home" },
];

const Footer = () => {
  return (
    <footer className="wrapper bg-neutral-700 p-4 md:pt-20">
      <div className="flex flex-col border-b-2 md:justify-between md:w-4/5 md:mx-auto border-b-slate-400 md:flex-row">
        <h1 className="text-neutral-100">TSC</h1>
        <p className="text-neutral-100 md:max-w-[468px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt aliqua.
        </p>
      </div>
      <div className="pb-4 py-16 md:p-12 md:flex md:justify-around border-b-2 md:w-4/5 mx-auto border-b-slate-400">
        <div>
          <MailSvg className="rounded-full" />
          <h2 className="font-bold text-secondary1 py-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-secondary1 md:max-w-[468px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo.
          </p>

          <div>
            <div className="flex flex-col md:relative md:w-11/12 md:p-0 md:mt-4 gap-4 py-4">
              <input
                className="text-neutral-600 rounded-full py-5 flex pl-4 md:px-6 focus:outline-none "
                type="text"
                placeholder="Enter Your email"
              />
              <Link href={"/Courses"}>
                <a>
                  <button className=" btn md:py-3 md:absolute md:right-[0.75rem] md:top-2.5 flex items-center justify-center text-neutral-100 text-base font-bold bg-primary ">
                    SUBMIT
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className=" mx-auto md:flex-col justify-evenly">
          <h4 className="w-full text-secondary1 py-8 pl-10">Pages</h4>
          <div className=" w-full flex md:flex md:gap-4 justify-between">
            <ul className="text-neutral-400">
              {UtilityLink.map((val) => {
                return (
                  <li>
                    <Link href={val.link}>
                      <a>{val.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="links text-neutral-400">
              {UtilityLink.map((val) => {
                return (
                  <li>
                    <Link href={val.link}>
                      <a>{val.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="md:flex-col pl-4">
          <h4 className="text-secondary1 py-8 pl-6">Utility Pages</h4>
          <ul className="links text-neutral-400 ">
            {UtilityLink.map((val) => {
              return (
                <li>
                  <Link href={val.link}>
                    <a>{val.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>{/* <FacebookSvg /> */}</div>
        <div className="text-lg text-secondary1">
          Copyright © TSC | Designed by
          <Link
            className="underline"
            href="https://pruthvish-portfolio.vercel.app/"
          >
            Pruthvish Modi
          </Link>
          Powered by
          <Link
            className="underline"
            href="https://pruthvish-portfolio.vercel.app/"
          >
            Pruthvish Design
          </Link>
        </div>
      </div>
    </footer>
  );
};

Footer.DisplayName = "Footer";
export default Footer;
