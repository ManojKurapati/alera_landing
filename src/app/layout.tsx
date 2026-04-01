import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Using Space Grotesk as substitute for Satoshi
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const satoshiSubstitute = Space_Grotesk({
  variable: "--font-satoshi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alera | Your Biology Intelligence",
  description: "Alera transforms your DNA, labs, and lifestyle into precise, evolving protocols built for real outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${satoshiSubstitute.variable} antialiased bg-bg-deep text-foreground selection:bg-accent-2 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
