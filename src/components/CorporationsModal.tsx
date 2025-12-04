import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Users, Activity, ExternalLink, Grid3X3 } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';

const CorporationsModal = () => {
  const { t } = useSettings();

  const corporations = [
    { 
      ticker: 'UNTCL', 
      name: 'Unitology Clade', 
      members: 183, 
      focusKey: 'corps.mainPvp', 
      statusKey: 'corps.recruiting', 
      statusColor: 'green',
      zkillboard: 'https://zkillboard.com/corporation/98784178/'
    },
    { 
      ticker: 'VRDOS', 
      name: 'Vardos Prime', 
      members: 35, 
      focusKey: 'corps.advancedOps', 
      statusKey: 'corps.selective', 
      statusColor: 'yellow',
      zkillboard: 'https://zkillboard.com/corporation/98768186/'
    },
    { 
      ticker: 'PRTST', 
      name: 'The Promise Trust', 
      members: 23, 
      focusKey: 'corps.industry', 
      statusKey: 'corps.open', 
      statusColor: 'green',
      zkillboard: 'https://zkillboard.com/corporation/98771060/'
    },
    { 
      ticker: 'APVD', 
      name: 'Aperture Void Corporation', 
      members: 21, 
      focusKey: 'corps.exploration', 
      statusKey: 'corps.recruiting', 
      statusColor: 'green',
      zkillboard: 'https://zkillboard.com/corporation/98508891/'
    },
    { 
      ticker: 'ANKIS', 
      name: 'Anoikis Consortium', 
      members: 10, 
      focusKey: 'corps.wormhole', 
      statusKey: 'corps.selective', 
      statusColor: 'yellow',
      zkillboard: 'https://zkillboard.com/corporation/98777625/'
    },
    { 
      ticker: 'DRFT', 
      name: 'Draft Project', 
      members: 9, 
      focusKey: 'corps.research', 
      statusKey: 'corps.private', 
      statusColor: 'red',
      zkillboard: 'https://zkillboard.com/corporation/98702619/'
    },
    { 
      ticker: 'ADVSV', 
      name: 'Advent Service', 
      members: 1, 
      focusKey: 'corps.management', 
      statusKey: 'corps.closed', 
      statusColor: 'gray',
      zkillboard: 'https://zkillboard.com/corporation/98781528/'
    },
    { 
      ticker: 'ADVT', 
      name: 'Advent TransBus', 
      members: 1, 
      focusKey: 'corps.logistics', 
      statusKey: 'corps.specialized', 
      statusColor: 'blue',
      zkillboard: 'https://zkillboard.com/corporation/98814337/'
    },
  ];

  const statusColors: Record<string, string> = {
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    red: 'bg-red-400',
    gray: 'bg-gray-400',
    blue: 'bg-blue-400',
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="mt-8 mx-auto flex items-center gap-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
        >
          <Grid3X3 className="w-4 h-4" />
          {t('corps.viewAll')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto glass border-primary/30">
        <DialogHeader>
          <DialogTitle className="font-exo font-black text-2xl tracking-wider text-foreground text-center">
            {t('corps.title')} <span className="text-primary">{t('corps.titleAccent')}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
          {corporations.map((corp, index) => (
            <div
              key={corp.ticker}
              className="glass rounded-lg overflow-hidden group hover:scale-[1.02] transition-all duration-300 glow-border-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex h-full">
                <div className="w-1 gradient-red" />
                <div className="flex-1 p-4 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-block bg-primary px-2 py-0.5 rounded font-orbitron text-[10px] font-bold text-primary-foreground mb-1">
                        [{corp.ticker}]
                      </span>
                      <h3 className="font-rajdhani font-bold text-sm text-foreground leading-tight">{corp.name}</h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 ${statusColors[corp.statusColor]} rounded-full`} />
                      <span className="font-inter text-[10px] text-muted-foreground">{t(corp.statusKey)}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span className="font-inter text-xs">{corp.members}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Activity className="w-3 h-3" />
                      <span className="font-inter text-xs">{t('corps.active')}</span>
                    </div>
                  </div>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3 flex-grow">
                    <span className="bg-space-panel px-2 py-0.5 rounded-full text-[10px] text-muted-foreground">
                      {t('corps.nullsec')}
                    </span>
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-[10px]">
                      {t(corp.focusKey)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto">
                    <a
                      href={corp.zkillboard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-rajdhani text-xs text-primary hover:text-advent-red-bright transition-colors"
                    >
                      zKillboard <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CorporationsModal;
