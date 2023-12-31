import { Metadata } from "next";
import { FileAndFolders } from "./components/FileAndFolders";
import { SearchAction } from "./components/SearchAction";

export const metadata: Metadata = {
  title: "File Manager | Synth Academy",
  description: "Synth Academy",
};

export default function Page() {
  return (
    <main>
      <div className="p-6">
        <h2 className="text-[1.25rem] font-semibold text-primary">
          File Manager
        </h2>
      </div>
      <hr className="border-lightGray" />

      <div>
        <SearchAction />
        <FileAndFolders />
      </div>
    </main>
  );
}
