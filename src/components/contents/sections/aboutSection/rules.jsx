import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import background from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";

function Rules() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    theRun(where: {id: "cm2yk3itv0eqk07pf07084z7d"}) {
      id
      nameOfSection
      subtext3
      rulesAndRegulationsPdf {
      url
    }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.theRun);
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

  const handleDownload = () => {
    if (data?.rulesAndRegulationsPdf?.url) {
      const link = document.createElement("a");
      link.href = data.rulesAndRegulationsPdf.url;
      link.target = "_blank"; // Opens in a new window/tab
      link.download = "Rules.pdf"; // Suggested filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading)
    return (
      <p className="h-[20vh] custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] custom-blur-shadow  flex justify-center items-center leading-tight text-[20px] text-white w-full">
        Let's get you back online
      </p>
    );

  return (
    <section className="relative flex flex-col justify-center items-center bg-[#EDF5FD] py-[35px] w-full overflow-hidden">
      <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[72px] my-0 mx-auto">
        <div className="flex z-20 flex-col silver:flex-row justify-between items-center w-full">
          <div className="flex gap-[4px] flex-col justify-center items-start w-full">
            <h1 className="text-[#5C176F]">{data.nameOfSection}</h1>
            <span className="font-[84] text-[16px] text-[#353F50] leading-[24px]">
              {data.subtext3}
            </span>
          </div>
          <div className="flex justify-start silver:justify-center items-start w-full">
            <div
              data-aos="zoom-in"
              className="flex pt-[20px] justify-start w-full sm:max-w-[206px]"
            >
              <Button
                size="play"
                className="!bg-[#5C176F]"
                onClick={handleDownload}
              >
                <span className="z-20">Download</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end items-end bottom-[-212px] w-full auto-container">
        <span className="flex shape15 relative right-[292px] w-[200px] h-[367px] object-cover"></span>
      </div>
      <div className="absolute flex justify-start items-start bottom-[-148px] w-full auto-container">
        <span className="shape14 w-[200px] h-[367px] relative left-[95px] flex"></span>
      </div>
      <div className="absolute flex justify-center items-center bottom-[-134px] w-full auto-container">
        <img
          className="z-0 relative right-[-125px] w-[353px] h-auto object-cover opacity-[45%]"
          src={background}
          alt=""
        />
      </div>
    </section>
  );
}

export default Rules;
