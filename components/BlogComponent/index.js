import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = ({ src, description }) => {
  return (
    <div className="card-new w-full min-w-[270px] flex flex-col md:flex-row flex-1 ">
      <div className="image flex-1 w-full min-h-full xs:basis-[160px] md:basis-0 relative">
        <Link href={"/Courses"}>
          <a>
            <Image
              src={src}
              className="xs:rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              objectFit="cover"
              layout={"fill"}
              objectPosition={"center"}
              alt="img2"
            />
          </a>
        </Link>
      </div>
      <div className="content grow shrink basis-0 px-6 py-5">
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default Blog;
