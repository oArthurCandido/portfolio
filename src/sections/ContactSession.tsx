import { Button } from "@/components/ui/Button";
import React from "react";
import { SiWhatsapp } from "react-icons/si";

const ContactSession = () => {
  return (
    <>
      <section id="contact" className="h-[100vh] ">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <p className="mr-2  text-4xl lg:text-6xl font-extraextrabold text-center">
                <SiWhatsapp />
              </p>
              <p className="cursor-pointer font-bold my-6 text-rebel-pink text-4xl lg:text-6xl font-extraextrabold text-center">
                Me envie uma mensagem!
              </p>
            </div>
            <p>
              Tem uma dúvida, uma proposta ou quer apenas bater um papo, entre
              em contato.
            </p>
            <div className="border p-2 rounded-md mt-2 flex items-center">
              <p>oarthurcandido@gmail.com</p>
              <span className="ml-2">
                <Button> copy</Button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSession;
