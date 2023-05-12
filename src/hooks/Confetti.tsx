import { useState, useEffect } from "react";
import Confetti from "react-confetti";
function useWindowSize() {
  type windowSize = {
    width: undefined | number;
    height: undefined | number;
  };

  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const ConfettiComponent = () => {
  const [isBrowser, setIsBrower] = useState(false);
  const { width, height } = useWindowSize();
  useEffect(() => {
    setIsBrower(true);
  }, []);
  if (!isBrowser) {
    return null;
  }

  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
