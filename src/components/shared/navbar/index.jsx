import React from "react";
import logo from "../../../assets/logo.png";
const NavBar = () => {
  return (
    <div className="bg-pale-black flex text-white justify-between pl-20 pr-20 pt-4 pb-4">
      <div className="flex items-center gap-2 text-lg font-medium">
        <figure>
          <img alt="logo" src={logo} className="w-6" />
        </figure>
        <p className="uppercase">knights</p>
      </div>
      <div className="flex items-center gap-40">
        <ul className="flex uppercase gap-10 items-center">
          <li className="cursor-pointer">The war room</li>
          <li>news</li>
          <li>reach to us</li>
        </ul>
        <ul className="flex uppercase gap-5 items-center">
          <li>knight login</li>
          <li>join us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
