import React from "react";
import MailSvg from "@public/icons/mail.svg";
import Link from "next/link";
import FacebookSvg from "@public/icons/facebook.svg";
import TwitterSvg from "@public/icons/twitter.svg";
import InstagramSvg from "@public/icons/instagram.svg";
import LinkedInSvg from "@public/icons/linkedin.svg";
import WhatsAppSvg from "@public/icons/whatsapp.svg";
import YoutubeSvg from "@public/icons/youtube.svg";

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
    <footer className="wrapper bg-neutral-700 overflow-hidden relative md:pt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col border-b-2 pt-10 md:justify-between md:w-full lg:w-full border-b-slate-400 md:flex-row">
          <h1 className="text-neutral-100">TSC</h1>
          <p className="text-neutral-100 md:max-w-[468px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt aliqua.
          </p>
        </div>
        <div className="pb-4 py-16 lg:p-0 md:flex md:justify-around border-b-2 lg:w-full mx-auto border-b-slate-400">
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
            <h4 className="w-full text-secondary1 py-9">Pages</h4>
            <div className=" w-full  md:flex md:gap-4 justify-between">
              <ul className="text-neutral-400 pl-0">
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

              <ul className="links text-neutral-400 pl-0">
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
          <div className="md:flex-col">
            <h4 className="text-secondary1 py-8">Utility Pages</h4>
            <ul className="links text-neutral-400 pl-0">
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
        <div className=" flex lg:flex-row-reverse flex-col-reverse justify-between ">
            <div className="pl-20 flex items-center justify-start">
            <div className="text-lg text-secondary1">Copyright © TSC</div>
          </div>
          <div className=" pl-0 pt-3 pb-4 flex gap-2 lg:pb-0">
            <FacebookSvg className=" w-9 rounded-full" />
            <TwitterSvg className="w-9 rounded-full" />
            <InstagramSvg className="w-9 rounded-full" />
            <LinkedInSvg className="w-9 rounded-full" />
            <YoutubeSvg className="w-9 rounded-full" />
            <WhatsAppSvg className="w-9 rounded-full" />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

Footer.DisplayName = "Footer";
export default Footer;
