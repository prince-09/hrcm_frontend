import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Healthcare RCM Dashboard",
  description: "A dashboard to track claims, payments, and revenue cycle metrics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <main>{children}</main>
   
      </body>
    </html>
  );
}

