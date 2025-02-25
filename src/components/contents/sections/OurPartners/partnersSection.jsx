import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shape2 from "../../image/shapes/Frame 11686560754.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Button from "../../Button";

function PartnersSection() {
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
    <>
      <section className="relative bg-[#F9FBFC] flex justify-center items-center w-full h-auto sm:h-[342px] overflow-hidden">
        <div className="static gap-[24px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[50px] at500:px-[72px] my-0 mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-5 items-center w-full gap-x-5 gap-y-5">
            {data.slice(0, postLimit).map((ourPartners, index, array) => (
              <div key={ourPartners.id} className="w-[200px]">
                {ourPartners.logo && (
                  <img
                    className={`w-[182px] object-cover h-auto`}
                    src={ourPartners.logo.url}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>

          <img
            className=" absolute left-0 top-[26px] h-[480.07px] w-[150.41px] object-contain"
            src={shape1}
            alt="shape"
          />
          <div className=" absolute  top-[265px] flex justify-end items-end sm:w-[700px]">
            <img
              className="  h-[480.07px] w-[150.41px] object-contain"
              src={shape2}
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnersSection;
