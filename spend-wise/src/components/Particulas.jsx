import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const Particulas = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'links',
        fullScreen: { enable: false },
        background: {
          color: { value: "#0f172a" },
        },
      }}
    />
  );
};

export default Particulas;
