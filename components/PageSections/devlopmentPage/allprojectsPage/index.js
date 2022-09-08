import React from "react";
import ProjectSvg from "/public/icons/project.svg";
import Image from "next/image";
import { list } from "postcss";

const allproject = [
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
    title: "E-Dost - Mental health counseling and community platform",
    description: `E-Dost is an online community and emotional support platform designed to foster
      mental health. The platform connects you with the right experts consisting of
      psychologists, psychotherapists, counselors, life coaches, career guides and people
      with rich and deep life experience and people who understand you, have successfully
      faced and conquered their depression, anxiety and many more mental health diseases.
      Users can chat with right experts while revealing their identity only to the level they are
      comfortable with for their problems and can also share their problems openly to our
      healthy and positive community where they can get solutions from users and release
      their stress to feel free. Users can share their best experience to heal others’ anxiety.
      This gets reflected in their efficiency of work, productivity, personality dynamics and
      regularity`,
    details: "Used Tools & Technologies:",
    list: [
      " Frontend UI - Flutter",
      "Backend - Java Spring Boot",
      "Notification and Authentication - Firebase",
      "Chat and video calling - Web socket",
    ],
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 3,
    title: "foodBoss - Online grocery app (Customer App)",
    description: `Foodboss is the cross platform Flutter application to empower local shop vendors to sell
      their products online. Users can buy any grocery or household item directly from their
      nearby stores and avail all the features like Khata (Account) and pay later options.
      Users can maintain their monthly expenses in this app.
      `,
    details: "Used Tools & Technologies:",
    list: [
      'Frontend" Flutter',
      "Backend: Node.Js",
      "Payment gateway - Cashfree",
      "In app notification",
      "Databse - GraphQL",
      "Search - Elastic search",
    ],
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 4,
    title: "foodBoss - Online grocery app (Seller App)",
    description: `Foodboss is the cross platform Flutter application to empower local shop vendors to sell
      their products to online market by adding products from app’s global store. By helping
      grocery stores to sustain in this evolving digital world, Foodboss provides them a way to
      quickly set up their online store and accept orders within 24 hours. Features like global
      store makes it very easy for one to list their available products in their inventory very
      effortlessly. With complete control of their digital grocery store, shop owners can
      manage their customers, delivey staff, Khata (account), monthly reports of the sales and
      many more with only one app.`,
    details: "Used Tools & Technologies:",
    list: [
      'Frontend" Flutter',
      "Backend: Node.Js",
      "Payment gateway - Cashfree",
      "In app notification",
      "Databse - GraphQL",
      "Search - Elastic search",
    ],
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 5,
    title: "foodBoss - Online grocery app (Rider App)",
    description: `Foodboss rider app helps local drivers earn some extra money by helping sellers deliver
      their orders to friendly neighborhood customers. One can easily set up their Fooboss
      rider account and start delivering & earning money within 10 minutes.
      `,
    details: "Used Tools & Technologies:",
    list: [
      'Frontend" Flutter',
      "Backend: Node.Js",
      "Payment gateway - Cashfree",
      "In app notification",
      "Databse - GraphQL",
      "Search - Elastic search",
    ],
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 6,
    title: "Stable Pay - App",
    description: `Stable Pay is a cross platform Flutter mobile application who simplifies sending and
     receiving money globally with 0 (zero) transaction fee. Stable Pay is in a global
     remittance business who provides fair, efficient and secure way of transfering money
     from one region of the world to another completely free.
     Today, the average individual has to pay up to $35 per $500 money transfer in forex
     margins and transaction fees. Stable Pay is here to help you to transfer money with 0
     transaction fee. You just need to signup, add receiver’s details, add money to your
     Stable Pay’s digital wallet and transfer money at a time.
     App’s powerfully engineered technology and carefully designed mobile experience will
     alllow sending and receiving money globally with no charge.
     `,
    list: [
      'Frontend" Flutter',
      "Backend: Node.Js",
      "APIs - Binance",
      "KYC - Cashfree APIs",
      "Blockchain - Binance",
    ],
    details: "Used Tools & Technologies:",
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 7,
    title: "InsureTech (Mobile app)",
    description: `InsureTech is the cross platform flutter application for the insurance management with
      modern UI. Users can store their insurance details and app will notify users with their
      premium due dates and many more. Users can manage their all types of insurances in
      a single place with InsureTech.
      `,
    list: [
      'Frontend" Flutter',
      "Backend: Node.Js",
      " Authentication and Notification - Firebase",
    ],
    details: "Used Tools & Technologies:",
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 8,
    title: `Madhav - Insurance & Investment
    Task, staff & document management mobile app`,
    description: `Madhav is an insurance and investment agency which helps people by providing them
     all types of insurances, specially LIC and all types of investment plans. This app is the
     admin to staff, task and document management cross platform Flutter application to
     empower the business with digital transformation of managing tasks across the staff
     including admins, heads, field and office staff.
     There are 3 roles, admin who assigns tasks to individual straff member & head of
     department and set the timeline to complete task. Admin, head and staff can
     communicate with each other with the feature of real time comment (message) powered
     by web sockets. Heads can take followup of their staff’s tasks. Staff can give an update
     regarding status of task, can easily upload documents of respective task with easy
     uploading and searching feature. All the documents will be stored into particular policy
     or investment holder’s folder in online server which is in admin panel managed by
     admins and admin staff.
     `,
    details: "Used Tools & Technologies:",
    list: [
      'Frontend" Flutter',
      "Backend: Node.Js",
      "Web sockets",
      "Search - Meili Search",
      "Database - MongoDB",
    ],
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
  {
    id: 9,
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
    id: 10,
    title: "Ludo Rockland - Real money Ludo app",
    description: `Ludo Rockland is a real money ludo playing mobile app where one can show ludo skills
     and win real money on the game.
     Users can play game with friends by creating room and can play with 24*7 tournaments
     with unlimited access to game.
     Winners can withdraw winning amount instantly using UPI. Users can withdraw the
     money they win whenever they like and no questions will be asked.
     Game provides many tournaments options in price pools and variants like 4 players 3
     winners, 4 players 2 winners, 4 players 1 winner and 2 player 1 winner.
     This game is designed for everyone. Ludo is known and played across the world by the
     names of Parcheesi, Chausar, Chokkattam, Thayam, Chaupar or Pachisi.
     `,
    details: "Used Tools & Technologies:",
    list: [
      "Game Ui - Unity",
      "Bsckend - Photon",
      "Google authentication",
      "Payment gateway - Razor pay",
    ],
    img: "https://cdn-dhggl.nitrocdn.com/hcIflvGLvXEfDezERbdqqcSGhAZqwOPO/assets/static/optimized/rev-efba4df/wp-content/uploads/2022/02/Web-Development-Why-us-.png",
  },
];

const AllProjectsPage = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 my-12">
        {allproject.map((project, index) => {
          return (
            <div
              className={`w-full flex mb-8 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } flex-wrap gap-4 items-center justify-center`}
            >
              <div className="w-full md:w-[40%]">
                <figure className="relative h-80 ">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={project.img}
                    alt=""
                  />
                </figure>{" "}
              </div>
              <div className="w-full md:w-[41.6%] flex flex-col text-left  ">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <h4>{project.details}</h4>
                <ol className="list-decimal">
                  {project?.list?.map((item) => {
                    return <li className="m-0">{item}</li>;
                  })}
                </ol>
              </div>
              <div
                className={`${
                  index === allproject.length - 1 ? "opacity-0" : "opacity-100"
                } h-0.5 w-11/12 bg-neutral-300`}
              ></div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AllProjectsPage;
