import { Metadata } from "next";
import { ResetPasswordForm } from "./components";

export const metadata: Metadata = {
  title: "Reset Password | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return <ResetPasswordForm />;
}
