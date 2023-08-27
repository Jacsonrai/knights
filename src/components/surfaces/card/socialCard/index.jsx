import React from "react";
import { Link } from "react-router-dom";

const SocialLinkCard = ({ cardLabel, setlink }) => {
  return (
    <Link to={setlink} data-testid="setlink">
      <div
        data-testid="cardLabel"
        className="pt-8 pb-8 text-xl font-light text-center uppercase duration-300 ease-in border-t border-b hover:bg-white hover:text-black lg:border-t-0 lg:border-l lg:border-r lg:border-b border-pale-gray"
      >
        {cardLabel}
      </div>
    </Link>
  );
};

export default SocialLinkCard;
