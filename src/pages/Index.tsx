
import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularSalons from '@/components/home/PopularSalons';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PopularSalons />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
