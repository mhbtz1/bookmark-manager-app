'use client';

import type { Metadata } from "next";
import { createContext, useState } from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/sidebar";
import { Button } from "@/components/ui/button";
import { Search } from "./components/search";
import { Moon, Sun } from "lucide-react";
import { QueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils";

const queryClient = new QueryClient();
const ThemeContext = createContext({
  theme: 'light'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');
  return (
    <html lang="en" className={cn(theme === 'dark' && 'dark')}>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <ThemeContext.Provider value={{ theme }}>
          <div className="flex flex-row w-full h-screen">
            <div className="flex flex-col h-full">
              <Sidebar />
            </div>
            <div className="flex flex-col h-full flex-1">
              <div className="flex flex-row w-full items-center gap-2 p-4">
                <Search/>
                <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                  { theme === 'light' ? <Sun /> : <Moon /> }
                </Button >
              </div>
              <div className={cn("p-4 flex-1", "bg-green-100 dark:bg-green-900")}>
                <div className="h-full">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
