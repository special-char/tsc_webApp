import React from "react";
import MailSvg from "@public/icons/mail.svg";
import Link from "next/link";
import { LocaleContext } from "context/locale.context";
import { data } from "autoprefixer";

const UtilityLink = [
  {
    link: "#",
    title: "Link",
  },
  {
    link: "#",
    title: "Link",
  },
  { link: "#", title: "Home" },
  { link: "#", title: "Home" },
  { link: "#", title: "Home" },
  { link: "#", title: "Home" },
];

const Footer = () => {
  return (
    <footer className="wrapper bg-neutral-700 p-4 md:pt-20">
      <LocaleContext.Consumer>
        {(data) => {
          console.log("data", data);
          return <h2 className="text-secondary3">{data.locale}</h2>;
        }}
      </LocaleContext.Consumer>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col border-b-2 md:justify-between md:w-4/5 md:mx-auto border-b-slate-400 md:flex-row">
          <h1 className="text-neutral-100">TSC</h1>
          <p className="text-neutral-100 md:max-w-[468px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt aliqua.
          </p>
        </div>
        <div className="pb-4 py-16 lg:p-0 md:flex md:justify-between border-b-2 lg:w-full mx-auto border-b-slate-400">
          <div className="pt-4">
            <MailSvg className="rounded-full" />
            <h2 className="font-bold text-secondary1 py-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-secondary1 md:max-w-[468px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo.
            </p>

            <div className="">
              <div className="flex flex-col md:relative md:w-11/12 md:p-0 md:mt-4 gap-4 py-4">
                <input
                  className="text-neutral-600 rounded-full py-5 flex pl-4 md:px-6 focus:outline-none "
                  type="text"
                  placeholder="Enter Your email"
                />
                <Link href={"/Courses"}>
                  <a>
                    <button className="btn btn--primary w-full md:w-28  md:py-3 md:absolute md:right-[0.75rem] md:top-2.5 flex items-center justify-center text-neutral-100 text-base font-bold">
                      SUBMIT
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:w-[30%]">
            <h4 className="w-full text-secondary1 py-9">Pages</h4>
            <div className="">
              <ul className="pl-0 grid grid-cols-2 gap-x-8 gap-y-4">
                {UtilityLink.map((val) => {
                  return (
                    <li className="mb-0 pl-0 ">
                      <Link href={val.link}>
                        <a className="mb-0">{val.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* <ul className="links text-neutral-400">
                {UtilityLink.map((val) => {
                  return (
                    <li>
                      <Link href={val.link}>
                        <a>{val.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </div>
          <div className="md:flex-col">
            <h4 className="text-secondary1 py-8 pl-6">Utility Pages</h4>
            <ul className="links text-neutral-400 pl-6">
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
        <div className=" flex lg:flex-row-reverse justify-between ">
          {/* <div className=" pl-18 pt-3 pb-4 flex gap-3 lg:pb-0">
            <FacebookSvg className=" w-9 rounded-full" />
            <TwitterSvg className="w-9 rounded-full" />
            <InstagramSvg className="w-9 rounded-full" />
            <LinkedInSvg className="w-9 rounded-full" />
            <YoutubeSvg className="w-9 rounded-full" />
            <WhatsAppSvg className="w-9 rounded-full" />
          </div>  */}
          <div className="pl-20 flex items-center justify-start">
            <div className="text-lg text-secondary1">Copyright © TSC</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.DisplayName = "Footer";
export default Footer;
