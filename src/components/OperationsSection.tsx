import { Crosshair, Zap, Factory, Rocket, Map, TrendingUp, Radio, GraduationCap } from 'lucide-react';

const OperationsSection = () => {
  const operations = [
    { icon: Crosshair, title: 'FLEET WARFARE', desc: 'Large-scale coordinated PvP operations', active: true },
    { icon: Zap, title: 'SMALL GANG', desc: 'Elite strike teams & fast response', active: true },
    { icon: Factory, title: 'INDUSTRIAL EMPIRE', desc: 'Capital manufacturing & logistics', active: true },
    { icon: Rocket, title: 'CAPITAL OPS', desc: 'Capital ship deployments', active: true },
    { icon: Map, title: 'SOVEREIGNTY', desc: 'Territory control & infrastructure', active: true },
    { icon: TrendingUp, title: 'MARKET DOMINANCE', desc: 'Trade networks & ISK generation', active: true },
    { icon: Radio, title: 'INTELLIGENCE', desc: 'Strategic reconnaissance', active: true },
    { icon: GraduationCap, title: 'TRAINING', desc: 'Pilot development & mentorship', active: true },
  ];

  return (
    <section id="operations" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-space-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-exo font-black text-4xl sm:text-5xl tracking-wider text-foreground mb-4">
            OPERATIONAL <span className="text-primary">CAPABILITIES</span>
          </h2>
          <div className="w-24 h-1 gradient-red mx-auto" />
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {operations.map((op, index) => (
            <div
              key={op.title}
              className="glass gradient-border p-6 rounded-lg group hover:bg-primary/20 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Active Badge */}
              {op.active && (
                <span className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
              
              <op.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-rajdhani font-bold text-sm tracking-wider text-foreground mb-2">{op.title}</h3>
              <p className="font-inter text-xs text-muted-foreground leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
