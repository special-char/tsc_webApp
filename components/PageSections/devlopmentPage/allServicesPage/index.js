import React from "react";
import ProjectSvg from "/public/icons/project.svg";
import Image from "next/image";

const AllServicesPage = () => {
  const allService = [
    {
      id: 1,
      title: "Better That - Online shopping made better (App)",
      description: `Better That is Australian and New Zealand’s leading online marketplace where
        shoppers, good causes and retailers can do better shopping to get the latest trends,
        shoes, dresses , accessories and more.
        This app contains many features like category wise products, easy searching, wishlist,
        brands, drop auction, currency converter, add to cart, buy with many payment options.`,
      details: "Used Tools & Technologies:",
      list: [
        'Frontend" Flutter',
        "Backend: Node.Js",
        "Database:MongoDb",
        "Payment system: Stripe",
        "Authentication & Notification - Firebase",
        "Web sockets",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
    },
    {
      id: 2,
      title: "Better That - Online shopping made better (Website)",
      description: `Better That is Australian and New Zealand’s leading online marketplace where
        shoppers, good causes and retailers can do better shopping to get the latest trends,
        shoes, dresses , accessories and more.
        This app contains many features like category wise products, easy searching, wishlist,
        brands, drop auction, currency converter, add to cart, buy with many payment options.`,
      details: "Used Tools & Technologies:",
      list: [
        'Frontend" Flutter',
        "Backend: Node.Js",
        "Database:MongoDb",
        "Payment system: Stripe",
        "Authentication & Notification - Firebase",
        "Web sockets",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
    },
    {
      id: 3,
      title: "9thSight - Amazon Consultancy Website",
      description: `9thSight is the go to eCommerce (online marketplace consultancy) company to
      empower inventors and creators, and assist them to display and sell their products or
      services to the world using methods that have been tried and tested. 9thSight offers
      digital services like A+ content, A9 SEO, PPC advertising, brand registry, ASIN creation,
      seller account management and many more for marketplaces like Amazon, eBay &
      Walmart. Sellers avail all the features like customize package of services booking with
      the best user interface and experience.`,
      details: "Used Tools & Technologies:",
      list: [
        'Frontend" Flutter',
        "Backend: Django",
        "Database: MySQL",
        "Payment system: Stripe",
        "Authentication & Notification - Firebase",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
    },
    {
      id: 4,
      title: "Dotcom Reps - Amazon Sales & Marketing Agency",
      description: `Dotcom reps is an Amazon consulting agency & independent manufacturer’s rep. firm
      specializing in selling on Amazon. Functioned to manage seller’s sales and marketing
      on Amazon.
      This website enlightens users about the company's services and owners by giving a
      sleek user interface and by getting the best user experience.`,
      details: "Used Tools & Technologies:",
      list: [
        "Frontend - React.Js, Next.Js",
        " Backend - Strapi.Js (CMS of Node.Js)",
        "Email service - Twilio",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
    },
    {
      id: 5,
      title: "Scott Point - Ecommece app",
      description: `Scott point is a cross platform mobile application which empowers customers with live
        bidding and bargaining of thousands of products with sellers and get the best price and
        can buy the products of their choice.
        Users just need to signup, choose categories of product they like, select the product
        with the list, with searching or with attractive feature of scanning the barcode to fetch
        products which is powered by machine learning technology. Then, they need to place
        the bid, sellers with those products will reply to their bid in 24 hours, then users can
        purchase the product.
        `,
      details: "Used Tools & Technologies:",
      list: [
        'Frontend" Flutter',
        "Backend: Node.Js",
        "Database - MongoDB",
        "Google ML kit",
        "Elastic search",
      ],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
    },
    {
      id: 6,
      title: "Scott Point - Web admin panel",
      description: `A Scott Point admin panel is a web portal that allows sellers to manage their customers,
      retailers, bids, reply to bids, confirm orders, and manage customers.
      Scott Point admins can add retailers, manage offers and export all the list of details of
      product.`,
      details: "Used Tools & Technologies:",
      list: ["Frontend - React.Js, Next.Js", "Backend: Node.Js", "Web sockets"],
      img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 my-12">
        {allService.map((service, index) => {
          return (
            <div
              className={`w-full flex mb-8 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } flex-wrap gap-4 items-center justify-center`}
            >
              <div className="w-full md:w-[45%]">
                <figure className="relative h-80 ">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={service.img}
                    alt=""
                  />
                </figure>{" "}
              </div>
              <div className="w-full md:w-[41.6%] flex flex-col text-left  ">
                <h4>{service.details}</h4>
                <ol className="list-decimal">
                  {service?.list?.map((item) => {
                    return <li className="m-0">{item}</li>;
                  })}
                </ol>
              </div>
              <div
                className={`${
                  index === allService.length - 1 ? "opacity-0" : "opacity-100"
                } h-0.5 w-11/12 bg-neutral-300`}
              ></div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AllServicesPage;
