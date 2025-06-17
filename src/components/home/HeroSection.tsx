
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-warm via-rose-soft/30 to-white py-20 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-rose-gradient rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="animate-fade-in">
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-charcoal mb-6 leading-tight">
              Temukan Salon Kecantikan
              <span className="block bg-accent-gradient bg-clip-text text-transparent">
                Terbaik di Indonesia
              </span>
            </h1>
            
            <p className="font-inter text-lg sm:text-xl text-neutral-charcoal/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Platform booking salon kecantikan terpercaya dengan ribuan salon berkualitas di seluruh Indonesia. 
              Booking mudah, harga transparan, review asli.
            </p>
          </div>

          {/* Search Section */}
          <div className="animate-slide-up max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-soft p-6 border border-rose-soft/30">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-neutral-charcoal/40" />
                  <Input 
                    placeholder="Cari salon, treatment, atau layanan..." 
                    className="pl-10 border-rose-soft/50 focus:border-primary-300 focus:ring-primary-300 h-12 font-inter"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-neutral-charcoal/40" />
                  <Input 
                    placeholder="Masukkan lokasi Anda" 
                    className="pl-10 border-rose-soft/50 focus:border-primary-300 focus:ring-primary-300 h-12 font-inter"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="bg-accent-gradient hover:shadow-warm transition-all duration-300 font-poppins font-medium h-12 px-8"
                >
                  Cari Salon
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-scale-in grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-playfair font-bold text-3xl text-primary-500 mb-2">1000+</div>
              <div className="font-inter text-neutral-charcoal/60">Salon Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="font-playfair font-bold text-3xl text-primary-500 mb-2">50K+</div>
              <div className="font-inter text-neutral-charcoal/60">Booking Berhasil</div>
            </div>
            <div className="text-center">
              <div className="font-playfair font-bold text-3xl text-primary-500 mb-2">4.8</div>
              <div className="font-inter text-neutral-charcoal/60 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Rating Pengguna
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
