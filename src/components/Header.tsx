"use client";
import React from "react";
import ModeToggle from "./ui/ModeToggle";
import LangToggle from "./ui/LangToggle";
import Link from "next/link";
import NavigationMobileMenu from "./ui/NavigationMobileMenu";

interface Dictionary {
  contact: string;
  projects: string;
}

function Header({ dictionary }: { dictionary: Dictionary }) {
  return (
    <header
      className="max-w-2xl w-full m-auto h-fit  flex justify-between 
      items-end snap-start  "
    >
      <div className="">
        <h1 className="text-4xl font-[900] max-w-lg ml-2">Arthur</h1>
        <h2 className="text-4xl font-[900] max-w-lg ml-2">Candido</h2>
      </div>
      <nav className="hidden sm:mx-4 sm:flex flex-wrap w-full justify-end mx-2 items-center text-lg">
        <Link href="#projects" className="mr-2">
          {dictionary.projects}
        </Link>
        <span className="w-[1px] bg-black mr-2"></span>
        <Link className="mr-2" href="#contact">
          {dictionary.contact}
        </Link>
        <LangToggle />
        <ModeToggle />
      </nav>
      <div className="sm:hidden self-center mx-2 flex items-center justify-center align-middle">
        <ModeToggle />
        <LangToggle />
        {/* <NavigationMobileMenu /> */}
      </div>
    </header>
  );
}

export default Header;
