import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X, Sparkles, Star } from 'lucide-react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const products = [
    { id: 1, name: 'Pembe Güller Buketi', price: '₺450', image: '🌹', desc: 'Romantik pembe güller' },
    { id: 2, name: 'Orkide Koleksiyonu', price: '₺680', image: '🌺', desc: 'Zarif beyaz orkideler' },
    { id: 3, name: 'Gerbera Bahçesi', price: '₺380', image: '🌸', desc: 'Renkli gerbera çiçekleri' },
    { id: 4, name: 'Lale Çayırı', price: '₺520', image: '🌷', desc: 'Taptaze bahar laleleri' },
    { id: 5, name: 'Papatya Serinliği', price: '₺290', image: '🌼', desc: 'Doğal beyaz papatyalar' },
    { id: 6, name: 'Çiçek Yağmuru', price: '₺850', image: '💐', desc: 'Premium karışık buket' },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              <span>Yeni Koleksiyon Çıktı!</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent leading-tight">
              Her Anınızı<br />Çiçeklerle Süsleyin
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Özel gününüzü unutulmaz kılacak taptaze çiçek buketleri ve özel aranjmanlar
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 will-change-transform transition-all duration-300">
                Koleksiyonu Keşfet
              </button>
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold border-2 border-pink-500 hover:bg-pink-50 will-change-transform transition-all duration-300">
                Özel Tasarım
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-30">🌸</div>
          <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-30">🌹</div>
          <div className="absolute bottom-20 left-1/4 text-7xl opacity-20">🌺</div>
        </div>
      </section>

    </div>
  );
};

export default Home;