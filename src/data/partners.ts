export interface Partner {
  slug: string;
  name: { ko: string; en: string };
  url?: string;
  logo?: string; // public/img/partners/{slug}.* — 있으면 로고 표시, 없으면 텍스트
}

export const partners: Partner[] = [
  {
    slug: "kei",
    name: { ko: "한국환경연구원", en: "Korea Environment Institute" },
    url: "https://www.kei.re.kr",
  },
  {
    slug: "smc",
    name: { ko: "삼성서울병원", en: "Samsung Medical Center" },
    url: "https://www.samsunghospital.com",
  },
  {
    slug: "skku",
    name: { ko: "성균관대학교", en: "Sungkyunkwan University" },
    url: "https://www.skku.edu",
  },
  {
    slug: "greenvet",
    name: { ko: "(주)그린벳", en: "Green Vet Inc." },
  },
  {
    slug: "bistep",
    name: { ko: "BISTEP", en: "BISTEP" },
    url: "https://www.bistep.re.kr",
  },
];
