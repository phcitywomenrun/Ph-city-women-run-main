import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";

import ContactHeroSection from "../contents/sections/contactUs_Section/contactHeroSection";
import ContactInFo from "../contents/sections/contactUs_Section/contactInFo";

function ContactUs() {


  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <ContactInFo />
        <ContactHeroSection />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
