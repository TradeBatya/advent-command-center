import { useEffect, useRef, useState } from 'react';
import { Users, Building2, Star, Crosshair, TrendingUp, Coins } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useSettings();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: 287, label: t('stats.activePilots'), trend: '+8%' },
    { icon: Building2, value: 8, label: t('stats.corporations'), trend: '+2' },
    { icon: Star, value: 8, label: t('stats.starSystems'), trend: 'Growing' },
  ];

  const miniStats = [
    { icon: Crosshair, value: '12.4K', label: t('stats.totalKills') },
    { icon: Coins, value: '890B', label: t('stats.iskDestroyed') },
    { icon: TrendingUp, value: '82%', label: t('stats.fleetEfficiency') },
  ];

  const AnimatedCounter = ({ target, isVisible }: { target: number; isVisible: boolean }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [isVisible, target]);

    return <span>{count}</span>;
  };

  return (
    <section id="stats" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-space-card" />
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Red Light Beams */}
      <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-advent-red/5 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-advent-red/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-exo font-black text-4xl sm:text-5xl tracking-wider text-foreground mb-4">
            {t('stats.title')} <span className="text-primary">{t('stats.titleAccent')}</span>
          </h2>
          <div className="w-24 h-1 gradient-red mx-auto mb-4" />
          <p className="font-rajdhani text-muted-foreground tracking-wider">{t('stats.subtitle')}</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass gradient-border p-8 rounded-lg text-center group hover:scale-[1.02] transition-all duration-300 glow-border-hover ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-rajdhani font-bold text-6xl sm:text-7xl text-primary text-glow-red mb-2">
                <AnimatedCounter target={stat.value} isVisible={isVisible} />
              </div>
              <div className="w-full h-1 bg-space-panel rounded-full mb-4 overflow-hidden">
                <div 
                  className="h-full gradient-red transition-all duration-1000"
                  style={{ width: isVisible ? '100%' : '0%' }}
                />
              </div>
              <p className="font-rajdhani text-sm tracking-[0.2em] text-muted-foreground mb-2">{stat.label}</p>
              <span className="text-xs text-green-400">↑ {stat.trend}</span>
            </div>
          ))}
        </div>

        {/* Mini Stats */}
        <div className="flex flex-wrap justify-center gap-4">
          {miniStats.map((stat) => (
            <div key={stat.label} className="glass px-6 py-4 rounded-lg flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-primary" />
              <div>
                <span className="font-rajdhani font-bold text-xl text-foreground">{stat.value}</span>
                <span className="font-inter text-xs text-muted-foreground ml-2">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* External Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://zkillboard.com/alliance/99013780/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-rajdhani text-sm text-primary hover:text-advent-red-bright transition-colors"
          >
            {t('stats.viewZkill')}
          </a>
          <a
            href="https://evemaps.dotlan.net/alliance/Advent%20Coalition"
            target="_blank"
            rel="noopener noreferrer"
            className="font-rajdhani text-sm text-primary hover:text-advent-red-bright transition-colors"
          >
            {t('stats.viewDotlan')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
