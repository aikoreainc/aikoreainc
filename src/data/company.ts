export type Lang = "ko" | "en";

export const company = {
  legalName: {
    ko: "한국인공지능 주식회사",
    en: "AI Korea Inc.",
  },
  shortName: {
    ko: "한국인공지능",
    en: "AI Korea Inc.",
  },
  ceo: {
    ko: "이동현",
    en: "Donghyun Lee",
  },
  ceoTitle: {
    ko: "대표이사",
    en: "CEO",
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
  email: "aikoreainc@gmail.com",
  established: 2022,
  links: {
    // 실리쿠스 공개 뒤 제품 링크로 쓸 주소. 지금은 비밀번호 화면이라 링크하지 않는다(2026-10-22).
    silicus: "https://silicus.kr",
    professor: "https://donghyunlee.kr",
  },
} as const;

export const tagline = {
  ko: "신뢰가능 AI를 설계하고 운영합니다.",
  en: "Trustworthy AI, built on research.",
} as const;
