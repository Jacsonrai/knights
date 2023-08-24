import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
// import { HamburgerIcon } from "../../surfaces/icon";
import Hamburger from "../../surfaces/icon/hamburgerIcon";
import Button from "../../input/button";
const NavBar = () => {
  //state for small-size menu
  const [open, setOpen] = useState(false);
  //state to get inner width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(open);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup by removing event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth >= "768") {
      setOpen(false);
    }
  }, [screenWidth]);
  return (
    <>
      <div className="bg-pale-black flex text-white justify-between lg:pl-20 lg:pr-20 lg:pt-4 lg:pb-4 pl-10 pr-10 pt-4 pb-4">
        <div className="flex items-center gap-2 text-lg font-medium">
          <figure>
            <img alt="logo" src={logo} className="w-6" />
          </figure>
          <p className="uppercase">knights</p>
        </div>
        <div className="hidden md:flex md:items-center md:gap-10 lg:gap-32">
          <ul className="flex uppercase gap-10 items-center">
            <li className="cursor-pointer">The war room</li>
            <li className="cursor-pointer">news</li>
            <li className="cursor-pointer">reach to us</li>
          </ul>
          <ul className="flex uppercase gap-5 items-center">
            <li className=" border-b cursor-pointer">knight login</li>
            <li>
              <Button btnLabel={"join us"} btnSize={"small"} />
            </li>
          </ul>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Hamburger color="white" width={40} height={40} />
        </div>
      </div>

      <div className=" bg-pale-black text-white uppercase">
        <ul
          className={`flex justify-center flex-col text-center text-xl absolute z-[1] top-[-500px] transition-all ease-in 
          ${open ? `duration-500` : `duration-0`} 
          ${open ? `opacity-100` : `opacity-0`} 
          ${open && `top-[50px]`}
          `}
        >
          <li
            className={`p-8 border-b w-screen cursor-pointer opacity-0 transition-all ease-in ${
              open && `opacity-100`
            }`}
          >
            the war room
          </li>
          <li
            className={`p-8 border-b w-screen cursor-pointer opacity-0 transition-all ease-in ${
              open && `opacity-100`
            }`}
          >
            News
          </li>
          <li
            className={`p-8 border-b w-screen cursor-pointer opacity-0 transition-all ease-in ${
              open && `opacity-100`
            }`}
          >
            reach to us
          </li>
          <li
            className={`p-8 border-b w-screen cursor-pointer opacity-0 transition-all ease-in ${
              open && `opacity-100`
            } border-b`}
          >
            knightlogin
          </li>
          <li
            className={`p-8  w-screen opacity-0 transition-all ease-in ${
              open && `opacity-100`
            } `}
          >
            <Button btnLabel={"join us"} btnSize={"small"} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
