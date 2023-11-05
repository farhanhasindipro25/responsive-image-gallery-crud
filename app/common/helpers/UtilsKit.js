import clsx from "clsx";
import { twMerge } from "tw-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}

// function for handling numerical cases in words

export function handleNumericalCasesInWordsForImages(variable) {
  if (variable === 0) {
    return "No images selected";
  } else if (variable === 1) {
    return `${variable} image selected`;
  } else if (variable > 1) {
    return `${variable} images selected`;
  }
}

// function for handling dynamic toast messages
export function handleDynamicToastMsg(imageLength) {
  if (imageLength === 1) {
    return "1 Image Deleted Successfully";
  } else {
    return `${imageLength} Images Deleted Successfully`;
  }
}
