import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white py-5">
      <div className="max-w-7xl mx-auto flex space-y-2 md:space-y-0 truncate items-center justify-between px-4">
        <h2 className="truncate font-semibold text-lg text-gray-700">
          Responsive Image Gallery
        </h2>
      </div>
    </nav>
  );
}
