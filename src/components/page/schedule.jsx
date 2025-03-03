import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";

import ConferenecNav from "../navigation/conNav";
import ScheduleHeroSection from "../contents/sections/ScheduleSection/ScheduleHero";
import Notes from "../contents/sections/ScheduleSection/keyNote";

function Schedule() {
  

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <ConferenecNav />
        <ScheduleHeroSection />
        <Notes />
        <Footer />
      </div>
    </>
  );
}

export default Schedule;
