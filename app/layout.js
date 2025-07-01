import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FluidCursor from "@/components/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dipanshu Kumar | Portfolio",
  description: "Full Stack Developer | React | Next.js | Node.js | TailwindCSS",
  icons: {
    icon: "/browser.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FluidCursor/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
