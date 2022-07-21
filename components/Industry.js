import React from "react";
import Button from "./Button";

const Industry = () => {
  return (
    <div className="w-1/2">
      <div>
        <div>
          <h2 className="text-[38px] font-bold text-[#1e3d60]">
            Courses taught by industry leaders around the world
          </h2>
          <p className="text-[#62778f] text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div>
          <Button
            buttonText="BROWSE TEACHERS"
            buttonClass={
              "bg-[#064ea4] hover:bg-[#0f437f] px-20 py-5 text-base font-bold"
            }
          />
          <Button
            buttonText="BECOME A TEACHER"
            buttonClass={
              "bg-[#e7eaee] hover:bg-[#becad7] px-20 py-5 text-base font-bold"
            }
          />
        </div>
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_992,q_80,w_800/v1658396880/607e240b3c46c0182718cf14_image-featured-teacher-education-x-template-p-800_jninvj.webp"
              alt="semple image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
