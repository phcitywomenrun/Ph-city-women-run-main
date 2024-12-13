import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import LatestNews from "../contents/sections/getNews";
import Partnership from "../contents/sections/newsSections/partner";
import EventNav from "../navigation/eventsNav";
import Post from "../contents/sections/newsSections/post";
import BackNav from "../navigation/backNav";
import LeaderDetails from "../contents/sections/postEvent/leaderDetails";

function LeaderBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <BackNav />
        <LeaderDetails />

        <Footer />
      </div>
    </>
  );
}

export default LeaderBoard;
