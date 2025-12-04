import { useEffect, useRef, useMemo } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate random stars
  const stars = useMemo(() => {
    return Array.from({ length: 250 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      twinkleSpeed: Math.random() * 3 + 2,
      twinkleDelay: Math.random() * 5,
    }));
  }, []);

  // Generate floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 20 + 10,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Deep Space Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(61, 0, 0, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(26, 0, 26, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, #0a0505 0%, #050505 100%)
          `,
        }}
      />

      {/* Layer 2: Static Stars with Twinkle */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.twinkleSpeed}s`,
              animationDelay: `${star.twinkleDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 3: Nebula Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red Nebula */}
        <div 
          className="absolute animate-nebula-1"
          style={{
            top: '10%',
            left: '20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(61, 0, 0, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Purple Nebula */}
        <div 
          className="absolute animate-nebula-2"
          style={{
            bottom: '20%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(26, 0, 26, 0.25) 0%, transparent 70%)',
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Orange/Red Accent */}
        <div 
          className="absolute animate-nebula-3"
          style={{
            top: '50%',
            left: '60%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(61, 26, 0, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Layer 4: Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/50 animate-drift"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.speed}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 5: Light Sweep Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute animate-light-sweep"
          style={{
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(135deg, transparent 0%, transparent 45%, rgba(198, 40, 40, 0.03) 50%, transparent 55%, transparent 100%)',
            transform: 'translateX(-100%)',
          }}
        />
      </div>

      {/* Layer 6: Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Scanline Effect (very subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] animate-scanline"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
