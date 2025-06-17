
import React from 'react';
import { MapPin, Calendar, Star, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Salon Terdekat",
    description: "Temukan salon kecantikan terbaik di sekitar Anda dengan teknologi GPS dan rekomendasi berbasis lokasi",
    color: "text-primary-500"
  },
  {
    icon: Calendar,
    title: "Booking Real-time",
    description: "Sistem booking appointment yang mudah dan cepat dengan konfirmasi langsung dari salon pilihan Anda",
    color: "text-accent"
  },
  {
    icon: Star,
    title: "Review Terpercaya",
    description: "Baca review asli dari pelanggan lain dan berikan rating untuk membantu komunitas kecantikan Indonesia",
    color: "text-primary-400"
  },
  {
    icon: Users,
    title: "Komunitas Beauty",
    description: "Bergabung dengan ribuan beauty enthusiast Indonesia dan dapatkan tips kecantikan terbaru",
    color: "text-primary-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-neutral-charcoal mb-4">
            Mengapa Pilih <span className="bg-accent-gradient bg-clip-text text-transparent">BOOK BEAUTY?</span>
          </h2>
          <p className="font-inter text-lg text-neutral-charcoal/60 max-w-2xl mx-auto">
            Kami menghadirkan pengalaman booking salon yang mudah, aman, dan terpercaya untuk kebutuhan kecantikan Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-rose-soft/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${feature.color} bg-rose-soft/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-neutral-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-neutral-charcoal/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-rose-gradient rounded-2xl p-8 sm:p-12 shadow-warm">
            <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white mb-4">
              Siap Memulai Perjalanan Kecantikan Anda?
            </h3>
            <p className="font-inter text-white/90 mb-6 max-w-lg mx-auto">
              Download aplikasi BOOK BEAUTY dan nikmati kemudahan booking salon kecantikan terbaik di Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-poppins font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Download Android
              </button>
              <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-poppins font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Download iOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
