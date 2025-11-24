export const DEFAULT_LANGUAGE = 'en' as const;
export const STORAGE_KEY = 'language' as const;
export const SUPPORTED_LANGUAGES = ['en', 'tr'] as const;
export const FALLBACK_LANGUAGE: SupportedLang = 'en';
export const DEFAULT_NAMESPACE = 'common';

export type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];

export type LanguageSetting = SupportedLang | 'system';