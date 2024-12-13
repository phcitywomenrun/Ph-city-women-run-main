import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsAlarm } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

const HeroSection = ({ openConferenceform }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   conference(where: {id: "cm32ykaor23xh06oczo6juwh5"}) {
    id
    
    
    title
    time
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
      <p className="h-[20vh] custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] text-white">
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
              backgroundImage: `url(${data.image1.url})`,
              backgroundColor: "#00000099",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex gap-[40px] flex-col justify-start items-start w-full  h-auto sm:h-[320px] md:w-[476px]">
              <h4 className="text-white !font-[800] leading-[24px] sm:leading-[52px] sm:text-[40px]">
                {data.title}
              </h4>
              <div className="flex flex-col gap-[8px] justify-center items-start bg-white max-w-[163px] rounded-[12px] py-[12px] px-[24px]">
                <div className="flex gap-[10px] justify-center items-center">
                  <BsAlarm size={24} className="text-[#5C176F]" />
                  <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                    {data.time}
                  </span>
                </div>
              </div>
              <div className="flex justify-start w-full at500:w-[201px]">
                <Button onClick={openConferenceform} size="play" className="">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
