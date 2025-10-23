import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import type { SectionId } from "../../constants/navigation";
import { useScrollContext } from "./ScrollProvider";

interface SectionWrapperProps {
  id: SectionId;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => {
  const navigate = useNavigate();
  const { isProgrammaticScroll } = useScrollContext();
  
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    onChange: (inView) => {
      if (
        inView &&
        !isProgrammaticScroll.current &&
        window.location.pathname !== `/${id}`
      ) {
        navigate(`/${id}`, { replace: true });
      }
    },
  });

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
};

export default SectionWrapper;
