import React from "react";
import { Link } from "react-router-dom";

const SocialLinkCard = ({ cardLabel, setlink }) => {
  return (
    <Link to={setlink}>
      <div className="pt-8 pb-8 text-xl font-semibold text-center uppercase border-t border-b lg:border-t-0 lg:border-l lg:border-r lg:border-b border-pale-gray">
        {cardLabel}
      </div>
    </Link>
  );
};

export default SocialLinkCard;
