import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Navigation } from './components/Navigation';
import { KeyBenefits } from './components/KeyBenefits';
import { WorkforceManagement } from './components/WorkforceManagement';
import { ReliabilitySection } from './components/ReliabilitySection';
import { BeyondSavings } from './components/BeyondSavings';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { ProblemSection } from './components/ProblemSection';
import { StatsSection } from './components/StatsSection';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <KeyBenefits />
      <Features />
      <HowItWorks />
      <StatsSection />
      <WorkforceManagement />
      <ReliabilitySection />
      <BeyondSavings />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}