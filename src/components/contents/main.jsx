import React, { useState } from "react";

// import Link from "./link";
import RunLikeNever from "./sections/homeSection/runLike";
import ConferenceSection from "./sections/homeSection/confere";
import CommunitEvents from "./sections/homeSection/events";
import OurPartners from "./sections/OurPartners/OurPartner";
import YourPotential from "./sections/homeSection/Discover";
import Thecount from "./sections/homeSection/count";
import AchievementsSection from "./sections/homeSection/achievements";
import Volunteer from "./sections/homeSection/volunSection";
import ShirtsSection from "./sections/homeSection/shirts";
import SaveUrPotForm from "../form/saveUrPot";
import ConferenceForm from "../form/conferenceForm";

function Main() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenConferenceform, setIsOpenConferenceform] = useState(false);
    const openOverlay = () => setIsOpen(true);
    const closeOverlay = () => setIsOpen(false);
    const openConferenceform = () => setIsOpenConferenceform(true);
    const closeConferenceform = () => setIsOpenConferenceform(false);

  return (
    <div className="relative flex flex-col justify-center items-center w-full ">
      <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
      <ConferenceForm
        isOpenConferenceform={isOpenConferenceform}
        closeConferenceform={closeConferenceform}
      />
      <Thecount />
      <RunLikeNever openOverlay={openOverlay} />
      <Volunteer />
      <ConferenceSection openConferenceform={openConferenceform} />
      <ShirtsSection />
      <CommunitEvents />
      <AchievementsSection />

      <YourPotential />
      <OurPartners />
    </div>
  );
}

export default Main;
