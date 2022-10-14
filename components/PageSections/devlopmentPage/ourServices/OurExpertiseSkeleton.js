import Link from "next/link";
import React from "react";
import Yarrow from "@public/icons/yellowArrow.svg";

const OurExpertiseSkeleton = () => {
  return (
    <section className="main h-auto w-full bg-neutral-100">
      <div className="main-container animate-pulse container max-w-7xl mx-auto px-8 md:px-6 pt-16 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-44">
        <center>
          <div class="mb-14 h-2 w-1/5  bg-neutral-300 rounded"></div>
        </center>
        <div className="flex flex-col gap-6 md:w-[552px] md:mx-auto lg:w-full lg:flex-row lg:gap-6">
          <Link href="/development/services">
            <div className="card flex-1 cursor-pointer">
              <div class="aspect-image relative min-h-[300px] bg-neutral-300"></div>
              <div className="card-body gap-4">
                <div class="h-2 bg-neutral-300 w-1/2 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
              </div>
            </div>
          </Link>
          <Link href="/development/services">
            <div className="card flex-1 cursor-pointer">
              <div class="aspect-image relative min-h-[300px] bg-neutral-300"></div>
              <div className="card-body gap-4">
                <div class="h-2 bg-neutral-300 w-1/2 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
              </div>
            </div>
          </Link>
          <Link href="/development/services">
            <div className="card flex-1 cursor-pointer">
              <div class="aspect-image relative min-h-[300px] bg-neutral-300"></div>
              <div className="card-body gap-4">
                <div class="h-2 bg-neutral-300 w-1/2 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
                <div class="h-2 bg-neutral-300 rounded"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center">
        <Yarrow className="absolute w-12 md:w-16 -top-20 z-10" />
      </div>
    </section>
  );
};

export default OurExpertiseSkeleton;
