import React from "react";

const Testimonial = function ({
  img,
  children,
  name,
  designation,
  imgWidth,
  imgHeight,
}) {
  return (
    <div className="p-4 ">
      <h2 className="px-4 flex text-center justify-center">
        What our students say about us
      </h2>
      <div className="flex flex-col md:flex-row md:w-full">
        <div className="p-4 flex  border-spacing-2 drop-shadow-2xl bg-neutral-100 ">
          <div className="flex flex-col md:flex-row text-center justify-center md:px-20 md:py-10 md:gap-8">
            <div class="avatar items-center justify-center py-8">
              <div class="">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="md:flex md:flex-col md:text-left md:justify-center">
              <p>
                “Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint”
              </p>
              <h4>Katherine Cutts</h4>
              <p>Junior Designer at Facebook</p>
            </div>
          </div>
        </div>
        <div className="p-4 flex  border-spacing-2 drop-shadow-2xl bg-neutral-100 ">
          <div className="flex flex-col md:flex-row text-center justify-center md:px-20 md:py-10 md:gap-8">
            <div class="avatar items-center justify-center py-8">
              <div class="">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="md:flex md:flex-col md:text-left md:justify-center">
              <p>
                “Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint”
              </p>
              <h4>Katherine Cutts</h4>
              <p>Junior Designer at Facebook</p>
            </div>
          </div>
        </div>
        <div className="p-4 flex  border-spacing-2 drop-shadow-2xl bg-neutral-100 ">
          <div className="flex flex-col md:flex-row text-center justify-center md:px-20 md:py-10 md:gap-8">
            <div class="avatar items-center justify-center py-8">
              <div class="">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="md:flex md:flex-col md:text-left md:justify-center">
              <p>
                “Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint”
              </p>
              <h4>Katherine Cutts</h4>
              <p>Junior Designer at Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
