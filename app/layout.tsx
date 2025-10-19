import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jennifer Hayes | Data Engineer & Software Developer",
  description: "Portfolio showcasing data engineering, ERP, and analytics projects built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
//    <ClerkProvider>
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
             <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
      
    </html>
//    </ClerkProvider>
  );
}
