import React from "react";

const CourseSection = () => {
  return (
    <div className="px-3 py-10">
      <center>
        <h2 className="mx-6 mb-10">Browse our popular courses</h2>
      </center>
      <div className="flex flex-col w-auto gap-6 lg:max-w-[1150px] lg:mx-auto lg:flex-row lg:justify-center">
        <div className="card md:w-2/3">
          <figure>
            <img
              className="rounded-t-2xl"
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-date">April 20, 2022</div>
            <h3 className="card-title">Graphic Design 101</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, nobis libero labore temporibus mollitia neque est
              adipisci enim delectus fugit voluptate unde quisquam perspiciatis
              earum, minus cum dolore molestias error!
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
  );
};

CourseSection.displayName = "CourseSection";
export default CourseSection;
