# 한국인공지능(AIKoreaInc) 사이트 — 작업 정리 · 페이지 정보 · 향후 할 일

> 이 파일은 **현재 상태**, **HTML 페이지 역할**, **앞으로 수행할 작업**을 한곳에서 보기 위한 목록입니다.  
> 레이아웃·스타일 **원칙·토큰**은 [`page-style-baseline.md`](./page-style-baseline.md)를 참고하세요.

---

## 1. 프로젝트 요약

| 항목 | 내용 |
|------|------|
| 성격 | 정적 기업 사이트 (HTML + Bootstrap 4 + jQuery) |
| 배포 | GitHub Pages 등 정적 호스팅 가정 (`CNAME`: `aikoreainc.com`) |
| 스타일 로드 순서 | `css/style.css` → `css/responsive.css` → `css/modern-professional.css` |
| 스크립트 | `js/jquery.min.js`, Bootstrap, `js/plugins.js`, `js/script.js` |
| 본문 구조 | `<body>` → 스킵 링크·프리로더·`<header>`(내부 `#banner`) → `<main id="main-content">` → `<footer>` → 스크립트 |
| 공통 영역 | `partials/header.html`, `partials/footer.html` — 수정 후 **`npm run build:partials`** 로 17개 HTML에 반영 |

### 공통 헤더·푸터 작업 방식

1. `partials/header.html` 또는 `partials/footer.html`만 편집합니다. (기업정보·대표자 등 **사실 관계는 푸터 partial에서 한 곳만** 관리)
2. 터미널에서 저장소 루트로 이동 후 `npm run build:partials` 실행
3. 갱신된 `*.html`(현재 17개)을 커밋합니다. (GitHub Pages는 include가 없으므로 **생성된 HTML이 배포본**입니다.)

---

## 2. URL·파일명 전략 (지금 당장 바꿀지 여부)

| 현재 | 권장 | 이유 |
|------|------|------|
| 그대로 유지 | **단기적으로 유지** | 이미 링크·검색 색인·북마크가 있을 수 있음. 리네임 시 전역 `href` 갱신 필요 |
| ~~`solutions.html`~~ | **삭제됨** | `solution.html` + `portfolio.html` 등으로 일원화 |
| `about-us.html`, `contact-us.html` 등 | **유지** | kebab-case는 일반적이며 문제 없음 |
| 장기적으로 `/ko/about/` 형태 | **빌드 도구(Astro 등) 도입 시** 검토 | 정적 단일 폴더만 쓰는 동안은 파일명=URL이 단순함 |

**정리**: 구조 개선 우선순위는 **파일명 대량 변경**보다 **공통 partial + 깨진 링크(`project-details.html`) 정리 + 콘텐츠 통일**이 안전합니다. 리네임은 필요할 때 일괄 계획을 세운 뒤 진행하는 것을 권장합니다.

---

## 3. 페이지 목록 (17개 HTML)

| 파일 | 용도(개요) | 비고 |
|------|------------|------|
| `index.html` | 메인 랜딩 | 히어로, 소개, 파트너, 성과 지표, 프로젝트 티저, 팀 |
| `about-us.html` | 기업 소개 | breadcrumb + 소개 섹션 |
| `contact-us.html` | 문의 | breadcrumb + 연락 폼·정보 |
| `faq.html` | FAQ | breadcrumb + 질문 목록 |
| `products.html` | Data(제품/데이터) | breadcrumb + 콘텐츠 |
| `solution.html` | 솔루션 개요 | 내비「솔루션 개요」전용 (`solutions.html`은 제거됨) |
| `services.html` | 서비스 목록 | 네비 “Services List” |
| `services-details.html` | 서비스 상세(공통 템플릿) | |
| `services-details_1.html` ~ `_3.html` | 서비스 상세(분기) | Dashboard / AI 설계 / LLM 활용 메뉴와 대응 |
| `portfolio.html` | 솔루션 **사례·포트폴리오** 목록 | 내비 솔루션 →「사례 · 포트폴리오」 |
| `portfolio-details.html` | 포트폴리오 상세(공통 템플릿) | |
| `portfolio-details_1.html` ~ `_3.html` | 솔루션 **유형별** 상세 | 대시보드 / AI 설계 / LLM |
| `projects.html` | 서비스 **수행 프로젝트** 목록 | 내비 서비스 →「수행 프로젝트」 |

**프로젝트 카드 → 상세 URL 매핑 (요약)**

| 구분 | 목록 페이지 | 상세 파일 |
|------|-------------|-----------|
| 솔루션 트랙 | `portfolio.html` | `portfolio-details_1` ~ `_3.html` (카드별로 분산 연결) |
| 서비스 트랙 | `projects.html`, `services.html` | `services-details_1` ~ `_3.html` |
| 메인 `index.html` | 수행 프로젝트 4건 | 서비스형 2건 → `services-details_2`, `_3` / 솔루션형 2건 → `portfolio-details_1`, `_2` |

*(실제 사례와 상세 페이지 본문을 1:1로 맞추려면 나중에 카드별로 URL을 조정하면 됩니다.)*

---

## 4. 이미 반영된 작업 (요약)

- [x] `css/modern-professional.css` — 톤·내비·CTA·카드·모바일 내비 등 보완
- [x] 전 페이지 `modern-professional.css` 링크
- [x] 본문 `<main class="site-main" id="main-content">` 래핑
- [x] `≥1200px` 구간 `.container` 최대 너비 1280px 근사 통일
- [x] 네비 드롭다운 `id` 고유화 (`navbardrop-solutions` / `navbardrop-services`)
- [x] breadcrumb 첫 항목 → `index.html` (`홈`)
- [x] 전 페이지 `lang="ko"`
- [x] `index.html` — 메타 description, 일부 한국어 카피, 푸터 정리, 저작권 연도 등
- [x] 테마 토글 JS — 배경 URL 경로 수정, 요소 없을 때 오류 방지
- [x] `page-style-baseline.md` — 이 프로젝트 기준으로 재작성
- [x] **공통 partial** — `partials/header.html` · `partials/footer.html` + `scripts/apply-partials.mjs` + `npm run build:partials`
- [x] 내비 라벨 한국어 통일, `<header>`/`role`/`aria-*`, 스킵 링크, 프리로더 `id="dream-load"` 통일
- [x] 푸터 단일 원본(회사명·기업정보·사업자·소셜 자리) — **내용 수정은 `partials/footer.html`만**
- [x] `solution.html` / `products.html` 페이지 타입 분리(구조 전용): `page-solution`, `page-data`, 섹션 ID(`solutions-*`, `data-catalog`) 및 레이아웃 래퍼 적용
- [x] **`project-details.html` 제거**: 카드 링크를 `portfolio-details_*` / `services-details_*`로 이관, 내비에 `portfolio.html`·`projects.html` 편입
- [x] **`solutions.html` 삭제**: 솔루션 진입은 `solution.html` + `portfolio.html`만 사용

---

## 5. 향후 작업 리스트

**지금 다음에 하기 좋은 순서 (요약)**  
1. `solution.html` 본문·타이틀 정리(현재 제목이 Products 등 템플릿 잔재인지 확인)  
2. `portfolio-details_*` / `services-details_*` 본문을 실제 사례와 맞추기(카드↔상세 1:1는 선택)  
3. **§5.2** — breadcrumb·영문 타이틀 한국어화, **§5.3** — 메타 description·Lorem 제거  
4. 푸터 소술 실 URL, 문의 폼 동작 확인  

### 5.1 구조 · 네비게이션 · 링크 (우선 권장)

- [x] **`project-details.html` 처리**: 존재하지 않는 URL 제거, 솔루션/서비스 상세로 연결
- [x] **`solutions.html`**: 파일 제거, 내비는 `partials/header.html` → `solution.html`로 통일 (`build:partials`로 전 페이지 반영)
- [ ] **푸터·소셜**: `partials/footer.html`에서 `href="#"` 실제 URL로 교체 (LinkedIn 등)
- [x] **스킵 링크**: `partials/header.html`에 포함 (`#main-content`)
- [ ] **활성 메뉴 표시**: 현재 페이지에 맞는 `nav-link` `active` (선택, partial에 로직 또는 빌드 시 주입 필요)

### 5.2 레이아웃 · 디자인

- [ ] 섹션 간격이 어색한 구간에 **`.section-rhythm` / `.section-rhythm--tight`** 선택 적용
- [ ] 내부 페이지 breadcrumb 상단 **페이지 제목** 영문 잔재 → 한국어·톤 통일 (예: About us → 기업 소개)
- [ ] 라이트 모드에서만 깨지는 블록이 있는지 **전 페이지 스팟 체크**
- [ ] (장기) AstroWind 수준으로 갈 경우: Astro 마이그레이션 범위·일정 별도 문서화

### 5.3 콘텐츠 (담당 구분)

**에이전트·작성자가 일반적으로 수정 가능**

- [ ] 각 페이지 `<meta name="description">` 채우기
- [ ] 템플릿 **Lorem·영문 플레이스홀더** 잔여분 제거
- [ ] `README.md` — 저장소 설명, 로컬 미리보기, 배포 방식 간단 기술

**회사 담당자 직접 수정 권장 (수치·인물·실적)**

- [ ] **성과 지표** 숫자·항목명 (메인 등)
- [ ] **구성원** 프로필·수상·SNS
- [ ] **프로젝트** 제목, 설명, 썸네일, 상세 링크
- [ ] **기업정보** (대표, 주소, 이메일, 사업자번호 등) 최신 여부 확인

### 5.4 기술 · 품질

- [ ] **이미지·에셋**: `img/` 경로가 저장소에 모두 포함되는지 배포 환경에서 확인 (일부는 Git 미추적일 수 있음)
- [ ] **폼**: `contact-us.html` 전송 방식(Formspree, 백엔드 등) 명시 및 동작 확인
- [ ] (선택) **압축·캐시**: 정적 자산 버전 쿼리, `preconnect` 등 성능 소소 개선

---

## 6. 관련 파일

| 파일 | 설명 |
|------|------|
| [`page-style-baseline.md`](./page-style-baseline.md) | 마크업 순서, 토큰 매핑, 콘텐츠 편집 역할 구분 |
| `partials/header.html` | 공통 프리로더·내비 (편집 후 `npm run build:partials`) |
| `partials/footer.html` | 공통 푸터·스크립트 로드 |
| `scripts/apply-partials.mjs` | partial → 루트 `*.html` 주입 |
| `package.json` | `npm run build:partials` |
| `css/modern-professional.css` | 디자인 토큰·레이아웃·스킵 링크·푸터 메일 링크 |
| `js/script.js` | 스크롤·카운터·테마 토글 등 |

---

## 7. 이 문서 갱신 방법

작업을 마칠 때마다 **§4 완료**에 항목을 옮기고, **§5**에서 해당 체크박스를 `[x]`로 바꾸면 됩니다.  
페이지가 추가·삭제되면 **§3 표**를 함께 수정하세요.

*최초 작성: 사이트 구조·대화 맥락 기준 통합 목록.*
