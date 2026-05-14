import type { Lang } from "./company";

export interface Service {
  slug: string;
  title: { ko: string; en: string };
  summary: { ko: string; en: string };
  description: { ko: string; en: string };
  highlights: { ko: string[]; en: string[] };
  products?: { name: string; url: string }[];
}

export const services: Service[] = [
  {
    slug: "jobs-data",
    title: { ko: "채용공고 데이터", en: "Job Posting Data" },
    summary: {
      ko: "국내 채용 공고를 수집·정제하여 인력시장 분석·연구에 활용 가능한 형태로 제공합니다.",
      en: "Curated job-posting data for labor market analytics, policy research, and product development.",
    },
    description: {
      ko: "수십만 건 규모의 채용공고를 자동 수집·중복 제거·태깅하고, 직무·지역·기업 단위로 가공합니다. 노동 시장 추세 분석, 정책 연구, 인재 매칭 제품에 그대로 투입할 수 있습니다.",
      en: "Hundreds of thousands of postings are automatically collected, deduplicated, and tagged across role, region, and employer dimensions. Ready for trend analysis, policy research, and talent-matching products.",
    },
    highlights: {
      ko: [
        "주요 채용 플랫폼 다회 수집·중복 정합",
        "직무·산업·지역 단위 태깅",
        "API/덤프 형태로 제공",
      ],
      en: [
        "Multi-source collection with dedup",
        "Role · industry · region tagging",
        "Delivered as API or data dumps",
      ],
    },
    products: [{ name: "JobAI", url: "https://jobai.co.kr" }],
  },
  {
    slug: "eco-gis",
    title: { ko: "환경 GIS 대시보드", en: "Environmental GIS Dashboard" },
    summary: {
      ko: "대기·수질·해양·공중보건 등 환경 데이터를 GIS 기반으로 예측·시각화합니다.",
      en: "GIS-based forecasting and visualization for air, water, marine, and public-health data.",
    },
    description: {
      ko: "관측·예보 데이터와 자체 AI 모델을 결합해 시·공간 해상도의 환경 지표를 대시보드로 제공합니다. 정부·연구기관과의 협력 실적을 바탕으로 운영성·정확성을 모두 검증했습니다.",
      en: "Combines observation and forecast data with in-house AI models to deliver spatial-temporal environmental indicators via dashboards. Operationally validated with government and research partners.",
    },
    highlights: {
      ko: [
        "AI 예측 + GIS 시각화 통합",
        "정부·연구기관 협력 검증",
        "REST API·임베드 위젯 지원",
      ],
      en: [
        "AI forecasting + GIS visualization",
        "Validated with public-sector partners",
        "REST API and embeddable widgets",
      ],
    },
    products: [
      { name: "BirdFluAI", url: "https://birdfluai.com" },
      { name: "Air-Report", url: "https://air-report.github.io" },
    ],
  },
  {
    slug: "trustworthy-ai",
    title: { ko: "신뢰가능 AI 설계", en: "Trustworthy AI Design" },
    summary: {
      ko: "설명가능 AI·불확실성 정량화 기반 컨설팅. 의사결정 근거가 필요한 영역에 특화.",
      en: "Explainable AI and uncertainty quantification consulting for decision-grade systems.",
    },
    description: {
      ko: "정부·공공·기업의 의사결정에 AI를 도입할 때, 결과뿐 아니라 \"왜 그런 결론인지\"를 함께 제시할 수 있도록 모델·평가·보고 체계를 설계합니다. 본사가 SCI 학술지에 발표한 방법론을 그대로 적용합니다.",
      en: "We design model, evaluation, and reporting pipelines that surface both the answer and the reasoning, so AI can be deployed in decisions that require accountability. Built on methods we have published in SCI journals.",
    },
    highlights: {
      ko: [
        "설명가능 AI(XAI) · CAM 기반",
        "불확실성 정량화",
        "Journal of Cleaner Production 2024·2025 게재 방법론",
      ],
      en: [
        "Explainable AI · CAM-based",
        "Uncertainty quantification",
        "Methods from J. Cleaner Production 2024·2025",
      ],
    },
  },
  {
    slug: "homosilicus",
    title: { ko: "Homosilicus", en: "Homosilicus" },
    summary: {
      ko: "합성 고객 페르소나로 10분 만에 시장조사를 끝내는 자체 B2B SaaS 제품.",
      en: "Our B2B SaaS — synthetic customer personas for market validation in 10 minutes.",
    },
    description: {
      ko: "기업 고객을 AI 페르소나로 복제해 신제품·가격·UX를 즉시 검증합니다. 무한 확장 페르소나, 10분 인사이트, 데이터 프라이버시 우선.",
      en: "Replicate enterprise customers as AI personas to validate new products, pricing, and UX instantly. Infinite persona scaling, 10-minute insights, privacy-first.",
    },
    highlights: {
      ko: [
        "무한 확장 페르소나",
        "10분 시장 검증",
        "프라이버시 우선 아키텍처",
      ],
      en: [
        "Infinite persona scaling",
        "Insights in 10 minutes",
        "Privacy-first architecture",
      ],
    },
    products: [{ name: "Homosilicus", url: "https://homosilicus.github.io" }],
  },
];

export function serviceHref(slug: string, lang: Lang): string {
  return lang === "en" ? `/en/services/${slug}/` : `/services/${slug}/`;
}
