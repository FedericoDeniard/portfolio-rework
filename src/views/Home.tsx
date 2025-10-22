import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header, { NAV_ITEMS, type SectionId } from "../components/layout/Header";
import "./Home.css";

function Home() {
  // Crear un observer para cada sección
  const createSectionObserver = (id: SectionId) => {
    const [ref, inView] = useInView({
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px',
      triggerOnce: false,
    });

    // Efecto que se ejecuta cuando la visibilidad de la sección cambia
    useEffect(() => {
      if (inView && id !== window.location.hash.replace('#', '')) {
        window.history.replaceState({}, '', `#${id}`);
        window.dispatchEvent(new Event('hashchange'));
      }
    }, [inView, id]);

    return { ref };
  };

  return (
    <>
      <Header />
      {/* Secciones de navegación */}
      {NAV_ITEMS.map((item) => {
        const { ref } = createSectionObserver(item.id as SectionId);
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
