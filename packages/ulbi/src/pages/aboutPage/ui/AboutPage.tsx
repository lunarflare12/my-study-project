import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation("widgets");

    return (
        <div>
            <h1>{t("about")}</h1>
        </div>
    );
};

export default AboutPage;
