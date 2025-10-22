import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/wave-effect.css";

export const NAV_ITEMS = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "tech", label: "TECHNOLOGIES" },
  { id: "contact", label: "CONTACT" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    navigate(path, { state: { fromHeader: true } });
  };

  return (
    <header className="w-full p-4 flex justify-center fixed top-4 z-50 font-secondary">
      <nav className="w-full max-w-5xl flex justify-between items-center">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/10">
          <NavLink
            to="/about"
            onClick={(e) => handleNavClick(e, "/about")}
            className="text-white font-bold text-lg tracking-wider block px-4 py-2 wave-container name-hover rounded-full"
          >
            <span className="wave-text">{t('nav.title')}</span>
          </NavLink>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
          <ul className="flex items-center text-xs font-medium">
            {NAV_ITEMS.map((item, index) => (
              <Fragment key={item.id}>
                {index > 0 && <li className="px-2 text-gray-500">•</li>}
                <li>
                  <NavLink
                    to={`/${item.id}`}
                    onClick={(e) => handleNavClick(e, `/${item.id}`)}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {t(`nav.${item.id}`)}
                  </NavLink>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 text-xs font-medium">
            <span
              onClick={() => changeLanguage('es')}
              className={`cursor-pointer hover:text-white transition-colors ${i18n.language === 'es' ? 'text-white' : 'text-gray-500'}`}>
              ES
            </span>
            <span className="text-gray-500 mx-1">/</span>
            <span
              onClick={() => changeLanguage('en')}
              className={`cursor-pointer hover:text-white transition-colors ${i18n.language === 'en' ? 'text-white' : 'text-gray-500'}`}>
              EN
            </span>
          </div>
          <div className="bg-indigo-600 rounded-full">
            <NavLink
              to="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="text-white block px-4 py-2 text-xs font-bold tracking-wider wave-container contact-hover rounded-full"
            >
              <span className="wave-text">{t('nav.contact_us')}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
