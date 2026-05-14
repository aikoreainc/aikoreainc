import type { Lang } from "../data/company";

export const dict = {
  nav: {
    about: { ko: "회사소개", en: "About" },
    services: { ko: "서비스", en: "Services" },
    research: { ko: "연구", en: "Research" },
    news: { ko: "소식", en: "News" },
    contact: { ko: "문의", en: "Contact" },
  },
  langToggle: {
    ko: "EN",
    en: "KO",
  },
  footer: {
    company: { ko: "회사", en: "Company" },
    ceo: { ko: "대표", en: "CEO" },
    bizRegNo: { ko: "사업자등록번호", en: "Business Reg. No." },
    bizType: { ko: "업태·업종", en: "Industry" },
    address: { ko: "주소", en: "Address" },
    email: { ko: "이메일", en: "Email" },
    copyright: {
      ko: "한국인공지능 주식회사. All rights reserved.",
      en: "AI Korea Inc. All rights reserved.",
    },
    productLink: {
      ko: "주력 SaaS 제품 Homosilicus 보기",
      en: "Visit our flagship SaaS — Homosilicus",
    },
  },
  hero: {
    cta_primary: { ko: "서비스 보기", en: "View services" },
    cta_secondary: { ko: "문의하기", en: "Contact us" },
  },
} as const;

export type DictPath = keyof typeof dict;

export function t<P extends string, K extends string>(
  section: { [k: string]: { ko: string; en: string } },
  key: K,
  lang: Lang,
): string {
  return section[key as string]?.[lang] ?? "";
}

export function pathFor(slug: string, lang: Lang): string {
  if (lang === "en") return `/en${slug === "/" ? "" : slug}/`;
  return slug === "/" ? "/" : `${slug}/`;
}
