import React from "react";
import FooterSvg from "@public/icons/footer.svg";
import FacebookSvg from "@public/icons/facebook.svg";
import TwitterSvg from "@public/icons/twitter.svg";
import InstagramSvg from "@public/icons/instagram.svg";
import LinkedinSvg from "@public/icons/linkedin.svg";
import YoutubeSvg from "@public/icons/youtube.svg";
import WhatsappSvg from "@public/icons/whatsapp.svg";
const Foter = () => {
  const FoterData = [
    {
      heading: "Home",
      link: "https://www.google.com",
    },
    {
      heading: "About",
      link: "https://www.google.com",
    },
    {
      heading: "Courses",
      link: "https://www.google.com",
    },
    {
      heading: "Individual Course",
      link: "https://www.google.com",
    },
    {
      heading: "Blog",
      link: "https://www.google.com",
    },
    {
      heading: "Blog Post",
      link: "https://www.google.com",
    },
    {
      heading: "Events",
      link: "https://www.google.com",
    },
    {
      heading: "Individual Event",
      link: "https://www.google.com",
    },
    {
      heading: "Teachers",
      link: "https://www.google.com",
    },
    {
      heading: "Individual Teacher",
      link: "https://www.google.com",
    },
    {
      heading: "Contact",
      link: "https://www.google.com",
    },
  ];
  const FoterData1 = [
    {
      heading: "Start Here",
      link: "https://www.youtube.com",
    },
    {
      heading: "Style Guide",
      link: "https://www.youtube.com",
    },
    {
      heading: "404 Not Found",
      link: "https://www.youtube.com",
    },
    {
      heading: "Password Protected",
      link: "https://www.youtube.com",
    },
    {
      heading: "Licenses",
      link: "https://www.youtube.com",
    },
    {
      heading: "Changelog",
      link: "https://www.youtube.com",
    },
  ];
  return (
    <section className="pt-16 px-4 border-b-2 bg-neutral-700 text-neutral-400">
      <div className="flex flex-col">
        <h2 className="text-neutral-100">TSC</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eius
          maiores iusto aliquam veniam.
        </p>
      </div>
      <div className="top border-b-2"></div>
      <div>
        <FooterSvg className="w-20 pt-16 pb-3 pl-3 flex" />
        <h3 className="text-neutral-100">Subscribe to our newsletter</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
          tempore
        </p>
        <div className="flex flex-col gap-5">
          <input
            className="rounded-full w-full py-5 flex pl-4 md:px-6 focus:outline-none "
            type="text"
            placeholder="Enter Your email"
          />
          <button className="btn btn--primary btn--small">submit</button>
        </div>
        <div className="md:flex">
        <div className="py-6">
            <h3 className="text-neutral-100 py-3">Pages</h3>
            <div>
              <ul>
                {FoterData.map((val) => (
                  <li>
                    <a
                      href={val.link}
                      className="text-neutral-400 no-underline"
                    >
                      {val.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col py-6">
            <h3 className="text-neutral-100 py-3">Utility pages</h3>
            <div>
              <ul>
                {FoterData1.map((val) => (
                  <li>
                    <a
                      href={val.link}
                      className="text-neutral-400 no-underline"
                    >
                      {val.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom border-b-2"></div>
        <div className="w-34 flex gap-5 py-5">
          <FacebookSvg />
          <TwitterSvg />
          <InstagramSvg />
          <LinkedinSvg />
          <YoutubeSvg />
          <WhatsappSvg />
        </div>
      </div>
    </section>
  );
};

export default Foter;
