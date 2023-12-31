import { Metadata } from "next";
import { VerifiedAuth } from "../../components/VerifiedAuth";
import { SigninForm } from "./components/signin-form";

export const metadata: Metadata = {
  title: "Sign In | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <VerifiedAuth>
      <main className="w-full">
        <SigninForm />
      </main>
    </VerifiedAuth>
  );
}
