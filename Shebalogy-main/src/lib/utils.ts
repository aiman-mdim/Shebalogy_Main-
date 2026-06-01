import { clsx, type ClassValue } from "clsx";
import type { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imgSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}
