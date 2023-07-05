import React from "react";

function Header() {
  return (
    <header className="max-w-2xl w-full m-auto h-fit flex justify-between items-end  snap-start">
      <div className="">
        <h1 className="text-2xl sm:text-3xl font-extraextrabold text-rebel-green dark:text-rebel-blue max-w-lg ml-2">
          Arthur{" "}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-extraextrabold text-rebel-green dark:text-rebel-blue max-w-lg ml-2">
          Candido
        </h2>
      </div>
      <nav className="sm:mx-4 dark:text-rebel-green text-rebel-purple flex flex-wrap w-full justify-end mx-2">
        <a href="#projects" className="mr-2">
          Projetos
        </a>
        <span className="w-[1px] bg-rebel-black mr-2"></span>
        <a className="mr-2">Sobre</a>
        <span className="w-[1px] bg-rebel-black mr-2"></span>
        <a>Contato </a>
      </nav>
    </header>
  );
}

export default Header;
