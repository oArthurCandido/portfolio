import LeftFLuidLine from "@/components/shapes/LeftFLuidLine";
import ThreeZigZag from "@/components/shapes/ThreeZigZag";
import React from "react";

const TopSection = () => {
  return (
    <section className="flex justify-center  ">
      <LeftFLuidLine props={""} className="absolute left-0 top-28" />
      <ThreeZigZag
        className="absolute bottom-0 sm:bottom-10 landscape:top-20 right-0 w-1/2 sm:w-2/6"
        stopColorL="#18F2B2"
        stopColorR="#EF13F2"
      />

      <div className="relative h-[93vh] flex items-center justify-center flex-col">
        <p className="dark:text-rebel-pink dark:bg-black bg-white  text-4xl md:text-6xl font-extrabold text-center">
          Desenvolvedor WEB
        </p>
        <p className=" bg-white dark:bg-black text-center mx-2 my-4 font-semibold text-xl font-sans  max-w-xl leading-relaxed">
          Eu desenvolvo experiências digitais que conectam marcas e pessoas,
          produtos e usuários, necessidades e oportunidades. Conecte-se comigo
          para construírmos juntos o seu projeto
        </p>
      </div>
    </section>
  );
};

export default TopSection;
