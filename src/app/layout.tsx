import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import { ptBR } from '@clerk/localizations';

export const metadata: Metadata = {
  title: "Guilhermes Anota",
  description: "Sistema de gerenciamento de pedidos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        layout: {
          logoPlacement: "none",
          socialButtonsPlacement: "bottom",
        },
        variables: {
          colorPrimary: "#A13C11",
          colorBackground: "#0D0D0D",
          colorText: "#E5E7EB",
          colorInputBackground: "#1F1F1F",
          colorInputText: "#F3F4F6",
        },
        elements: {
          card: "bg-[#2d2e2e] shadow-lg rounded-lg p-6",
          formFieldInput: "bg-[#1F1F1F] text-white border-[#374151]",
          socialButtons: "bg-[#E5E7EB] hover:bg-[#F3F4F6] rounded-lg text-white",
          submitButton: "bg-[#A13C11] hover:bg-[#A13C11] text-white",
        },
      }}
    >
      <html lang="pt-BR">
        <body className="antialiased flex flex-col min-h-screen bg-[#444746] text-white">
          <Header />
          <main className="flex-grow flex justify-center items-center p-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
