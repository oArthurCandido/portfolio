"use client";
import { Button } from "@/components/ui/Button";
import React, { useEffect, useState, useRef } from "react";
import { SiWhatsapp } from "react-icons/si";
import { PiCheckBold, PiCopyBold } from "react-icons/pi";
import { CopyToClipboard } from "@/lib/CopyToClipboard";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import LeftFLuidLine from "@/components/shapes/LeftFLuidLine";
import ThreeZigZag from "@/components/shapes/ThreeZigZag";

const TIMEOUT_MS = 2000;

const ContactSession = ({
  dictionary,
}: {
  dictionary: {
    sendMeAMessage: string;
    callToAction: string;
    CV: string;
    CV_PATH: string;
    copiedToClipboard: string;
  };
}) => {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef(0);
  const { toast } = useToast();

  useEffect(() => {
    timeoutRef.current = window.setTimeout(setHasCopied, TIMEOUT_MS, false);

    return () => {
      if (!timeoutRef) return;
      clearTimeout(timeoutRef.current);
    };
  }, [hasCopied]);

  const handleOnClick = () => {
    toast({
      description: dictionary.copiedToClipboard,
    });
    CopyToClipboard("oarthurcandido@gmail.com")?.then((res) => {
      setHasCopied(true);
    });
  };

  return (
    <>
      <section id="contact" className="relative h-[100vh] ">
        <ThreeZigZag
          className="hidden sm:block transform scale-x-[-1] absolute bottom-10 left-0 w-1/2 sm:w-2/6"
          stopColorR="#18F2B2"
          stopColorL="#EF13F2"
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=5512992546899&text=Olá, vim pelo seu portfólio."
              }
              target="_blank"
              className="transition duration-300 hover:opacity-80"
            >
              <div className="flex items-center justify-center mx-4">
                <SiWhatsapp className="mr-1 bg-white dark:bg-black text-8xl sm:text-4xl lg:text-5xl" />
                <p className="my-6 text-4xl font-bold text-center bg-white cursor-pointer dark:bg-black text-rebel-pink lg:text-6xl font-extraextrabold">
                  {dictionary.sendMeAMessage}!
                </p>
              </div>
            </Link>
            <p className="text-center bg-white dark:bg-black">
              {dictionary.callToAction}.
            </p>
            <div className="flex items-center p-2 mt-2 bg-white border rounded-md dark:bg-black">
              <p>oarthurcandido@gmail.com</p>
              <span className="ml-2">
                {!hasCopied && (
                  <PiCopyBold
                    className="p-1 text-3xl border rounded-md cursor-pointer dark:hover:bg-cyan-800 hover:bg-cyan-100"
                    onClick={handleOnClick}
                  />
                )}
                {hasCopied && (
                  <PiCheckBold className="p-1 text-3xl text-cyan-300" />
                )}
              </span>
            </div>
          </div>
          <Button className="mt-2 ">
            {" "}
            <Link href={`${dictionary.CV_PATH}`} target="_blank">
              {dictionary.CV}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactSession;
