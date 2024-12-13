import React from "react";
import video from "../../image/homeImg/a011595e6083594c8f66c18651dfd68d.gif";
const VideoComponent = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <video className=" sm:h-screen  lg:w-[852px] !w-full" controls>
        <source src={video} type="video/mp4" />
        <div>Your browser does not support the video tag.</div>
      </video>
    </div>
  );
};

export default VideoComponent;
