import React from "react";

const HamburgerIcon = ({ width = 24, height = 24, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      id="hamburger-menu"
    >
      <path
        fill="#ffffff"
        d="M8.667 15h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 37h30a1 1 0 100-2h-30a1 1 0 100 2zM8.667 26h30a1 1 0 100-2h-30a1 1 0 100 2z"
      ></path>
    </svg>
  );
};

export default HamburgerIcon;
