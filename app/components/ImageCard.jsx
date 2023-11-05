"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import cn from "../common/helpers/UtilsKit";

const FEATURE_IMAGE_STYLES = "first:col-span-2 first:row-span-2";
const DEFAULT_IMAGE_STYLES = "border border-gray-300 rounded-md cursor-pointer";
const SELECTED_IMAGE_STYLES = "bg-black opacity-20";

export default function ImageCard({
  image,
  handleImageSelection,
  selectAllImages,
  individuallySelected,
}) {
  const { src, alt } = image;
  const [selectedImage, setSelectedImage] = useState(false);

  useEffect(() => {
    setSelectedImage(selectAllImages);
  }, [selectAllImages]);

  const handleImageDelete = () => {
    setSelectedImage(!selectedImage);
    handleImageSelection(image, !selectedImage);
  };

  return (
    <div className={cn(`${DEFAULT_IMAGE_STYLES} ${FEATURE_IMAGE_STYLES}`)}>
      <div className="relative">
        <label className="cursor-pointer">
          <div
            className="absolute top-2 left-2 z-10"
            onClick={handleImageDelete}
          >
            <input
              type="checkbox"
              checked={individuallySelected || selectedImage}
            />
          </div>
          <div
            className={`w-full h-full rounded-md border border-gray-300 overflow-hidden ${
              selectedImage && SELECTED_IMAGE_STYLES
            }`}
          >
            <Image
              src={src}
              alt={alt}
              height={500}
              width={500}
              priority
              className="rounded-md object-cover aspect-auto"
            />
          </div>
        </label>
      </div>
    </div>
  );
}
