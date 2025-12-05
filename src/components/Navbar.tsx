import { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';
import allianceLogo from '@/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, theme, toggleLanguage, toggleTheme, t } = useSettings();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#stats' },
    { name: t('nav.corporations'), href: '#corporations' },
    { name: t('nav.killboard'), href: 'https://zkillboard.com/alliance/99013780/', external: true },
    { name: t('nav.join'), href: '#recruitment' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark shadow-lg shadow-advent-red/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={allianceLogo} 
              alt="ADVENT COALITION Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" 
            />
            <span className="font-exo font-bold text-lg tracking-widest text-foreground hidden sm:block group-hover:text-primary transition-colors">
              ADVENT COALITION
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-rajdhani font-semibold text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Section: Language + Theme + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="glass px-3 py-2 rounded font-rajdhani font-semibold text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              aria-label={language === 'en' ? 'Switch to Russian' : 'Switch to English'}
            >
              {language === 'en' ? (
                <>
                  <span className="text-base">🇷🇺</span>
                  <span>RU</span>
                </>
              ) : (
                <>
                  <span className="text-base">🇬🇧</span>
                  <span>EN</span>
                </>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="glass p-2 rounded hover:bg-primary/20 transition-colors group"
              aria-label={theme === 'red' ? t('theme.switchToOrange') : t('theme.switchToRed')}
              title={theme === 'red' ? t('theme.switchToOrange') : t('theme.switchToRed')}
            >
              <Palette className={`w-5 h-5 transition-colors ${theme === 'red' ? 'text-advent-red' : 'text-orange-500'} group-hover:text-primary`} />
            </button>

            {/* CTA Button */}
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-red px-5 py-2 rounded font-rajdhani font-bold text-sm tracking-wider text-primary-foreground hover:scale-105 transition-transform glow-border"
            >
              {t('nav.joinDiscord')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-rajdhani font-semibold text-lg tracking-wider text-foreground hover:text-primary"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            
            {/* Mobile Language & Theme Toggles */}
            <div className="flex gap-3 pt-4 border-t border-border">
              <button
                onClick={toggleLanguage}
                className="glass px-4 py-2 rounded font-rajdhani font-semibold text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                {language === 'en' ? (
                  <>
                    <span className="text-base">🇷🇺</span>
                    <span>Русский</span>
                  </>
                ) : (
                  <>
                    <span className="text-base">🇬🇧</span>
                    <span>English</span>
                  </>
                )}
              </button>
              <button
                onClick={toggleTheme}
                className="glass px-4 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
              >
                <Palette className={`w-5 h-5 ${theme === 'red' ? 'text-advent-red' : 'text-orange-500'}`} />
                <span className="font-rajdhani text-sm text-muted-foreground">
                  {theme === 'red' ? 'Orange' : 'Red'}
                </span>
              </button>
            </div>

            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="block gradient-red px-5 py-3 rounded font-rajdhani font-bold text-center tracking-wider text-primary-foreground"
            >
              {t('nav.joinDiscord')}
            </a>
          </div>
        </div>
      )}

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </nav>
  );
};

export default Navbar;
