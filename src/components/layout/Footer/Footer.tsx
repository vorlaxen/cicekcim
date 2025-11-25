import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps { }

const Footer = ({ }: FooterProps) => {
    return (
        <footer className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-pink-200 dark:border-gray-700">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/assets/images/cicekcim.ico"
                                alt="Çiçekçim Logo"
                                className="w-12 h-12 transition-transform group-hover:scale-110"
                            />
                            <h3 className="font-montserrat text-2xl font-bold text-pink-600 dark:text-pink-400">
                                Çiçekçim
                            </h3>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Her anınızı özel kılacak taze ve kaliteli çiçeklerle yanınızdayız. Sevdiklerinize mutluluk gönderin.
                        </p>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-pink-100 dark:bg-gray-700 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-pink-100 dark:bg-gray-700 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-pink-100 dark:bg-gray-700 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100 font-montserrat">
                            Hızlı Erişim
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-pink-500 transition-all group-hover:w-3"></span>
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact-us"
                                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-pink-500 transition-all group-hover:w-3"></span>
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100 font-montserrat">
                            Kategoriler
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-pink-500 transition-all group-hover:w-3"></span>
                                    Gül Buketleri
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-pink-500 transition-all group-hover:w-3"></span>
                                    Orkide Çiçekleri
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-pink-500 transition-all group-hover:w-3"></span>
                                    Doğum Günü Çiçekleri
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-pink-500 transition-all group-hover:w-3"></span>
                                    Kutlama Çiçekleri
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100 font-montserrat">
                            İletişim Bilgileri
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-600">Çay, Terme Cd. No: 8/B<br />55500 Çarşamba/Samsun</p>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                <a href="tel:+905551234567" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                                    +90 554 498 55 28
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                <Mail className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                <a href="mailto:info@cicekcim.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                                    info@cicekcim.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-pink-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <p>
                            © {new Date().getFullYear()} <span className="font-semibold text-pink-600 dark:text-pink-400">Çiçekçim</span>. Tüm hakları saklıdır.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                                Gizlilik Politikası
                            </a>
                            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                                Kullanım Şartları
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;