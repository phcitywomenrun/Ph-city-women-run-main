import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";

const Requirements = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
     volunteer(where: {id: "cm3fpiqah1ie907pixhpuklqm"}) {
       title
       requirement {
         title
         description
         image {
           url
         }
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
    <section className="flex flex-col justify-center items-center relative bg-[#F9FBFC] rounded-[16px] w-full">
      <div className="static z-30 gap-[30px] auto-container flex flex-col justify-center items-start w-full px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
        <div className="flex bg-[#5C176F] justify-start items-start lg:w-[380px] px-[24px] py-[10px] rounded-r-[12px]">
          <h2 className="text-white uppercase text-[20px] !leading-[24px] sm:!leading-[32px] sm:!text-[24px]">
            {data.title}
          </h2>
        </div>

        <div className="relative flex gap-[20px] flex-col silver:flex-row justify-center items-center w-full">
          {data.requirement && (
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
              {data.requirement.map((item, idx) => (
                <div
                  key={idx}
                  className="requirement-item flex flex-col gap-[10px] justify-center items-center mb-4 "
                >
                  <div className="relative flex justify-start items-start w-full max-w-[200px] max-h-[200px]">
                    <LoadBlurHashImage
                      src={item.image.url}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash if available
                      className="w-full object-cover overflow-hidden"
                      alt={item.title}
                    />
                  </div>
                  <span className="text-[#8C12AB] font-[125] text-[18px] text-center leading-[20px] sm:leading-[24.8px] sm:text-[20px] max-w-[230px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-[320px] absolute bottom-[81px] z-0">
          <img
            className="w-full object-cover z-0"
            src={shape1}
            alt="background shape"
          />
        </div>
        <div className="h-[320px] absolute bottom-[-48px] left-[-42px] z-0">
          <img
            className="w-full object-cover z-0"
            src={shape1}
            alt="background shape"
          />
        </div>
      </div>

    
    </section>
  );
};

export default Requirements;
