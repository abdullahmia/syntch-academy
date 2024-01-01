export interface IFolder {
  id: string;
  name: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFile {
  id: string;
  name: string;
  user: string;
  publicId: string;
  url: string;
  folder: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetFilesAndFoldersResponse {
  folders: IFolder[];
  files: IFile[];
}
