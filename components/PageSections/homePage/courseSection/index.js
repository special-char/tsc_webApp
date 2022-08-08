import React from "react";

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      image: "",
      date: "",
      title: "",
      desc: "",
      avatarImage: "",
      avatarName: "",
    },
  ];
  return (
    <section className="popular-courses py-52" id="popularCourses">
      <div className="container w-full max-w-[1210px] mx-auto">
        <center>
          <h2>Browse our popular courses</h2>
        </center>
        <div className="popular-courses-list">
          <div className="card">
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
                adipisci enim delectus fugit voluptate unde quisquam
                perspiciatis earum, minus cum dolore molestias error!
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
    </section>
  );
};

CourseSection.displayName = "CourseSection";
export default CourseSection;
