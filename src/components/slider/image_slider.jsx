import React from "react";
import { Fade } from "react-slideshow-image";
import { Slide } from "react-awesome-reveal"; // Import Slide component
import "react-slideshow-image/dist/styles.css";
import { GoArrowDown } from "react-icons/go";
import shape1 from "../slider/shapes/shape1.png";
import shape2 from "../slider/shapes/shape2.png";
import { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  slider(where: {id: "cm2ls6fnn05sm07pqymj9i2bz"}) {
    title
    title2
    title3
    subtitle1
    subtitle2
    subtitle3
    location
    location2
    location3
    date
    date1
    date3
    image1 {
      url
    }
    image2 {
      url
    }
    image3 {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.slider);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <p className="h-[100vh] bg-slate-500 flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[100vh] flex justify-center items-center leading-tight text-[20px] text-white">
        lets get you back online
      </p>
    );

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
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

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  const slides = data
    ? [
        {
          image: data.image1.url,
          title: data.title,
          subTitle: data.subtitle1,
          date: data.date,
          location: data.location,
        },
        {
          image: data.image2.url, // Correct syntax for the image
          title1: data.title2,
          subTitle1: data.subtitle2,
          date1: data.date2,
          location1: data.location2,
        },
        {
          image: data.image3.url,
          title2: data.title3,
          subTitle2: data.subtitle3,
          date2: data.date3,
          location2: data.location3,
        },
      ]
    : [];

  return (
    <div id="top" className="slider-container !w-full">
      <Fade>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="each-fade flex flex-col justify-center items-center !w-full "
          >
            <div
              className="image-container  !w-full h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "#000000BF",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh", // Adjust the height as needed
                width: "100%",
              }}
            >
              <div className="relative flex justify-between items-center w-full ">
                <div className="flex relative top-[89px] justify-start items-end h-[480.07px] w-full">
                  <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
                </div>
                <div className="flex relative top-[-6px] justify-end items-end h-[480.07px] w-full">
                  <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
                </div>
              </div>
            </div>

            <div className="auto-container absolute top-[45%]  flex justify-start items-start w-full  pr-[30px] sm:pr-0">
              {slide.title && (
                <div>
                  <div className=" bg-[#8D12AB] flex flex-col  justify-start items-start w-full py-[24px] max-w-[641px] ">
                    <div className="auto-container flex flex-col justify-start items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] my-0 mx-auto h-auto">
                      <h1
                        className="font-Geist text-left uppercase text-[#FFFFFF] text-[20px] !leading-[24px] sm:!leading-[52px] sm:!text-[35px]  "
                        style={{ fontWeight: "800" }}
                      >
                        {slide.title}
                      </h1>
                    </div>
                  </div>
                  <div className="static auto-container flex flex-col justify-center items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] py-[10px] my-0 mx-auto">
                    <div className="flex  gap-3 flex-col justify-start items-start w-full max-w-[541px]">
                      <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                        {slide.subTitle}
                      </span>
                      <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <span className="font-[84] text-[14px] text-[#F9FBFC] leading-[20px] pr-[20px] border-r-[2px] border-r-[#8D12AB]">
                          {formatDate(slide.date)}
                        </span>
                        <span className="font-[84] text-[14px] text-[#F9FBFC] leading-[20px] pl-[20px] border-l-[2px] border-l-[#8D12AB]">
                          {slide.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {slide.title1 && (
                <div>
                  <div className=" bg-[#8D12AB] flex flex-col  justify-start items-start w-full  py-[24px]">
                    <div className="auto-container flex flex-col justify-start items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] my-0 mx-auto h-auto">
                      <h1
                        className="font-Geist text-left uppercase text-[#FFFFFF] text-[20px] !leading-[24px] sm:!leading-[52px] sm:!text-[35px]  "
                        style={{ fontWeight: "800" }}
                      >
                        {slide.title1}
                      </h1>
                    </div>
                  </div>
                  <div className="static auto-container flex flex-col justify-center items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] py-[10px] my-0 mx-auto">
                    <div className="flex gap-3 flex-col justify-start items-start w-full max-w-[541px]">
                      <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                        {slide.subTitle1}
                      </span>
                      <div className="flex flex-col sm:flex-row justify-between w-full">
                        <span className="font-[84] text-[14px] text-[#F9FBFC] leading-[20px]">
                          {/* {formatDate(slide.date1)} */}
                        </span>
                        <span className="font-[84] text-[14px] text-[#F9FBFC] leading-[20px]">
                          {slide.location1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {slide.title2 && (
                <div>
                  <div className=" bg-[#8D12AB] flex flex-col  justify-start items-start w-full max-w-[641px] py-[24px]">
                    <div className="auto-container flex flex-col justify-start items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] my-0 mx-auto h-auto">
                      <h1
                        className="font-Geist text-left uppercase text-[#FFFFFF] text-[20px] !leading-[24px] sm:!leading-[52px] sm:!text-[35px]  "
                        style={{ fontWeight: "800" }}
                      >
                        {slide.title2}
                      </h1>
                    </div>
                  </div>
                  <div className="static auto-container flex flex-col justify-center items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] py-[10px] my-0 mx-auto">
                    <div className="flex gap-3 flex-col justify-start items-start w-full max-w-[541px]">
                      <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                        {slide.subTitle2}
                      </span>
                      <div className="flex flex-col  gap-2 sm:flex-row justify-start  w-full">
                        <span className="font-[84] text-[14px] text-[#F9FBFC] leading-[20px] pr-[20px] border-r-[2px] border-r-[#8D12AB]">
                          {formatDate(slide.date2)}
                        </span>
                        <span className="font-[84] text-[14px] text-[#F9FBFC] leading-[20px] pl-[20px] border-l-[2px] border-l-[#8D12AB]">
                          {slide.location2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Fade>
      <div className="relative flex flex-col justify-center items-center w-full max-w-[1580px] px-[15px] at500:px-[40px] my-0 mx-auto z-[8]">
        <div className="relative w-full  z-[555] cursor-pointer ">
          <a href="#middle">
            <GoArrowDown className="text-[#8D12AB] hover:text-[#fff] absolute right-0 bottom-[50px]  w-[57.82px] h-[57.82px] object-cover cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
