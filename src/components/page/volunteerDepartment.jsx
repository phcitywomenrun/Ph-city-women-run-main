import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import VolunNav from "../navigation/volNav";
import Volundepartment from "../contents/sections/volunteerSection/departmentHero";
import Department from "../contents/sections/volunteerSection/department";
import VolunteerForm from "../form/volunteer-form";

function VolunteerDepartment() {
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
        <Volundepartment openVolunteerform={openVolunteerform} />
        <Department />

        <Footer />
      </div>
    </>
  );
}

export default VolunteerDepartment;
