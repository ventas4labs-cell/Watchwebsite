import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timeless Watches | Alta Relojería",
  description: "Relojes exquisitos para el conocedor moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(
        "min-h-screen bg-black font-body antialiased text-white selection:bg-gold-500/30 selection:text-gold-200",
        playfair.variable,
        lato.variable
      )}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
