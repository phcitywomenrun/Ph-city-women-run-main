import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../contents/styles/fadeLink.css"; // Ensure this is the correct path to your CSS
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Link = ({ to, children, onClick }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependencies array ensures it triggers on path change

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(to, { replace: false });
      setLoading(false);
    }, 100); // 1 second delay
    if (onClick) onClick();
  };

  return (
    <div className={`fade-link ${loading ? "fade-out" : "fade-in"}`}>
      <NavLink to={to} onClick={handleClick}>
        {children}
      </NavLink>
      {loading && (
        <div className="overlay">
          {/* <div className="loading">
            <AiOutlineLoading3Quarters size={50} />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Link;
