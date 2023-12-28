import { Metadata } from "next";
import { SignupForm } from "./components/signup-form";

export const metadata: Metadata = {
  title: "Sign Up | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main>
      <SignupForm />
    </main>
  );
}
