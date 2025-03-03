import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import HeroSection from "../contents/sections/conSection/hero";
import ConfereneVideo from "../contents/sections/conSection/confereVideos";
import ConferenecNav from "../navigation/conNav";
import Venue from "../contents/sections/conSection/venue";
import TalkAbout from "../contents/sections/conSection/talk";
import DayToExplore from "../contents/sections/conSection/day";
import ConferenceForm from "../form/conferenceForm";

function Conference() {
   const [isOpenConferenceform, setIsOpenConferenceform] = useState(false);
   const openConferenceform = () => setIsOpenConferenceform(true);
   const closeConferenceform = () => setIsOpenConferenceform(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <ConferenceForm
          isOpenConferenceform={isOpenConferenceform}
          closeConferenceform={closeConferenceform}
        />
        <ConferenecNav />
        <HeroSection openConferenceform={openConferenceform} />
        <DayToExplore />
        <TalkAbout />
        <Venue />
        <ConfereneVideo />
        <Footer />
      </div>
    </>
  );
}

export default Conference;
