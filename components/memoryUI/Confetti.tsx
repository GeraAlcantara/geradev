import { useRef, useCallback, useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function Confetti() {
  const refAnimation = useRef<any>(null);
  const getInstace = useCallback((instance: any) => {
    refAnimation.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimation.current &&
      refAnimation.current({
        ...opts,
        origin: { y: 0.8 },
        particleCount: Math.floor(1500 * particleRatio),
      });
  }, []);
  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 40,
      startVelocity: 55,
    });
    makeShot(0.2, {
      spread: 60,
    });
    makeShot(0.35, {
      spread: 140,
      decay: 0.91,
      scalar: 0.8,
    });
    makeShot(0.1, {
      spread: 140,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    makeShot(0.1, {
      spread: 140,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
  }, []);
  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstace} className='canvasConfettiStyles' />
    </>
  );
}

export default Confetti;
