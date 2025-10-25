import { useEffect, useRef, createRef } from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import SectionRefsContext from '../context/SectionRefsContext';
import Header from "../components/layout/Header";
import About from "./about/About";
import Tech from "./tech/Tech";
import SectionWrapper from "../components/layout/SectionWrapper";
import { NAV_ITEMS } from "../constants/navigation";

function Home() {
  const { t } = useTranslation();
  const { sectionId } = useParams<{ sectionId: string }>();
  const { scrollToSection } = useScrollToSection();

  const sectionRefs = useRef(NAV_ITEMS.map(() => createRef<HTMLElement>()));

  useEffect(() => {
    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [sectionId, scrollToSection]);

  return (
    <SectionRefsContext.Provider value={{ sectionRefs: sectionRefs.current }}>
      <Header />
      {NAV_ITEMS.map((item, index) => (
        <SectionWrapper
          key={item.id}
          ref={sectionRefs.current[index]}
          id={item.id}
          className="min-h-screen w-full flex items-center justify-center"
        >
          {item.id === "about" ? (
            <About />
          ) : item.id === "tech" ? (
            <Tech />
          ) : (
            <h2 className="text-3xl font-bold text-gray-800">
              {t(`nav.${item.id}`)}
            </h2>
          )}
        </SectionWrapper>
      ))}
    </SectionRefsContext.Provider>
  );
}

export default Home;
