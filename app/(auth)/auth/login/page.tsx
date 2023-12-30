import { Metadata } from "next";
import { SigninForm } from "./components/signin-form";

export const metadata: Metadata = {
  title: "Sign In | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main className="w-full">
      <SigninForm />
    </main>
  );
}
