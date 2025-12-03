import { Crosshair, Zap, Factory, Rocket, Map, TrendingUp, Radio, GraduationCap } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

const OperationsSection = () => {
  const { t } = useSettings();

  const operations = [
    { icon: Crosshair, titleKey: 'ops.fleetWarfare', descKey: 'ops.fleetWarfareDesc', active: true },
    { icon: Zap, titleKey: 'ops.smallGang', descKey: 'ops.smallGangDesc', active: true },
    { icon: Factory, titleKey: 'ops.industrial', descKey: 'ops.industrialDesc', active: true },
    { icon: Rocket, titleKey: 'ops.capitalOps', descKey: 'ops.capitalOpsDesc', active: true },
    { icon: Map, titleKey: 'ops.sovereignty', descKey: 'ops.sovereigntyDesc', active: true },
    { icon: TrendingUp, titleKey: 'ops.market', descKey: 'ops.marketDesc', active: true },
    { icon: Radio, titleKey: 'ops.intelligence', descKey: 'ops.intelligenceDesc', active: true },
    { icon: GraduationCap, titleKey: 'ops.training', descKey: 'ops.trainingDesc', active: true },
  ];

  return (
    <section id="operations" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-space-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-exo font-black text-4xl sm:text-5xl tracking-wider text-foreground mb-4">
            {t('ops.title')} <span className="text-primary">{t('ops.titleAccent')}</span>
          </h2>
          <div className="w-24 h-1 gradient-red mx-auto" />
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {operations.map((op, index) => (
            <div
              key={op.titleKey}
              className="glass gradient-border p-6 rounded-lg group hover:bg-primary/20 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Active Badge */}
              {op.active && (
                <span className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
              
              <op.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-rajdhani font-bold text-sm tracking-wider text-foreground mb-2">{t(op.titleKey)}</h3>
              <p className="font-inter text-xs text-muted-foreground leading-relaxed">{t(op.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
