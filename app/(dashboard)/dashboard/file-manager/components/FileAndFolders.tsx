import { File } from "./File";
import { Folder } from "./Folder";

export const FileAndFolders = () => {
  return (
    <div className="p-6">
      {/* Folders */}
      <div>
        <h2 className="text-md font-semibold text-primary">Folders</h2>
        <div className="grid grid-cols-4 gap-4 mt-3">
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </div>
      </div>

      {/* Files */}
      <div className="mt-6">
        <h2 className="text-md font-semibold text-primary">Files</h2>
        <div className="grid grid-cols-4 gap-4 mt-3">
          <File />
          <File />
          <File />
          <File />
          <File />
          <File />
          <File />
        </div>
      </div>
    </div>
  );
};
