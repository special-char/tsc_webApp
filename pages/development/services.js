import Layout from "@components/Layouts";
import AllServicesPage from "@components/PageSections/devlopmentPage/allServicespage";
import ServicesBanner from "@components/PageSections/devlopmentPage/servicesBanner";
import TSCImage from "@components/TSCImage";
import Image from "next/image";

import React from "react";
import BagSvg from "/public/icons/bag.svg";

const Services = () => {
  const allService = [
    {
      id: 1,
      title: "MOBILE APP DEVELOPMENT",
      list: [
        "Android Application Development",
        "IoS Application Development",
        "Flutter Application Development",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: ["/public/icons/bag.svg"],
    },
    {
      id: 2,

      title: "WEB DEVELOPMENT",
      list: [
        "Custom Web Development",
        "MERN Stack Development",
        "MEAN Stack Development",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: ["/public/icons/bag.svg"],
    },
    {
      id: 3,

      title: "UI/UX DESIGN",
      list: ["Mobile App Designing", "Website Designing"],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: ["/public/icons/bag.svg"],
    },
    {
      id: 4,
      title: "DEVOPS",
      list: [
        "Workflow Automation",
        " Continuous Integration/Deployment",
        "Infrastructure As Code",
        "Orchestration",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: ["/public/icons/bag.svg"],
    },
    {
      id: 5,
      title: "IOT DEVELOPMENT",
      list: ["Arduino Project", "ESP WIFI Project", "PCB Designing"],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: ["/public/icons/bag.svg"],
    },
    {
      id: 6,
      title: "OTHER SERVICE",
      list: [
        "Cloud Computing",
        "Python Scripting",
        "IT Consultancy",
        "AI ML",
        "AR VR",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: ["/public/icons/bag.svg"],
    },
  ];

  return (
    <>
      <ServicesBanner />
      {/* {allService.map((service, index) => {
      return (
      <AllServicesPage allService={allService}>
        <h4>hello from children props</h4>
        <ol>
          <li>list 1</li>
          <li>list 1</li>
          <li>list 1</li>
          <li>list 1</li>
        </ol>
      </AllServicesPage>
      }) */}
      {allService.map((service, index) => {
        return (
          <AllServicesPage service={service} index={index}>
            {service.icons && (
              <div>
                {service.icons.map((icon) => {
                  console.log("====================================");
                  console.log(icon);
                  console.log("====================================");
                  return (
                    <div className="relative flex flex-row">
                      <TSCImage src={icon} height={40} width={40} />
                    </div>
                  );
                })}
              </div>
            )}
            <h2>{service.title}</h2>
            <ol className="list-decimal">
              {service?.list?.map((item) => {
                return <li className="m-0">{item}</li>;
              })}
            </ol>
          </AllServicesPage>
        );
      })}
    </>
  );
};

Services.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
Services.displayName = "Services";
export default Services;
