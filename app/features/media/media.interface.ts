import { IFile, IFolder } from "@/app/types/media";

export interface IGetFilesAndFoldersResponse {
  folders: IFolder[];
  media: IFile[];
}

export interface IMediaState {
  search: string;
}
