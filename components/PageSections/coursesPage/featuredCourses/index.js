import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCourse = () => {
  return (
    <section className="wrapper py-20">
      <div className="main-content py-20 max-w-7xl mx-auto px-3 md:px-6">
        <h2 className="text-center ">Featured Course</h2>
        <div className="card-container">
          <div className="card rounded-none md:rounded-t-2xl lg:rounded-l-2xl flex md:flex-col lg:flex-row relative">
            <Link href={"/Courses"}>
              <a>
                <figure className="flex-1 relative">
                  <div className="md:min-h-[320px]">
                    <Image
                      className=""
                      layout="fill"
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template-p-800.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="chip chip--white absolute px-3 py-2 top-4 left-3">
                    <span className="text-sm font-bold px-3">12 Courses</span>
                  </div>
                  <div className="chip chip--primary absolute px-3 py-2 top-18 left-3 md:top-4 md:left-36">
                    <span className="text-sm font-bold px-3">$ 199.00 USD</span>
                  </div>
                </figure>
              </a>
            </Link>
            <div className="card__body flex-1">
              <div className="p-10">
                <h3 className="card__title">Brand & Identity Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, deleniti Lorem ipsum dolor sit amet consectetur
                  adipisicing..
                </p>
                <div className="card-actions">
                  <div className="author">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div className="author__name">Yagnesh Modh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
