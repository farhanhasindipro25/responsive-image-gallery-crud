import Image from "next/image";

export default function ImageCard({ src, alt }) {
  return (
    <div className="border border-gray-300 rounded-md">
      <Image
        src={src}
        alt={alt}
        height={500}
        width={500}
        priority
        className="rounded-md object-cover aspect-auto"
      />
    </div>
  );
}
