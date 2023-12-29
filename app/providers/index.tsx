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
    <ReduxProvider>
      <AuthProvider>
        <main className=" bg-fill-secondary">
          <Header />
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
        </main>
      </AuthProvider>
    </ReduxProvider>
  );
};
