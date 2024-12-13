import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import LatestNews from "../contents/sections/getNews";
import EventNav from "../navigation/eventsNav";
import EventsSection from "../contents/sections/communitySection/commSection";


function CommunityEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <EventNav />
        <EventsSection/>
        <LatestNews />
        <Footer />
      </div>
    </>
  );
}

export default CommunityEvents;
