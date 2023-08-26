import React from "react";
import FooterLayout from "./FooterLayout";
import { socialLinks } from "../../../mock/data";
import { quickLinksData } from "../../../mock/data";
console.log(socialLinks);
const Footer = () => {
  return (
    <FooterLayout
      socialLinksData={socialLinks}
      quickLinksData={quickLinksData}
    />
  );
};

export { Footer };
