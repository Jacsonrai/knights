import React from "react";

const SocialLinkCard = ({ cardLabel }) => {
  return (
    <div className="pt-8 pb-8 text-xl font-semibold text-center uppercase border-t border-b lg:border-t-0 lg:border-l lg:border-r lg:border-b border-pale-gray">
      {cardLabel}
    </div>
  );
};

export default SocialLinkCard;
