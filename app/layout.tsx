import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import grainImage from "@/public/images/grain.jpg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maziar Ja Portfolio",
  description: "Portfolio Website Maziar Ja",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div
          className="fixed inset-0 -z-50 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundRepeat: "repeat",
          }}
        />
        {children}
      </body>
    </html>
  );
}
