import React from "react";

const ResourcesSection = () => {
  return (
    <div className="">
      <div className="mx-auto px-2 pt-20 pb-20 max-w-[1110px]">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <h2>Resources & News</h2>
          <button className="btn btn--secondary btn--small">BROWSE BLOG</button>
        </div>
        <div className="flex flex-col pt-10 gap-1 lg:flex-row">
          <div className="p-3 lg:flex-1 lg:w-auto">
            <div className="card w-3/3">
              <figure>
                <img
                  className="rounded-t-2xl"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template-p-1600.jpeg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-date">April 20, 2022</div>
                <h3 className="card-title">Graphic Design 101</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, nobis libero labore temporibus mollitia neque est
                  adipisci enim delectus fugit voluptate unde quisquam
                  perspiciatis earum, minus cum dolore molestias error!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-3 mx-auto lg:flex-1 lg:flex-col">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 ">
                <img
                  className="lg:rounded-l-2xl"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2623f3809724753fbc65_image-5-blog-education-x-template-p-800.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 lg:px-5 py-5">
                <h4>
                  5 marketing trends that you should be prepared for in 2022
                </h4>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <img
                  className="lg:rounded-l-2xl"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f256ca6388c4207dbfb28_image-3-blog-education-x-template-p-800.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 lg:px-5 py-5">
                <h4>
                  5 marketing trends that you should be prepared for in 2022
                </h4>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <img
                  className="lg:rounded-l-2xl"
                  src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2405097a4b97dde4f6d2_image-1-blog-education-x-template-p-500.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 lg:px-5 py-5">
                <h4>
                  5 marketing trends that you should be prepared for in 2022
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ResourcesSection.displayName = "ResourcesSection";
export default ResourcesSection;
