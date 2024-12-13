import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 11686560754.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";
import logo from "../../image/logo/8e1d23d6755ed3efab7ae67d16b117c0.png";
import background from "../../image/homeImg/25dbce15b67310bc5bdc3dd552a7b6a2.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";
import ShirtSlider from "../../../slider/shirtSlide";

function ShirtsSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  homepage(where: {id: "cm34edcgf02oa07pnws7adft7"}) {
    
    
    
    title1
    subtitle1
    
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.homepage);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  if (loading)
    return (
      <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
    );

  return (
    <>
      <section className=" relative bg-[#1F2126] flex flex-col justify-center items-center px-[20px] sm:px-[50px] h-auto w-full ">
        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full overflow-hidden">
          <div className="flex relative bottom-[-301px] right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[-38px] left-[-61px]  justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>

        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px]  py-[50px] at500:px-[72px] my-0 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-start w-full  ">
            <div className="flex gap-[50px] z-20 flex-col lg:flex-row justify-between items-center w-full ">
              <div className="flex gap-[4px] flex-col justify-center lg:items-start w-full ">
                <h1 className="text-white sm:text-[40px] text-center lg:text-left">
                  {data.title1}
                </h1>
                <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px] text-center lg:text-left lg:max-w-[376px]">
                  {data.subtitle1}
                </span>
              </div>
              <div className="flex justify-center items-center w-full ">
                <ShirtSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShirtsSection;
