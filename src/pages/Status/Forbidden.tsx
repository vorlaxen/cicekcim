import { AppConfig } from "@/config/environmentConfig";
import { useTranslationWithNs } from "@/services/localization/localizationUtil";
import { cn } from "@/utils";
import { Home } from "lucide-react";

const Forbidden = () => {
    const { t: tPages } = useTranslationWithNs("pages");

    const handleGoHome = () => {
        window.location.href = `${AppConfig.appDomain}/`;
    };

    return (
        <div className={cn("min-h-screen overflow-hidden relative transition-colors duration-300 bg-white dark:bg-black")}>
            <div className={cn("relative z-10 min-h-screen flex flex-col items-center justify-center px-4")}>
                <h1 className={cn("text-8xl md:text-9xl lg:text-[12rem] font-black leading-none select-none text-black dark:text-white")}>
                    <span className="relative inline-block">
                        {tPages("status.403.code")}
                    </span>
                </h1>

                <div className={cn("text-center mb-12 max-w-2xl")}>
                    <h2 className={cn("text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white")}>
                        {tPages("status.403.title")}
                    </h2>
                    <p className={cn("text-lg md:text-xl text-black mb-4 leading-relaxed dark:text-gray-300")}>
                        {tPages("status.403.description1")}
                    </p>
                    <p className={cn("text-black dark:text-gray-300")}>
                        {tPages("status.403.description2")}
                    </p>
                </div>

                <div className={cn("relative h-full")}>
                    <button
                        onClick={handleGoHome}
                        className={cn(
                            "group relative px-12 py-4 will-change-transform",
                            "bg-black dark:bg-white rounded-xl font-bold text-lg text-white dark:text-black overflow-hidden shadow-2xl",
                            "hover:shadow-black/50 dark:hover:shadow-white/50 transition-all duration-300 transform"
                        )}
                    >
                        <span className={cn("relative z-10 flex items-center")}>
                            <Home className="w-5 h-5 text-white dark:text-black" />
                            <span className="ml-2">{tPages("status.403.button")}</span>
                        </span>

                        <div className={cn(
                            "absolute inset-0 bg-white/20 dark:bg-black/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        )} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;
