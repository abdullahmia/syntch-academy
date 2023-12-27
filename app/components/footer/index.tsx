import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-auto py-3">
      <div className="container flex justify-between items-center text-secondary">
        <div>
          <p className="">© 2023 Synth Academy. All Rights Reserved</p>
        </div>
        <div>
          <div className="space-x-4 text-[15px]">
            <Link href="/" className="">
              About
            </Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Career</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
