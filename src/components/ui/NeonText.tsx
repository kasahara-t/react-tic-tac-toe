import { Slot } from "@radix-ui/react-slot";
import type { HtmlHTMLAttributes } from "react";

export interface NeonTextProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
export const NeonText = ({
  asChild = false,
  style,
  ...props
}: NeonTextProps) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp
      style={{
        textShadow: `
        0 0 5px #DB00FF, 
        0 0 10px #DB00FF
      `,
        ...style,
      }}
      {...props}
    />
  );
};
