"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

type TForgotPasswordFormState = {
  email: string;
};

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TForgotPasswordFormState>({
    defaultValues: {
      email: "",
    },
  });

  // hooks
  const router = useRouter();

  // Handle form submission
  const onSubmit = (data: TForgotPasswordFormState) => {
    console.log(data);
    router.push("/auth/forgot-password/email-sent");
  };
  return (
    <div>
      <div>
        <div className="mb-6">
          <Link href={"/"} className="text-fill-primary">
            Synth Academy
          </Link>
        </div>
        <h2 className="text-[32px] text-primary font-semibold">
          Forgot Password
        </h2>
        <p className="text-sm text-secondary">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormElements.Label withAsterisk>Email</FormElements.Label>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input value={value} onChange={onChange} />
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

        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
};
