import type { FC } from "react";
import { BaseButton } from "./BaseButton";
import helpImgUrl from "./help.png";

export const HelpButton: FC = () => {
  const handleButtonClick = () => {
    alert("help is not implement!");
  };
  return <BaseButton imgPath={helpImgUrl} onClick={handleButtonClick} />;
};
