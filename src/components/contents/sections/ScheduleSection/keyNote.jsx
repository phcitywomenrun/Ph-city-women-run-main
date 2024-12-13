import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import background from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import image2 from "../../image/homeImg/3bb2c3f5d20885f4e7cf179881163371.jpeg";
import shape1 from "../../image/shapes/Frame 11686560754.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";

function Notes() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const hygraphEndpoint =
     "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

   const query = `{
   conference(where: {id: "cm33r1err2kp306ocmeguyng3"}) {
    
    title
     title2
     title3
     title4
     title5
    
    subtext1
    subtext2
    subtext3
    subtext4
    subtext5
   
    image1 {
      url
    }
      image2 {
      url
    }
      image3 {
      url
    }
      image4 {
      url
    }
      image5 {
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
       <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white">
         Loading...
       </p>
     );
   if (error)
     return (
       <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
         Let's get you back online
       </p>
     );

  return (
    <>
      <section className="relative flex flex-col justify-center items-center  bg-[#1F2126] py-[35px]  w-full overflow-hidden">
        <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
          <div className="flex gap-[30px] z-20 flex-col silver:flex-row justify-between items-center w-full ">
            <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
              <h6 className="text-white">{data.title}</h6>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px] md:max-w-[350px]">
                {data.subtext1}
              </span>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[282px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={data.image1.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
          </div>
        </div>

        <div className=" absolute flex justify-center items-center   w-full auto-container">
          <img
            className="z-0 relative right-[64px] w-[399px] h-auto object-cover opacity-[18%]"
            src={background}
            alt=""
          />
        </div>

        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full ">
          <div className="flex relative  right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative top-[-248px]  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[38px]   justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center  bg-[#FFFFFF] py-[35px]  w-full overflow-hidden">
        <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
          <div className="flex gap-[30px] z-20 flex-col silver:flex-row justify-between items-center w-full ">
            <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
              <h6 className="text-[#353F50] leading-[24px] sm:leading-[52px] sm:text-[40px]">
                {data.title2}
              </h6>
              <span className="font-[84] text-[16px] text-[#4E5A6C] leading-[24px] md:max-w-[350px]">
                {data.subtext2}
              </span>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[282px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={data.image2.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
          </div>
        </div>

        <div className=" absolute flex justify-start items-start   w-full auto-container">
          <img
            className="z-0 relative right-[64px] w-[399px] h-auto object-cover opacity-[18%]"
            src={background}
            alt=""
          />
        </div>

        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full ">
          <div className="flex relative  right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative top-[-248px]  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[38px]   justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center  bg-[#1F2126] py-[35px]  w-full overflow-hidden">
        <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
          <div className="flex gap-[30px] z-20 flex-col silver:flex-row justify-between items-center w-full ">
            <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
              <h6 className="text-white">{data.title3}</h6>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px] md:max-w-[350px]">
                {data.subtext3}
              </span>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[282px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={data.image3.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
          </div>
        </div>

        <div className=" absolute flex justify-center items-center   w-full auto-container">
          <img
            className="z-0 relative right-[64px] w-[399px] h-auto object-cover opacity-[18%]"
            src={background}
            alt=""
          />
        </div>

        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full ">
          <div className="flex relative  right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative top-[-248px]  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[38px]   justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center  bg-[#FFFFFF] py-[35px]  w-full overflow-hidden">
        <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
          <div className="flex gap-[30px] z-20 flex-col silver:flex-row justify-between items-center w-full ">
            <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
              <h6 className="text-[#353F50]">{data.title4}</h6>
              <span className="font-[84] text-[16px] text-[#4E5A6C] leading-[24px] md:max-w-[350px]">
                {data.subtext4}
              </span>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[282px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={data.image4.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
          </div>
        </div>

        <div className=" absolute flex justify-start items-start   w-full auto-container">
          <img
            className="z-0 relative right-[64px] w-[399px] h-auto object-cover opacity-[18%]"
            src={background}
            alt=""
          />
        </div>

        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full ">
          <div className="flex relative  right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative top-[-248px]  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[38px]   justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center  bg-[#1F2126] py-[35px]  w-full overflow-hidden">
        <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
          <div className="flex gap-[30px] z-20 flex-col silver:flex-row justify-between items-center w-full ">
            <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
              <h6 className="text-white">{data.title5}</h6>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px] md:max-w-[350px]">
                {data.subtext5}
              </span>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[282px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={data.image5.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
          </div>
        </div>

        <div className=" absolute flex justify-center items-center   w-full auto-container">
          <img
            className="z-0 relative right-[64px] w-[399px] h-auto object-cover opacity-[18%]"
            src={background}
            alt=""
          />
        </div>

        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full ">
          <div className="flex relative  right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative top-[-248px]  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[38px]   justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>
      </section>
      <div className="bg-[#FFFFFF] py-[20px]"></div>
    </>
  );
}

export default Notes;
