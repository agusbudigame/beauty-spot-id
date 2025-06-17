
import React from 'react';
import { MapPin, Mail, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-charcoal text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-rose-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BB</span>
              </div>
              <h3 className="font-playfair font-bold text-2xl">BOOK BEAUTY</h3>
            </div>
            <p className="font-inter text-white/70 leading-relaxed mb-6 max-w-md">
              Platform booking salon kecantikan terpercaya di Indonesia. Menghubungkan Anda dengan salon terbaik 
              untuk pengalaman kecantikan yang tak terlupakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-neutral-charcoal px-6 py-2 rounded-lg font-poppins font-medium hover:bg-rose-soft transition-colors">
                Download Android
              </button>
              <button className="bg-white text-neutral-charcoal px-6 py-2 rounded-lg font-poppins font-medium hover:bg-rose-soft transition-colors">
                Download iOS
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cari Salon</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog Kecantikan</a></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Untuk Bisnis</h4>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Daftar Salon</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Dashboard Owner</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Paket Berlangganan</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Bantuan Bisnis</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Integration</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <div className="font-poppins font-medium">Alamat</div>
                <div className="font-inter text-sm text-white/70">Jakarta, Indonesia</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <div className="font-poppins font-medium">Email</div>
                <div className="font-inter text-sm text-white/70">hello@bookbeauty.id</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <div className="font-poppins font-medium">Customer Service</div>
                <div className="font-inter text-sm text-white/70">0800-1234-5678</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-inter text-sm text-white/60">
            © 2024 BOOK BEAUTY Indonesia. Hak Cipta Dilindungi.
          </div>
          <div className="flex gap-6 font-inter text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Bantuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
