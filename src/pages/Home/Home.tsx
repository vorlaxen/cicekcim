const Home = () => {

  return (
    <div className="min-h-screen bg-white">

      {/* Promo Banner */}
      <section className="relative overflow-hidden">
        <div className="flex items-center justify-center text-center bg-pink-500/20 dark:bg-pink-900/40 backdrop-blur-sm py-1.5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-600 dark:text-pink-300 leading-snug">
            500 TL'lik siparişinize <span className="text-pink-500 dark:text-pink-400">+%50 İndirim</span>!
          </h2>
        </div>

      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold py-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent leading-tight">
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