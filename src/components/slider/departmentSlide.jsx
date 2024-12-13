import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Link from "../contents/link";
import LoadBlurHashImage from "../lazy/loadBlurHash";
import Loading from "../contents/APIs/loading";
import "swiper/css";
import "./swiper/shirt.css";
import "./swiper/pagination.css";

const DepartmentSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(6);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    volunteerDepartments {
    id
    slug
    title
    subtext
    date1
    date2
   
    coverImage {
      url
    }
    content
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.volunteerDepartments);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error fetching data</p>;
  return (
    <section className="flex flex-col justify-center items-center relative w-full py-[70px]">
      <div className=" w-full flex flex-col justify-center items-center !overflow-hidden">
        {/* <GoChevronLeft className="swiper-button-prev-shirt !hidden at500:!flex at500:left-[-46px] w-[20px]" />

        <GoChevronRight className="swiper-button-next-shirt !hidden at500:!flex  at500:right-[-46px] w-[20px]" /> */}

        <div className="static  auto-container flex flex-col justify-center items-center w-full px-[15px] pb-[20px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col gap-2  sm:flex-row justify-between items-start sm:items-center w-full">
            <div className="flex bg-[#5C176F] justify-start items-start lg:w-[400px] px-[24px] py-[10px] rounded-r-[12px]">
              <h2 className="text-white text-[20px] !leading-[24px] sm:!leading-[32px] sm:!text-[24px]">
                Volunteer Departments
              </h2>
            </div>
            <div>
              <Link to={"/department"}>
                <span className="text-[#8C12AB] text-[16px] leading-[24px] font-[124]">
                  See All
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="static  auto-container flex flex-col justify-center items-center w-full px-[15px] at500:px-[72px] my-0 mx-auto ">
          <Swiper
            className="relative flex flex-col justify-center lg:right-10 items-center sm:!py-[30px] lg:!px-[39px] w-full"
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              950: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-shirt",
              prevEl: ".swiper-button-prev-shirt",
            }}
          >
            {data.slice(0, postLimit).map((department) => (
              <SwiperSlide key={department.id} className="z-[4]">
                <div className="relative bg-[#5C176F] flex gap-10 flex-col justify-start items-start px-[20px] sm:px-[20px] py-[20px] min-h-[295px] w-full at500:rounded-[24px] overflow-hidden">
                  <div className=" absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
                    <span className=" w-[200px] h-[367px] relative top-[-61px] left-[44px]  flex shape15 "></span>
                  </div>
                  <div className="relative py-[20px] flex justify-center items-center max-w-[120px] max-h-[120px]">
                    <LoadBlurHashImage
                      src={department.coverImage.url}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash if available
                      alt="icon"
                      className="w-full h-auto  object-cover mb-3"
                    />
                  </div>
                  <div className="relative flex gap-[20px]  justify-between items-end w-full  h-auto ">
                    <h4 className="text-white !font-[146] leading-[24px] sm:leading-[32px] sm:text-[22px] ">
                      {department.title}
                    </h4>

                    <Link to={`/departments/${department.slug}`}>
                      <div className="flex h-auto  justify-center items-center  ">
                        <GoChevronRight className="flex rounded-[100px] h-[40px] bg-white justify-center items-center w-[40px]  text-[#1F2126]  " />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSlider;
