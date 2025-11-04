import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Happy Hours",
  description: "Find the best happy hours in San Francisco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-0 p-0 bg-background text-black dark:bg-black dark:text-white w-screen">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="synthwave"
          // enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
