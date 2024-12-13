import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsAlarm } from "react-icons/bs";
import imageOne from "../../image/homeImg/d77978a2e5ff892c935ba1afb6e31a5e.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function ContactHeroSection() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const hygraphEndpoint =
//     "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

//   const query = `{
//    conference(where: {id: "cm32ykaor23xh06oczo6juwh5"}) {
//     id
    
    
//     title
//     time
//     subtitle1
//     image1 {
//       url
//     }
    
//   }
// }`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(hygraphEndpoint, { query });
//         setData(response.data.data.conference);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

  

//   if (loading)
//     return (
//       <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white">
//         Loading...
//       </p>
//     );
//   if (error)
//     return (
//       <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
//         Let's get you back online
//       </p>
//     );

  return (
    <>
      <section className="relative flex flex-col justify-center items-center  bg-[#EDF5FD] h-auto w-full overflow-hidden">
        <div className="static flex flex-col justify-center items-center w-full  ">
          <iframe
            title="Google Map"
            className="w-full h-[70vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6595541533525!2d7.0127830722789835!3d4.82838944054299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdc4e414189f%3A0xca99ef233f96a1a8!2sStadium%20Rd%2C%20Rumuola%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1730123022943!5m2!1sen!2sng"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default ContactHeroSection;
