import { storage } from '@/utils/storageUtil';
import { useTranslation } from 'react-i18next';
import { Namespace } from 'i18next';
import { DEFAULT_NAMESPACE, FALLBACK_LANGUAGE, LanguageSetting, STORAGE_KEY, SUPPORTED_LANGUAGES, SupportedLang } from '@/constants/localizationConstants';

export const getStoredLanguage = (): LanguageSetting => {
  let stored = storage.get(STORAGE_KEY);
  if (!stored) {
    storage.set(STORAGE_KEY, 'system');
    return 'system';
  }
  return SUPPORTED_LANGUAGES.includes(stored as SupportedLang) || stored === 'system'
    ? (stored as LanguageSetting)
    : 'system';
};

export const getEffectiveLanguage = (lang: LanguageSetting): SupportedLang => {
  if (lang === 'system') {
    const browserLang = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES.includes(browserLang as SupportedLang)
      ? (browserLang as SupportedLang)
      : FALLBACK_LANGUAGE;
  }
  return lang;
};

export function useTranslationWithNs(ns: Namespace = DEFAULT_NAMESPACE) {
  const { t, i18n, ready } = useTranslation(ns);
  return { t, i18n, ready };
}