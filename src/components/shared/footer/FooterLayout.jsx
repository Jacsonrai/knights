import React from "react";
import logo from "../../../assets/union.png";
import appLogo from "../../../assets/appstore.png";
import playLogo from "../../../assets/playstore.png";
import { SocialLinkCard } from "../../surfaces/card";
import { Link } from "react-router-dom";
const FooterLayout = (props) => {
  const { socialLinksData, quickLinksData } = props;

  return (
    <div className="text-white pt-28 bg-pale-black">
      <div className="lg:grid lg:grid-cols-[minmax(350px,500px)_minmax(100px,200px)_auto] lg:border-t lg:border-b lg:border-pale-gray">
        <div className="text-center lg:text-left md:p-20 lg:w-[30rem]">
          <Link to={"/"}>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <figure>
                <img src={logo} alt="" />
              </figure>
              <h4 className="text-3xl font-[Theblowaregular] uppercase">
                TITANAIRES
              </h4>
            </div>
          </Link>

          <p className="pt-4 pl-2 pr-2 text-lg">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>

        <div className="flex flex-col pt-8 lg:pt-0">
          {socialLinksData.length > 0 &&
            socialLinksData.map((social, i) => (
              <div key={i} data-testid="setlink">
                <SocialLinkCard cardLabel={social.name} setlink={"/#"} />
              </div>
            ))}
        </div>

        <div className="">
          <div className="pt-6 lg:pt-10 md:flex md:gap-10 md:justify-around md:pl-2">
            <span>
              <ul className="pb-10 text-center text-white md:text-left">
                <li className="pb-2 text-2xl font-semibold">Community</li>
                {quickLinksData.length > 0 &&
                  quickLinksData[0].map((link, i) => (
                    <Link to={link.path} data-testid="link">
                      <li className="pb-2 text-lg capitalize" key={i}>
                        {link.name}
                      </li>
                    </Link>
                  ))}
              </ul>
            </span>

            <span>
              <ul className="pb-10 text-center text-white md:text-left">
                <li className="pb-2 text-2xl font-semibold">Contact</li>
                {quickLinksData.length > 0 &&
                  quickLinksData[1].map((link, i) => (
                    <Link to={link.path} data-testid="link1">
                      <li className="pb-2 text-lg capitalize" key={i}>
                        {link.name}
                      </li>
                    </Link>
                  ))}
              </ul>
            </span>

            <span>
              <ul className="pb-10 text-center text-white md:text-left">
                <li className="pb-2 text-2xl font-semibold">Legal</li>
                {quickLinksData.length > 0 &&
                  quickLinksData[2].map((link, i) => (
                    <Link to={link.path} data-testid="link2">
                      <li className="pb-2 text-lg capitalize" key={i}>
                        {link.name}
                      </li>
                    </Link>
                  ))}
              </ul>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 p-4 pb-6 md:flex-row md:justify-end">
            <Link to={"#"}>
              <figure>
                <img src={playLogo} alt="" className="md:w-[8rem]" />
              </figure>
            </Link>

            <Link to={"#"}>
              <figure>
                <img src={appLogo} alt="" className="md:w-[8rem]" />
              </figure>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t md:border-t-0 md:grid md:grid-cols-2 md:pt-4 md:pl-10 md:pr-10 lg:pl-24 lg:pr-24">
        <div className="flex items-center justify-between gap-2 p-4 capitalize md:justify-end text-pale-gray md:p-0">
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
