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
      ko: "관측·예보 데이터와 자체 AI 모델을 결합해 시·공간 해상도의 환경 지표를 대시보드로 제공합니다. 단발 예측이 아니라 상시 운영 자산으로, 정부·연구기관과 함께 검증해 왔습니다. 대기질 대시보드 Air-Report를 용역으로 구축했습니다.",
      en: "Combines observation and forecast data with in-house AI models to deliver spatial-temporal environmental indicators via dashboards. Not one-off models — always-on assets, validated together with government and research partners. We built the Air-Report air-quality dashboard under contract.",
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
    slug: "silicus",
    title: { ko: "실리쿠스(Silicus)", en: "Silicus" },
    summary: {
      ko: "자체 B2B SaaS — 한국인 합성 패널에게 설문과 인터뷰를 먼저 해 봅니다(시범 운영 중).",
      en: "Our B2B SaaS — try surveys and interviews on a synthetic Korean panel first (in pilot).",
    },
    description: {
      ko: "공개된 한국인 페르소나에게 AI 모델로 설문과 인터뷰를 묻고, 결과를 문항별 분포와 집단별 교차표로 보여 줍니다. 합성 응답은 사람 조사를 대신하지 않으며, 본조사 전에 문항과 가설을 다듬는 데 씁니다. 컨설팅·연구 용역과 병행하는 제품 매출 축입니다.",
      en: "Ask public Korean personas your survey and interview questions through AI models, and read the answers as per-question distributions and group cross-tabs. Synthetic responses do not replace surveys of real people; they help refine questions and hypotheses before fieldwork. An in-house SaaS revenue line running alongside consulting and research engagements.",
    },
    highlights: {
      ko: [
        "설문·인터뷰 합성 응답",
        "집단별 교차표와 리포트",
        "AI 합성 응답임을 분명히 표시",
      ],
      en: [
        "Synthetic survey and interview responses",
        "Group cross-tabs and reports",
        "Clearly labeled as AI-generated",
      ],
    },
  },
];

export function serviceHref(slug: string, lang: Lang): string {
  return lang === "en" ? `/en/services/${slug}/` : `/services/${slug}/`;
}
