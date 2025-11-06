import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata = {
  title: "Happy Hours",
  description: "Find the best happy hours in San Francisco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=68fab5da1278a00606305431&product=sop"
          async="async"
        />
      </head>
      <body className="m-0 p-0 bg-background text-black dark:bg-black dark:text-white w-screen">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="synthwave"
          enableSystem
          disableTransitionOnChange
        >
 {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
