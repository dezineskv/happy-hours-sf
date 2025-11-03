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
  title: "Happy Hours",
  description: "Find the best happy hours in San Francisco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="m-0 p-0 bg-white text-black dark:bg-black dark:text-white w-screen"
      >
        {children}
      </body>
    </html>
  );
}
