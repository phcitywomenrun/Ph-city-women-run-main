import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";

function OurSpeakers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(12); // Adjust limit as needed

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   ourSpeakers {
      id
      objective
      nameOfSpeaker
      title
      aim
      coverImage {
        url
      }
      color {
      hex
    }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.ourSpeakers);
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
      <p className="h-[20vh] flex custom-blur-shadow  justify-center items-center leading-tight text-[20px] text-white">
     
      </p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex custom-blur-shadow  justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
    );

  return (
    <section className="relative flex flex-col justify-center items-center  bg-white py-[35px]  w-full overflow-hidden">
      <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
        <div className="flex gap-[20px] z-20 flex-col  justify-between items-center w-full ">
          <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
            <h2 className="text-[#1F2126] leading-[24px] sm:leading-[52px] sm:text-[40px]">
              Who will be Speaking
            </h2>
          </div>
          <div className="grid grid-cols-1 at500:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-y-3 gap-x-2">
            {data.slice(0, postLimit).map((ourSpeakers) => (
              <div key={ourSpeakers.id} className="flex w-full">
                {ourSpeakers.coverImage && (
                  <div
                    style={{
                      backgroundImage: `url(${ourSpeakers.coverImage.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    data-aos="zoom-in"
                    className="flex gap-[10px]  flex-col justify-end rounded-[12px]  h-[499px] overflow-hidden w-full"
                  >
                    <div
                      style={{ backgroundColor: ourSpeakers.color.hex }}
                      className="flex  gradient-border  p-[20px] flex-col "
                    >
                      <div className="max-w-[251px]">
                        <h6 className="text-[#E5E7EB] z-40 !text-[24px] !font-semibold">
                          {ourSpeakers.nameOfSpeaker}
                        </h6>
                        <span className="text-[#E5E7EB] text-[16px] leading-[24px]">
                          {ourSpeakers.title}
                        </span>
                      </div>
                      <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px]">
                        {ourSpeakers.objective}
                      </span>
                      <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px] ">
                        {ourSpeakers.aim}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSpeakers;
