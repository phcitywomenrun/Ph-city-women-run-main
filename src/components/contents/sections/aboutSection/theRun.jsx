import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegCalendar } from "react-icons/fa6";
import location from "../../image/logo/route-svgrepo-com 1.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../../Button";

function SpecificGoal() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  theRun(where: {id: "cm2xc6ibs0mtc07pggca1ta4f"}) {
    id
    nameOfSection
    subtext3
    backgroundImage {
      url
    }
    date
    runType
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
      <p className="h-[30vh] custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] w-full text-white">
        Let's get you back online
      </p>
    );
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleString("default", { weekday: "long" }); // Get day in words
    const dayOfMonth = date.getDate(); // Get numeric day of the month
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Determine the correct suffix for the day
    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${dayOfWeek}, ${dayOfMonth}${getDaySuffix(
      dayOfMonth
    )} ${month} ${year}`;
  };

  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center w-full h-auto py-[100px]"
        style={{
          backgroundImage: `url(${data.backgroundImage.url})`,
          backgroundColor: "#00000073",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[110px] sm:px-[72px] my-0 mx-auto">
          <div className="flex justify-center    md:px-[40px] w-full max-w-[1121px] ">
            <div
              data-aos="zoom-in"
              className="custom-blur-shadow flex gap-[20px] flex-col rounded-[24px] justify-between items-center w-full py-[30px] at500:py-[100px] px-[10px] md:px-[40px] overflow-hidden"
            >
              <div className="flex flex-col justify-center items-center silver:w-[716px]">
                <h2 className="text-[#FFFFFF] !text-[40px]">
                  {data.nameOfSection}
                </h2>
              </div>
              <span className="text-[16px] font-[106] text-center text-[#ffff] leading-[19.84px] max-w-[716px]">
                {data.subtext3}
              </span>
              <div className="bg-white flex justify-center items-center rounded-[12px] px-[15px] sm:px-[24px] py-[12px] w-full max-w-[493px]">
                <ul className="flex gap-[20px] flex-col sm:flex-row  justify-between w-full">
                  <li className="flex flex-col sm:flex-row  gap-[10px] justify-center items-center">
                    <FaRegCalendar className="text-[#5C176F]" size={24} />
                    <span className="text-[#5C176F] text-[16px] text-center leading-[24px] font-bold">
                      {formatDate(data.date)}
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row  gap-[10px] justify-center items-center">
                    <img className="w-[24px] h-auto" src={location} alt="" />
                    <span className="text-[#5C176F] text-[16px] text-center leading-[24px] font-bold">
                      {data.runType}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecificGoal;
