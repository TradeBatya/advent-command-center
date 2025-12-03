import { Check, X } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

const RecruitmentSection = () => {
  const { t } = useSettings();

  const benefits = [
    t('recruit.benefit1'),
    t('recruit.benefit2'),
    t('recruit.benefit3'),
    t('recruit.benefit4'),
    t('recruit.benefit5'),
    t('recruit.benefit6'),
    t('recruit.benefit7'),
    t('recruit.benefit8'),
  ];

  const requirements = [
    t('recruit.req1'),
    t('recruit.req2'),
    t('recruit.req3'),
    t('recruit.req4'),
    t('recruit.req5'),
    t('recruit.req6'),
    t('recruit.req7'),
    t('recruit.req8'),
  ];

  return (
    <section id="recruitment" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black via-advent-red-dark/20 to-space-black" />
      <div className="absolute inset-0 bg-gradient-radial from-advent-red/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block glass px-4 py-2 rounded-full font-rajdhani text-sm tracking-wider text-primary mb-6">
            {t('recruit.badge')}
          </span>
          <h2 className="font-exo font-black text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground mb-6 text-glow-red">
            {t('recruit.title')} <span className="text-primary">{t('recruit.titleAccent')}</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t('recruit.description')}
          </p>
        </div>

        {/* Benefits & Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* What We Provide */}
          <div className="glass gradient-border p-8 rounded-lg">
            <h3 className="font-rajdhani font-bold text-xl tracking-wider text-foreground mb-6 flex items-center gap-3">
              <Check className="w-6 h-6 text-green-400" />
              {t('recruit.provide')}
            </h3>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="font-inter text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="glass gradient-border p-8 rounded-lg">
            <h3 className="font-rajdhani font-bold text-xl tracking-wider text-foreground mb-6 flex items-center gap-3">
              <X className="w-6 h-6 text-primary" />
              {t('recruit.requirements')}
            </h3>
            <ul className="space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-space-panel flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </span>
                  <span className="font-inter text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gradient-red px-12 py-5 rounded-lg font-rajdhani font-bold text-xl tracking-wider text-primary-foreground hover:scale-105 transition-all glow-border animate-pulse-glow"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            {t('recruit.applyNow')}
          </a>
          <p className="font-inter text-sm text-muted-foreground mt-4">{t('recruit.responseTime')}</p>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
