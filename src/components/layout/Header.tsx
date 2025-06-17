
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-soft/30 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-rose-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BB</span>
            </div>
            <h1 className="font-playfair font-bold text-xl text-neutral-charcoal">
              BOOK BEAUTY
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter">
              Beranda
            </a>
            <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter">
              Salon Terdekat
            </a>
            <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter">
              Layanan
            </a>
            <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter">
              Tentang
            </a>
          </nav>

          {/* Location & User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-neutral-charcoal hover:text-primary-500 hover:bg-rose-soft/50">
              <MapPin className="w-4 h-4 mr-2" />
              Jakarta
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-neutral-charcoal hover:text-primary-500 hover:bg-rose-soft/50">
              <Link to="/auth">
                <User className="w-4 h-4 mr-2" />
                Masuk
              </Link>
            </Button>
            <Button asChild className="bg-accent-gradient text-white hover:shadow-warm transition-all duration-300 font-poppins font-medium">
              <Link to="/auth">
                Daftar Salon
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-rose-soft/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-neutral-charcoal" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-soft/30 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter px-2 py-1">
                Beranda
              </a>
              <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter px-2 py-1">
                Salon Terdekat
              </a>
              <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter px-2 py-1">
                Layanan
              </a>
              <a href="#" className="text-neutral-charcoal hover:text-primary-500 transition-colors font-inter px-2 py-1">
                Tentang
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-neutral-charcoal hover:text-primary-500 hover:bg-rose-soft/50">
                  <MapPin className="w-4 h-4 mr-2" />
                  Jakarta
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full justify-start text-neutral-charcoal hover:text-primary-500 hover:bg-rose-soft/50">
                  <Link to="/auth">
                    <User className="w-4 h-4 mr-2" />
                    Masuk
                  </Link>
                </Button>
                <Button asChild className="w-full bg-accent-gradient text-white hover:shadow-warm transition-all duration-300 font-poppins font-medium">
                  <Link to="/auth">
                    Daftar Salon
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
