import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { useParams, useLocation } from "react-router-dom";
import type { SectionId } from "../../constants/navigation";

interface ScrollContextValue {
  isProgrammaticScroll: React.RefObject<boolean>;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const location = useLocation();
  const { sectionId: urlSectionId } = useParams<{ sectionId?: SectionId }>();
  const isProgrammaticScroll = useRef(false);
  const isFirstRender = useRef(true);
  const scrollTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const fromHeader = (location.state as { fromHeader?: boolean })?.fromHeader;
    const shouldScroll = (isFirstRender.current && urlSectionId) || fromHeader;

    if (shouldScroll && urlSectionId) {
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }

      isProgrammaticScroll.current = true;
      isFirstRender.current = false;

      document
        .getElementById(urlSectionId)
        ?.scrollIntoView({ behavior: "smooth" });

      scrollTimerRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
        scrollTimerRef.current = null;
      }, 1000);
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [urlSectionId, location.state]);

  return (
    <ScrollContext.Provider value={{ isProgrammaticScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
