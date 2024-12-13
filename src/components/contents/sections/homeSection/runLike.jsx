import React, { useState, useEffect } from "react";
import axios from "axios";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

const RunFast = ({ openOverlay }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   homepage(where: {id: "cke1ffer402co0156d87fjc5d"}) {
    id
    image1 {
      url
    }
    image2 {
      url
    }
    title1
    title2
    logo {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.homepage);
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
      <section className="relative bg-white flex justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] sm:px-[72px] my-0 mx-auto">
          <div className="z-10 flex flex-col gap-[40px] items-start w-full">
            <div className="relative flex justify-end items-end w-full h-auto  ">
              <div className="relative grid grid-cols-1 silver:grid-cols-2 gap-3 w-full h-full overflow-hidden">
                <div
                  data-aos="fade-down"
                  className=" relative flex flex-col justify-center items-center bg-cover h-[275px] w-full rounded-[16px]"
                  style={{
                    backgroundImage: `url(${data.image1.url})`,
                    backgroundColor: "#000000BF",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="flex flex-col justify-center items-center gap-[16px] absolute   z-30 ">
                    <img
                      className=" h-auto w-[44.64px] object-cover z-0"
                      src={data.logo.url}
                      alt="background"
                    />
                    <h4 className="text-white text-center w-[200px]">
                      {data.title1}
                    </h4>
                    <div className="flex justify-start w-full at500:w-[201px]">
                      <Button
                        onClick={openOverlay}
                        size="play"
                        className="!bg-[#FFFFFF] !text-[#121F30]"
                      >
                        Save Your Spot
                      </Button>
                    </div>
                  </span>
                </div>

                <div
                  data-aos="flip-left"
                  className=" relative flex flex-col justify-center items-center bg-cover  h-[275px] w-full rounded-[16px]"
                  style={{
                    backgroundImage: `url(${data.image2.url})`,
                    backgroundColor: "#000000BF",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="flex flex-col justify-center items-center gap-[16px] absolute   z-30 ">
                    <img
                      className=" h-auto w-[44.64px] object-cover z-0"
                      src={data.logo.url}
                      alt="background"
                    />
                    <h4 className="text-white text-center w-[200px]">
                      {data.title2}
                    </h4>
                    <div className="flex justify-start w-full at500:w-[201px]">
                      <Button
                        onClick={openOverlay}
                        size="play"
                        className="!bg-[#FFFFFF] !text-[#121F30]"
                      >
                        Save Your Spot
                      </Button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-[70px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shadowbackground}
              alt="background"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RunFast;
