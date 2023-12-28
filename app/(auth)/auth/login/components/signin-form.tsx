"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { Images } from "@/assets";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TSigninFormState = {
  email: string;
  password: string;
};

export const SigninForm = () => {
  // Local State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSigninFormState>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Hooks
  const router = useRouter();

  // Handle form submission
  const onSubmit = async (data: TSigninFormState) => {
    setIsLoading(true);
    setError("");

    try {
      const signInResponse = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResponse?.error) {
        setError(signInResponse?.error);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      router.push("/");
    } catch (err) {
      const errorMessage = err?.toString();
      if (errorMessage?.includes("Invalid URL")) {
        setError("Too many requests, please try again after some time!");
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <div>
        <Image
          src={Images.logoIconSvg}
          height={60}
          width={60}
          alt="logo"
          className="mb-5"
        />
        <h2 className="text-[32px] text-primary font-semibold">Sign in</h2>
        <p className="text-sm text-secondary">
          Don&apos;t have an account?
          <Link href={"/auth/signup"} className="ms-1 text-fill-primary">
            Sign up
          </Link>
        </p>
      </div>

      <div className="py-4">
        <FormElements.Error>{error}</FormElements.Error>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormElements.Label withAsterisk>Email</FormElements.Label>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input
                placeholder="Email address"
                value={value}
                onChange={onChange}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
              validate: {
                email: (value) =>
                  /\S+@\S+\.\S+/.test(value) || "Email is invalid",
              },
            }}
          />
          {errors.email && (
            <FormElements.Error>{errors.email.message}</FormElements.Error>
          )}
        </div>
        <div>
          <FormElements.Label withAsterisk>Password</FormElements.Label>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input
                placeholder="Password"
                type="password"
                onChange={onChange}
                value={value}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              validate: {
                password: (value) =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                    value
                  ) ||
                  "Password should be at least 8 characters long one uppercase letter, one lowercase letter, one number and one special character",
              },
            }}
          />
          {errors.password && (
            <FormElements.Error>{errors.password.message}</FormElements.Error>
          )}
        </div>

        <div className="flex items-center justify-between">
          <FormElements.Checkbox label="Remember me" />
          <Link
            href={"/auth/forgot-password"}
            className="text-sm text-fill-primary"
          >
            Forgot Password?
          </Link>
        </div>

        <Button variant="primary" type="submit" fullWidth loading={isLoading}>
          Sign In
        </Button>
      </form>
    </div>
  );
};
