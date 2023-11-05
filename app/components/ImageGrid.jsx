import ImageCard from "./ImageCard";

const imageData = [
  { uid: "1", src: "/images/image-1.webp", name: "Image-1" },
  { uid: "2", src: "/images/image-2.webp", name: "Image-2" },
  { uid: "3", src: "/images/image-3.webp", name: "Image-3" },
  { uid: "4", src: "/images/image-4.webp", name: "Image-4" },
  { uid: "5", src: "/images/image-5.webp", name: "Image-5" },
  { uid: "6", src: "/images/image-6.webp", name: "Image-6" },
  { uid: "7", src: "/images/image-7.webp", name: "Image-7" },
  { uid: "8", src: "/images/image-8.webp", name: "Image-8" },
  { uid: "9", src: "/images/image-9.webp", name: "Image-9" },
  { uid: "10", src: "/images/image-10.jpeg", name: "Image-10" },
  { uid: "11", src: "/images/image-11.jpeg", name: "Image-11" },
];

export default function ImageGrid() {
  return (
    <section className="divide-y divide-gray-300 space-y-4 border-md bg-gray-white shadow-md p-4">
      <header>
        <h2 className="text-base font-semibold text-gray-700">Gallery</h2>
      </header>
      <div className="pt-4 grid grid-cols-5 gap-4">
        {imageData?.map((image) => (
          <ImageCard src={image.src} alt={image.name} key={image.uid} />
        ))}
      </div>
    </section>
  );
}
