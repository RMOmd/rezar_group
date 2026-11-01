export type Locale = "uk" | "ru" | "en";

export interface LocaleOption {
  code: Locale;
  label: string;
  flag: string;
}

export const LOCALES: LocaleOption[] = [
  { code: "uk", label: "UA", flag: "🇺🇦" },
  { code: "ru", label: "RU", flag: "🌐" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];
