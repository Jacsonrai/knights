import React from "react";

const HorseIcon = ({ width = 24, height = 24, color = "currentColor" }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30.000000 22.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,22.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      ></g>
    </svg>
  );
};

export default HorseIcon;
