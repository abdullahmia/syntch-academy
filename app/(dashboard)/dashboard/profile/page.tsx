import { Metadata } from "next";
import { ProfileInfo } from "./components/ProfileInfo";

export const metadata: Metadata = {
  title: "My profile | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main>
      <div className="p-6">
        <h2 className="text-[1.25rem] font-semibold text-primary">
          My Profile
        </h2>
      </div>
      <hr className="border-lightGray" />

      <div>
        <ProfileInfo />
      </div>
    </main>
  );
}
