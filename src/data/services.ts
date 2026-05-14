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
      ko: "채용공고를 자동 수집·정제·태깅하여 의사결정 데이터로 공급합니다.",
      en: "Job postings collected, cleaned, tagged, and delivered as actionable data.",
    },
    description: {
      ko: "수십만 건 규모의 채용공고를 자동 수집·중복 제거·태깅하고, 직무·지역·기업 단위로 가공합니다. 노동시장 추세 분석, 정책 연구, 인재 매칭 제품에 그대로 투입할 수 있습니다. JobAI(jobai.co.kr)로 가동 중입니다.",
      en: "Hundreds of thousands of postings are automatically collected, deduplicated, and tagged across role, region, and employer dimensions. Ready for trend analysis, policy research, and talent-matching products. Operated as JobAI (jobai.co.kr).",
    },
    highlights: {
      ko: [
        "수십만 건 규모 자동 수집·중복 정합",
        "직무·지역·기업 단위 태깅",
        "API·덤프로 공급",
      ],
      en: [
        "Hundreds of thousands of postings, deduplicated",
        "Tagged by role, region, and employer",
        "Delivered as API or data dumps",
      ],
    },
    products: [{ name: "JobAI", url: "https://jobai.co.kr" }],
  },
  {
    slug: "eco-gis",
    title: { ko: "환경 GIS 대시보드", en: "Environmental GIS Dashboard" },
    summary: {
      ko: "대기·수질·해양·공중보건 지표를 시·공간 해상도로 상시 운영합니다.",
      en: "Air, water, marine, and public-health indicators at spatial-temporal resolution.",
    },
    description: {
      ko: "관측·예보 데이터와 자체 AI 모델을 결합해 시·공간 해상도의 환경 지표를 대시보드로 제공합니다. 단발 예측이 아니라 상시 운영 자산으로, 정부·연구기관과 함께 검증해 왔습니다. BirdFluAI와 Air-Report가 운영 중입니다.",
      en: "Combines observation and forecast data with in-house AI models to deliver spatial-temporal environmental indicators via dashboards. Not one-off models — always-on assets, validated together with government and research partners. BirdFluAI and Air-Report are in production.",
    },
    highlights: {
      ko: [
        "AI 예측 + GIS 시각화 통합",
        "정부·연구기관과 함께 검증",
        "REST API·임베드 위젯 지원",
      ],
      en: [
        "AI forecasting plus GIS visualization",
        "Validated with public partners",
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
      ko: "XAI·UQ 컨설팅 라인 — J. Cleaner Production 2024·2025 방법론을 의뢰자 시스템에 도입합니다.",
      en: "Our XAI and UQ consulting line — J. Cleaner Production 2024 and 2025 methods applied to client systems.",
    },
    description: {
      ko: "정부·공공·산업의 의사결정에 AI를 도입할 때, 결과뿐 아니라 \"왜 그런 결론인지\"를 함께 제시할 수 있도록 모델·평가·보고 체계를 설계합니다. 본사가 SCIE 학술지에 발표한 설명가능 AI(XAI)·불확실성 정량화(UQ) 방법론을 그대로 적용합니다.",
      en: "For decisions that require accountability in the public, government, and industry sectors, we design model, evaluation, and reporting pipelines that surface both the answer and the reasoning. We apply the explainability and uncertainty-quantification methods we published in SCIE journals.",
    },
    highlights: {
      ko: [
        "설명가능 AI(XAI) · CAM 기반",
        "불확실성 정량화(UQ)",
        "J. Cleaner Production 2024·2025 게재 방법론",
      ],
      en: [
        "Explainable AI · CAM-based",
        "Uncertainty quantification (UQ)",
        "Methods from J. Cleaner Production 2024 and 2025",
      ],
    },
  },
  {
    slug: "homosilicus",
    title: { ko: "Homosilicus", en: "Homosilicus" },
    summary: {
      ko: "자체 B2B SaaS — AI 합성 페르소나로 신제품·가격·UX를 10분 만에 검증합니다.",
      en: "Our B2B SaaS — synthetic personas validate products, pricing, and UX in 10 minutes.",
    },
    description: {
      ko: "기업 고객을 AI 페르소나로 복제해 신제품·가격·UX를 즉시 검증합니다. 무한 확장 페르소나와 프라이버시 우선 아키텍처를 갖춘 자체 B2B SaaS로, 컨설팅·연구 용역과 병행하는 제품 매출 축입니다.",
      en: "Replicate enterprise customers as AI personas to validate new products, pricing, and UX instantly. Infinite persona scaling on a privacy-first architecture — an in-house SaaS revenue line running alongside consulting and research engagements.",
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
