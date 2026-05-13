export interface Paper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  page: string;
  year: number;
  month: number;
  doi: string;
  summary: { ko: string; en: string };
  topics: string[];
}

export const papers: Paper[] = [
  {
    id: "algal-bloom-xai-2025",
    title:
      "Reinforced explainable AI for algal bloom forecasting under climate change: A multi-run class activation mapping (CAM) approach",
    authors: "Lee D., Jeon H.",
    journal: "Journal of Cleaner Production",
    volume: "529",
    page: "146805",
    year: 2025,
    month: 10,
    doi: "10.1016/j.jclepro.2025.146805",
    summary: {
      ko: "기후 변화 조건에서 조류대발생을 예측하는 강화된 설명가능 AI. 다회 실행 CAM 기법으로 모델 판단 근거를 일관되게 추출.",
      en: "An enhanced explainable AI for algal-bloom forecasting under climate change, using a multi-run CAM approach to extract consistent model rationales.",
    },
    topics: ["XAI", "Climate", "Environmental AI"],
  },
  {
    id: "pm-uncertainty-2024",
    title:
      "Building reliable AI for quantifying uncertainty in particulate matter predictions with deep learning",
    authors: "Lee D., Lee B.",
    journal: "Journal of Cleaner Production",
    volume: "473",
    page: "143457",
    year: 2024,
    month: 10,
    doi: "10.1016/j.jclepro.2024.143457",
    summary: {
      ko: "딥러닝 기반 미세먼지 예측에서 불확실성을 정량화하는 신뢰성 있는 AI 설계. 정책·운영 의사결정의 근거 제공.",
      en: "A reliable AI framework that quantifies uncertainty in deep-learning particulate-matter predictions, supporting policy and operational decision making.",
    },
    topics: ["Uncertainty", "Air Quality", "Trustworthy AI"],
  },
];

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}
