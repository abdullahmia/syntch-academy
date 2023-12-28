import { Session, getServerSession } from "next-auth";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { authOptions } from "../lib/authOptions";
import { AuthProvider } from "./authProvider";
import ReduxProvider from "./reduxProvider";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = async ({ children }: ProviderProps) => {
  const session: Session | null = await getServerSession(authOptions);
  return (
    <ReduxProvider>
      <AuthProvider session={session}>
        <main className="h-screen flex flex-col justify-between">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </main>
      </AuthProvider>
    </ReduxProvider>
  );
};
