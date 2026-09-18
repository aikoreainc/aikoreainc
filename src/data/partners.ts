export interface Partner {
  slug: string;
  name: { ko: string; en: string };
  url?: string;
  logo?: string; // public/img/partners/{slug}.* — 있으면 로고 표시, 없으면 텍스트
  /** 로고의 고유 픽셀 크기. 레이아웃 예약(CLS 방지)용으로 img에 그대로 넣는다. */
  size?: { w: number; h: number };
}

export const partners: Partner[] = [
  {
    slug: "kei",
    name: { ko: "한국환경연구원", en: "Korea Environment Institute" },
    url: "https://www.kei.re.kr",
    logo: "/img/partners/kei.webp",
    size: { w: 449, h: 96 },
  },
  {
    slug: "smc",
    name: { ko: "삼성서울병원", en: "Samsung Medical Center" },
    url: "https://www.samsunghospital.com",
    logo: "/img/partners/smc.webp",
    size: { w: 631, h: 96 },
  },
  {
    slug: "greenvet",
    name: { ko: "(주)그린벳", en: "Green Vet Inc." },
    logo: "/img/partners/greenvet.svg",
    size: { w: 196, h: 54 },
  },
  {
    slug: "bistep",
    name: { ko: "부산산업과학혁신원", en: "Busan Institute of S&T Evaluation and Planning" },
    url: "https://www.bistep.re.kr",
    logo: "/img/partners/bistep.webp",
    size: { w: 212, h: 96 },
  },
  {
    slug: "krivet",
    name: { ko: "한국직업능력연구원", en: "Korea Research Institute for Vocational Education and Training" },
    url: "https://www.krivet.re.kr",
    logo: "/img/partners/krivet.webp",
    size: { w: 210, h: 96 },
  },
  {
    slug: "ktl",
    name: { ko: "한국산업기술시험원", en: "Korea Testing Laboratory" },
    url: "https://www.ktl.re.kr",
    logo: "/img/partners/ktl.svg",
    size: { w: 266, h: 45 },
  },
  {
    slug: "niwdc",
    name: { ko: "국립야생동물질병관리원", en: "National Institute of Wildlife Disease Control" },
    url: "https://www.me.go.kr/niwdc",
    logo: "/img/partners/niwdc.webp",
    size: { w: 468, h: 96 },
  },
];
