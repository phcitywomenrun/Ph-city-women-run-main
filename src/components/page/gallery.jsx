import React from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";

import LeaderNav from "../navigation/leadNav";
import Photos from "../contents/sections/gallery/photo";

function Gallery() {
 
  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar />
        <LeaderNav />
        <Photos />
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
