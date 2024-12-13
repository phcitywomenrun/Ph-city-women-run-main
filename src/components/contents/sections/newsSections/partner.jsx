import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../../image/homeImg/8febc29051bcfc8a9896ced270874b6c.jfif";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

// import Button from "../Button";

function Partnership() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   newsCommunityEvent(where: {id: "cm38g3pt01ghl07pg4qfgzju7"}) {
    nameOfSection
    title
    subtext
    date
    image {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.newsCommunityEvent);
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
      <p className="h-[20vh] w-full bg-slate-500 flex justify-center items-center leading-tight text-[20px] text-white">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
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
    <>
      <section className=" relative pt-[161px] flex justify-center items-center w-full h-auto ">
        <div className="static auto-container flex flex-col justify-center items-center w-full px-[15px] pt-[110px] pb-[20px] at500:px-[70px] my-0 mx-auto">
          <div className="flex  justify-center items-center w-full h-auto p-[10px]">
            <div className="flex gap-[30px] flex-col silver:flex-row justify-center items-center w-full h-auto ">
              <div
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="relative flex justify-start items-start h-[258px] w-full rounded-[12px]"
              >
                <LoadBlurHashImage
                  src={data.image.url}
                  blurHash="LKO2?U%2Tw=w]~RBVZRi};RPxuwH" // Replace with actual blurhash
                  className="w-full h-[258px] lg:w-[522px] object-cover rounded-[16px] overflow-hidden"
                  alt="Discover Your Potential"
                />
               
              </div>
              <div className="flex flex-col gap-[24px] justify-center items-start w-full max-w-[548px]">
                <div className="bg-[#8D12AB] p-3 rounded-l-[6px]">
                  <h2 className=" text-white leading-[24px] sm:leading-[52px] sm:text-[40px]">
                    {data.title}
                  </h2>
                </div>

                <span className="text-[#7E8EA2] txt5 !font-[84]">
                  {data.subtext}
                </span>
                <div>
                  <p className=" !font-Galano text-[#353F50] text-[14px] leading-[18.9px]">
                    {formatDate(data.date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partnership;
