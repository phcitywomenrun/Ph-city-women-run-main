import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import Photos from "../contents/sections/gallery/photo";
import ConferenecNav from "../navigation/conNav";
import SpeakerHeroSection from "../contents/sections/conSection/speakerHero";
import OurSpeakers from "../contents/sections/conSection/ourSpeaker";

function Speaker() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ConferenecNav />
        <SpeakerHeroSection />
        <OurSpeakers />
        <Footer />
      </div>
    </>
  );
}

export default Speaker;
