import { Button } from "@/app/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email has been sent | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main className="w-full">
      <div>
        <div className="mb-4">
          <a href="/" className="text-fill-primary">
            Synth Academy
          </a>
        </div>
        <h2 className="text-[32px] text-primary font-semibold">
          Email has been sent
        </h2>
        <p className="text-sm text-secondary mb-6">
          If your email address is registered with us you will receive an email
          with a link to reset your password. If it doesn&apos;t appear within a
          few minutes, check your spam folder.
        </p>
        <Button variant="primary" linkButton to="/auth/login">
          Login
        </Button>
      </div>
    </main>
  );
}
