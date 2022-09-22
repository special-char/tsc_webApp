import React from "react";

import ResourcesImg1 from "@public/img/resourcesImg1.jpeg";
import Design from "@public/icons/design.svg";
import Image from "next/image";
import Blog from "@components/blogComponent";

const BlogSection = ({ data }) => {
  return (
    <section className="h-auto w-full">
      <div className=" mx-auto lg:w-full px-6 py-20 max-w-7xl">
        <div className="flex flex-col pt-10 lg:flex-row gap-6">
          <div className="card flex-1 relative">
            <figure className="!min-h-0">
              <Image
                className="rounded-t-2xl object-cover"
                objectFit="cover"
                objectPosition={"center"}
                src={ResourcesImg1}
                ait="img1"
              />
            </figure>
            <div className="card-body">
              <div className="card-date">April 20, 2022</div>
              <h3>{data.featuredBlog?.title}</h3>
            </div>
            <div className="chip chip--white px-6 py-2 flex gap-1 items-center top-6 right-6 absolute">
              <Design className="w-4" />
              <span className="font-bold">Design</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 mx-auto lg:flex-1">
            {/* map goes here */}
            {data.blogs.map((val) => (
              <Blog data={val} />
            ))}
            {/* map ends here */}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogSection.displayName = "BlogSection";
export default BlogSection;

// import React from "react";

// import ResourcesImg1 from "@public/img/resourcesImg1.jpeg";
// import Design from "@public/icons/design.svg";
// import Image from "next/image";
// import Blog from "@components/blogComponent";
// import ResourcesSectionData from "@components/pageSections/homePage/resourcesSection/resourcesSectionData";
// import Link from "next/link";

// const BlogSection = () => {
//   return (
//     <section className="h-auto w-full">
//       <div className=" mx-auto lg:w-full px-6 py-20 max-w-7xl ">
//         <div className="flex flex-col pt-10 lg:flex-row gap-6 bg-secondary3">
//           <div className="card flex-1 relative">
//             <Link href={"/Home"}>
//               <a>
//                 <figure className="!min-h-0">
//                   <Image
//                     className="rounded-t-2xl object-cover"
//                     objectFit="cover"
//                     objectPosition={"center"}
//                     src={ResourcesImg1}
//                     ait="img1"
//                   />
//                 </figure>
//               </a>
//             </Link>
//           </div>
//           <div className="card-body">
//             <div className="card-date">April 20, 2022</div>
//             <h3>
//               How to design a simple, yet unique and memorable brand identity
//             </h3>
//           </div>
//           <div className="chip chip--white px-6 py-2 flex gap-1 items-center top-6 right-6 absolute">
//             <Design className="w-4" />
//             <span className="font-bold">Design</span>
//           </div>
//         </div>

//         <div className="flex flex-col gap-5 mx-auto lg:flex-1">
//           {/* map goes here */}
//           {ResourcesSectionData.map((val) => (
//             <Blog src={val.photo} description={val.description} />
//           ))}
//           {/* map ends here */}
//         </div>
//       </div>
//     </section>
//   );
// };

// BlogSection.displayName = "BlogSection";
// export default BlogSection;
