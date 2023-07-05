import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { PiLinkedinLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="text-rebel-black snap-end flex items-center justify-center">
      <a href="#sectionTest">
        <VscGithubAlt className=" text-5xl" />
      </a>
      <a href="#sectionTest2">
        <PiLinkedinLogoThin className=" text-6xl  " />
      </a>
    </footer>
  );
};

export default Footer;
