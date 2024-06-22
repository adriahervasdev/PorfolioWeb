import { ui, defaultLang } from '../ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getUpdateURL(url: URL, oppositeLang: string) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) {
        const newPathname = url.pathname.replace(`/${lang}`, `/${oppositeLang}`);
        return `${url.origin}${newPathname}${url.search}${url.hash}`;
    }
    return url.href;
  }