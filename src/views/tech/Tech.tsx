import { useTranslation } from "react-i18next";
import TextMagnify from "../../components/ui/TextMagnify";

// Import all tech icons
import nodeIcon from "../../assets/icons/techs/Node.js.svg";
import cssIcon from "../../assets/icons/techs/css.svg";
import flaskIcon from "../../assets/icons/techs/flask.svg";
import gitIcon from "../../assets/icons/techs/git.svg";
import goIcon from "../../assets/icons/techs/go.svg";
import htmlIcon from "../../assets/icons/techs/html.svg";
import jsIcon from "../../assets/icons/techs/js.svg";
import mongodbIcon from "../../assets/icons/techs/mongodb.svg";
import pythonIcon from "../../assets/icons/techs/python.svg";
import reactIcon from "../../assets/icons/techs/react.svg";
import sqlIcon from "../../assets/icons/techs/sql.svg";
import typescriptIcon from "../../assets/icons/techs/typescript.svg";

const Tech = () => {
  const { t } = useTranslation();

  const technologies = [
    { name: "Node.js", icon: nodeIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "React", icon: reactIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Flask", icon: flaskIcon },
    { name: "Go", icon: goIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Git", icon: gitIcon },
    { name: "CSS", icon: cssIcon },
    { name: "HTML", icon: htmlIcon },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto p-8 bg-[var(--color-palette-4)] rounded-3xl border-2 border-gray-500/80">
      <div className="text-center mb-8">
        <TextMagnify
          magnifyScale={1.5}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          {t("tech.title")}
        </TextMagnify>
        <TextMagnify
          magnifyScale={1.3}
          className="text-xl text-gray-600"
        >
          {t("tech.subtitle")}
        </TextMagnify>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 hover:border-gray-300/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
              />
            </div>
            <TextMagnify
              magnifyScale={1.2}
              className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-800 transition-colors duration-300"
            >
              {tech.name}
            </TextMagnify>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <TextMagnify
          magnifyScale={1.3}
          className="text-lg text-gray-600 italic"
        >
          {t("tech.description")}
        </TextMagnify>
      </div>
    </div>
  );
};

export default Tech;
