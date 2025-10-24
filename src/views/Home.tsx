import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import Header from "../components/layout/Header";
import About from "./about/About";
import SectionWrapper from "../components/layout/SectionWrapper";
import { NAV_ITEMS, type SectionId } from "../constants/navigation";

function Home() {
  const { t } = useTranslation();
  const { sectionId } = useParams<{ sectionId: string }>();
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    if (sectionId) {
      // We need a small delay to ensure the sections are rendered before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [sectionId, scrollToSection]);

  return (
    <>
      <Header />
      {NAV_ITEMS.map((item: { id: SectionId; label: string }) => (
        <SectionWrapper
          key={item.id}
          id={item.id}
          className="min-h-screen w-full flex items-center justify-center"
        >
          {item.id === "about" ? (
            <About />
          ) : (
            <h2 className="text-3xl font-bold text-gray-800">
              {t(`nav.${item.id}`)}
            </h2>
          )}
        </SectionWrapper>
      ))}
    </>
  );
}

export default Home;
