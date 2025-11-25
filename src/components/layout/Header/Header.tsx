import { cn } from "@/utils";
import { Link } from "react-router-dom";

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
  return (
    <header className={cn("sticky top-0 left-0 z-[1200] w-full transition-all duration-300")}>
      {/* Navbar */}
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm rounded-b-xl">
        <Link to={"/"} className="flex items-center justify-center gap-3 flex-shrink-0">
          <img src="/assets/images/cicekcim.ico" alt="LOGO" className="w-12 h-12" />
          <h2 className="font-montserrat text-xl font-semibold tracking-tight text-pink-600 dark:text-pink-400">
            Çiçekçim
          </h2>
        </Link>


        {/* Menü örneği */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">
          <a
            href="/"
            className="relative group transition-colors"
          >
            Anasayfa
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="relative group transition-colors"
          >
            Çiçekler
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
          </a>

          <a
            href="/contact-us"
            className="relative group transition-colors"
          >
            İletişim
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
          </a>
        </nav>
      </div>

      {/* Promo Banner */}
      <div className="flex items-center justify-center text-center bg-pink-500/20 dark:bg-pink-900/40 backdrop-blur-sm py-1.5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-pink-600 dark:text-pink-300 leading-snug">
          500 TL'lik siparişinize <span className="text-pink-500 dark:text-pink-400">+%50 İndirim</span>!
        </h2>
      </div>
    </header>
  );
};

export default Header;
