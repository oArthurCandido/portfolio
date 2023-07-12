import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { PiLinkedinLogoThin } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-rebel-black snap-end flex items-center justify-center">
      <Link href="https://github.com/oarthurcandido/" target="_blank">
        <VscGithubAlt className=" text-5xl" />
      </Link>
      <Link href="https://www.linkedin.com/in/arthurcandido/" target="_blank">
        <PiLinkedinLogoThin className=" text-6xl  " />
      </Link>
    </footer>
  );
};

export default Footer;
