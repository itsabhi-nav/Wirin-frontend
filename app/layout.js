import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Uparrow from "@/components/Uparrow";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* Your page content here */}
        <Uparrow />
        <Footer />
      </body>
    </html>
  );
}
