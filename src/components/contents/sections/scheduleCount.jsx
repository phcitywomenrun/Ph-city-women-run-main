//

import React, { useState, useEffect } from "react";
import "../styles/countdown.css";
import Button from "../Button";

const ScheduleCountdown = ({ targetDate }) => {
  // Function to calculate the time left
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(targetDate); // Ensure proper date format
    const difference = eventDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {}; // Return empty object if the event has passed
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="countdown-container flex-col gap-[30px] silver:flex-row ">
      <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-4 gap-x-[20px] gap-y-3 w-full">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="w-full flex flex-col-reverse justify-center items-center sm:pr-[23px] border-solid  border-x-[2px] silver:border-x-0 silver:border-r-[2px] border-[#C8D2DF] "
          >
            <span className=" font-[84] text-center text-[14px] leading-[24px]">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
            <h3 className="font-Geist text-[#FFFFFF] font-extrabold text-center text-[24px] leading-[32px]">
              {timeLeft[unit] !== undefined ? timeLeft[unit] : "00"}
            </h3>
          </div>
        ))}
      </div>

      {/* Optional: Add a message if the countdown has ended */}
      {Object.keys(timeLeft).length === 0 && (
        <p className="text-center text-[14px] leading-[24px] text-white">
          Event has ended!
        </p>
      )}
    </div>
  );
};

export default ScheduleCountdown;
