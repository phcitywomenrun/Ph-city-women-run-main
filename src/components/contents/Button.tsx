import React, { FC } from "react";
import PropTypes from "prop-types";
import "./styles/_button.css";

interface ButtonProps {
  children: React.ReactNode;

  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  size?: "small" | "cdn" | "arrow" | "sign" | "play" | "medium" | "large";
  color?: "primary" | "secondary" | "danger";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {
    onClick;
  },
  type = "button",
  disabled = false,
  className = "",
  size = "medium",
  color = "primary",
}) => {
  return (
    <button
      className={`btn ${size} ${color} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "small",
    "cdn",
    "sign",
    "arrow",
    "play",
    "medium",
    "large",
    
  ]),
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

export default Button;
