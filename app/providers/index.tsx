import { Footer } from "../components/footer";
import { Header } from "../components/header";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </main>
  );
};
