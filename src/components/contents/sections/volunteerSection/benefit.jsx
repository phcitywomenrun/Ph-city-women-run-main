import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";

import Button from "../../Button";
import BenefitSlider from "../../../slider/benefitSlide";

function Benefits() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
     volunteer(where: {id: "cm3fmdf901fir07o61geldecy"}) {
      title
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
      <section className=" relative flex flex-col justify-center items-center bg-[#1F2126] w-full overflow-hidden">
        <div className="static gap-[20px] z-30 auto-container flex flex-col justify-center items-center w-full px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col justify-center items-start gap-[20px] w-full">
            <div className="flex bg-[#5C176F] justify-start items-start lg:w-[300px] px-[24px] py-[10px] rounded-r-[12px]">
              <h2 className="text-white text-[20px] !leading-[24px] sm:!leading-[32px] sm:!text-[24px]">
                {data.title}
              </h2>
            </div>
            <div className="relative  flex gap-[20px] flex-col silver:flex-row justify-center items-center w-full">
              <div
                data-aos="zoom-in"
                className="relative flex justify-start items-start h-auto lg:h-[373px] w-full rounded-[12px]"
              >
                <LoadBlurHashImage
                  src={data.coverImage.url}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                  className="w-full h-[373px]  object-cover rounded-[16px] overflow-hidden"
                  alt="Discover Your Potential"
                />
              </div>
              <BenefitSlider />
            </div>
          </div>
        </div>
        <div className=" absolute flex justify-end items-end bottom-[-4px]  w-full auto-container">
          <span className="flex shape11 relative right-[189px] w-[200px] h-[367px] object-cover "></span>
        </div>
        <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
          <span className=" w-[200px] h-[367px] relative left-[95px]  flex shape13 "></span>
        </div>
        <div className="h-[320px] absolute bottom-[81px] z-0">
          <img
            className=" w-full object-cover z-0"
            src={shape1}
            alt="background"
          />
        </div>
        <div className="h-[320px] absolute bottom-[-48px] left-[-42px] z-0">
          <img
            className=" w-full object-cover z-0"
            src={shape1}
            alt="background"
          />
        </div>
        <div className=" absolute flex justify-center items-center bottom-[-4px]  w-full auto-container">
          <img
            className="z-0 relative right-[-327px] w-[699px] h-auto object-cover opacity-[35%]"
            src={shadowbackground}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Benefits;
