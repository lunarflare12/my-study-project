import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("pages");

  return (
    <div>
      <h1>{t("homePage")}</h1>
    </div>
  );
};

export default HomePage;
