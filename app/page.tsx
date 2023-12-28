import { Metadata } from "next";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";

export const metadata: Metadata = {
  title: "Synth Academy | A robust online learning platform for synthesizers",
  description: "Synth Academy",
};

export default async function Page() {
  const session: Session | null = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>My page</h1>
    </div>
  );
}
