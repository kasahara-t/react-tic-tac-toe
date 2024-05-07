import { cn } from "@/lib/utils";
import type { FC } from "react";
import { Button, type ButtonProps } from "./Button";

export interface ImageButtonProps
  extends Omit<ButtonProps, "variant" | "size" | "className"> {
  imgPath: string;
  imgAlt: string;
}
export const ImageButton: FC<ImageButtonProps> = ({
  imgPath,
  imgAlt,
  ...props
}) => {
  return (
    <Button variant="panel" size="panel" {...props}>
      <img
        src={imgPath}
        alt={imgAlt}
        className={cn("w-4/5 h-4/5 object-cover")}
      />
    </Button>
  );
};
