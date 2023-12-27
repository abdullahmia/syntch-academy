import Link from "next/link";

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
        <div className="space-x-3">
          <button className="px-4 py-2 bg-white text-primary shadow rounded">
            Sign in
          </button>
          <button className="px-4 py-2 text-white bg-fill-primary rounded">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
