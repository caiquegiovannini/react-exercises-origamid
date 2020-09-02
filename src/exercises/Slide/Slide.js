import React, { useState, useEffect, useRef } from 'react';
import styles from './Slide.module.css';

const slides = [
  {
    id: 'slide1',
    text: 'Slide 1',
  },
  {
    id: 'slide2',
    text: 'Slide 2',
  },
  {
    id: 'slide3',
    text: 'Slide 3',
  },
];

function Slide() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);

  const contentRef = useRef();

  function slidePrev() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function slideNext() {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  }

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
}

export default Slide;
