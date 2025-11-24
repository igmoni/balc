import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Whatsapp from "@/components/common/Whatsapp";
import Footer from "@/components/common/Footer";


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "BALC - Bharatiya Academy of Linguistics and Communication",
  description: "BALC is a premier computer training institute offering industry-aligned courses in Digital Marketing, Web Development, SAP, Data Science, DTP, and more. Empowering individuals with real-world skills for career success.",
  icon: '/balc.jpg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-[200vh] antialiased`}
      >
        <Navbar/>
        {children}
        <Whatsapp/>
        <Footer/>
      </body>
    </html>
  );
}
