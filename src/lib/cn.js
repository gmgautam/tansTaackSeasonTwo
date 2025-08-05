import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...classes) => {
  return twMerge(classnames(classes));
};
