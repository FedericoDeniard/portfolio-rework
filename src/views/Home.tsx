import { useInView } from "react-intersection-observer";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header, { NAV_ITEMS, type SectionId } from "../components/layout/Header";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId: urlSectionId } = useParams<{ sectionId?: SectionId }>();
  const hasMounted = useRef(false);
  const shouldScrollOnMount = useRef(false);
  const isProgrammaticScroll = useRef(false);

  // Detectar si es la primera carga con una URL específica
  useEffect(() => {
    if (!hasMounted.current && urlSectionId) {
      shouldScrollOnMount.current = true;
    }
    hasMounted.current = true;
  }, []);

  // Scroll solo en montaje inicial o cuando location.state indica click del header
  useEffect(() => {
    const shouldScroll =
      (shouldScrollOnMount.current && urlSectionId) ||
      (location.state as { fromHeader?: boolean })?.fromHeader;

    if (shouldScroll && urlSectionId) {
      isProgrammaticScroll.current = true;
      shouldScrollOnMount.current = false;

      const element = document.getElementById(urlSectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }

      const timer = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [urlSectionId, location.state]);

  // Crear observer para cada sección
  const createSectionObserver = (id: SectionId) => {
    const { ref } = useInView({
      threshold: 0.5,
      onChange: (inView) => {
        if (inView && !isProgrammaticScroll.current) {
          const currentPath = window.location.pathname.slice(1);
          if (currentPath !== id) {
            navigate(`/${id}`, { replace: true });
          }
        }
      },
    });

    return ref;
  };

  return (
    <>
      <Header />
      {/* Secciones de navegación */}
      {NAV_ITEMS.map((item) => {
        const ref = createSectionObserver(item.id as SectionId);
        return (
          <section
            key={item.id}
            id={item.id}
            ref={ref}
            className="min-h-screen w-full flex items-center justify-center"
          >
            <h2 className="text-3xl font-bold">{item.label}</h2>
          </section>
        );
      })}
    </>
  );
}

export default Home;
