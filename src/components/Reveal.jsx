import { useEffect, useRef } from "react";

// Fades and slides its children in when they scroll into view
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) { node.classList.add("in"); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={"reveal " + className} style={{ transitionDelay: delay + "ms" }}>{children}</Tag>;
}
