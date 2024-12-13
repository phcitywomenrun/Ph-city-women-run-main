import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import ContactHeroSection from "../contents/sections/contactUs_Section/contactHeroSection";
import ContactInFo from "../contents/sections/contactUs_Section/contactInFo";

function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ContactInFo />
        <ContactHeroSection />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
