import { useRef } from 'react';

export function ScrollToTopButton() {
  // Skapar en referens till top-elementet (början av sidan)
  const topRef = useRef<HTMLDivElement>(null); // null är initialvärdet för referensen

  // Funktion som rullar till toppen när knappen klickas
  const scrollToTop = () => {
    // Om referensen till top-elementet finns, använd scrollIntoView för att scrolla till toppen
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Detta element representerar toppen av sidan */}
      <div ref={topRef}></div>

      <div className='content-simulator'>
        {/* Simulerar innehåll som gör sidan lång så att scrollning blir nödvändig */}
        <p>Scrolla ner för att se knappen</p>
      </div>

      {/* Knapp som rullar sidan tillbaka till toppen */}
      <button
        className='scroll-to-top-button'
        onClick={scrollToTop}
      >
        Scroll to Top
      </button>
    </div>
  );
}
