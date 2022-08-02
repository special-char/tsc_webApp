import React from "react";

const Industry = () => {
  return (
    <div className="flex py-16 sm:py-0 md:pt-44 w-full">
      <div className="flex max-w-[1210px] mx-auto w-[95%] flex-col md:gap-16 md:flex-row pb-60 pt-12 md:pt-0 sm:pb-30">
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left justify-center">
          <h2>Courses taught by industry leaders around the world</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex flex-col gap-8 md:w-1/2">
            <button className=""btn btn--primary>BROWSE TEACHERS</button>
            <button className="btn btn--secondary ">BROWSE TEACHERS</button>
          </div>
        </div>

        <div className="flex flex-1 relative ">
          <div className="w-full sm:pt-0 pt-8">
            <img
              className="rounded-3xl w-full"
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_992,q_80,w_800/v1658396880/607e240b3c46c0182718cf14_image-featured-teacher-education-x-template-p-800_jninvj.webp"
              alt="semple image"
            />
          </div>
          <div className=" border-spacing-2 rounded-3xl absolute -bottom-48 md:-bottom-40 bg-neutral-100 p-6 max-w-[90%] m-auto left-0 right-0 drop-shadow-md">
            <div className="">
              <h6 className="bg-secondary1 text-sm text-primary font-bold w-36 text-center py-2 rounded-full my-8">
                Featured Teacher
              </h6>
              <h3 className="text-neutral-700 my-5">
                “Teaching on Education platform has been an amazing experience”
              </h3>
              <div className="gap-4">
                <h4 className="text-neutral-700">Sophie Moore</h4>
                <p className="text-neutral-600">Marketing Lead at Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
