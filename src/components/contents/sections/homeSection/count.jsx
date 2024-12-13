import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import imageTwo from "../../image/homeImg/dcc8aa87baa34c7dea8c7e8fa6006213.jpeg";
import Countdown from "../coutDown";
import Button from "../../Button";
import SaveUrPotForm from "../../../form/saveUrPot";

function Thecount() {
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
    <section
      className="relative flex flex-col justify-center items-center bg-fixed bg-cover bg-blend-multiply bg-[#00000033] silver:h-[243px] w-full"
      style={{
        backgroundImage: `url(${data.image1.url})`,
        backgroundColor: "#000000BF",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
      <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[25px] sm:py-[10px] sm:px-[72px] my-0 mx-auto">
        <div className="bg-[#8D12AB] flex justify-center items-center rounded-[16px] silver:py-[4px] p-[15px] sm:px-[40px] w-full">
          <Countdown targetDate={data.schedule} openOverlay={openOverlay} />
        </div>
      </div>
    </section>
  );
}

export default Thecount;
