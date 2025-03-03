import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import ConferenecNav from "../navigation/conNav";
import SpeakerHeroSection from "../contents/sections/conSection/speakerHero";
import OurSpeakers from "../contents/sections/conSection/ourSpeaker";

function Speaker() {

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <ConferenecNav />
        <SpeakerHeroSection />
        <OurSpeakers />
        <Footer />
      </div>
    </>
  );
}

export default Speaker;
