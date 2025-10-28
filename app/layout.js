import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThaiPaipan Textile Printing",
  description:
    "ThaiPaipan offers premium textile printing services for fashion, home décor, and industrial applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen bg-slate-50 pb-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
