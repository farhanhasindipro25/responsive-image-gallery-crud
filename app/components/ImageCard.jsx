"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import cn from "../common/helpers/UtilsKit";

const FEATURE_IMAGE_STYLES = "first:col-span-2 first:row-span-2";
const DEFAULT_IMAGE_STYLES = "border border-gray-300 rounded-md cursor-pointer";
const SELECTED_IMAGE_STYLES =
  "group-hover:opacity-100 bg-black opacity-20 transition-opacity";

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
      <div className="relative group">
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
            className={`w-full h-full rounded-md border border-gray-300 overflow-hidden relative ${
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
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
