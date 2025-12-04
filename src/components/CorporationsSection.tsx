import { Users, Activity, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import CorporationsModal from './CorporationsModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const CorporationsSection = () => {
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

        {/* Corporations Carousel */}
        <div className="relative px-0 lg:px-16">
          {/* Custom Navigation Buttons */}
          <button 
            className="swiper-button-prev-custom absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/80 border-2 border-primary text-primary-foreground flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous corporations"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="swiper-button-next-custom absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/80 border-2 border-primary text-primary-foreground flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next corporations"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCreative]}
            slidesPerView={1}
            spaceBetween={24}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={600}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {corporations.map((corp, index) => (
              <SwiperSlide key={corp.ticker} className="!h-auto">
                <div 
                  className="glass rounded-lg overflow-hidden group hover:scale-[1.02] transition-all duration-300 glow-border-hover h-full swiper-slide-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Left Border Accent */}
                  <div className="flex h-full">
                    <div className="w-1 gradient-red" />
                    <div className="flex-1 p-6 flex flex-col">
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
                      <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                        <span className="bg-space-panel px-3 py-1 rounded-full text-xs text-muted-foreground">
                          {t('corps.nullsec')}
                        </span>
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                          {t(corp.focusKey)}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto">
                        <a
                          href={corp.zkillboard}
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center items-center gap-3 mt-8" />
          
          {/* View All Button */}
          <div className="flex justify-center">
            <CorporationsModal />
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #616161;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: hsl(var(--primary-bright));
        }
        
        .swiper-pagination-bullet-active-custom {
          width: 32px;
          height: 10px;
          border-radius: 5px;
          background: hsl(var(--primary));
          box-shadow: 0 0 10px hsl(var(--primary) / 0.8);
        }

        .swiper-slide-animate {
          animation: card-slide-in 0.5s ease-out forwards;
        }

        .swiper-slide-active .swiper-slide-animate,
        .swiper-slide-next .swiper-slide-animate,
        .swiper-slide-prev .swiper-slide-animate {
          animation: card-slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CorporationsSection;
