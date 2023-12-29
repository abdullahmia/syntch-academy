import { endpoints } from "@/app/common";
import { apiSlice } from "../api/api.slice";
import { ILoginResponse, IRegisterResponse } from "./auth.interface";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, any>({
      query: (body) => ({
        url: endpoints.auth.login,
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation<IRegisterResponse, any>({
      query: (body) => ({
        url: endpoints.auth.signup,
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.forgotPassword,
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: `${endpoints.auth.resetPassword}?token=${token}`,
        method: "POST",
        body: {
          password,
        },
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLoginMutation,
} = authApi;
