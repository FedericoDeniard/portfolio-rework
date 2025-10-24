import { useTranslation } from "react-i18next";
import me from "../../assets/me-no-bg.png";
import clave from "../../assets/clave.svg";
import TextMagnify from "../../components/ui/TextMagnify";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto p-8 bg-[var(--color-palette-4)] rounded-3xl border-2 border-gray-500/80">
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

      <div className="flex-1 mt-8 md:mt-8 relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(black 0, black 2px, transparent 2px, transparent 20%), url(${clave})`,
            backgroundRepeat: "repeat, no-repeat",
            backgroundPosition: "center, left",
            backgroundSize: "auto, contain",
          }}
        ></div>
        <div className="relative z-10 p-4 text-left">
          <TextMagnify
            magnifyScale={1.5}
            className="text-3xl font-bold text-gray-800"
          >
            {t("about.title")}
          </TextMagnify>
          <TextMagnify
            magnifyScale={1.5}
            className="text-xl font-medium text-gray-700 mb-2"
          >
            {t("about.position")}
          </TextMagnify>
          <TextMagnify
            magnifyScale={1.5}
            className="text-lg text-gray-600 text-pretty"
          >
            {t("about.description")}
          </TextMagnify>
        </div>
      </div>
    </div>
  );
};

export default About;

