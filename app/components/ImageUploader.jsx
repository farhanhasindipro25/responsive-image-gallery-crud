import { PhotoIcon } from "@heroicons/react/24/outline";

export default function ImageUploader(props) {
  const { onChange } = props;

  return (
    <>
      <label
        id="add-image"
        name="add-image"
        className="flex flex-col items-center justify-center w-full h-full p-6 border-2 border-dashed rounded-lg cursor-pointer border-gray-300"
      >
        <div className="flex flex-col items-center justify-center gap-3 h-full w-full">
          <PhotoIcon className="w-10 h-10 rounded-lg text-gray-300" />
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-semibold text-gray-700 text-center">
              Add Image
            </p>
            <input type="file" className="hidden" onChange={onChange} />
          </div>
        </div>
      </label>
    </>
  );
}
