"use client";

import { Header } from "../components/header";
import { AuthProvider } from "./authProvider";
import ReduxProvider from "./reduxProvider";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = async ({ children }: ProviderProps) => {
  // const session: Session | null = await getServerSession(authOptions);
  return (
    <main className="bg-fill-secondary">
      <ReduxProvider>
        <AuthProvider>
          <div className="h-screen flex flex-col justify-between">
            <Header />
            <div className="flex-1">{children}</div>
            {/* <Footer /> */}
          </div>
        </AuthProvider>
      </ReduxProvider>
    </main>
  );
};
