/* eslint-disable @next/next/no-img-element */
import { IFile } from "@/app/types/media";

export interface FileProps {
  file: IFile;
}

export const File = ({ file }: FileProps) => {
  return (
    <div className="border border-lightGray rounded">
      <div className="group cursor-pointer">
        <div className="flex items-center justify-center border-b border-lightGray">
          <div
            className="flex items-center justify-center border-b border-lightGray"
            style={{ height: "140px", width: "100%" }}
          >
            <img
              src={file?.url}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-center p-2 group-hover:bg-[#f0f0f8] transition">
          <h2 className="text-primary font-semibold">
            {file?.name?.slice(0, 20)}
          </h2>
          <p className="text-[11px] text-deepGray">1.2 MB</p>
        </div>
      </div>
    </div>
  );
};
