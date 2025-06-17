
import React from 'react';
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const salons = [
  {
    id: 1,
    name: "Bella Beauty Salon",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviews: 124,
    location: "Kemang, Jakarta Selatan",
    distance: "1.2 km",
    price: "Mulai dari Rp 150K",
    services: ["Hair Treatment", "Facial", "Manicure"],
    badge: "Premium Partner"
  },
  {
    id: 2,
    name: "Glow Up Beauty Studio",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviews: 89,
    location: "Senopati, Jakarta Selatan",
    distance: "2.1 km",
    price: "Mulai dari Rp 200K",
    services: ["Facial Premium", "Body Treatment", "Eyelash Extension"],
    badge: "Top Rated"
  },
  {
    id: 3,
    name: "Natural Beauty House",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviews: 156,
    location: "Blok M, Jakarta Selatan",
    distance: "3.5 km",
    price: "Mulai dari Rp 120K",
    services: ["Organic Facial", "Hair Spa", "Reflexology"],
    badge: "Eco Friendly"
  }
];

const PopularSalons = () => {
  return (
    <section className="py-20 lg:py-24 bg-neutral-warm/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-neutral-charcoal mb-4">
            Salon Kecantikan <span className="bg-accent-gradient bg-clip-text text-transparent">Terpopuler</span>
          </h2>
          <p className="font-inter text-lg text-neutral-charcoal/60 max-w-2xl mx-auto">
            Pilihan terbaik salon kecantikan dengan rating tertinggi dan review terpercaya dari pelanggan Indonesia
          </p>
        </div>

        {/* Salons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {salons.map((salon, index) => (
            <div 
              key={salon.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Salon Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={salon.image} 
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-poppins font-medium">
                    {salon.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-poppins font-medium text-sm text-neutral-charcoal">{salon.rating}</span>
                </div>
              </div>

              {/* Salon Info */}
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-neutral-charcoal mb-2">
                  {salon.name}
                </h3>
                
                <div className="flex items-center gap-1 text-neutral-charcoal/60 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-inter text-sm">{salon.location}</span>
                  <span className="text-primary-500 font-medium">• {salon.distance}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-charcoal/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{salon.rating} ({salon.reviews} review)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Buka 09:00</span>
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {salon.services.slice(0, 2).map((service, idx) => (
                    <span 
                      key={idx}
                      className="bg-rose-soft/50 text-primary-600 px-3 py-1 rounded-full text-xs font-inter"
                    >
                      {service}
                    </span>
                  ))}
                  {salon.services.length > 2 && (
                    <span className="text-primary-500 text-xs font-medium">
                      +{salon.services.length - 2} lainnya
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-poppins font-semibold text-accent">
                    {salon.price}
                  </div>
                  <Button size="sm" className="bg-primary-200 text-primary-600 hover:bg-primary-300 hover:text-primary-700">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-scale-in">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-300 text-primary-600 hover:bg-primary-50 font-poppins font-medium px-8"
          >
            Lihat Semua Salon
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularSalons;
