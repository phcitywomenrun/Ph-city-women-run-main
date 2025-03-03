import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import LatestNews from "../contents/sections/getNews";
import EventNav from "../navigation/eventsNav";
import EventsSection from "../contents/sections/communitySection/commSection";


function CommunityEvents() {
 

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <EventNav />
        <EventsSection />
        <LatestNews />
        <Footer />
      </div>
    </>
  );
}

export default CommunityEvents;
