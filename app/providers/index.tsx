"use client";

import { SessionProvider } from "next-auth/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
      <main className="h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </main>
    </SessionProvider>
  );
};
