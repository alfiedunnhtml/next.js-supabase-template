import Link from "next/link";
import { AuthButton } from "./auth-button";

export function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>App Name</Link>
        </div>
        <AuthButton />
      </div>
    </nav>
  );
}

