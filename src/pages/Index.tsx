
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
        
        {/* CTA Section for Authentication */}
        <section className="py-16 bg-rose-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Memulai Perjalanan Kecantikan Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Bergabunglah dengan ribuan pengguna yang sudah merasakan kemudahan booking salon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/auth">
                  Daftar Sekarang
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-rose-600">
                <Link to="/auth">
                  Masuk ke Akun
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
