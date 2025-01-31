import React from "react";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shape2 from "../../image/shapes/Frame 11686560754.png";
import OurPartnerSlide from "../../../slider/partnersSlide";

function OurPartners() {
 
  return (
    <>
      <section className="relative bg-[#F9FBFC] flex justify-center items-center w-full h-auto  overflow-hidden">
        <div className="static gap-[24px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[50px] at500:px-[72px] my-0 mx-auto">
          <h4 className=" text-[#111E2F] text-[30px] !leading-[52px] "> Partners</h4>
          <div className="flex justify-center items-center w-full">
            <OurPartnerSlide />
          </div>
          <img
            className=" absolute left-0 top-[26px] h-[480.07px] w-[150.41px] object-contain"
            src={shape1}
            alt="shape"
          />
          <div className=" absolute  top-[265px] flex justify-end items-end sm:w-[700px]">
            <img
              className="  h-[480.07px] w-[150.41px] object-contain"
              src={shape2}
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPartners;
