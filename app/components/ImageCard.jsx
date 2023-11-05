import Image from "next/image";
import cn from "../common/helpers/UtilsKit";

const FEATURE_IMAGE_STYLES =
  "col-span-2 row-span-2 border border-gray-300 rounded-md cursor-pointer";
const DEFAULT_IMAGE_STYLES = "border border-gray-300 rounded-md cursor-pointer";

export default function ImageCard({ image }) {
  const { src, alt, uid } = image;

  return (
    <div className={cn(uid > 1 ? DEFAULT_IMAGE_STYLES : FEATURE_IMAGE_STYLES)}>
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
