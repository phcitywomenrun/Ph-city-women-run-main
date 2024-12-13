import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import background2 from "../../image/logo/PH CITY WOMEN RUN BRAND LOGO  221.png";
import { Link } from "react-router-dom";

function YourPotential() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   homepage(where: {id: "cm2puyh1z14ze07piviozyjtv"}) {
    id
    image1 {
      url
    }
      image2 {
      url
    }
    
    title1
    title2
    subtitle1
    subtitle2
    
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
      <section className="relative z-0 bg-white flex justify-center items-center w-full h-auto  overflow-hidden">
        <div className="h-[320px] absolute top-[50px] z-0">
          <img
            className=" w-full object-cover z-0"
            src={shadowbackground}
            alt="background"
          />
        </div>

        <div className="absolute flex flex-col at500:flex-row  justify-center items-center bottom-[414px]  w-full auto-container  ">
          <span className="z-[1] shape11 relative right-[189px]   w-[200px] h-[367px] object-cover "></span>

          <span className="z-[1] w-[200px] h-[367px] relative left-[95px]  flex shape12   "></span>
        </div>
        <div className="static z-10 auto-container gap-[24px] flex flex-col justify-center items-center w-full px-[15px] py-[90px] at500:px-[122px] my-0 mx-auto overflow-hidden">
          <div className=" flex gap-[20px] flex-col silver:flex-row justify-center items-center w-full h-auto  ">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[516px] w-full lg:w-[367px] rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={data.image1.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[516px]  !object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
              <div className="absolute bottom-0 flex flex-col gap-[10px] sm:gap-[22px] p-[30px]">
                <h5 className="text-white">{data.title1}</h5>
                <span className="text-white">{data.subtitle1}</span>
                {/* <div className="flex justify-center w-[140px]">
                  <Button size="small" className="">
                    Learn More
                  </Button>
                </div> */}
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex flex-col justify-center items-start bg-fixed bg-cover bg-slate-500 h-[516px] py-[20px] w-full lg:max-w-[746px] rounded-[12px] overflow-hidden"
              style={{
                backgroundImage: `url(${data.image2.url})`,
                backgroundColor: "#0000004D",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative bottom-0 flex flex-col justify-center items-start gap-[10px] sm:gap-[22px] p-[30px]">
                <h5 className="text-white w-full max-w-[329px]">
                  {data.title2}
                </h5>
                <span className="text-white w-full max-w-[520px]">
                  {data.subtitle2}
                </span>
                <div className="flex justify-center w-[225px]">
                  <Link className="w-full" to="/about#route-map">
                    <Button size="medium" className="bg-white text-[#0A1D33]">
                      Learn about the Route
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <img
            className=" z-10 absolute left-[-56px] top-[626px] h-[480.07px] w-[150.41px] object-contain"
            src={shape1}
            alt="shape"
          />
        </div>
        <div className="z-0 absolute bottom-0 flex flex-col at500:flex-row  justify-center items-center h-[396px]  bg-[#203749] py-[35px]  w-full ">
          <div className=" absolute flex justify-end items-end bottom-[-4px]  w-full auto-container">
            <span className="flex shape11 relative right-[465px]  w-[200px] h-[367px] object-cover "></span>
          </div>
          <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
            <span className=" w-[200px] h-[367px] relative left-[159px]  flex shape13   "></span>
          </div>

          <div className="relative flex justify-end items-end bottom-[-5px] w-full auto-container">
            <img
              className="z-0 w-[116px] h-auto object-cover"
              src={background2}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default YourPotential;
