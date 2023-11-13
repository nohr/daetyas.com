import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daetyas",
  description: "personal website of daetyas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-[100dvh]">
      <body className="flex flex-col px-9 h-full bg-slate text-gray">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
