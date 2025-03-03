import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import LegalTeams from "../contents/sections/teams&conditions/teasHeroSection";
import LegalTeamsContent from "../contents/sections/teams&conditions/teamsContent";

function TeamsAndCondition() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <LegalTeams />
        <LegalTeamsContent />
        <Footer />
      </div>
    </>
  );
}

export default TeamsAndCondition;
