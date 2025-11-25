import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
            {/* Hero Section */}
            <div className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-8 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Bizimle İletişime Geçin</h1>
                    <p className="text-xl text-rose-100">Her türlü soru ve öneriniz için buradayız</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full px-4 py-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 h-[500px]">
                        {/* Map Section */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full group">
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent z-10 pointer-events-none"></div>
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.0884186709404!2d36.72831438755939!3d41.19611808564947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408807b74fe883a3%3A0x6c070692354a63a0!2zw4dpw6dla3NlcGV0aQ!5e0!3m2!1str!2str!4v1764013632605!5m2!1str!2str"
                                className="w-full h-full border-0 transition-transform duration-300 group-hover:scale-105 will-change-transform transform-gpu"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Info Section */}
                        <div className="flex flex-col h-full gap-6">
                            {/* Contact Cards */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-rose-100">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    İletişim Bilgileri
                                </h2>

                                <div className="space-y-6">
                                    {/* Address */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-rose-50 hover:bg-rose-100 transition-colors duration-300">
                                        <div className="bg-rose-500 p-3 rounded-lg text-white">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-1">Adres</h3>
                                            <p className="text-gray-600">Çay, Terme Cd. No: 8/B<br />55500 Çarşamba/Samsun</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                                        <div className="bg-pink-500 p-3 rounded-lg text-white">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                                            <a href="tel:+905544985528" className="text-gray-600 hover:text-pink-600 transition-colors">
                                                (+90) 554 498 55 28
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                                        <div className="bg-purple-500 p-3 rounded-lg text-white">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-1">E-posta</h3>
                                            <a href="mailto:info@cicekcim.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                                                info@cicekcim.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Working Hours */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
                                        <div className="bg-amber-500 p-3 rounded-lg text-white">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-1">Çalışma Saatleri</h3>
                                            <p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 20:00<br />Pazar: 10:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact