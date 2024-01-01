import { endpoints } from "@/app/common";
import { apiSlice } from "../api/api.slice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ payload, id }) => ({
        url: `${endpoints.user.root}/${id}`,
        method: "PATCH",
        data: payload,
      }),
    }),
    deleteProfilePicture: builder.mutation({
      query: () => ({
        url: endpoints.user.deleteProfilePicture,
        method: "DELETE",
      }),
    }),
    updateProfilePicture: builder.mutation({
      query: (body) => ({
        url: endpoints.user.updateProfilePicture,
        method: "PATCH",
        data: body,
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useDeleteProfilePictureMutation,
  useUpdateProfilePictureMutation,
} = userApi;
