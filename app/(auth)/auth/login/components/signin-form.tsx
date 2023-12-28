import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
export interface SigninFormProps {}

export const SigninForm = (props: SigninFormProps) => {
  return (
    <div className="w-[500px] shadow rounded p-10 space-y-7 bg-white">
      <div>
        <Image
          src={Images.logoIconSvg}
          height={60}
          width={60}
          alt="logo"
          className="mb-5"
        />
        <h2 className="text-[32px] text-primary font-semibold">Sign in</h2>
      </div>
      <form className="space-y-5">
        <div>
          <FormElements.Input placeholder="Email address" />
        </div>
        <div>
          <FormElements.Input placeholder="Password" type="password" />
        </div>

        <div className="flex items-center justify-between">
          <FormElements.Checkbox label="Remember me" />
          <Link href={"/forgot-password"} className="text-sm text-fill-primary">
            Forgot Password?
          </Link>
        </div>

        <Button variant="primary" type="submit" fullWidth>
          Sign In
        </Button>
      </form>
    </div>
  );
};
