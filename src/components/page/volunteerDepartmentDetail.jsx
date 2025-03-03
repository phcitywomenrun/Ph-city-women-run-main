import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import DepartmentDetails from "../contents/sections/volunteerSection/departmentDetails";
import BackNav from "../navigation/backNav";

function VolunteerDepartmentDetail() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <BackNav />
        <DepartmentDetails />
        <Footer />
      </div>
    </>
  );
}

export default VolunteerDepartmentDetail;
