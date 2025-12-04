import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';
type Theme = 'red' | 'orange';

interface SettingsContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.corporations': 'Corporations',
    'nav.killboard': 'Killboard',
    'nav.join': 'Join',
    'nav.joinDiscord': 'JOIN DISCORD',
    
    // Hero
    'hero.badge': 'ELITE NULLSEC ALLIANCE',
    'hero.title1': 'ADVENT',
    'hero.title2': 'COALITION',
    'hero.subtitle': 'DOMINATION THROUGH UNITY',
    'hero.description': 'Elite coalition forging supremacy in sovereign nullsec. We are a tight-knit, organized alliance of nearly 300 capsuleers with ambitious goals. Join forces and make your mark on the galaxy.',
    'hero.joinDiscord': 'JOIN DISCORD',
    'hero.exploreFleet': 'EXPLORE FLEET',
    'hero.scroll': 'SCROLL TO EXPLORE',
    
    // Stats
    'stats.title': 'COALITION',
    'stats.titleAccent': 'POWER',
    'stats.subtitle': 'Real-time alliance metrics',
    'stats.activePilots': 'ACTIVE PILOTS',
    'stats.corporations': 'CORPORATIONS',
    'stats.starSystems': 'STAR SYSTEMS',
    'stats.totalKills': 'Total Kills',
    'stats.iskDestroyed': 'ISK Destroyed',
    'stats.fleetEfficiency': 'Fleet Efficiency',
    'stats.viewZkill': 'View on zKillboard →',
    'stats.viewDotlan': 'View on DOTLAN →',
    
    // Operations
    'ops.title': 'OPERATIONAL',
    'ops.titleAccent': 'CAPABILITIES',
    'ops.fleetWarfare': 'FLEET WARFARE',
    'ops.fleetWarfareDesc': 'Large-scale coordinated PvP operations',
    'ops.smallGang': 'SMALL GANG',
    'ops.smallGangDesc': 'Elite strike teams & fast response',
    'ops.industrial': 'INDUSTRIAL EMPIRE',
    'ops.industrialDesc': 'Capital manufacturing & logistics',
    'ops.capitalOps': 'CAPITAL OPS',
    'ops.capitalOpsDesc': 'Capital ship deployments',
    'ops.sovereignty': 'SOVEREIGNTY',
    'ops.sovereigntyDesc': 'Territory control & infrastructure',
    'ops.market': 'MARKET DOMINANCE',
    'ops.marketDesc': 'Trade networks & ISK generation',
    'ops.intelligence': 'INTELLIGENCE',
    'ops.intelligenceDesc': 'Strategic reconnaissance',
    'ops.training': 'TRAINING',
    'ops.trainingDesc': 'Pilot development & mentorship',
    
    // Corporations
    'corps.title': 'ALLIED',
    'corps.titleAccent': 'CORPORATIONS',
    'corps.subtitle': '8 specialized corps united under ADVENT',
    'corps.pilots': 'pilots',
    'corps.active': 'Active',
    'corps.recruiting': 'Recruiting',
    'corps.selective': 'Selective',
    'corps.open': 'Open',
    'corps.private': 'Private',
    'corps.nullsec': 'Nullsec',
    'corps.mainPvp': 'Main PvP & Operations',
    'corps.advancedOps': 'Advanced Operations',
    'corps.industry': 'Industry & Logistics',
    'corps.exploration': 'Exploration & PvE',
    'corps.wormhole': 'Wormhole Operations',
    'corps.research': 'Research & Development',
    'corps.management': 'Alliance Management',
    'corps.logistics': 'Logistics & Transport',
    'corps.closed': 'Closed',
    'corps.specialized': 'Specialized',
    'corps.viewAll': 'View All Corporations',
    
    // Recruitment
    'recruit.badge': 'JOIN THE VANGUARD',
    'recruit.title': 'BECOME AN',
    'recruit.titleAccent': 'ADVENT PILOT',
    'recruit.description': 'We seek capsuleers ready to dominate nullsec. Whether you\'re a fleet commander, industrialist, or hunter, ADVENT offers the platform for your legend.',
    'recruit.provide': 'WHAT WE PROVIDE',
    'recruit.requirements': 'REQUIREMENTS',
    'recruit.benefit1': 'Sovereign nullsec territory',
    'recruit.benefit2': '100% SRP (Ship Replacement)',
    'recruit.benefit3': 'Experienced FCs & daily fleets',
    'recruit.benefit4': 'Advanced industrial infrastructure',
    'recruit.benefit5': 'Capital construction facilities',
    'recruit.benefit6': 'Active Discord community',
    'recruit.benefit7': 'Competitive buy-back programs',
    'recruit.benefit8': 'PvP mentorship & training',
    'recruit.req1': '10M+ skill points recommended',
    'recruit.req2': 'Omega clone status',
    'recruit.req3': 'Discord + working microphone',
    'recruit.req4': 'ESI verification (security)',
    'recruit.req5': 'Team-oriented mindset',
    'recruit.req6': 'English communication',
    'recruit.req7': 'Self-sufficient income',
    'recruit.req8': 'Active participation',
    'recruit.applyNow': 'APPLY NOW',
    'recruit.responseTime': 'Response time: < 24 hours',
    
    // Footer
    'footer.tagline': 'Domination Through Unity',
    'footer.description': 'Elite nullsec alliance forging supremacy across New Eden.',
    'footer.navigation': 'NAVIGATION',
    'footer.resources': 'RESOURCES',
    'footer.getInTouch': 'GET IN TOUCH',
    'footer.discordServer': 'Discord Server',
    'footer.inGame': 'In-game: ADVENT Recruitment',
    'footer.active247': '24/7 Active (US/EU/ASIA)',
    'footer.copyright': '© 2025 ADVENT COALITION. All rights reserved.',
    'footer.notAffiliated': 'Not affiliated with CCP Games',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.corporations': 'Corporations',
    'footer.join': 'Join',
    'footer.rules': 'Rules',
    'footer.killboard': 'Killboard',
    'footer.fleetDoctrines': 'Fleet Doctrines',
    'footer.srpGuide': 'SRP Guide',
    'footer.newPilotGuide': 'New Pilot Guide',
    
    // Theme toggle
    'theme.switchToOrange': 'Switch to Orange Theme',
    'theme.switchToRed': 'Switch to Red Theme',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.corporations': 'Корпорации',
    'nav.killboard': 'Киллборд',
    'nav.join': 'Вступить',
    'nav.joinDiscord': 'DISCORD СЕРВЕР',
    
    // Hero
    'hero.badge': 'ЭЛИТНЫЙ АЛЬЯНС НУЛЕЙ',
    'hero.title1': 'АЛЬЯНС',
    'hero.title2': 'ADVENT',
    'hero.subtitle': 'ДОМИНИРОВАНИЕ ЧЕРЕЗ ЕДИНСТВО',
    'hero.description': 'Элитная коалиция, завоёвывающая превосходство в суверенных нулях. Мы сплочённый, организованный альянс из почти 300 капсулиров с амбициозными целями. Присоединяйтесь и оставьте свой след в галактике.',
    'hero.joinDiscord': 'DISCORD СЕРВЕР',
    'hero.exploreFleet': 'НАШИ ФЛОТЫ',
    'hero.scroll': 'ЛИСТАЙТЕ ВНИЗ',
    
    // Stats
    'stats.title': 'МОЩЬ',
    'stats.titleAccent': 'КОАЛИЦИИ',
    'stats.subtitle': 'Метрики альянса в реальном времени',
    'stats.activePilots': 'АКТИВНЫХ ПИЛОТОВ',
    'stats.corporations': 'КОРПОРАЦИЙ',
    'stats.starSystems': 'ЗВЁЗДНЫХ СИСТЕМ',
    'stats.totalKills': 'Всего убийств',
    'stats.iskDestroyed': 'ISK уничтожено',
    'stats.fleetEfficiency': 'Эффективность флота',
    'stats.viewZkill': 'Смотреть на zKillboard →',
    'stats.viewDotlan': 'Смотреть на DOTLAN →',
    
    // Operations
    'ops.title': 'ОПЕРАЦИОННЫЕ',
    'ops.titleAccent': 'ВОЗМОЖНОСТИ',
    'ops.fleetWarfare': 'ФЛОТОВЫЕ СРАЖЕНИЯ',
    'ops.fleetWarfareDesc': 'Крупномасштабные координированные PvP операции',
    'ops.smallGang': 'МАЛЫЕ ГРУППЫ',
    'ops.smallGangDesc': 'Элитные ударные группы и быстрое реагирование',
    'ops.industrial': 'ИНДУСТРИАЛЬНАЯ ИМПЕРИЯ',
    'ops.industrialDesc': 'Производство капиталов и логистика',
    'ops.capitalOps': 'КАПИТАЛЬНЫЕ ОПС',
    'ops.capitalOpsDesc': 'Развёртывание капитальных кораблей',
    'ops.sovereignty': 'СУВЕРЕНИТЕТ',
    'ops.sovereigntyDesc': 'Контроль территории и инфраструктура',
    'ops.market': 'РЫНОЧНОЕ ДОМИНИРОВАНИЕ',
    'ops.marketDesc': 'Торговые сети и генерация ISK',
    'ops.intelligence': 'РАЗВЕДКА',
    'ops.intelligenceDesc': 'Стратегическая рекогносцировка',
    'ops.training': 'ОБУЧЕНИЕ',
    'ops.trainingDesc': 'Развитие пилотов и менторство',
    
    // Corporations
    'corps.title': 'СОЮЗНЫЕ',
    'corps.titleAccent': 'КОРПОРАЦИИ',
    'corps.subtitle': '8 специализированных корпораций под флагом ADVENT',
    'corps.pilots': 'пилотов',
    'corps.active': 'Активна',
    'corps.recruiting': 'Набор открыт',
    'corps.selective': 'Отбор',
    'corps.open': 'Открыта',
    'corps.private': 'Закрыта',
    'corps.nullsec': 'Нули',
    'corps.mainPvp': 'Основные PvP и операции',
    'corps.advancedOps': 'Продвинутые операции',
    'corps.industry': 'Индустрия и логистика',
    'corps.exploration': 'Исследование и PvE',
    'corps.wormhole': 'Операции в червоточинах',
    'corps.research': 'Исследования и разработки',
    'corps.management': 'Управление альянсом',
    'corps.logistics': 'Логистика и транспорт',
    'corps.closed': 'Закрыта',
    'corps.specialized': 'Специализированная',
    'corps.viewAll': 'Показать все корпорации',
    
    // Recruitment
    'recruit.badge': 'ПРИСОЕДИНЯЙТЕСЬ К АВАНГАРДУ',
    'recruit.title': 'СТАНЬ ПИЛОТОМ',
    'recruit.titleAccent': 'ADVENT',
    'recruit.description': 'Мы ищем капсулиров, готовых доминировать в нулях. Флит-командир, индустриалист или охотник — ADVENT предлагает платформу для твоей легенды.',
    'recruit.provide': 'ЧТО МЫ ПРЕДОСТАВЛЯЕМ',
    'recruit.requirements': 'ТРЕБОВАНИЯ',
    'recruit.benefit1': 'Суверенная территория в нулях',
    'recruit.benefit2': '100% SRP (возмещение кораблей)',
    'recruit.benefit3': 'Опытные FC и ежедневные флоты',
    'recruit.benefit4': 'Развитая индустриальная инфраструктура',
    'recruit.benefit5': 'Производство капитальных кораблей',
    'recruit.benefit6': 'Активное Discord сообщество',
    'recruit.benefit7': 'Конкурентные программы выкупа',
    'recruit.benefit8': 'PvP менторство и обучение',
    'recruit.req1': '10М+ очков навыков рекомендуется',
    'recruit.req2': 'Статус Omega клона',
    'recruit.req3': 'Discord + рабочий микрофон',
    'recruit.req4': 'ESI верификация (безопасность)',
    'recruit.req5': 'Командный настрой',
    'recruit.req6': 'Английский язык общения',
    'recruit.req7': 'Самодостаточный доход',
    'recruit.req8': 'Активное участие',
    'recruit.applyNow': 'ПОДАТЬ ЗАЯВКУ',
    'recruit.responseTime': 'Время ответа: < 24 часов',
    
    // Footer
    'footer.tagline': 'Доминирование через единство',
    'footer.description': 'Элитный альянс нулей, завоёвывающий превосходство в Новом Эдеме.',
    'footer.navigation': 'НАВИГАЦИЯ',
    'footer.resources': 'РЕСУРСЫ',
    'footer.getInTouch': 'СВЯЗАТЬСЯ',
    'footer.discordServer': 'Discord сервер',
    'footer.inGame': 'В игре: ADVENT Recruitment',
    'footer.active247': '24/7 Активны (US/EU/ASIA)',
    'footer.copyright': '© 2025 АЛЬЯНС ADVENT. Все права защищены.',
    'footer.notAffiliated': 'Не связано с CCP Games',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms': 'Условия',
    'footer.home': 'Главная',
    'footer.about': 'О нас',
    'footer.corporations': 'Корпорации',
    'footer.join': 'Вступить',
    'footer.rules': 'Правила',
    'footer.killboard': 'Киллборд',
    'footer.fleetDoctrines': 'Доктрины флота',
    'footer.srpGuide': 'Гайд по SRP',
    'footer.newPilotGuide': 'Гайд для новичков',
    
    // Theme toggle
    'theme.switchToOrange': 'Переключить на оранжевую тему',
    'theme.switchToRed': 'Переключить на красную тему',
  },
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('advent-language');
    return (saved as Language) || 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('advent-theme');
    return (saved as Theme) || 'red';
  });

  useEffect(() => {
    localStorage.setItem('advent-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('advent-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'red' ? 'orange' : 'red'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <SettingsContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
