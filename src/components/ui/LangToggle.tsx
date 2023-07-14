"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/lib/i18n-config";
import { GlobeIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { Button } from "@/components/ui/Button";
import { US, FR, BR } from "country-flag-icons/react/3x2";

const LangToggle = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const flags = {
    en: <US />,
    fr: <FR />,
    pt: <BR />,
  };

  return (
    <div className="ml-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <GlobeIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          {i18n.locales.map((locale) => {
            return (
              <DropdownMenuItem key={locale}>
                <Link className="w-full" href={redirectedPathName(locale)}>
                  <div className="flex w-12">
                    <p className="w-10">{locale}</p>
                    {flags[locale]}
                  </div>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LangToggle;
