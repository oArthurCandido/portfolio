"use client";
import React from "react";
import ModeToggle from "./ui/ModeToggle";
import LangToggle from "./ui/LangToggle";
import Link from "next/link";
import NavigationMobileMenu from "./ui/NavigationMobileMenu";
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface Dictionary {
  contact: string;
  projects: string;
}

function Header({ dictionary }: { dictionary: Dictionary }) {
  const smoothScroll = useSmoothScroll();
  return (
    <header
      className="flex items-end justify-between w-full max-w-2xl m-auto h-fit snap-start "
    >
      <div className="">
        <h1 className="text-4xl font-[900] max-w-lg ml-2">Arthur</h1>
        <h2 className="text-4xl font-[900] max-w-lg ml-2">Candido</h2>
      </div>
      <nav className="flex-wrap items-center justify-end hidden w-full mx-2 text-lg sm:mx-4 sm:flex">
        <Link 
        href="#projects"
        onClick={(e) => smoothScroll(e, 'projects')}
        scroll={false} 
        className="mr-2">
          {dictionary.projects}
        </Link>
        <span className="w-[1px] bg-black mr-2"></span>
        <Link 
        className="mr-2"
        onClick={(e) => smoothScroll(e, 'contact')}
        scroll={false}  
        href="#contact">
          {dictionary.contact}
        </Link>
        <LangToggle />
        <ModeToggle />
      </nav>
      <div className="flex items-center self-center justify-center mx-2 align-middle sm:hidden">
        <ModeToggle />
        <LangToggle />
        {/* <NavigationMobileMenu /> */}
      </div>
    </header>
  );
}

export default Header;
