import { Button } from "@/app/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reset Password | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <Link href={"/"} className="text-fill-primary">
          Synth Academy
        </Link>
      </div>
      <div className="space-y-4">
        <h2 className="text-[18px] text-primary font-semibold">
          Password successfully reset.
        </h2>
        <p className="text-sm text-secondary">
          You can now log in with your new password
        </p>
        <Button variant="primary" linkButton to="/auth/login">
          Login
        </Button>
      </div>
    </div>
  );
}
