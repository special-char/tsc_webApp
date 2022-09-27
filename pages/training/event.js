import EventDetails from "@components/PageSections/eventPage/eventDetails";
import IndividualEventBanner from "@components/PageSections/eventPage/individualEventBanner";
import IndividualEvent from "@components/PageSections/eventPage/individualEventBanner";
import React from "react";

const Event = () => {
  return (
    <>
      <IndividualEventBanner />
      <EventDetails />
    </>
  );
};

export default Event;
