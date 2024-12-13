import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsAlarm } from "react-icons/bs";
import imageOne from "../../image/homeImg/d77978a2e5ff892c935ba1afb6e31a5e.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function ScheduleHeroSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   conference(where: {id: "cm33q5fow2lx507o2lkiipa9a"}) {
    title
    subtitle1
    image1 {
      url
    }
    
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.conference);
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
      <section className=" relative  pt-[151px] flex flex-col justify-center items-start h-auto  w-full ">
        <div className="static auto-container flex flex-col justify-center items-center w-full  pt-[110px] at500:px-[72px] my-0 mx-auto">
          <div
            className="relative flex flex-col justify-center items-start bg-cover px-[20px] sm:px-[50px] py-[100px] h-auto w-full at500:rounded-[24px]"
            style={{
              backgroundImage: `url(${data.image1.url})`,
              backgroundColor: "#00000099",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex gap-[10px] flex-col justify-start items-start h-auto sm:h-[320px]  w-full md:w-[456px]">
              <h4 className="text-white !font-[800] leading-[24px] sm:leading-[52px] sm:text-[40px]">
                {data.title}
              </h4>
              <span className="font-[84] text-[#E1E6ED] text-[16px] leading-[24px]">
                {data.subtitle1}
              </span>
            </div>
          </div>
          <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
            <h2 className="text-[#1F2126] !text-[40px] pt-[90px] pb-[50px]">
              Who will be Speaking
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScheduleHeroSection;
