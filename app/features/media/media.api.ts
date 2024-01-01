import { endpoints } from "@/app/common";
import { IFolder } from "@/app/types/media";
import { apiSlice } from "../api/api.slice";
import { IGetFilesAndFoldersResponse } from "./media.interface";

export const mediaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get File & Folder by user
    getFilesAndFolders: builder.query<IGetFilesAndFoldersResponse, void>({
      query: () => ({
        url: endpoints.media.root,
        method: "GET",
      }),
      providesTags: ["Media"],
    }),
    // add folder
    addFolder: builder.mutation<IFolder, any>({
      query: (body) => ({
        url: endpoints.media.folder.root,
        method: "POST",
        body,
      }),
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const result = await queryFulfilled;
      //     const folder = result?.data || {};

      //     dispatch(
      //       apiSlice.util.updateQueryData(
      //         "getFilesAndFolders",
      //         undefined,
      //         (draft: any) => {
      //           draft.folders.push(folder);
      //         }
      //       )
      //     );
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      invalidatesTags: ["Media"],
    }),
    renameFolder: builder.mutation<IFolder, any>({
      query: ({ id, body }) => ({
        url: `${endpoints.media.folder.root}/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["Media"],
    }),
    addFile: builder.mutation<any, any>({
      query: (body) => ({
        url: endpoints.media.file.root,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Media"],
    }),
  }),
});

export const {
  useAddFolderMutation,
  useGetFilesAndFoldersQuery,
  useAddFileMutation,
  useRenameFolderMutation,
} = mediaApi;
