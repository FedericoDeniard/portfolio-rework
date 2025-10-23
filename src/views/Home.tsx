import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import About from "./about/About";
import SectionWrapper from "../components/layout/SectionWrapper";
import { NAV_ITEMS, type SectionId } from "../constants/navigation";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      {NAV_ITEMS.map((item: { id: SectionId; label: string }) => (
        <SectionWrapper
          key={item.id}
          id={item.id}
          className="min-h-screen w-full flex items-center justify-center bg-[var(--color-palette-4)]"
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
