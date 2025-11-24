import { cn } from "@/utils";

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={cn("sticky top-0 left-0 z-[1200] w-full transition-all duration-300")}>
      {/* Navbar */}
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm rounded-b-xl">
        <div className="flex items-center justify-center gap-3 flex-shrink-0">
          <img src="/assets/images/cicekcim.ico" alt="LOGO" className="w-12 h-12 rounded-full border-2 border-pink-400" />
          <h2 className="font-montserrat text-xl font-semibold tracking-tight text-pink-600 dark:text-pink-400">
            Çiçekçim
          </h2>
        </div>
        {/* Menü örneği */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          <a href="#" className="hover:text-pink-500 transition-colors">Anasayfa</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Kampanyalar</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Çiçekler</a>
          <a href="#" className="hover:text-pink-500 transition-colors">İletişim</a>
        </nav>
      </div>

      {/* Promo Banner */}
      <div className="flex items-center justify-center text-center bg-pink-50/80 dark:bg-pink-900/40 backdrop-blur-sm py-1.5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-600 dark:text-pink-300 leading-snug">
          500 TL'lik siparişinize <span className="text-pink-500 dark:text-pink-400">+%50 İndirim</span>!
        </h2>
      </div>
    </header>
  );
};

export default Header;
