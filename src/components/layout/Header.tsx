import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 flex justify-center fixed top-4 z-50 font-secondary">
      <nav className="w-full max-w-5xl flex justify-between items-center">
        {/* Isla del Logo */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <a href="#" className="text-white font-bold text-lg tracking-wider">
            Federico Deniard<span className="text-green-400"></span>
          </a>
        </div>

        {/* Isla de Navegación */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
          <ul className="flex items-center space-x-4 text-xs font-medium">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li className="text-gray-500">•</li>
            <li>
              <a
                href="#occupation"
                className="text-gray-300 hover:text-white transition-colors"
              >
                OUR OCCUPATION
              </a>
            </li>
            <li className="text-gray-500">•</li>
            <li>
              <a
                href="#mission"
                className="text-gray-300 hover:text-white transition-colors"
              >
                MISSION & VISION
              </a>
            </li>
            <li className="text-gray-500">•</li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                SERVICES
              </a>
            </li>
            <li className="text-gray-500">•</li>
            <li>
              <a
                href="#blog"
                className="text-gray-300 hover:text-white transition-colors"
              >
                BLOG
              </a>
            </li>
          </ul>
        </div>

        {/* Isla de Acciones */}
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 text-xs font-medium">
            <span className="text-gray-500 cursor-pointer hover:text-white transition-colors">
              ES
            </span>
            <span className="text-white mx-1">EN</span>
          </div>
          {/* Contact Button */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
            <a
              href="#contact"
              className="text-white text-xs font-bold tracking-wider"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
