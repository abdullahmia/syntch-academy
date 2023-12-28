import { Metadata } from "next";
import { ForgotPasswordForm } from "./components/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password? | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main>
      <ForgotPasswordForm />
    </main>
  );
}
