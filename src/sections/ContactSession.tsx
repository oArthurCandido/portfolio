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

const ContactSession = () => {
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
      description: "Email copiado para a área de transferência.",
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
          <div className="flex   flex-col items-center justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=5512992546899&text=Olá, vim pelo seu portfólio."
              }
              target="_blank"
            >
              <div className="flex items-center mx-4 justify-center">
                <SiWhatsapp className="bg-white dark:bg-black mr-1 text-8xl sm:text-4xl lg:text-5xl" />
                <p className="bg-white dark:bg-black cursor-pointer font-bold my-6 text-rebel-pink text-4xl lg:text-6xl font-extraextrabold text-center">
                  Me envie uma mensagem!
                </p>
              </div>
            </Link>
            <p className="bg-white dark:bg-black text-center">
              Precisa de web dev, tem uma dúvida, uma proposta ou quer apenas
              bater um papo, entre em contato.
            </p>
            <div className="bg-white dark:bg-black border p-2 rounded-md mt-2 flex items-center">
              <p>oarthurcandido@gmail.com</p>
              <span className="ml-2">
                {!hasCopied && (
                  <PiCopyBold
                    className="cursor-pointer border p-1 text-3xl rounded-md dark:hover:bg-cyan-800 hover:bg-cyan-100"
                    onClick={handleOnClick}
                  />
                )}
                {hasCopied && (
                  <PiCheckBold className="p-1 text-3xl text-cyan-300" />
                )}
              </span>
            </div>
          </div>
          <Button className="  mt-2">
            {" "}
            <a href="/CV Arthur Candido.pdf" target="_blank">
              Currículo em PDF
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactSession;
