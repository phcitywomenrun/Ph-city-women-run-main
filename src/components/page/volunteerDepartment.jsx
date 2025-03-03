import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import VolunNav from "../navigation/volNav";
import Volundepartment from "../contents/sections/volunteerSection/departmentHero";
import Department from "../contents/sections/volunteerSection/department";
import VolunteerForm from "../form/volunteer-form";

function VolunteerDepartment() {
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
        <Volundepartment openVolunteerform={openVolunteerform} />
        <Department />

        <Footer />
      </div>
    </>
  );
}

export default VolunteerDepartment;
