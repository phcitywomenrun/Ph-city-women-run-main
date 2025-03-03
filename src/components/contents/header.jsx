import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Hero from "../slider/image_slider";

// import HygraphFetch from "./APIs/hero";

function header() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default header;
