import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import VolunNav from "../navigation/volNav";
import VolunSection from "../contents/sections/volunteerSection/volunteerHero";
import BecomeAteam from "../contents/sections/volunteerSection/becomeTeam";
import Benefits from "../contents/sections/volunteerSection/benefit";
import Requirements from "../contents/sections/volunteerSection/requriement";
import VolunteerForm from "../form/volunteer-form";
import DepartmentSlider from "../slider/departmentSlide";

function Volunteer() {
  const [isOpen, setIsOpen] = useState(false);
   const [isOpenVolunteerform, setIsOpenVolunteerform] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  const openVolunteerform = () => setIsOpenVolunteerform(true);
  const closeVolunteerform = () => setIsOpenVolunteerform(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <VolunteerForm
          isOpenVolunteerform={isOpenVolunteerform}
          closeVolunteerform={closeVolunteerform}
        />
        <VolunNav />
        <VolunSection openVolunteerform={openVolunteerform} />
        <BecomeAteam openVolunteerform={openVolunteerform} />
        <Benefits />
        <DepartmentSlider />
        <Requirements />

        <Footer />
      </div>
    </>
  );
}

export default Volunteer;
