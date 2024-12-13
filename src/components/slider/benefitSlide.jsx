import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "swiper/css";
import "./swiper/benefit.css";
import "./swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";
import shape1 from "../slider/shapes/shape1.png";
import background from "../contents/image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";

const BenefitSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
     volunteer(where: {id: "cm3fmdf901fir07o61geldecy"}) {
    
    slideText
   
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
    <section className="flex flex-col justify-center items-center relative bg-[#AF228CB3] rounded-[16px] w-full overflow-hidden">
      <div className="blog-container w-full flex flex-col justify-center items-center lg:max-w-[400px] h-auto lg:h-[373px] px-[20px] py-[20px] lg:py-[0px]">
        <GoChevronLeft className="swiper-button-prev-text !hidden group-hover:!block left-[0px] w-[20px] z-50" />
        <GoChevronRight className="swiper-button-next-text !hidden group-hover:!block right-[0px] w-[20px] z-50" />

        <Swiper
          className="relative flex flex-col justify-center items-center sm:!py-[30px] w-full"
          style={{ width: "100%" }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true} // Enable loop
          autoplay={{
            delay: 3000, // Adjust delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          navigation={{
            nextEl: ".swiper-button-next-text",
            prevEl: ".swiper-button-prev-text",
          }}
        >
          {data.slideText.map((text, index) => (
            <SwiperSlide key={index} className="z-[4] ">
              <div className="flex gap-[15px] flex-col justify-center items-center w-full overflow-hidden">
                <div className="flex gap-[10px] flex-col justify-center items-start ">
                  <span className="font-semibold text-white leading-[32px] text-center silver:text-left text-[30px] sm:leading-[52px] sm:text-[40px] silver:text-[45px]">
                    {text}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-[320px] absolute bottom-[-48px] left-[-42px] z-0">
        <img
          className=" w-full object-cover z-0"
          src={shape1}
          alt="background"
        />
      </div>
      <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
        <span className=" w-[200px] h-[367px] relative left-[95px]  flex shape13 "></span>
      </div>
    </section>
  );
};

export default BenefitSlider;
