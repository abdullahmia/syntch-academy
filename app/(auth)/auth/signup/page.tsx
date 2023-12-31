import { Metadata } from "next";
import { VerifiedAuth } from "../../components/VerifiedAuth";
import { SignupForm } from "./components/signup-form";

export const metadata: Metadata = {
  title: "Sign Up | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <VerifiedAuth>
      <SignupForm />
    </VerifiedAuth>
  );
}
