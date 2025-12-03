import { SettingsProvider } from '@/contexts/SettingsContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import OperationsSection from '@/components/OperationsSection';
import CorporationsSection from '@/components/CorporationsSection';
import RecruitmentSection from '@/components/RecruitmentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <SettingsProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <OperationsSection />
          <CorporationsSection />
          <RecruitmentSection />
        </main>
        <Footer />
      </div>
    </SettingsProvider>
  );
};

export default Index;
