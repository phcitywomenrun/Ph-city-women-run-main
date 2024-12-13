import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import ConferenecNav from "../navigation/conNav";
import ScheduleHeroSection from "../contents/sections/ScheduleSection/ScheduleHero";
import Notes from "../contents/sections/ScheduleSection/keyNote";

function Schedule() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ConferenecNav />
        <ScheduleHeroSection />
        <Notes />

        <Footer />
      </div>
    </>
  );
}

export default Schedule;
