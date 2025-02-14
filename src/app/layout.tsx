import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from "@/fonts";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alchemist web",
  description: "Discover the magic of Alchemist Web. Your go-to platform for cutting-edge technology, innovation, and digital solutions.",
  keywords: "Alchemist Web, technology, innovation, digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
