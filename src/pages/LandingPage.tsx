import React from 'react';
import { Box, Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import RevenueModelSection from '../components/RevenueModelSection';
import GoToMarketSection from '../components/GoToMarketSection';
import TeamSection from '../components/TeamSection';
import FinancingSection from '../components/FinancingSection';
import VisionSection from '../components/VisionSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const LandingPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <RevenueModelSection />
      <GoToMarketSection />
      <TeamSection />
      <FinancingSection />
      <VisionSection />
      <ContactSection />
    </Box>
  );
};

export default LandingPage; 