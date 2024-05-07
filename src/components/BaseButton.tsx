import type { FC } from "react";
import { cn } from "@/lib/utils";

export interface BaseButtonProps {
  imgPath: string;
  onClick: () => void;
}
export const BaseButton: FC<BaseButtonProps> = ({ imgPath, onClick }) => {
  return (
    <button type="button" className={cn(
      "flex items-center justify-center",
      "aspect-square",
      "rounded-3xl",
      "bg-black bg-opacity-30",
      "shadow-custom"
    )} onClick={onClick}>
      <img src={imgPath} className={cn("w-4/5 h-4/5 object-cover")} />
    </button>
  );
};