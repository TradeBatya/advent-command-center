import { Users, Activity, ExternalLink } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

const CorporationsSection = () => {
  const { t } = useSettings();

  const corporations = [
    { ticker: 'UNTGY', name: 'Unitology Clade', members: 183, focusKey: 'corps.mainPvp', statusKey: 'corps.recruiting', statusColor: 'green' },
    { ticker: 'VRDOS', name: 'Vardos Prime', members: 35, focusKey: 'corps.advancedOps', statusKey: 'corps.selective', statusColor: 'yellow' },
    { ticker: 'PRMST', name: 'The Promise Trust', members: 23, focusKey: 'corps.industry', statusKey: 'corps.open', statusColor: 'green' },
    { ticker: 'APRTR', name: 'Aperture Void Corp', members: 21, focusKey: 'corps.exploration', statusKey: 'corps.recruiting', statusColor: 'green' },
    { ticker: 'ANKIS', name: 'Anoikis Consortium', members: 10, focusKey: 'corps.wormhole', statusKey: 'corps.selective', statusColor: 'yellow' },
    { ticker: 'DRAFT', name: 'Draft Project', members: 9, focusKey: 'corps.research', statusKey: 'corps.private', statusColor: 'red' },
  ];

  const statusColors: Record<string, string> = {
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    red: 'bg-red-400',
  };

  return (
    <section id="corporations" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-space-card" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-exo font-black text-4xl sm:text-5xl tracking-wider text-foreground mb-4">
            {t('corps.title')} <span className="text-primary">{t('corps.titleAccent')}</span>
          </h2>
          <div className="w-24 h-1 gradient-red mx-auto mb-4" />
          <p className="font-rajdhani text-muted-foreground tracking-wider">{t('corps.subtitle')}</p>
        </div>

        {/* Corporations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporations.map((corp) => (
            <div
              key={corp.ticker}
              className="glass rounded-lg overflow-hidden group hover:scale-[1.02] transition-all duration-300 glow-border-hover"
            >
              {/* Left Border Accent */}
              <div className="flex">
                <div className="w-1 gradient-red" />
                <div className="flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-primary px-2 py-1 rounded font-orbitron text-xs font-bold text-primary-foreground mb-2">
                        [{corp.ticker}]
                      </span>
                      <h3 className="font-rajdhani font-bold text-lg text-foreground">{corp.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 ${statusColors[corp.statusColor]} rounded-full`} />
                      <span className="font-inter text-xs text-muted-foreground">{t(corp.statusKey)}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="font-inter text-sm">{corp.members} {t('corps.pilots')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Activity className="w-4 h-4" />
                      <span className="font-inter text-sm">{t('corps.active')}</span>
                    </div>
                  </div>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-space-panel px-3 py-1 rounded-full text-xs text-muted-foreground">
                      {t('corps.nullsec')}
                    </span>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                      {t(corp.focusKey)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href="https://zkillboard.com/alliance/99013780/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-rajdhani text-sm text-primary hover:text-advent-red-bright transition-colors"
                    >
                      zKillboard <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporationsSection;
