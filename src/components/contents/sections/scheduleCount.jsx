import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/countdown.css";
import { useLocation } from "react-router-dom";
import Button from "../Button";

const ScheduleCountdown = ({ targetDate, openOverlay }) => {
  const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    volunteer(where: { id: "cm3j1tx7m07tl08o0lf69po3m" }) {
      title
      subtitle
      subtext
      schedule
      slideText
      coverImage { url }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.volunteer || {});
        setLoading(false);
      } catch (err) {
        setError("Let's get you back online");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const eventDate = new Date(targetDate);
      const difference = eventDate - now;

      if (difference <= 0) {
        setIsButtonDisabled(true);
        return {};
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (loading)
    return (
      <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );

  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center text-[20px] text-white">
        {error}
      </p>
    );

  return (
    <>
      <div className="flex gap-[20px] flex-col silver:flex-row justify-center items-start rounded-[16px] silver:py-[4px] w-full max-w-[685px]">
        {data?.subtext && (
          <span className="font-Geist text-[#FFFFFF] font-extrabold text-[24px] leading-[32px] silver:w-[386px]">
            {data.subtext}
          </span>
        )}
        <div className="countdown-container flex-col silver:flex-row gap-[20px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-[20px] gap-y-3 w-full">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div
                key={unit}
                className="w-full flex flex-col-reverse items-center border-x-[2px] silver:border-x-0 silver:border-r-[2px] border-[#C8D2DF]"
              >
                <span className="text-[14px] leading-[24px]">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </span>
                <h3 className="font-Geist text-[#FFFFFF] font-extrabold text-[24px] leading-[32px]">
                  {timeLeft[unit] !== undefined ? timeLeft[unit] : "00"}
                </h3>
              </div>
            ))}
          </div>
          {Object.keys(timeLeft).length === 0 && (
            <p className="text-center text-[14px] text-white">
              Event has ended!
            </p>
          )}
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex justify-start w-full at500:w-[201px]"
      >
        <Button onClick={openOverlay} size="play" disabled={isButtonDisabled}>
          <span>
            {pathname === "/volunteer" ? "Volunteer Now" : "Register Now"}
          </span>
        </Button>
      </div>
    </>
  );
};

export default ScheduleCountdown;
