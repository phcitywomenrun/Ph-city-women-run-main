import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Hero from "../slider/image_slider";
import SaveUrPotForm from "../form/saveUrPot";
// import HygraphFetch from "./APIs/hero";

function header() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <Hero />
        {/* <HygraphFetch /> */}
      </div>
    </>
  );
}

export default header;
