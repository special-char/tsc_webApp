import Layout from "@components/Layouts";
import AllServicesPage from "@components/PageSections/devlopmentPage/allServicesPage";
import ServicesPageSkeleton from "@components/PageSections/devlopmentPage/allServicesPage/servicesPageSkeleton";
import Header from "@components/PageSections/devlopmentPage/header";

import React from "react";

const Services = () => {
  const bannerData = {
    heading: {
      title: "Services",
      description: "Services we provide",
    },
  };
  const services = [
    {
      id: 1,
      title: "Front-end development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel laborum laboriosam pariatur esse magnam, voluptas nostrum illo aspernatur alias, sunt, voluptates incidunt dignissimos ipsa autem qui! Eum, earum quisquam?",
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: [],
    },
    {
      id: 2,
      title: "Back-end development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel laborum laboriosam pariatur esse magnam, voluptas nostrum illo aspernatur alias, sunt, voluptates incidunt dignissimos ipsa autem qui! Eum, earum quisquam?",
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: [],
    },
    {
      id: 3,
      title: "Full-stack development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel laborum laboriosam pariatur esse magnam, voluptas nostrum illo aspernatur alias, sunt, voluptates incidunt dignissimos ipsa autem qui! Eum, earum quisquam?",
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
      icons: [],
    },
  ];
  return (
    <>
      <Header data={bannerData} />
      {services.map((service, index) => {
        return (
          // <AllServicesPage service={service} index={index}>
          //   <h4>{service.title}</h4>
          //   <p>{service.description}</p>
          // </AllServicesPage>
          <ServicesPageSkeleton index={index} />
        );
      })}
    </>
  );
};

Services.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: ServicesQuery,
      variables: {},
    });
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}

Services.displayName = "Services";
export default Services;
