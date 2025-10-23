import { useTranslation } from "react-i18next";
import me from "../../assets/me.jpg";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <img src={me} alt="Federico Deniard" className="about-image" />
      <div className="about-text">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("about.title")}</h2>
        <p className="text-lg text-gray-600">
          {t("about.description")}
        </p>
      </div>
    </div>
  );
};

export default About;
