import { siteConfig } from "../config";
import I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { ja } from "./languages/ja";
import { zh_CN } from "./languages/zh_CN";
import { zh_TW } from "./languages/zh_TW";
import { x_ihatov } from "./languages/x_ihatov";

export type Translation = Record<I18nKey, string>;

const defaultTranslation = en;

const map: Record<string, Translation> = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
  x_ihatov: x_ihatov,
};

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation;
}

// 站点支持在运行时切换的语言（不修改本地化文件，只切换显示）
export const SUPPORTED_LANGUAGES = [
  { code: "zh_CN", label: "简体中文" },
  { code: "zh_TW", label: "繁體中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "x_ihatov", label: "l'Ihatov" },
] as const;

export type SiteLanguage = (typeof SUPPORTED_LANGUAGES)[number]["code"];

const LANG_ALIASES: Record<string, SiteLanguage> = {
  en: "en",
  en_us: "en",
  en_gb: "en",
  en_au: "en",
  zh_cn: "zh_CN",
  zh_tw: "zh_TW",
  ja: "ja",
  ja_jp: "ja",
  x_ihatov: "x_ihatov",
};

export function normalizeLang(
  lang: string | null | undefined,
): SiteLanguage | null {
  if (!lang) return null;
  return LANG_ALIASES[lang.toLowerCase().replace("-", "_")] || null;
}

let runtimeLang: SiteLanguage = normalizeLang(siteConfig.lang) ?? "en";

export function getI18nLang(): SiteLanguage {
  return runtimeLang;
}

export function setI18nLang(lang: string): SiteLanguage {
  runtimeLang = normalizeLang(lang) ?? runtimeLang;
  return runtimeLang;
}

// 在构建期把“翻译键”用不可见字符编码进文本，客户端即可原地切换语言，
// 不必修改数百处 i18n() 调用，也不会在原文与译文之间做有歧义的反向匹配。
// 标记格式：MARK + 7 位三进制键序号 + MARK + 文本 + MARK
// 用 fromCharCode 构造不可见字符，避免源码里出现难以维护的隐形字符。
const MARK = String.fromCharCode(0x2060); // WORD JOINER，不作分词边界
const DIGITS = [
  String.fromCharCode(0x200c), // ZWNJ
  String.fromCharCode(0x200d), // ZWJ
  String.fromCharCode(0xfeff), // ZWNBSP
];
const INDEX_WIDTH = 7; // 3^7 = 2187 个键
const INDEX_LIMIT = 3 ** INDEX_WIDTH;
const MARK_PATTERN = new RegExp(
  `${MARK}([${DIGITS.join("")}]{${INDEX_WIDTH}})${MARK}(.*?)${MARK}`,
  "gs",
);

const KEYS = Object.values(I18nKey) as I18nKey[];
const KEY_INDEX = new Map<string, number>();
KEYS.forEach((key, index) => {
  KEY_INDEX.set(key, index);
});

function encodeIndex(index: number): string {
  let remaining = index;
  let encoded = "";
  for (let i = 0; i < INDEX_WIDTH; i++) {
    encoded += DIGITS[remaining % 3];
    remaining = Math.floor(remaining / 3);
  }
  return encoded;
}

function decodeIndex(encoded: string): number {
  let index = 0;
  for (let i = encoded.length - 1; i >= 0; i--) {
    const digit = DIGITS.indexOf(encoded[i]);
    if (digit < 0) return -1;
    index = index * 3 + digit;
  }
  return index;
}

// 日历统一使用「年 / 月」的斜杠格式，中文和日文的月份名去掉“月”后缀。
const CALENDAR_MONTH_KEYS = new Set<I18nKey>([
  I18nKey.calendarJanuary,
  I18nKey.calendarFebruary,
  I18nKey.calendarMarch,
  I18nKey.calendarApril,
  I18nKey.calendarMay,
  I18nKey.calendarJune,
  I18nKey.calendarJuly,
  I18nKey.calendarAugust,
  I18nKey.calendarSeptember,
  I18nKey.calendarOctober,
  I18nKey.calendarNovember,
  I18nKey.calendarDecember,
]);

// 站点统计把数值和单位分开渲染，单位文本里不需要 {days} 占位符。
const DAY_SUFFIX_KEYS = new Set<I18nKey>([
  I18nKey.siteStatsDays,
  I18nKey.siteStatsDaysAgo,
]);

function displayText(key: I18nKey, text: string): string {
  if (!text) return text;
  if (CALENDAR_MONTH_KEYS.has(key)) return text.replace(/月$/, "");
  if (DAY_SUFFIX_KEYS.has(key)) return text.replace("{days}", "");
  return text;
}

export function i18n(key: I18nKey): string {
  const text = displayText(key, getTranslation(runtimeLang)[key]);
  const index = KEY_INDEX.get(key);
  if (index === undefined || index >= INDEX_LIMIT) {
    return text;
  }
  return `${MARK}${encodeIndex(index)}${MARK}${text}${MARK}`;
}

export function translateMarkedText(
  value: string,
  lang: string = runtimeLang,
): string {
  if (!value.includes(MARK)) return value;
  const translation = getTranslation(lang);
  return value.replace(
    MARK_PATTERN,
    (matched: string, encoded: string, fallback: string) => {
      const key = KEYS[decodeIndex(encoded)];
      if (!key) return matched;
      const text = displayText(key, translation[key]);
      if (text === fallback) return matched;
      return `${MARK}${encoded}${MARK}${text}${MARK}`;
    },
  );
}
