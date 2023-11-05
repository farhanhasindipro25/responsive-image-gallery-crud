import Image from "next/image";

export default function EmptyState() {
  return (
    <div className="p-10 flex h-screen justify-center items-center gap-2 flex-col">
      <Image
        src="/images/image-placeholder.png"
        width={100}
        height={100}
        alt="empty-state-image"
        className="w-32 h-32 object-cover rounded-lg aspect-auto"
      />
      <p className="text-gray-700 font-medium text-base">No Images Found</p>
    </div>
  );
}
