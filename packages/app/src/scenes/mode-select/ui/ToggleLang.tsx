import { Button } from "@/shared/ui";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const ToggleLang: FC = () => {
  const { i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ja" : "en");
  };

  return (
    <Button variant="panel" onClick={handleClick}>
      {i18n.language === "en" ? "日本語" : "English"}
    </Button>
  );
};
