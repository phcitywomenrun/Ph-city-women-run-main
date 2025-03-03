import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Countdown from "./coutDownButton";
import SaveUrPotForm from "../../form/saveUrPot";

function ButtoncountDown({ className, size, buttonText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  homepage(where: {id: "cm34sksea08cp07pnkzjsinh1"}) {
    
    schedule
    image1 {
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
      <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
      <Countdown
        targetDate={data.schedule}
        openOverlay={openOverlay}
        className={className}
        size={size}
        buttonText={buttonText}
      />
    </>
  );
}

export default ButtoncountDown;
