"use client"; // Agora este é um Client Component

import { usePathname } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname(); // Obtém a URL atual
  const hideHeader = pathname === "/sign-in" || pathname === "/sign-up";

  if (hideHeader) return null; // Oculta o header nas telas de login/cadastro

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16 bg-[#444746] shadow-md">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
