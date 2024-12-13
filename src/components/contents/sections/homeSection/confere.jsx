import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/b1848d86e95001e46a7bb77f22602c45.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../../Button";

const ConferenceSection = ({ openConferenceform }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
   homepage(where: {id: "cm2lrqtrt04ni07pnxxj25avr"}) {
    id
    image1 {
      url
    }
    
    title1
    subtitle1
    
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
      <section className="bg-white relative flex flex-col justify-center items-center  w-full">
        <div className="static z-30 auto-container flex flex-col justify-center items-center w-full px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div
            data-aos="zoom-in"
            className="relative flex flex-col justify-center items-center bg-fixed bg-cover rounded-[24px] py-[200px] h-[520px] w-full"
            style={{
              backgroundImage: `url(${data.image1.url})`,
              backgroundColor: "#000000BF",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute  flex flex-col justify-start items-start px-[20px] at500:px-[60px] gap-[10px] sm:gap-[22px]  w-full">
              <div className="flex bg-[#5C176F] justify-start items-start md:w-[500px] px-[24px] py-[10px] rounded-[12px] md:rounded-[0] md:rounded-l-[12px]">
                <h2 className="text-white text-[20px] !leading-[24px] sm:!leading-[52px] sm:!text-[40px]">
                  {data.title1}
                </h2>
              </div>
              <div className="flex gap-[40px] flex-col justify-start items-start w-full">
                <span className="text-white max-w-[456px] z-10">
                  {data.subtitle1}
                </span>
                <div
                  data-aos="zoom-in"
                  className="flex pt-[20px] justify-start w-full at500:w-[201px] z-40"
                >
                  <Button
                    onClick={openConferenceform}
                    size="play"
                    className="!bg-[#5C176F]"
                  >
                    Register Now
                  </Button>
                </div>
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
        </div>
      </section>
    </>
  );
}

export default ConferenceSection;
