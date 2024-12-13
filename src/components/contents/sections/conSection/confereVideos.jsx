import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../../image/homeImg/1792b51136295dafce3f1c348d2f9d51.jpeg";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import Button from "../../Button";
import AOS from "aos";
import "aos/dist/aos.css";
import ConfereSlide from "../../../slider/confereSlide";

const ConfereneVideos = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="flex  bg-[#1F2126] flex-col justify-center items-center relative w-full overflow-hidden">
      <div className="static auto-container gap-[20px] flex flex-col justify-center items-center w-full px-[15px] py-[25px] at500:px-[72px] my-0 mx-auto ">
        <h5 className="text-white gap-[20px]">Conference Videos Archive</h5>
        <ConfereSlide />
        
        <div className="relative grid grid-cols-1 at500:grid-cols-2 silver:grid-cols-3 gap-x-2 gap-y-4 items-center w-full h-auto">
          <div className="flex gap-[10px] flex-col justify-center items-center w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[214px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white !text-[20px]">Session Name</h5>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                2024 Keynote speaker
              </span>
            </div>
          </div>
          <div className="flex gap-[15px] flex-col justify-center items-center w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[214px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white !text-[20px]">Session Name</h5>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                2024 Keynote speaker
              </span>
            </div>
          </div>
          <div className="flex gap-[15px] flex-col justify-center items-center w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[214px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white !text-[20px]">Session Name</h5>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                2024 Keynote speaker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfereneVideos;
