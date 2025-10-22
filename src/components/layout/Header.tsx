import { useState, useEffect, Fragment } from "react";

type SectionId = "about" | "projects" | "tech" | "contact";

interface NavItem {
  id: SectionId;
  label: string;
  href: string;
}

type ActiveSection = SectionId | null;

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
  { id: "tech", label: "TECHNOLOGIES", href: "#tech" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export const Header = () => {
  const getInitialSection = (): SectionId | null => {
    const hash = window.location.hash.replace("#", "");
    if (!NAV_ITEMS.some((item) => item.id === hash)) {
      return null;
    }
    return hash as SectionId;
  };

  const [activeSection, setActiveSection] =
    useState<ActiveSection>(getInitialSection);

  // Sincronizar con cambios en la URL
  useEffect(() => {
    const updateFromUrl = () => {
      const hash = window.location.hash.replace("#", "") as ActiveSection;
      if (
        hash &&
        hash !== activeSection &&
        NAV_ITEMS.some((item) => item.id === hash)
      ) {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("hashchange", updateFromUrl);
    return () => window.removeEventListener("hashchange", updateFromUrl);
  }, [activeSection]);

  return (
    <header className="w-full p-4 flex justify-center fixed top-4 z-50 font-secondary">
      <nav className="w-full max-w-5xl flex justify-between items-center">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <a
            href="#about"
            className="text-white font-bold text-lg tracking-wider"
          >
            Federico Deniard
          </a>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
          <ul className="flex items-center text-xs font-medium">
            {NAV_ITEMS.map((item, index) => (
              <Fragment key={item.id}>
                {index > 0 && <li className="px-2 text-gray-500">•</li>}
                <li>
                  <a
                    href={item.href}
                    className={`${
                      activeSection === item.id
                        ? "text-white font-semibold"
                        : "text-gray-300"
                    } hover:text-white transition-colors`}
                  >
                    {item.label}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 text-xs font-medium">
            <span className="text-gray-500 cursor-pointer hover:text-white transition-colors">
              ES
            </span>
            <span className="text-white mx-1">EN</span>
          </div>
          <div className="bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-full px-4 py-2 text-xs font-bold tracking-wider">
            <a href="#contact" className="text-white">
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
