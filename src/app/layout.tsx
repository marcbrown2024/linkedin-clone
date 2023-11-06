// react components
import React from "react";

// html
import type { Metadata } from "next";

// components
import Providers from "@/context/providers";
import { AuthContextProvider } from "@/context/AuthContext";
import TopBar from "@/components/global/TopBar";

// css
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LinkedIn",
  description: "LinkedIn Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <AuthContextProvider>
            <div className="h-screen w-screen flex flex-col items-center justify-between">
              <TopBar />
              {children}
            </div>
          </AuthContextProvider>
        </Providers>
      </body>
    </html>
  );
}
