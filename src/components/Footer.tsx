import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { PiLinkedinLogoThin } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-rebel-black snap-end flex items-center justify-center pb-2">
      <Link href="https://github.com/oarthurcandido/" target="_blank">
        <VscGithubAlt className="p-1 hover:border border-slate-600 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-6xl" />
      </Link>
      <Link href="https://www.linkedin.com/in/arthurcandido/" target="_blank">
        <PiLinkedinLogoThin className=" hover:border border-slate-600 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-6xl  " />
      </Link>
    </footer>
  );
};

export default Footer;
