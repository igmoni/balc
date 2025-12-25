import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Whatsapp from "@/components/common/Whatsapp";
import Footer from "@/components/common/Footer";
import { ViewTransitions } from "next-view-transitions";


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "BALC - Bharatiya Academy of Linguistics and Communication",
  description: "BALC is a premier computer training institute offering industry-aligned courses in Digital Marketing, Web Development, SAP, Data Science, DTP, and more. Empowering individuals with real-world skills for career success.",
  icon: '/assets/balc.jpg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-[200vh] antialiased`}
      >
        <Navbar/>
        <ViewTransitions>

        {children}
        </ViewTransitions>
        <div className="fixed bottom-4 right-4 z-99999">

        <Whatsapp/>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
