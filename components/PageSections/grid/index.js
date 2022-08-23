import React from "react";
const Grid = () => {
  const GridData = [
    {
      img: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg",
      title: "Graphic Desing 101",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
      img2: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg",
      heading: "Kathie Corl",
    },
    {
      img: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg",
      title: "Brand & Identity Design",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
      img2: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg",
      heading: "Kathie Corl",
    },
    {
      img: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2c3d229e2c14ccd99c69_image-3-courses-education-x-template-p-1080.jpeg",
      title: "Advanced Logo Design",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
      img2: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg",
      heading: "Kathie Corl",
    },
  ];
  return (
    <section className="pt-16 pb-20 lg:px-36 bg-neutral-200">
      <div className="list">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-5 px-4">
          {GridData.map((val) => (
            <div className="bg-neutral-100 rounded-lg min-h-[250px]">
              <div className="card">
                <figure>
                  <img className="rounded-lg" src={val.img} alt="" />
                </figure>
                <div className="card__body">
                  <h3 className="card__title pl-4">{val.title}</h3>
                  <p className="pl-4">{val.description}</p>
                  <div className="card__actions pl-4 gap-2 flex items-center">
                    <figure>
                      <img className="rounded-full w-12" src={val.img2} />
                    </figure>
                    <div>
                      <h4>{val.heading}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
