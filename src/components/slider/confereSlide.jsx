import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import image from "../contents/image/homeImg/1792b51136295dafce3f1c348d2f9d51.jpeg";
import shape1 from "../slider/shapes/shape1.png";
import shape2 from "../slider/shapes/shape2.png";
import LoadBlurHashImage from "../lazy/loadBlurHash";
import Button from "../contents/Button";
import "swiper/css";
import "./swiper/confere.css";
import "./swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ConfereSlide = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  slider(where: {id: "cm35nks0d0k0n07obp5v71uq4"}) {
    title
    title2
    title3
    subtitle1
    subtitle2
    subtitle3
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
      <p className="h-[100vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Loading...
      </p>
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

  return (
    <section className="flex  bg-[#1F2126] flex-col justify-center items-center relative w-full overflow-hidden">
      <div className="blog-container w-full gap-[20px] flex flex-col items-center ">
        <GoChevronLeft className="swiper-button-prev-blog !hidden at500:!flex text-[#FFFFFF]  w-[20px]" />

        <GoChevronRight className="swiper-button-next-blog !hidden at500:!flex text-[#FFFFFF]  w-[20px]" />

        <Swiper
          className="relative flex flex-col w-full max-w-[800px]"
          style={{ width: "100%" }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={25}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-blog",
            prevEl: ".swiper-button-prev-blog",
          }}
        >
          <SwiperSlide className=" flex ! !w-full z-[4]">
            <div className="flex gap-[15px] flex-col justify-center items-center w-full">
              <div
                className="relative flex justify-start items-start h-[30vh] sm:h-[70vh] w-full rounded-[12px] overflow-hidden"
                style={{
                  backgroundImage: `url(${data.image1.url})`,
                  backgroundColor: "#0000001A",
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  //   height: "60vh", // Adjust the height as needed
                  width: "100%",
                }}
              ></div>
              <div className="flex flex-col justify-center items-center">
                <h5 className="text-white !text-[20px]">{data.subtitle2}</h5>
                <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                  {data.subtitle2}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex ! !w-full z-[4]">
            <div className="flex gap-[15px] flex-col justify-center items-center w-full">
              <div
                className="relative flex justify-start items-start h-[30vh] sm:h-[70vh] w-full rounded-[12px] overflow-hidden"
                style={{
                  backgroundImage: `url(${data.image2.url})`,
                  backgroundColor: "#0000001A",
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  //   height: "60vh", // Adjust the height as needed
                  width: "100%",
                }}
              ></div>
              <div className="flex flex-col justify-center items-center">
                <h5 className="text-white !text-[20px]">{data.subtitle1}</h5>
                <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                  {data.subtitle1}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex ! !w-full z-[4]">
            <div className="flex gap-[15px] flex-col justify-center items-center w-full">
              <div
                className="relative flex justify-start items-start h-[30vh] sm:h-[70vh] w-full rounded-[12px] overflow-hidden"
                style={{
                  backgroundImage: `url(${data.image3.url})`,
                  backgroundColor: "#0000001A",
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  //   height: "60vh", // Adjust the height as needed
                  width: "100%",
                }}
              ></div>
              <div className="flex flex-col justify-center items-center">
                <h5 className="text-white !text-[20px]">{data.subtitle3}</h5>
                <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                  {data.subtitle3}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" absolute flex justify-between items-center w-full ">
        <div className="flex relative top-[89px] justify-start items-end h-[480.07px] w-full">
          <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
        </div>
        <div className="flex relative top-[-6px] justify-end items-end h-[480.07px] w-full">
          <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
        </div>
      </div>
    </section>
  );
};

export default ConfereSlide;
