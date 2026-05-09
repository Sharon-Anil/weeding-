import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: ["#d4af37", "#b76e79", "#f8f8ff"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 1.5 },
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
