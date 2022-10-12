import React from "react";
import CelenderbgiconSvg from "/public/icons/celenderbgicon.svg";
import TSCImage from "@components/TSCImage";
import Link from "next/link";

const EventDetails = () => {
  
  return (
    <section className="w-full bg-neutral-200 ">
      <div className="max-w-7xl mx-auto gap-8 flex flex-col px-4 md:px-6">
        <div className="flex flex-col md:flex-row w-full items-center justify-center pt-12 md:pt-20 md:mb-12 gap-4 md:gap-12">
          <div className="flex relative rounded-full w-44 h-44 md:h-32 lg:h-44">
            <TSCImage
              className="avatar rounded-full"
              layout="fill"
              src="https://images.unsplash.com/photo-1663524789665-781c971fcbbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              // src={data?.avatar?.url}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between  ">
              <div className="flex flex-row md:flex-col gap-4 md:gap-4">
                <CelenderbgiconSvg className="md:w-8" />
                <p className="font-bold text-xs md:text-sm">
                  Sunday 5:00 pm - 6:00 pm EDT
                </p>
              </div>
              <div className=" flex flex-col text-center justify-start">
                <h5>JULY</h5>
                <h1 className="mb-0">24</h1>
              </div>
              <div className="card-event-wrapper md:hidden flex items-start justify-center"></div>
            </div>
            <h2 className="card__title">Social Media Marketing Masterclass</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliquam id.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-20 md:pb-36">
          <h2>Event Agenda</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum
            scelerisque egestas. Volutpat, adipiscing a elit platea amet et. At
            at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
            habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut
            morbi risus. Ornare aliquam phasellus consequat amet velit risus.
          </p>
          <p>
            Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget.
            Massa, lectus orci auctor morbi. A nisl vitae, sagittis elementum
            placerat nullam id integer leo. Diam venenatis amet diam odio
            ultrices auctor.
          </p>
          <ol style={{ listStyle: "disc" }}>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
          </ol>
          <button className="btn btn--primary text-center px-10 py-6 md:w-72 uppercase">
            REGISTER TO EVENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
