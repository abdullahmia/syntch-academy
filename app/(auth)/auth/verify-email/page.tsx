import { Metadata } from "next";
import Link from "next/link";
import { VerifyEmail } from "./components/VerifyEmail";

export const metadata: Metadata = {
  title: "Verifing Email | Synth Academy",
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
      <VerifyEmail />
    </div>
  );
}
