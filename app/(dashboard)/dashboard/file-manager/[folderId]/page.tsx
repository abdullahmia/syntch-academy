import { Metadata } from "next";
import { FilesByFolder } from "./components/FilesByFolder";

export const metadata: Metadata = {
  title: "File Manager | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main>
      <div className="p-6">
        <FilesByFolder />
      </div>
    </main>
  );
}
