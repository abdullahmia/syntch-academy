import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    prepareHeaders: async (headers, { getState }: any) => {
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({}),
});
