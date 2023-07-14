import LeftFLuidLine from "@/components/shapes/LeftFLuidLine";
import ThreeZigZag from "@/components/shapes/ThreeZigZag";
import React from "react";
import { Locale } from "@/lib/i18n-config";
import ProgressScroll from "@/components/ui/ProgressScroll";

const TopSection = ({
  dictionary,
}: {
  dictionary: {
    webDeveloper: string;
    aboutMe: string;
  };
}) => {
  return (
    <section className="flex justify-center  ">
      <LeftFLuidLine
        props={""}
        className="absolute left-0 top-28"
        color="#18F2B2"
      />
      <ThreeZigZag
        className=" absolute bottom-0 sm:bottom-10 landscape:top-20 right-0 w-1/2 sm:w-2/6"
        stopColorL="#18F2B2"
        stopColorR="#EF13F2"
      />

      <div className="relative h-[93vh] flex items-center justify-center flex-col">
        <h2 className=" dark:bg-black bg-white  text-4xl md:text-6xl font-extrabold text-center">
          {dictionary.webDeveloper}
        </h2>
        <h3 className=" bg-white dark:bg-black text-center mx-2 my-4 font-semibold text-xl font-sans  max-w-xl leading-relaxed">
          {dictionary.aboutMe}
        </h3>
        <ProgressScroll />
      </div>
    </section>
  );
};

export default TopSection;
