import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

export default function CobeGlobe() {
  // state for window size
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  // state for ismobile
  const [isMobile, setIsMobile] = useState(false);
  //state for isloading
  const [isLoading, setIsLoading] = useState(true);

  // check if is mobile base on the window size or resize
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    if (windowSize.width < 768) {
      setIsMobile(true);
      console.log("mobile");
    } else {
      setIsMobile(false);
      console.log("desktop");
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width, windowSize.height]);

  // check if is loading the component
  useEffect(() => {
    // onmount set isloading to false
    setIsLoading(false);
    return () => {
      setIsLoading(true);
    };
  }, []);

  // Crear un globo terraqueo en 3d como el de github Universe pero mas sencillo
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let phi = 0;
    const size = isMobile ? 360 : 600;
    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: size * 2,
        height: size * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.5,
        mapSamples: 12000,
        mapBrightness: 5,
        baseColor: [0.8392156, 0.7411764, 0.8039215],
        markerColor: [0.7215, 0.4156, 0.5019],
        glowColor: [0.8392156, 0.7411764, 0.8039215],
        markers: [
          // longitude latitude
          { location: [19.4326, -99.1332], size: 0.04 },
          { location: [21.1619, -86.8515], size: 0.05 },
        ],

        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
      return () => {
        globe.destroy();
      };
    }
  }, [isMobile]);
  return isLoading ? (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
    </div>
  ) : (
    <canvas ref={canvasRef} className={`w-[360px] h-[360px] md:w-[600px] md:h-[600px] m-auto bg-brand-black-900`} width={600} height={600}></canvas>
  );
}
