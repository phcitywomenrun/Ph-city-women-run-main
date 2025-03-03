import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import ConferenecNav from "../navigation/conNav";
import PartnerHeroSection from "../contents/sections/OurPartners/partnersHero";
import PartnersSection from "../contents/sections/OurPartners/partnersSection";



function Partners() {
  


  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <ConferenecNav />
        <PartnerHeroSection />
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
}

export default Partners;
