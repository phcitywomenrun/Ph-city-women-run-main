import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/b1848d86e95001e46a7bb77f22602c45.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";

import Button from "../../Button";

function BecomeAteam({ openVolunteerform }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
     volunteer(where: {id: "cm3f98kkw16b107o61mgn19kg"}) {
    title
    subtitle
    subtext
    schedule
    slideText
    coverImage {
      url
    }
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
    <>
      <section className="bg-white relative flex flex-col justify-center items-center  w-full">
        <div className="static z-30 auto-container flex flex-col justify-center items-center w-full px-[15px] py-[70px] at500:px-[72px] my-0 mx-auto">
          <div className="relative flex gap-[20px] flex-col silver:flex-row justify-center items-center w-full">
            <div className=" flex flex-col justify-start items-start gap-[10px] sm:gap-[22px] w-full">
              <div className="flex bg-[#5C176F] justify-start items-start lg:w-[500px] px-[24px] py-[10px] rounded-r-[12px]">
                <h2 className="text-white text-[20px] !leading-[24px] sm:!leading-[32px] sm:!text-[24px]">
                  {data.title}
                </h2>
              </div>
              <div className="flex gap-[40px] flex-col justify-start items-start w-full">
                <span className="text-[#4E5A6C] max-w-[456px] z-10">
                  {data.subtext}
                </span>
                <div
                  data-aos="zoom-in"
                  className="flex justify-start w-full at500:w-[201px] z-40"
                >
                  {/* <Button
                    onClick={openVolunteerform}
                    size="play"
                    className="!bg-[#5C176F]"
                  >
                    Register Now
                  </Button> */}
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start md:h-[293px] w-full rounded-[12px]"
            >
              <LoadBlurHashImage
                src={data.coverImage.url}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[258px] lg:w-[522px] object-cover rounded-[16px] overflow-hidden"
                alt="Discover Your Potential"
              />
            </div>
          </div>
          <div className="h-[320px] absolute bottom-[81px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shape1}
              alt="background"
            />
          </div>
          <div className="h-[320px] absolute bottom-[-48px] left-[-42px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shape1}
              alt="background"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BecomeAteam;
