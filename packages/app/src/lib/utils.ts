import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const getRandomElement = <T>(items: T[]): T | undefined => {
  if (items.length === 0) return undefined;
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const preloadImages = (...images: string[]) => {
  for (const src of images) {
    const img = new Image();
    img.src = src;
  }
};
