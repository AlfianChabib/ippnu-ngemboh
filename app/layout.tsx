import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPPNU Ngemboh",
  description: "Ikatan Pelajar Perempuan Nahdlotul Ulama' Ranting Ngemboh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>IPPNU Ngemboh</title>
        <meta name="description" content="ippnu ngemboh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="IPPNU Ngemboh" />
        {/* <link
          rel="icon"
          href="https://drive.google.com/file/d/1gI-6DvLO9VfmY3FkzTU6D_MEj2i5Q73r/view"
        /> */}
        <link rel="icon" href="./../public/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-blue-800`}
      >
        <Provider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
