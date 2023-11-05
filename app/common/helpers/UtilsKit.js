import clsx from "clsx";
import { twMerge } from "tw-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}
