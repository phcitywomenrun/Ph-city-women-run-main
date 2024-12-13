import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from "react-icons/tb";
import imageOne from "../../image/homeImg/a011595e6083594c8f66c18651dfd68d.gif";
import shape1 from "../../image/shapes/Frame 11686560754.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";
import logo from "../../image/logo/8e1d23d6755ed3efab7ae67d16b117c0.png";
import background from "../../image/homeImg/25dbce15b67310bc5bdc3dd552a7b6a2.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function Prize() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  theRun(where: {id: "cm2yeq9nu0ayi07odghh7iyh6"}) {
    id
    nameOfSection
    
    subtext4
    
    title1
    title2
    title3
    cashPrice1
    cashPrice2
    cashPrice3
    cashPrice4
    cashPrice5
    cashPrice6
    cashPrice7
    cashPrice8
    cashPrice9
    cashPrice10
    
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
      <p className="h-[20vh] w-full custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] text-white">
       
      </p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex custom-blur-shadow  justify-center items-center leading-tight text-[20px] text-white w-full">
        Let's get you back online
      </p>
    );

  return (
    <>
      <section className=" relative bg-[#1F2126] flex flex-col justify-center items-center px-[20px] sm:px-[50px] h-auto w-full overflow-hidden">
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

        <div className="auto-container flex relative justify-start items-start h-auto w-full">
          <img
            src={background}
            alt="shapes"
            className=" absolute left-[-345px] h-auto opacity-[25%] w-[660px] object-cover auto-container"
          />
        </div>

        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px]  py-[50px] at500:px-[72px] my-0 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-start w-full  ">
            <div className="flex justify-start items-start pb-[10px] px-[15px] w-full">
              <h2 className="text-[#FFFFFF] !text-[40px] ">
                {data.nameOfSection}
              </h2>
            </div>

            <div className="grid grid-cols-1 silver:grid-cols-2 gap-y-5 items-start w-full ">
              <ul className="flex flex-col items-start silver:pr-[20px] w-full">
                <li className="flex   justify-start items-start py-[10px] px-[15px] w-full">
                  <span className="text-[#FFFFFF] txt7 text-left !text-[24px]">
                    {data.title1}
                  </span>
                </li>
                <li className="flex bg-[#14161B]  justify-start items-start py-[10px] px-[15px] w-full">
                  <span className="text-[#FFFFFF] text-left text-[16px] leading-[24px] font-bold w-[162px]">
                    {data.title3}
                  </span>
                  <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-bold ">
                    {data.subtext4}
                  </span>
                </li>
                <li className="flex bg-[#353F50] justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber1 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice1},000
                    </span>
                  </div>
                </li>
                <li className="flex justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber2 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice2},000
                    </span>
                  </div>
                </li>
                <li className="flex bg-[#353F50] justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber3 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice3},000
                    </span>
                  </div>
                </li>
                <li className="flex justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber4 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice4},000
                    </span>
                  </div>
                </li>
                <li className="flex bg-[#353F50] justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber5 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice5},000
                    </span>
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col items-start silver:pr-[20px] w-full">
                <li className="flex   justify-start items-start py-[10px] px-[15px] w-full">
                  <span className="text-[#FFFFFF] txt7 text-left !text-[24px]">
                    {data.title2}
                  </span>
                </li>
                <li className="flex bg-[#14161B]  justify-start items-start py-[10px] px-[15px] w-full">
                  <span className="text-[#FFFFFF] text-left text-[16px] leading-[24px] font-bold w-[162px]">
                    {data.title3}
                  </span>
                  <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-bold ">
                    {data.subtext4}
                  </span>
                </li>
                <li className="flex bg-[#353F50] justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber1 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice6},000
                    </span>
                  </div>
                </li>
                <li className="flex justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber2 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice7},000
                    </span>
                  </div>
                </li>
                <li className="flex bg-[#353F50] justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber3 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice8},000
                    </span>
                  </div>
                </li>
                <li className="flex justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber4 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice9},000
                    </span>
                  </div>
                </li>
                <li className="flex bg-[#353F50] justify-start items-start py-[10px] px-[32px] w-full">
                  <span className="flex w-[145px]">
                    <TbCircleNumber5 size={24} className="text-[#FFFFFF]" />
                  </span>
                  <div className="flex justify-center ">
                    <span className="text-[#FFFFFF] text-center text-[16px] leading-[24px] font-[84]">
                      ₦{data.cashPrice10},000
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prize;
