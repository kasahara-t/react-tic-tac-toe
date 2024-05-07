import helpImgUrl from "@/components/assets/help.png";
import { BaseButton } from "@/components/ui/BaseButton";
import type { FC } from "react";

export const HelpButton: FC = () => {
  const handleButtonClick = () => {
    alert("help is not implement!");
  };
  return <BaseButton imgPath={helpImgUrl} onClick={handleButtonClick} />;
};
