import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { endpoints } from "../common";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "Your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials, _req) {
        const res = await fetch(
          `${process.env.API_URL}/${endpoints.auth.login}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await res.json();
        if (data?.message) {
          throw new Error(data.message);
        }
        return data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-expect-error
      session.user = token?.user;
      // @ts-expect-error
      session.token = token?.token;
      return session;
    },
  },
};
