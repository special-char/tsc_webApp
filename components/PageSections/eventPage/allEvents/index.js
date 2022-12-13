import TSCImage from "@components/TSCImage";
import DateIcon from "@public/icons/icon-date.svg";
import Link from "next/link";
import React from "react";

const AllEvents = () => {
  const data = [
    {
      id: 1,
      title: "Brand & Identity Design QA with Sophie Moore",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      image:
        "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc900fef3e8a43d23b44_image-3-events-education-x-template-p-1600.jpeg",
      month: "july",
      date: 26,
      day: "sunday",
      startTime: "5:00 pm",
      endTime: "6:00 pm",
    },
    {
      id: 2,
      title: "Business Analytics Free Webinar",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      image:
        "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc4ebd472d856b26463f_image-2-events-education-x-template-p-1600.jpeg",
      month: "july",
      date: 27,
      day: "sunday",
      startTime: "5:00 pm",
      endTime: "6:00 pm",
    },
  ];
  return (
    <section className="wrapper py-20">
      <div className="main-content py-20 max-w-7xl mx-auto px-3 md:px-6">
        <h2 className="text-left pb-10">All Events</h2>
        <div className="card-container flex flex-col gap-10">
          {/* map start here */}
          {data.map((obj) => {
            console.log("obj id:", obj.id);
            return (
              <Link key={obj.id} href={`event/${obj.id}`}>
                <div className="card rounded-none rounded-t-2xl lg:rounded-l-2xl flex md:flex-col lg:flex-row relative">
                  <figure className="flex-1 relative">
                    <div className="md:min-h-[320px]">
                      <TSCImage
                        className=""
                        layout="fill"
                        src={obj.image}
                        alt=""
                      />
                    </div>
                  </figure>
                  <div className="card__body flex-1 flex">
                    <div className="px-8 py-8 flex">
                      <div className="flex flex-col gap-3 ">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <DateIcon className="w-6 pt-1" />
                            <p className="font-bold text-xs md:text-sm m-0">
                              Sunday 5:00 pm - 6:00 pm EDT
                            </p>
                          </div>
                          <div className="card-event-wrapper md:hidden flex items-start justify-center">
                            <div className="text-center">
                              <h5>{obj.month}</h5>
                              <h1>{obj.date}</h1>
                            </div>
                          </div>
                        </div>
                        <h3 className="card__title">{obj.title}</h3>
                        <p>{obj.description}</p>
                      </div>
                      <div className="card-event-wrapper hidden md:block flex items-start justify-center">
                        <div className="text-center">
                          <h5>{obj.month}</h5>
                          <h1>{obj.date}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
