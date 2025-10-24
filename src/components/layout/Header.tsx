import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useActiveSection } from '../../hooks/useActiveSection';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "../../constants/navigation";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { scrollToSection } = useScrollToSection();
  const activeSection = useActiveSection();
  const navigate = useNavigate();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    navigate(`/${sectionId}`);
    scrollToSection(sectionId);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full p-4 flex justify-center fixed top-4 z-50 font-secondary">
      <nav className="w-full max-w-5xl flex justify-between items-center">
        <div className="bg-[var(--color-palette-2)]/70 backdrop-blur-sm rounded-full border border-gray-500/80 shadow-lg">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-white font-bold text-lg tracking-wider block px-4 py-2 wave-container name-hover rounded-full cursor-pointer"
          >
            <span className="wave-text">{t('nav.title')}</span>
          </a>
        </div>

        <div className="bg-[var(--color-palette-2)]/70 backdrop-blur-sm rounded-full px-2 border border-gray-500/80 shadow-lg">
          <ul className="flex items-center text-xs font-medium">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <Fragment key={item.id}>
                  {index > 0 && <li className="px-2 text-gray-500">|</li>}
                  <li className="relative py-2">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative px-4 transition-colors ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {t(`nav.${item.id}`)}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute inset-0 bg-white/20 rounded-full -z-10"
                      />
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-[var(--color-palette-2)]/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-500/80 text-xs font-medium shadow-lg">
            <span
              onClick={() => changeLanguage('es')}
              className={`cursor-pointer hover:text-white transition-colors ${i18n.language === 'es' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
              ES
            </span>
            <span className="text-gray-500 mx-1">/</span>
            <span
              onClick={() => changeLanguage('en')}
              className={`cursor-pointer hover:text-white transition-colors ${i18n.language === 'en' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
              EN
            </span>
          </div>
          <div className="bg-[var(--color-palette-2)]/70 backdrop-blur-sm rounded-full border border-gray-500/80 shadow-lg">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white block px-4 py-2 text-xs font-bold tracking-wider wave-container contact-hover rounded-full cursor-pointer"
            >
              <span className="wave-text">{t('nav.contact_us')}</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
