import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import TheRun from "../contents/sections/aboutSection/theRun";
import Race from "../contents/sections/aboutSection/raceInfo";
import Race2 from "../contents/sections/aboutSection/raceInfo2";
import Prizes from "../contents/sections/aboutSection/prizes";
import Rules from "../contents/sections/aboutSection/rules";
import RouteMap from "../contents/sections/aboutSection/routeMap";
import ConferenceForm from "../form/conferenceForm";
import PageTitle from "../pageTitle/pageTitle";

function AboutUs() {
  const { hash } = useLocation(); // Get the hash from the URL
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConferenceform, setIsOpenConferenceform] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  const openConferenceform = () => setIsOpenConferenceform(true);
  const closeConferenceform = () => setIsOpenConferenceform(false);

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const element = document.querySelector(hash); // Find the element by hash
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
        }
      };

      // Wait for the DOM to update before scrolling
      const timeout = setTimeout(scrollToElement, 2000);

      // Cleanup timeout
      return () => clearTimeout(timeout);
    }
  }, [hash]); // Re-run this effect if the hash changes

  return (
    <>
      <PageTitle
        title="The Run "
        description="This is a description of the page."
        keywords="the run"
      />
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ConferenceForm
          isOpenConferenceform={isOpenConferenceform}
          closeConferenceform={closeConferenceform}
        />
        <TheRun />
        <Race openOverlay={openOverlay} />
        <Race2 openOverlay={openOverlay} />
        <Prizes />
        <Rules />
        <RouteMap id="route-map" /> {/* Pass the ID here */}
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
