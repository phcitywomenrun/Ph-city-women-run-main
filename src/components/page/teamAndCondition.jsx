import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import LegalTeams from "../contents/sections/teams&conditions/teasHeroSection";
import LegalTeamsContent from "../contents/sections/teams&conditions/teamsContent";

function TeamsAndCondition() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <LegalTeams />
        <LegalTeamsContent />
        <Footer />
      </div>
    </>
  );
}

export default TeamsAndCondition;
