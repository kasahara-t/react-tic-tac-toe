import type { FC } from "react";
import "./BaseButton.css";

export interface BaseButtonProps {
  imgPath: string;
  onClick: () => void;
}
export const BaseButton: FC<BaseButtonProps> = ({ imgPath, onClick }) => {
  return (
    <button type="button" className="base-button" onClick={onClick}>
      <img src={imgPath} />
    </button>
  );
};
