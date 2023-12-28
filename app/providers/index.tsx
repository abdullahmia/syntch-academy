"use client";

import { SessionProvider } from "next-auth/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { AuthProvider } from "./authProvider";
import ReduxProvider from "./reduxProvider";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = async ({ children }: ProviderProps) => {
  // const session: Session | null = await getServerSession(authOptions);
  return (
    <ReduxProvider>
      <SessionProvider>
        <AuthProvider>
          <main className="h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </main>
        </AuthProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};
