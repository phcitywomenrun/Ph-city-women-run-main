import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsAlarm } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";
import icon1 from "../../image/icons/ambulance-svgrepo-com.png";
import icon2 from "../../image/icons/toilet-paper-svgrepo-com.png";
import icon3 from "../../image/icons/basketball-jersey-svgrepo-com.png";
import icon4 from "../../image/icons/1Group.png";
import icon5 from "../../image/icons/security-open-access-unlock-svgrepo-com.png";
import location from "../../image/logo/route-svgrepo-com 21.png";
import shape1 from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
// import Link from "./link";

import Button from "../../Button";

const RaceInfo = ({ openOverlay }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  theRun(where: {id: "cm2xk5crc00eq07odv5gqa9ni"}) {
    id
    nameOfSection
    raceInfo
    subtext2
    subtext4
    subtext5
    subtitle1
    subtitle2
    subtitle3
    subtitle4
    title1
    title2
    title3
    title4
    title5
    title6
    startTime
    finishPoint
    location
    startingPoint
    image1 {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.theRun);
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
      <p className="h-[20vh] w-full custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex custom-blur-shadow  justify-center items-center leading-tight text-[20px] text-white w-full">
        Let's get you back online
      </p>
    );

  return (
    <>
      <section className="relative  bg-[#F9FBFC] flex flex-col justify-center items-center w-full h-auto overflow-hidden">
        <div className=" absolute z-[1] top-[345px] flex justify-start items-start w-full auto-container">
          <img
            className="relative flex left-[-87px] h-auto w-[499px] opacity-[30%] object-contain"
            src={shape1}
            alt="shape"
          />
          <div className="flex z-[1] absolute top-[89px] justify-start items-start h-[480.07px] w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>
        <div className="static z-20 auto-container flex flex-col justify-center items-center w-full px-[15px] py-[20px] at500:px-[40px] md:px-[72px] silver:pl-[72px] silver:pr-0 my-0 mx-auto">
          <div className="flex gap-[40px] flex-col justify-center items-start w-full mb-[50px]">
            <h2 className="text-[#111E2F] !text-[30px] !leading-[24px] sm:!leading-[54px] sm:text-[40px]">
              Race Information
            </h2>
            <div className="flex gap-[30px] flex-col silver:flex-row justify-between items-start w-full">
              <div className="flex flex-col justify-center items-start w-full max-w-[527px]">
                <h4
                  data-aos="fade-right"
                  className="!text-[25px] !font-bold text-[#5C176F] !leading-[24px] sm:!leading-[54px] sm:text-[40px] "
                >
                  {data.raceInfo}
                </h4>
                <span
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  data-aos-duration="2000"
                  className="text-[16px] font-[106] text-[#4E5A6C] leading-[19.84px] max-w-[357px]"
                >
                  {data.subtext5}
                </span>
              </div>
              <div className="flex justify-center items-start w-full max-w-[643px]">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 items-start silver:pr-[20px] w-full">
                  <li
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col gap-[8px] justify-center items-start"
                  >
                    <div className="flex gap-[10px] justify-center items-center">
                      <BsAlarm size={24} className="text-[#203749]" />
                      <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                        Start time
                      </span>
                    </div>
                    <span className="text-[#353F50] text-[20px] leading-[24.8px] font-bold">
                      {data.startTime}
                    </span>
                  </li>
                  <li
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col gap-[8px] justify-center  items-start"
                  >
                    <div className="flex gap-[10px] justify-center items-center">
                      <img className="w-[24px] h-auto" src={location} alt="" />
                      <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                        Location
                      </span>
                    </div>
                    <span className="text-[#353F50] text-[20px] leading-[24.8px] font-bold">
                      {data.location}
                    </span>
                  </li>
                  <li
                    data-aos="fade-left"
                    data-aos-delay="2000"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col gap-[8px] justify-center  items-start"
                  >
                    <div className="flex gap-[10px] justify-center items-center">
                      <img className="w-[24px] h-auto" src={location} alt="" />
                      <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                        Starting Point
                      </span>
                    </div>
                    <span className="text-[#353F50] text-[20px] leading-[24.8px] font-bold">
                      {data.startingPoint}
                    </span>
                  </li>
                  <li
                    data-aos="fade-left"
                    data-aos-delay="3000"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className="flex flex-col gap-[8px] justify-center  items-start"
                  >
                    <div className="flex gap-[10px] justify-center items-center">
                      <img className="w-[24px] h-auto" src={location} alt="" />
                      <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                        Finish Point
                      </span>
                    </div>
                    <span className="text-[#353F50] text-[20px] leading-[24.8px] font-bold">
                      {data.finishPoint}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-[30px] flex-col-reverse silver:flex-row justify-between items-start  w-full">
            <div className="flex gap-[20px] flex-col justify-start items-start w-full max-w-[527px]">
              <ul className="flex gap-[20px] flex-col justify-between items-start w-full">
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col at1098:flex-row gap-[20px] justify-center items-start  "
                >
                  <div className="flex gap-[8px] justify-start items-start at1098:w-[126px]">
                    <img className="w-[24px] h-auto" src={icon1} alt="" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold ">
                      {data.title1}
                    </span>
                  </div>
                  <span className="text-[#353F50]  text-[16px] leading-[19.84px] font-[106] max-w-[357px]">
                    {data.subtitle2}
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col at1098:flex-row gap-[20px] justify-center  items-start "
                >
                  <div className="flex gap-[8px] justify-start items-start at1098:w-[126px]">
                    <FaBottleWater size={24} className="text-[#A93439]" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.title2}
                    </span>
                  </div>
                  <span className="text-[#353F50] text-[16px] leading-[19.84px] font-[106] max-w-[357px]">
                    {data.subtitle1}
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col at1098:flex-row gap-[20px] justify-center  items-start "
                >
                  <div className="flex gap-[8px] justify-start items-start at1098:w-[126px]">
                    <img className="w-[24px] h-auto" src={icon2} alt="" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.title3}
                    </span>
                  </div>
                  <span className="text-[#353F50]  text-[16px] leading-[19.84px] font-[106] max-w-[357px]">
                    {data.subtext4}
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col at1098:flex-row gap-[20px] justify-center  items-start "
                >
                  <div className="flex gap-[8px] justify-start items-start at1098:w-[126px]">
                    <img className="w-[24px] h-auto" src={icon3} alt="" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.title4}
                    </span>
                  </div>
                  <span className="text-[#353F50]  text-[16px] leading-[19.84px] font-[106] max-w-[357px]">
                    {data.subtitle3}
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col at1098:flex-row gap-[20px] justify-center  items-start "
                >
                  <div className="flex gap-[8px] justify-start items-start at1098:w-[126px]">
                    <img className="w-[24px] h-auto" src={icon4} alt="" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.title5}
                    </span>
                  </div>
                  <span className="text-[#353F50]  text-[16px] leading-[19.84px] font-[106] max-w-[357px]">
                    {data.subtext2}
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex flex-col at1098:flex-row gap-[20px] justify-center  items-start "
                >
                  <div className="flex gap-[8px] justify-start items-start at1098:w-[126px]">
                    <img className="w-[24px] h-auto" src={icon5} alt="" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.title6}
                    </span>
                  </div>
                  <span className="text-[#353F50]  text-[16px] leading-[19.84px] font-[106] max-w-[357px]">
                    {data.subtitle4}
                  </span>
                </li>
              </ul>

              <div
                data-aos="fade-up"
                className="flex flex-col at500:flex-row gap-[24px] justify-between items-center w-full max-w-[426px]"
              >
                <div className="flex justify-start w-full at500:w-[201px]">
                  <Link className="block w-full h-full" to={"/"}>
                    <Button size="large" className="  !text-[#121F30]">
                      Preorder Shirts
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-start w-full at500:w-[201px]">
                  <Button onClick={openOverlay} size="play" className="">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="30000"
              data-aos-easing="ease-in-out"
              className="flex justify-end items-end w-full h-auto silver:max-w-[643px]"
            >
              <LoadBlurHashImage
                src={data.image1.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className=" w-full h-[546px]  rounded-[12px] silver:rounded-tl-[12px] silver:!rounded-bl-[0px] silver:rounded-r-[0] object-cover "
                alt="Discover Your Potential"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RaceInfo;
