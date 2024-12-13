import React from "react";
import { useEffect } from "react";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shape2 from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import LatestBlogs from "../../APIs/latestBlog";
import Link from "../../link";

function CommunitEvents() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto ">
        <div className=" z-auto absolute flex justify-end items-end top-[-148px]  w-full auto-container">
          <span className="flex shape11 relative right-[189px] w-[200px] h-[367px] object-cover "></span>
        </div>
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col justify-center items-start w-full gap-[40px] ">
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="60000"
              data-aos-easing="ease-in-out"
              className="flex bg-[#8C12AB] p-4 flex-col justify-center items-start rounded-r-[8px]"
            >
              <h2 className="text-white !leading-[24px] sm:!leading-[52px] !text-[20px] sm:!text-[40px]">
                NEWS & COMMUNITY EVENTS
              </h2>
            </div>
            <LatestBlogs />

            <div className="flex z-40 justify-center items-center w-full">
              <Link to="/news">
                <div
                  data-aos="zoom-in"
                  className="flex pt-[20px] justify-start w-[201px] z-40"
                >
                  <Button size="play" className="z-40">
                    Explore all
                  </Button>
                </div>
              </Link>
            </div>
          </div>
          <div className=" absolute top-[4px] flex justify-start items-start w-full auto-container">
            <img
              className="relative flex left-[-687px] h-auto w-[1288px] opacity-[30%] object-contain"
              src={shape2}
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CommunitEvents;
