import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="shadow py-3">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-8 text-primary">
          <div className="text-2xl font-semibold">Synth Academy</div>
          <div className="space-x-4 text-[15px]">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/">Courses</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About us</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" linkButton to="/auth/login">
            Sign in
          </Button>
          <Button variant="primary">Sign up</Button>
        </div>
      </div>
    </header>
  );
};
