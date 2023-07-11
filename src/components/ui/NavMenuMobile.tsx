"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/Dropdown-menu";
import Link from "next/link";

export default function NavMenuMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <svg
          className="w-6 h-6 text-gray-500 dark:text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" hideWhenDetached={true}>
        <DropdownMenuItem asChild>
          <Link scroll={false} href="#projects">
            Projetos
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link scroll={false} href="#contact">
            Contato
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
