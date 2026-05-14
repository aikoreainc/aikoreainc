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
    logo: "/img/partners/kei.jpg",
  },
  {
    slug: "smc",
    name: { ko: "삼성서울병원", en: "Samsung Medical Center" },
    url: "https://www.samsunghospital.com",
    logo: "/img/partners/smc.png",
  },
  {
    slug: "greenvet",
    name: { ko: "(주)그린벳", en: "Green Vet Inc." },
  },
  {
    slug: "bistep",
    name: { ko: "부산산업과학혁신원", en: "Busan Institute of S&T Evaluation and Planning" },
    url: "https://www.bistep.re.kr",
    logo: "/img/partners/bistep.png",
  },
  {
    slug: "krivet",
    name: { ko: "한국직업능력연구원", en: "Korea Research Institute for Vocational Education and Training" },
    url: "https://www.krivet.re.kr",
    logo: "/img/partners/krivet.png",
  },
  {
    slug: "ktl",
    name: { ko: "한국산업기술시험원", en: "Korea Testing Laboratory" },
    url: "https://www.ktl.re.kr",
    logo: "/img/partners/ktl.svg",
  },
  {
    slug: "niwdc",
    name: { ko: "국립야생동물질병관리원", en: "National Institute of Wildlife Disease Control" },
    url: "https://www.me.go.kr/niwdc",
    logo: "/img/partners/niwdc.jpg",
  },
];
