import React, { useState, useEffect } from "react";
import "../styles/countdown.css";
import Button from "../Button";

const Countdown = ({ targetDate, openOverlay }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(targetDate);
    const difference = eventDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : null; // Return null if the event has ended
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const isEventEnded = timeLeft === null; // Check if the event has ended

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container flex-col gap-[30px] silver:flex-row">
      <div className="flex w-full max-w-[300px] silver:border-solid border-none silver:border-r-[2px] border-[#C8D2DF]">
        <span className="font-Geist text-left font-extrabold text-[30px] leading-[48px]">
          Not Registered?
        </span>
      </div>

      <div className="grid justify-center items-center grid-cols-1 at500:grid-cols-2 silver:grid-cols-4 gap-x-[20px] gap-y-3 w-full">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="time-box flex flex-col justify-center items-center at500:border-solid border-none border-x-[2px] silver:border-x-0 silver:border-r-[2px] border-[#C8D2DF] rounded-[10px] silver:rounded-none"
          >
            <span className="font-[84] text-left text-[14px] leading-[24px]">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
            <h3 className="time-value">{timeLeft ? timeLeft[unit] : "00"}</h3>
          </div>
        ))}
      </div>

      {/* Show event ended message when the countdown is over */}
      {/* {isEventEnded && (
        <p className="text-center text-[14px] leading-[24px] text-white">
          Event has ended!
        </p>
      )} */}

      <div
        data-aos="zoom-in"
        className="flex  justify-start w-full silver:w-[331px] z-40"
      >
        <Button
          onClick={openOverlay}
          size="play"
          className={`!bg-[#5C176F] ${
            isEventEnded ? "opacity-50 cursor-not-allowed !text-[14px] !px-2" : ""
          }`}
          disabled={isEventEnded}
        >
          {isEventEnded ? "Registration closed!" : "Register"}
        </Button>
      </div>
    </div>
  );
};

export default Countdown;
