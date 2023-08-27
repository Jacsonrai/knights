import React from "react";

const Button = ({ btnLabel, btnSize }) => {
  return (
    <div className="uppercase transition-all duration-500 ease-in cursor-pointer hover:bg-white w-fit">
      <div
        data-testid="btnSize"
        className={
          // eslint-disable-next-line no-mixed-operators
          (btnSize === "small" &&
            "text-white hover:text-black border pt-2 pb-2 pl-4 pr-4") ||
          (btnSize === "medium" &&
            "text-white hover:text-black border pt-2 pb-2 pl-8 pr-8") ||
          (btnSize === "large" &&
            "hover:text-black border pt-2 pb-2 pl-20 pr-20")
        }
      >
        <p data-testid="btnLabel"> {btnLabel}</p>
      </div>
    </div>
  );
};

export default Button;
