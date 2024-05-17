import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button, type ButtonProps } from "./Button";

export interface ImageButtonProps
  extends Omit<ButtonProps, "variant" | "size" | "className"> {
  imgPath: string;
  imgAlt: string;
}
export const ImageButton = forwardRef<HTMLButtonElement, ImageButtonProps>(
  ({ imgPath, imgAlt, ...props }, ref) => {
    return (
      <Button variant="panel" size="panel" {...props} ref={ref}>
        <img
          src={imgPath}
          alt={imgAlt}
          className={cn("w-4/5 h-4/5 object-cover")}
        />
      </Button>
    );
  },
);
ImageButton.displayName = "ImageButton";
