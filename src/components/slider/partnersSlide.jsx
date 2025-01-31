import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "swiper/css";
// import "./swiper/lastest.css";
import "./swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPartnerSlide = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(12); // Adjust limit as needed

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   ourPartners {
    id
    logo {
      url
    }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.ourPartners);
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
    <div className="w-full flex flex-col items-center overflow-hidden xl:overflow-visible 2xl:overflow-hidden">
      <div className="relative flex !items-end !justify-end w-full gap-8 pt-[30px] ">
        <div className="next p-2">
          <GoChevronLeft className="swiper-button-prev-blog relative top-0 text-[#05284C] hover:text-[#05284C] w-[20px]" />
        </div>
        <div className="prev p-2">
          <GoChevronRight className="swiper-button-next-blog relative text-[#05284C] top-0 hover:text-[#05284C] w-[20px]" />
        </div>
      </div>

      <Swiper
        className="relative !flex !justify-center !items-center  sm:!py-[30px]  "
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={25}
        slidesPerView={7}
        breakpoints={{
          0: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          950: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        navigation={{
          nextEl: ".swiper-button-next-blog",
          prevEl: ".swiper-button-prev-blog",
        }}
      >
        {data.slice(0, postLimit).map((ourPartners, index, array) => (
          <SwiperSlide
            key={ourPartners.id}
            className="w-full "
          >
            <div className="flex justify-center items-center w-full max-w-[200px]">
              {ourPartners.logo && (
                <img
                  className={`flex justify-center items-center w-[182px] h-auto object-cover `}
                  src={ourPartners.logo.url}
                  alt=""
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurPartnerSlide;
