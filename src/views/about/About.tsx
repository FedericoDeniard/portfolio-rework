import { useTranslation } from "react-i18next";
import me from "../../assets/me-no-bg.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto p-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Purple background shape */}
        <div className="wave-always !absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] bg-[var(--color-palette-2)] rounded-3xl z-0"></div>

        {/* Image that pops out */}
        <img
          src={me}
          alt="Federico Deniard"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[110%] w-auto object-contain filter drop-shadow-xl z-10"
        />
      </div>

      <div className="flex-1 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t("about.title")}
        </h2>
        <p className="text-lg text-gray-600">{t("about.description")}</p>
      </div>
    </div>
  );
};

export default About;

