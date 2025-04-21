import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moneta-iq",
  description: "A landing page for moneta-iq, a application that helps in investing and manages your portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>{children}</body>
    </html>
  );
}
