import { VerifiedAuth } from "./components/VerifiedAuth";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <VerifiedAuth>
      <main className="h-screen flex justify-center items-center bg-fill-secondary">
        <div className="w-[500px] min-h-[500px] shadow rounded p-10 space-y-7 bg-white flex items-center justify-center">
          {props.children}
        </div>
      </main>
    </VerifiedAuth>
  );
}
