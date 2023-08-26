import React from "react";
import logo from "../../../assets/union.png";
import appLogo from "../../../assets/appstore.png";
import playLogo from "../../../assets/playstore.png";
import { SocialLinkCard } from "../../surfaces/card";
const FooterLayout = () => {
  return (
    <div className="text-white pt-28 bg-pale-black">
      <div className="lg:grid lg:grid-cols-[minmax(350px,500px)_minmax(100px,200px)_auto] lg:border-t lg:border-b lg:border-pale-gray">
        <div className="text-center lg:text-left md:p-20 lg:w-[30rem]">
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <figure>
              <img src={logo} alt="" />
            </figure>
            <h4 className="text-3xl">TITANAIRES</h4>
          </div>
          <p className="pt-4 pl-2 pr-2 text-lg">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>

        <div className="flex flex-col pt-8 lg:pt-0">
          <SocialLinkCard cardLabel={"Instagram"} />
        </div>

        <div className="">
          <div className="pt-6 lg:pt-10 md:flex md:gap-10 md:justify-around md:pl-2">
            <span>
              <ul className="pb-10 text-center text-white md:text-left">
                <li className="pb-2 text-2xl font-semibold">Community</li>
                <li className="pb-2 text-lg capitalize">the war room</li>
                <li className="pb-2 text-lg capitalize">knights login</li>
                <li className="pb-2 text-lg capitalize">road map</li>
                <li className="pb-2 text-lg capitalize">investment reports</li>
              </ul>
            </span>

            <span>
              <ul className="pb-10 text-center text-white md:text-left">
                <li className="pb-2 text-2xl font-semibold">Contact</li>
                <li className="pb-2 text-lg capitalize">reach to us</li>
                <li className="pb-2 text-lg capitalize">buy membership</li>
                <li className="pb-2 text-lg capitalize">membership help</li>
              </ul>
            </span>

            <span>
              <ul className="pb-10 text-center text-white md:text-left">
                <li className="pb-2 text-2xl font-semibold">Legal</li>
                <li className="pb-2 text-lg capitalize">refud policy</li>
                <li className="pb-2 text-lg capitalize">privacy policy</li>
                <li className="pb-2 text-lg capitalize">cookies policy</li>
              </ul>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 p-4 pb-6 md:flex-row md:justify-end">
            <figure>
              <img src={playLogo} alt="" className="md:w-[8rem]" />
            </figure>

            <figure>
              <img src={appLogo} alt="" className="md:w-[8rem]" />
            </figure>
          </div>
        </div>
      </div>

      <div className="border-t md:grid md:grid-cols-2 md:pt-4 md:pl-28 md:pr-28">
        <div className="flex flex-wrap justify-between gap-2 p-4 md:justify-center text-pale-gray md:p-0 ">
          <p>knight portal</p>
          <p>knight policies</p>
          <p>term & conditions</p>
        </div>
        <h6 className="pb-4 text-lg text-center md:row-start-1 md:text-left">
          © 2023 Knights. All right reserved.
        </h6>
      </div>
    </div>
  );
};

export default FooterLayout;
