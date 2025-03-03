import React, { useState, useEffect } from "react";
import "../../contents/styles/countdown.css";
import Button from "../../contents/Button";

const Countdown = ({
  targetDate,
  openOverlay,
  className,
  size,
  buttonText,
}) => {
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
      : null; // Return null if the event has passed
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const isEventEnded = timeLeft === null; // Check if event has ended

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [targetDate]);

  return (
    <Button
      onClick={openOverlay}
      className={`${className} ${
        isEventEnded ? "opacity-50 cursor-not-allowed" : ""
      }`}
      size={size}
      disabled={isEventEnded}
    >
      {isEventEnded ? "Registration closed!" : buttonText}
    </Button>
  );
};

export default Countdown;
