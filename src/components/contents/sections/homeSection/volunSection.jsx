import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import background from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import background2 from "../../image/logo/PH CITY WOMEN RUN BRAND LOGO  231.png";

function Volunteer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  homepage(where: {id: "cm34cwbrj01z807pnjqtxzhj6"}) {
    
    
    
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
    <section className="relative flex flex-col justify-center items-center  bg-[#203749] py-[35px]  w-full overflow-hidden">
      <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[72px] my-0 mx-auto">
        <div className="flex z-20 flex-col silver:flex-row justify-between items-start w-full ">
          <div className="flex  gap-[4px] flex-col justify-start items-start w-full ">
            <h1 className="text-white text-left md:text-[40px]">
              {data.title1}
            </h1>
            <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
              {data.subtitle1}
            </span>
          </div>
          <div className="flex silver:justify-center items-start silver:items-center w-full">
            <div
              data-aos="zoom-in"
              className="flex pt-[20px]  justify-start w-full sm:max-w-[206px]"
            >
              
              <Link to={"/volunteer"}>
                <Button size="play" className="!bg-[#5C176F]">
                  <span className="z-20">Become a Volunteer</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute flex justify-end items-end bottom-[-4px]  w-full auto-container">
        <span className="flex shape11 relative right-[189px] w-[200px] h-[367px] object-cover "></span>
      </div>
      <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
        <span className=" w-[200px] h-[367px] relative left-[95px]  flex shape13 "></span>
      </div>
      <div className=" absolute flex justify-center items-center bottom-[-134px]  w-full auto-container">
        <img
          className="z-0 relative right-[-125px] w-[399px] h-auto object-cover opacity-[45%]"
          src={background}
          alt=""
        />
      </div>
      <div className=" absolute flex justify-end items-end bottom-[-5px] w-full auto-container">
        <img
          className="z-0 w-[134px] h-auto object-cover"
          src={background2}
          alt=""
        />
      </div>
    </section>
  );
}

export default Volunteer;
