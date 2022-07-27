import React from "react";

const CourseByCategory = () => {
  return (
    <div className="px-3 py-10">
        <center><h2 className="mx-6 mb-10">Browse our courses by category</h2></center>
      <div className="flex flex-col gap-6 lg:flex-row lg:max-w-[1050px] lg:mx-auto">
      <div className="card w-3/3">
          <figure>
            <img src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis libero labore temporibus mollitia neque est adipisci enim delectus fugit voluptate unde quisquam perspiciatis earum, minus cum dolore molestias error!</p>
          </div>
        </div>
        <div className="card w-3/3">
          <figure>
            <img src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5010ea8cee56aa78149a_image-2-courses-categories-education-x-template.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis libero labore temporibus mollitia neque est adipisci enim delectus fugit voluptate unde quisquam perspiciatis earum, minus cum dolore molestias error!</p>
          </div>
        </div>
        <div className="card w-3/3 ">
          <figure>
            <img src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500f9c98153a06b9d441_image-3-courses-categories-education-x-template.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Marketing</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis libero labore temporibus mollitia neque est adipisci enim delectus fugit voluptate unde quisquam perspiciatis earum, minus cum dolore molestias error!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseByCategory.displayName = "CourseByCategorySection";
export default CourseByCategory;


// lg:max-w-[1150px] lg:mx-auto lg:px-3 lg:flex-row lg:justify-center