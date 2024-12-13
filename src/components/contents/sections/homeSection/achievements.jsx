import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRunning } from "react-icons/fa";
import { FaRoad, FaRuler } from "react-icons/fa";
import { GiPathDistance, GiVideoConference } from "react-icons/gi";

function AchievementsSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ref: nairaRef, inView: nairaInView } = useInView({
    triggerOnce: true,
  });
  const { ref: tripsRef, inView: tripsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: consultantsRef, inView: consultantsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: clientsRef, inView: clientsInView } = useInView({
    triggerOnce: true,
  });

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  homepage(where: {id: "cm2lshq67068l07pnzywod0ju"}) {
    
    runningEvents
    conference11
    days
    runners
    subtext1
    subtext2
    subtext3
    subtext4
    subtitle1
    subtitle2
    subtitle3
    subtitle4
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
    <section className="relative flex flex-col justify-center items-center  bg-[#203749] py-[100px] w-full overflow-hidden">
      <div className="static z-10 auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[30px] sm:py-[10px] sm:px-[72px] my-0 mx-auto">
        <div className="grid at594:grid-cols-2 silver:grid-cols-4 gap-y-5 justify-center items-center gap-x-[32px] w-full">
          <div className="flex flex-col justify-center items-center gap-[8px] w-full">
            <span>
              <FaRoad size={50} className="text-white" />
            </span>
            <div className="counter" ref={nairaRef}>
              {nairaInView && (
                <CountUp
                  end={data.runningEvents}
                  suffix={data.subtext1}
                  duration={3}
                />
              )}
            </div>
            <span className="txt3 capitalize">{data.subtitle1}</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-[8px]  w-full">
            <span>
              <GiVideoConference size={50} className="text-white" />
              {/* <img
                src={icon2}
                className="w-[46px] h-auto object-cover"
                alt="dollor sign"
              /> */}
            </span>
            <div className="counter" ref={tripsRef}>
              {tripsInView && (
                <CountUp
                  end={data.conference11}
                  suffix={data.subtext2}
                  duration={3}
                />
              )}
            </div>
            <span className="txt3 capitalize">{data.subtitle2}</span>
          </div>

          <div className="flex flex-col justify-center gap-[8px] items-center w-full">
            <span>
              <GiPathDistance size={50} className="text-white" />
              {/* <img
                src={icon3}
                className="w-[46px] h-auto object-cover"
                alt="dollor sign"
              /> */}
            </span>
            <div className="counter" ref={consultantsRef}>
              {consultantsInView && (
                <CountUp end={data.days} suffix={data.subtext3} duration={3} />
              )}
            </div>
            <span className="txt3 capitalize">{data.subtitle3}</span>
          </div>

          <div className="flex flex-col justify-center gap-[8px] items-center w-full">
            <span>
              <FaRunning size={50} className="text-white" />
              {/* <img
                src={icon4}
                className="w-[46px] h-auto object-cover"
                alt="dollor sign"
              /> */}
            </span>
            <div className="counter" ref={clientsRef}>
              {clientsInView && (
                <CountUp
                  end={data.runners}
                  suffix={data.subtext4}
                  duration={3}
                />
              )}
            </div>
            <span className="txt3 capitalize">{data.subtitle4}</span>
          </div>
        </div>
      </div>
      <div className=" z-auto absolute flex justify-end items-end bottom-[-4px]  w-full auto-container">
        <span className="flex shape11 relative right-[189px] w-[200px] h-[367px] object-cover "></span>
      </div>
      <div className="z-[1] absolute flex justify-start items-start bottom-[-4px]  w-full auto-container ">
        <span className=" w-[200px] h-[367px] relative left-[95px]  flex shape12 "></span>
      </div>
    </section>
  );
}

export default AchievementsSection;
