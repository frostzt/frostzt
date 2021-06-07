import React, { useRef, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

// Styles
import styles from "./Scroll.module.scss";

const Scroll: React.FC = ({ children }) => {
  const size = useWindowSize();

  // Refs
  const containerRef = useRef(null);
  const scrollRef = useRef<any>(null);

  const skewConfigs = {
    ease: 0.4,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    if (scrollRef.current) {
      requestAnimationFrame(() => skewScrolling());
    }
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // Variables
    const diff = skewConfigs.current - skewConfigs.rounded;
    const acceleration = diff / size.width;
    const velocity = +acceleration;
    const skew = velocity * 10.5;

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`;
    }

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={scrollRef} className={styles.scroll}>
        {children}
      </div>
    </div>
  );
};

export default Scroll;
