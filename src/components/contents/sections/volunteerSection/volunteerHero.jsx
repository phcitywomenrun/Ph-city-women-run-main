import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsAlarm } from "react-icons/bs";
import imageOne from "../../image/homeImg/ad392b203979406835370d3e44b10714.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";
import ScheduleCountdown from "../scheduleCount";

const VolunSection = ({ openVolunteerform }) => {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
     volunteer(where: {id: "cm3f4go1z15ae07o6l5jc1424"}) {
    title
    subtitle
    subtext
    schedule
    slideText
    coverImage {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.volunteer);
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
      <section className=" relative  pt-[151px] flex flex-col justify-center items-start  h-auto w-full ">
        <div className="static auto-container flex flex-col justify-center items-center w-full pt-[110px] pb-[20px] at500:px-[72px] my-0 mx-auto">
          <div
            className="relative flex flex-col justify-center items-start bg-cover px-[20px] sm:px-[50px] py-[100px] h-auto w-full at500:rounded-[24px]"
            style={{
              backgroundImage: `url(${data.coverImage.url})`,
              backgroundColor: "#00000099",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex gap-[20px] flex-col justify-start items-start w-full  h-auto sm:h-[320px] ">
              <h4 className="text-white !font-[800] leading-[24px] sm:leading-[52px] sm:text-[40px] md:w-[456px]">
                {data.title}
              </h4>

              <div className="flex gap-[20px] flex-col silver:flex-row justify-center items-start rounded-[16px] silver:py-[4px]  w-full max-w-[685px]">
                <span className="font-Geist text-[#FFFFFF] font-extrabold text-[24px] leading-[32px] silver:w-[386px]">
                  {data.subtext}
                </span>
                <ScheduleCountdown targetDate={data.schedule} />
              </div>

              <div className="flex justify-start w-full at500:w-[201px]">
                <Button onClick={openVolunteerform} size="play" className="">
                  Volunteer Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunSection;
