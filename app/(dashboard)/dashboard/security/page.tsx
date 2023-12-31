import { Metadata } from "next";
import { ResetPasswordForm } from "./components/ResetPasswordForm";

export const metadata: Metadata = {
  title: "My profile | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main>
      <div className="p-6">
        <h2 className="text-[1.25rem] font-semibold text-primary">
          Reset Password
        </h2>
        <p className="text-sm text-deepGray">
          Edit your account settings and change your password here.
        </p>
      </div>
      <hr className="border-lightGray" />

      <div>
        <ResetPasswordForm />
      </div>
    </main>
  );
}
