import React from "react";
import ModeToggle from "./ui/ModeToggle";

function Header() {
  return (
    <header
      className="max-w-2xl w-full m-auto h-fit flex justify-between 
      items-end snap-start  "
    >
      <div className="">
        <h1 className="text-2xl sm:text-3xl font-extrabold max-w-lg ml-2">
          Arthur{" "}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-extrabold max-w-lg ml-2">
          Candido
        </h2>
      </div>
      <nav className="sm:mx-4 dark:text-rebel-green text-rebel-purple flex flex-wrap w-full justify-end mx-2 items-center">
        <a href="#projects" className="mr-2">
          Projetos
        </a>
        <span className="w-[1px] bg-rebel-black mr-2"></span>
        <a>Contato </a>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Header;
