import { useInView } from "react-intersection-observer";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, memo } from "react";
import Header, { NAV_ITEMS, type SectionId } from "../components/layout/Header";
import "./Home.css";

const Section = memo(
  ({
    id,
    label,
    isProgrammaticScroll,
  }: {
    id: SectionId;
    label: string;
    isProgrammaticScroll: ReturnType<typeof useRef<boolean>>;
  }) => {
    const navigate = useNavigate();
    const { ref } = useInView({
      threshold: 0.5,
      onChange: (inView) => {
        if (
          inView &&
          !isProgrammaticScroll.current &&
          window.location.pathname.slice(1) !== id
        ) {
          navigate(`/${id}`, { replace: true });
        }
      },
    });

    return (
      <section
        id={id}
        ref={ref}
        className="min-h-screen w-full flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold">{label}</h2>
      </section>
    );
  }
);

function Home() {
  const location = useLocation();
  const { sectionId: urlSectionId } = useParams<{ sectionId?: SectionId }>();
  const isProgrammaticScroll = useRef(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fromHeader = (location.state as { fromHeader?: boolean })?.fromHeader;
    const shouldScroll = (isFirstRender.current && urlSectionId) || fromHeader;

    if (shouldScroll && urlSectionId) {
      isProgrammaticScroll.current = true;
      isFirstRender.current = false;

      document
        .getElementById(urlSectionId)
        ?.scrollIntoView({ behavior: "smooth" });

      const timer = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);

      return () => clearTimeout(timer);
    }

    isFirstRender.current = false;
  }, [urlSectionId, location.state]);

  return (
    <>
      <Header />
      {NAV_ITEMS.map((item) => (
        <Section
          key={item.id}
          id={item.id}
          label={item.label}
          isProgrammaticScroll={isProgrammaticScroll}
        />
      ))}
    </>
  );
}

export default Home;
