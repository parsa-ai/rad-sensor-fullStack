import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import "./globals.css";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});


export const metadata = {
  title: "Rad Sensor",
  description: "High‑Accuracy EC/TDS & CTD Sensors, Made in Iran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#16141F] text-[#F7F7F7] pt-16 ${montserrat.className}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
