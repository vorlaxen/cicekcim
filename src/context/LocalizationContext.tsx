import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import i18n, { changeLanguageWithNamespaces } from '@/services/localization/localization';
import { getEffectiveLanguage, getStoredLanguage } from '@/services/localization/localizationUtil';
import { storage } from '@/utils';
import { DEFAULT_LANGUAGE, LanguageSetting, STORAGE_KEY, SUPPORTED_LANGUAGES, SupportedLang } from '@/constants/localizationConstants';

interface LocalizationContextType {
    currentLanguage: SupportedLang;
    changeLanguage: (lang: LanguageSetting) => Promise<void>;
    toggleLanguage: () => Promise<void>;
    getUserLanguage: () => LanguageSetting;
    getEffectiveLanguage: (lang: LanguageSetting) => SupportedLang;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState<SupportedLang>(DEFAULT_LANGUAGE);

    const detectBrowserLanguage = useCallback((): SupportedLang => {
        const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
        for (const lang of langs) {
            const base = lang.split('-')[0].toLowerCase();
            if (SUPPORTED_LANGUAGES.includes(base as SupportedLang)) {
                return base as SupportedLang;
            }
        }
        return DEFAULT_LANGUAGE;
    }, []);

    const changeLanguage = useCallback(
        async (lang: LanguageSetting) => {
            let targetLang: SupportedLang;

            if (lang === 'system') {
                targetLang = detectBrowserLanguage();
                storage.set(STORAGE_KEY, 'system');
            } else if (SUPPORTED_LANGUAGES.includes(lang)) {
                targetLang = lang;
                storage.set(STORAGE_KEY, lang);
            } else {
                console.warn(`Unsupported language: ${lang}`);
                return;
            }

            try {
                await changeLanguageWithNamespaces(targetLang);
                setCurrentLanguage(targetLang);
            } catch (err) {
                console.error(`Language switch failed: ${targetLang}`, err);
            }
        },
        [detectBrowserLanguage]
    );

    const toggleLanguage = useCallback(async () => {
        const current = getEffectiveLanguage(getStoredLanguage());
        const next: SupportedLang = current === 'en' ? 'tr' : 'en';
        await changeLanguage(next);
    }, [changeLanguage]);

    useEffect(() => {
        (async () => {
            const stored = getStoredLanguage();
            const effectiveLang = getEffectiveLanguage(stored);

            if (i18n.language !== effectiveLang) {
                await i18n.changeLanguage(effectiveLang);
            }

            setCurrentLanguage(effectiveLang);
        })();
    }, []);

    return (
        <LocalizationContext.Provider
            value={{
                currentLanguage,
                changeLanguage,
                toggleLanguage,
                getUserLanguage: getStoredLanguage,
                getEffectiveLanguage
            }}
        >
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = (): LocalizationContextType => {
    const context = useContext(LocalizationContext);
    if (!context) throw new Error('useLocalization must be used within LocalizationProvider');
    return context;
};
