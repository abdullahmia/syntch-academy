import { Metadata } from "next";
import { TestServer } from "./components/TestServer";
import { UpdateUser } from "./components/UpdateUser";

export const metadata: Metadata = {
  title: "Synth Academy | A robust online learning platform for synthesizers",
  description: "Synth Academy",
};

export default async function Page() {
  return (
    <main className="container">
      <TestServer />
      <UpdateUser />
    </main>
  );
}
