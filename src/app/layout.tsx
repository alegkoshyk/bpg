import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bulkers Pool Group AG — Maritime Investment",
  description:
    "Invest in real assets: A dry bulk fleet through a Swiss AMC. Disciplined, asset-backed investment strategy focused on acquiring and managing income-generating dry bulk vessels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
