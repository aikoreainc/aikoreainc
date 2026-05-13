export type Lang = "ko" | "en";

export const company = {
  legalName: {
    ko: "한국인공지능 주식회사",
    en: "AIKoreaInc Co., Ltd.",
  },
  shortName: {
    ko: "한국인공지능",
    en: "AIKoreaInc",
  },
  ceo: {
    ko: "이동현",
    en: "Donghyun Lee",
  },
  ceoTitle: {
    ko: "대표이사 / HUFS 교수",
    en: "CEO / Professor, HUFS",
  },
  bizRegNo: "698-81-02819",
  bizType: {
    ko: "정보통신업 · 데이터베이스 및 온라인 정보 제공",
    en: "Information & Communications · Database and Online Information",
  },
  address: {
    ko: "인천시 연수구 송도동",
    en: "Songdo-dong, Yeonsu-gu, Incheon, Republic of Korea",
  },
  addressNote: {
    ko: "정확한 방문 주소는 사전 협의 부탁드립니다.",
    en: "Please contact us in advance to arrange a visit.",
  },
  email: "aikoreainc@gmail.com",
  established: 2024,
  links: {
    homosilicus: "https://homosilicus.github.io",
    professor: "https://donghyunlee-ai.github.io",
  },
} as const;

export const tagline = {
  ko: "신뢰가능 AI를 설계하고 운영하는 연구 기반 회사",
  en: "Trustworthy AI, built on research.",
} as const;
