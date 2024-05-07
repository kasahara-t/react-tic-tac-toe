import helpImgUrl from "@/components/assets/help.png";
import { ImageButton } from "@/components/ui/ImageButton";
import type { FC } from "react";

export const HelpButton: FC = () => {
  const handleButtonClick = () => {
    alert("help is not implement!");
  };
  return (
    <ImageButton
      imgPath={helpImgUrl}
      imgAlt="Help Button"
      onClick={handleButtonClick}
    />
  );
};
