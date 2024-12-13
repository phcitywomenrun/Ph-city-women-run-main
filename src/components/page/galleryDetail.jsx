import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import PhotoDetails from "../contents/sections/gallery/photoDetails";
import BackNav from "../navigation/backNav";

function PhotosDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <BackNav />
        <PhotoDetails />
        <Footer />
      </div>
    </>
  );
}

export default PhotosDetails;
