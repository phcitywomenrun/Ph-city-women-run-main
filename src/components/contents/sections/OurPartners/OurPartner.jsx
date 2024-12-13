import React, { useState, useEffect } from "react";
import axios from "axios";
import logoOne from "../../image/logo/c1d692ddb15406642e43a33e0fc1c23e.png";
import logoTwo from "../../image/logo/47c6482ff55474d3e027fa9031665023.png";
import logoThree from "../../image/logo/b0b1af108d2e2689d1d674880fbe5c77.png";
import logofour from "../../image/logo/9ab71b9b81bed1d6a8cf79dfc1eb4cce.png";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shape2 from "../../image/shapes/Frame 11686560754.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Button from "../../Button";

function OurPartners() {
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
        <div className="static gap-[24px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <h4 className=" text-[#111E2F] !leading-[52px]"> Partners</h4>
          <div className=" flex flex-col sm:flex-row justify-center items-center w-full gap-[24px]">
            {data.slice(0, postLimit).map((ourPartners) => (
              <div
                key={ourPartners.id}
                className="flex justify-center items-center w-full"
              >
                {ourPartners.logo && (
                  <img
                    className="h-[64px] w-[228.57px] object-contain"
                    src={ourPartners.logo.url}
                    alt=""
                  />
                )}
              </div>
            ))}
            {/* <img
              className="h-[64px] w-[54.36px] object-contain"
              src={logoTwo}
              alt=""
            />
            <img
              className="h-[64px] w-[130.03px] object-contain"
              src={logoThree}
              alt=""
            />
            <img
              className="h-[56px] w-[253.73px] object-contain"
              src={logofour}
              alt=""
            /> */}
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

export default OurPartners;
