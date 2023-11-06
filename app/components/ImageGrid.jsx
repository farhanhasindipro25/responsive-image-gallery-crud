"use client";
import { Fragment, useState } from "react";
import ImageCard from "./ImageCard";
import ImageUploader from "./ImageUploader";
import {
  handleDynamicToastMsg,
  handleNumericalCasesInWordsForImages,
} from "../common/helpers/UtilsKit";
import toast from "react-hot-toast";
import EmptyState from "./EmptyState";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function ImageGrid() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState([
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
  ]);

  const handleImageSelection = (selectedImage, isSelected) => {
    if (isSelected) {
      // checking for the selected image and pushing that to the selectedImages array to keep track of the total number of selected images
      setSelectedImages([...selectedImages, selectedImage]);
    } else {
      // keeping the selectedImages array updated by removing that specific image that has been deselected by using the filter method
      setSelectedImages(
        selectedImages.filter((img) => selectedImage.uid !== img.uid)
      );
    }
  };

  const handleDeleteImages = () => {
    let newImageData = [...imageData];
    // removing the selected images from newImageData
    selectedImages.forEach((selectedImage) => {
      newImageData = newImageData.filter(
        (img) => selectedImage.uid !== img.uid
      );
    });
    setImageData(newImageData);
    setSelectedImages([]);
    toast.success(handleDynamicToastMsg(selectedImages.length));
  };

  return (
    <section className="divide-y divide-gray-300 space-y-4 border-md bg-white rounded-lg shadow-md w-full">
      <header className="pt-6 px-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-700">Gallery</h2>
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium text-gray-500">
            {handleNumericalCasesInWordsForImages(selectedImages.length)}
          </h2>
          {selectedImages.length > 0 ? (
            <button
              onClick={handleDeleteImages}
              type="submit"
              className="text-sm font-semibold cursor-pointer bg-red-500 px-5 py-3 rounded-md text-white hover:bg-red-600 focus:outline focus:ring-1 focus:ring-offset-1 focus:ring-red-50"
            >
              Delete
            </button>
          ) : null}
        </div>
      </header>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          const items = Array.from(imageData);
          const [reorderedItem] = items.splice(result.source.index, 1);
          items.splice(result.destination.index, 0, reorderedItem);
          setImageData(items);
        }}
      >
        <Droppable droppableId="image-grid" direction="horizontal">
          {(provided) => (
            <div
              className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {imageData.map((image, index) => (
                <Draggable
                  key={image.uid}
                  draggableId={image.uid}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ImageCard
                        image={image}
                        key={image.uid}
                        handleImageSelection={handleImageSelection}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              <ImageUploader />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
