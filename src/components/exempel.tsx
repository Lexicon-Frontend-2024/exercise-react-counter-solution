import { useState, useRef } from 'react';

export function TimerComponent() {
  const [timer, setTimer] = useState(0); // State för att visa tiden
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref för att hålla intervallet

  const startTimer = () => {
    if (!intervalRef.current) {
      // Startar bara om ingen timer körs
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1); // Uppdaterar tiden och triggar omrendering
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Stoppar intervallet
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <p>Tid: {timer} sekunder</p>
      <button onClick={startTimer}>Starta Timer</button>
      <button onClick={stopTimer}>Stoppa Timer</button>
    </div>
  );
}
