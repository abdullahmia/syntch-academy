import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    // baseUrl: "https://synth-academy-api.onrender.com/api/v1",
    prepareHeaders: async (headers, { getState }: any) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:8000/api/v1" }),
  tagTypes: ["Users", "Media", "Courses", "Lessons", "Categories", "Tags"],
  endpoints: (builder) => ({}),
});
