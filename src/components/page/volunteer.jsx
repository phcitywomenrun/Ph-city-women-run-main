import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import VolunNav from "../navigation/volNav";
import VolunSection from "../contents/sections/volunteerSection/volunteerHero";
import BecomeAteam from "../contents/sections/volunteerSection/becomeTeam";
import Benefits from "../contents/sections/volunteerSection/benefit";
import Requirements from "../contents/sections/volunteerSection/requriement";
import VolunteerForm from "../form/volunteer-form";
import DepartmentSlider from "../slider/departmentSlide";

function Volunteer() {
  const [isOpenVolunteerform, setIsOpenVolunteerform] = useState(false);
  const openVolunteerform = () => setIsOpenVolunteerform(true);
  const closeVolunteerform = () => setIsOpenVolunteerform(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
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
