import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
//importing svg icon
import { HamburgerIcon } from "../../surfaces/icon";
//importing button from custom button
import Button from "../../input/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  //state for small-size menu
  const [open, setOpen] = useState(false);
  //state to get inner width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //function to handle window width
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
      <div className="flex items-center justify-between pt-4 pb-4 pl-10 pr-10 text-white bg-pale-black lg:pl-32 lg:pr-32 lg:pt-4 lg:pb-4">
        <Link to={"/"}>
          <div className="flex items-center gap-2 text-lg font-medium">
            <figure>
              <img alt="logo" src={logo} className="w-6" />
            </figure>
            <p className="uppercase">knights</p>
          </div>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-10 lg:gap-32">
          <ul className="flex items-center gap-5 uppercase">
            <Link to={"/"}>
              <li className="cursor-pointer">The war room</li>
            </Link>
            <Link to={"/news"}>
              <li className="cursor-pointer">news</li>
            </Link>
            <Link to={"/contact"}>
              <li className="cursor-pointer">reach to us</li>
            </Link>
          </ul>
          <ul className="flex items-center gap-5 uppercase">
            <Link to={"/login"}>
              <li className="border-b cursor-pointer ">knight login</li>
            </Link>

            <li>
              <Button btnLabel={"join us"} btnSize={"small"} />
            </li>
          </ul>
        </div>
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HamburgerIcon color="white" width={40} height={40} />
        </div>
      </div>

      <div className="overflow-hidden text-white uppercase ">
        <ul
          className={`flex flex-col bg-pale-black ${
            open && `h-screen`
          }  text-center text-xl absolute z-[2] top-[-500px] transition-all ease-in 
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
