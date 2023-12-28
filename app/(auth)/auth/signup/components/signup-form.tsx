"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { useSignupMutation } from "@/app/features/auth/auth.api";
import { Images } from "@/assets";
import toast from "cogo-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TSigninFormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SignupForm = () => {
  // Local state
  const [respnseError, setRespnseError] = useState<string>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TSigninFormState>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Hooks
  const router = useRouter();

  // signup mutation
  const [signup, { isLoading, isError, isSuccess, error }] =
    useSignupMutation();

  // Handle form submission
  const onSubmit = (data: TSigninFormState) => {
    setRespnseError("");
    signup(data);
  };

  // handle the response
  useEffect(() => {
    if (isSuccess) {
      toast.success("Signup successful, please login to continue", {
        position: "top-right",
      });
      reset();
      router.push("/auth/login");
    }
    if (isError) {
      // @ts-ignore
      if (error?.data?.message) {
        // @ts-ignore
        setRespnseError(error?.data?.message as string);
      }
    }
  }, [isSuccess, isError, error, router, reset]);

  return (
    <div>
      <div className="mb-3">
        <Image
          src={Images.logoIconSvg}
          height={60}
          width={60}
          alt="logo"
          className="mb-5"
        />
        <h2 className="text-[32px] text-primary font-semibold">Sign up</h2>
        <p className="text-sm text-secondary">
          Already have an account?
          <Link href={"/auth/login"} className="ms-1 text-fill-primary">
            Sign in
          </Link>
        </p>
      </div>

      <div className="py-4">
        <FormElements.Error>{respnseError}</FormElements.Error>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <FormElements.Label withAsterisk>First Name</FormElements.Label>
            <Controller
              name="firstName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormElements.Input
                  placeholder="First Name"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "First Name is required",
                },
              }}
            />
            {errors.firstName && (
              <FormElements.Error>
                {errors.firstName.message}
              </FormElements.Error>
            )}
          </div>

          <div className="w-full">
            <FormElements.Label withAsterisk>Last Name</FormElements.Label>
            <Controller
              name="lastName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormElements.Input
                  placeholder="Last Name"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Last Name is required",
                },
              }}
            />
            {errors.lastName && (
              <FormElements.Error>{errors.lastName.message}</FormElements.Error>
            )}
          </div>
        </div>

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

        <Button variant="primary" type="submit" fullWidth loading={isLoading}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
