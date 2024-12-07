import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 1024,
    height: 768,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial call to set size
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
