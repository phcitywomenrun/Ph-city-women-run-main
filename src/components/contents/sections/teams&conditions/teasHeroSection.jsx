import React, { useState, useEffect } from "react";
import axios from "axios";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import "./team.css";


function LegalTeams() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const hygraphEndpoint =
     "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

   const query = `{
    termsAndCondition(where: {id: "cm3irug9h020607o7btmxlvg6"}) {
      nameOfPage
     
    }
  }`;

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.post(hygraphEndpoint, { query });
         setData(response.data.data.termsAndCondition);
         setLoading(false);
       } catch (err) {
         setError(err);
         setLoading(false);
       }
     };

     fetchData();
   }, []);

   

   if (loading)
     return (
       <p className="h-[20vh] w-full bg-slate-500 flex justify-center items-center leading-tight text-[20px] text-white">
         Loading...
       </p>
     );
   if (error)
     return (
       <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
         Let's get you back online
       </p>
     );

  return (
    <>
      <section className="hero mt-[150px] bg-blend-multiply relative flex flex-col justify-center items-center  w-full overflow-hidden">
        <div className="static z-30 auto-container flex flex-col justify-center items-center w-full px-[15px] h-[351px] py-[70px] at500:px-[70px] my-0 mx-auto">
          <div className=" flex justify-center items-center w-full">
            <h2 className="text-white !font-[176] sm:text-[32px] sm:leading-[32px]">
              {data.nameOfPage}
            </h2>
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
          <div className="h-[320px] absolute bottom-[-48px] right-[-0px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shape1}
              alt="background"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalTeams;
