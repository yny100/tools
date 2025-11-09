import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <Link href="/" className="m-[20px]">
        <span className="text-xl">便利ツール</span>
      </Link>
    </nav>
  );
}