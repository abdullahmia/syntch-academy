import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/authOptions";
export interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout(props: LayoutProps) {
  const session: Session | null = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <main className="h-full flex justify-center items-center bg-fill-secondary">
      <div className="w-[500px] shadow rounded p-10 space-y-7 bg-white">
        {props.children}
      </div>
    </main>
  );
}
