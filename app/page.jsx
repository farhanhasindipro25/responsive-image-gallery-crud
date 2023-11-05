import Image from "next/image";
import ImageGrid from "./components/ImageGrid";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ImageGrid />
    </div>
  );
}
