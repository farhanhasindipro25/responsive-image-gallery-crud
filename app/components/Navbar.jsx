import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <h2 className="font-semibold text-lg text-gray-700">
          Responsive Image Gallery
        </h2>
        <Link className="font-medium text-lg text-gray-700" href="/v2">
          Checkout Version 02
        </Link>
      </div>
    </nav>
  );
}
