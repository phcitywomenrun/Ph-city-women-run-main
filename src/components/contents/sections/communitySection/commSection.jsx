import React, { useState, useEffect } from "react";
import Events from "../../APIs/Events";


const EventsSection = () => {
  

 

  


  return (
    <section className="relative pt-[151px] flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="static auto-container flex flex-col justify-center items-start w-full  px-[15px] pt-[110px] pb-[30px] at500:px-[70px] my-0 mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex bg-[#8C12AB] p-4 flex-col justify-start items-start rounded-r-[8px]"
        >
          <span className="text-white font-bold leading-[24px] sm:leading-[32.4px] text-[20px] sm:text-[24px]">
            Explore Events
          </span>
        </div>
        <Events />
      </div>
    </section>
  );
};

export default EventsSection;
