import { useEffect, useRef, useMemo } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate random stars with more variety
  const stars = useMemo(() => {
    return Array.from({ length: 300 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      twinkleSpeed: Math.random() * 4 + 1,
      twinkleDelay: Math.random() * 5,
      brightness: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  // Shooting stars
  const shootingStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      delay: i * 8,
      duration: 2 + Math.random() * 2,
      top: Math.random() * 60,
    }));
  }, []);

  // Floating orbs with glow
  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 150 + 80,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030303]">
      {/* Layer 1: Deep Gradient Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 0, 0, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(60, 0, 60, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 0% 80%, rgba(80, 20, 0, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, #030303 0%, #0a0505 50%, #050308 100%)
          `,
        }}
      />

      {/* Layer 2: Animated Mesh Gradient */}
      <div className="absolute inset-0 animate-mesh-rotate opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 0deg at 30% 30%, transparent 0deg, rgba(198, 40, 40, 0.05) 60deg, transparent 120deg),
              conic-gradient(from 180deg at 70% 70%, transparent 0deg, rgba(60, 0, 80, 0.05) 60deg, transparent 120deg)
            `,
          }}
        />
      </div>

      {/* Layer 3: Stars with enhanced twinkle */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-star-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${star.brightness}) 0%, transparent 70%)`,
              boxShadow: star.size > 1.5 ? `0 0 ${star.size * 2}px rgba(255,255,255,0.3)` : 'none',
              animationDuration: `${star.twinkleSpeed}s`,
              animationDelay: `${star.twinkleDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 4: Shooting Stars */}
      {shootingStars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-shooting-star"
          style={{
            top: `${star.top}%`,
            left: '-5%',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        >
          <div 
            className="w-[100px] h-[2px] relative"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, white 100%)',
              boxShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(198, 40, 40, 0.3)',
              transform: 'rotate(-15deg)',
            }}
          />
        </div>
      ))}

      {/* Layer 5: Floating Orbs with Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute animate-orb-float"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, rgba(198, 40, 40, 0.08) 0%, transparent 70%)`,
              filter: 'blur(40px)',
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 6: Aurora Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[200%] h-[50%] -top-[10%] -left-[50%] animate-aurora"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(198, 40, 40, 0.03) 20%, 
                rgba(150, 0, 50, 0.05) 40%, 
                rgba(100, 0, 80, 0.03) 60%, 
                rgba(198, 40, 40, 0.04) 80%, 
                transparent 100%
              )
            `,
            filter: 'blur(60px)',
            transform: 'rotate(-5deg)',
          }}
        />
      </div>

      {/* Layer 7: Animated Grid with Perspective */}
      <div 
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198, 40, 40, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198, 40, 40, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)',
        }}
      />

      {/* Layer 8: Hexagon Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] animate-hex-drift"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 9: Light Beam Sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[300%] h-[300%] -top-[100%] -left-[100%] animate-beam-sweep"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                transparent 0deg, 
                transparent 355deg, 
                rgba(198, 40, 40, 0.03) 357deg, 
                rgba(255, 255, 255, 0.02) 359deg, 
                transparent 360deg
              )
            `,
          }}
        />
      </div>

      {/* Layer 10: Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay animate-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
