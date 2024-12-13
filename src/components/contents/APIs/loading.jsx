import React from "react";
import "./load.css"; // Ensure this is the correct path to your CSS
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="overlay">
      <div className="loading">
        <AiOutlineLoading3Quarters size={50} className="spinner" />
      </div>
    </div>
  );
}

export default Loading;
