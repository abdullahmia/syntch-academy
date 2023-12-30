import { Metadata } from "next";
import { ChangeProfilePciture } from "./components/ChangeProfilePciture";
import { EditProfile } from "./components/EditProfile";

export const metadata: Metadata = {
  title: "Synth Academy | A robust online learning platform for synthesizers",
  description: "Synth Academy",
};

export default async function Page() {
  return (
    <main>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-primary">Profile Details</h2>
        <p className="text-sm text-deepGray">
          You have full control to manage your own account setting.
        </p>
      </div>
      <hr className="border-lightGray" />

      <div className="mt-3">
        {/* Change Profile Picture */}
        <ChangeProfilePciture />

        {/* Edit Profile */}
        <EditProfile />
      </div>
    </main>
  );
}
