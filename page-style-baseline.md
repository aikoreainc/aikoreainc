# 한국인공지능(AIKoreaInc) 페이지 구조·스타일 기준

> 이 저장소는 **정적 HTML + Bootstrap 4 + 커스텀 CSS**(`css/style.css`, `css/modern-professional.css`)입니다.  
> AstroWind·JobAI(`page-style-baseline`)에서 쓰던 **리듬·역할 분리 개념**만 가져오고, 클래스명·스택·경로는 **이 프로젝트에 맞게 재정의**합니다. JobAI 문서를 그대로 따르지 않습니다.

---

## 1. 스택·전제

| 항목 | 내용 |
|------|------|
| 마크업 | HTML5, 시맨틱 래퍼 `<main class="site-main" id="main-content">` |
| 레이아웃 | Bootstrap `container` / `row` / `col-*` |
| 스타일 | `style.css` → `responsive.css` → **`modern-professional.css`** (토큰·레이아웃 보정) |
| 테마 | `body`에 `darker` + JS로 `light-version` 토글 |

---

## 2. 페이지 뼈대 (공통 순서)

모든 페이지는 아래 순서를 유지합니다.

1. **스킵 링크** → **프리로더** → **`<header>`** 안의 **`<nav id="banner">`** — 글로벌 헤더 (로고, 메뉴, 테마 버튼). 마크업 원본은 **`partials/header.html`** — 수정 후 `npm run build:partials`.
2. **`<main class="site-main" id="main-content">`** — 본문 전부
3. **`<footer class="footer-area">`** — 푸터 및 공통 스크립트. 원본은 **`partials/footer.html`** — 동일 스크립트로 주입.

### 페이지 유형

| 유형 | 본문 시작 패턴 |
|------|----------------|
| **홈** | `<section class="hero-section …">` → 이하 섹션들 |
| **내부 페이지** | `<div class="breadcumb-area">` (페이지 타이틀·breadcrumb) → `<section>` 등 |

스크롤 오프셋·히어로 상단 여백은 `modern-professional.css`의 `.site-main` / `.hero-section`에서 조정합니다.

---

## 3. 레이아웃 토큰 (AstroWind `max-w-7xl` 등에 대응)

CSS 변수는 `modern-professional.css`의 `:root`에 정의합니다.

| 개념 | Tailwind(AstroWind) 참고 | 이 사이트 매핑 |
|------|-------------------------|----------------|
| 콘텐츠 최대 너비 | `max-w-7xl` (1280px) | `--mp-container-max: 1280px` → `.container` 확장 |
| 가로 패딩 | `px-4 sm:px-6` | Bootstrap `container` 기본 + 필요 시 섹션에 `px` 유틸 |
| 섹션 세로 간격 | `py-12 lg:py-20` | `.section-rhythm`, `.section-rhythm--tight` 유틸 |
| 카드 라운드 | `rounded-2xl` | `--mp-radius` (12px) 계열 |

---

## 4. 타이포그래피 역할 (클래스 매핑)

| 역할 | 권장 패턴 |
|------|-----------|
| 페이지 상단 라벨(영문 태그라인 대체) | `.gradient-text` (짧은 한 줄·영문 혼용 가능) |
| 섹션 제목 | `h2` / `h4` + `.section-heading` 블록 |
| 본문 | `p` — 다크에서 `modern-professional`이 muted 톤 적용 |
| CTA | `.more-btn` — primary / 보조(동일 그룹 내 두 번째 링크는 아웃라인) |

히어로 `h1`은 `clamp` 기반으로 반응형 유지 (`modern-professional.css`).

---

## 5. 컴포넌트·콘텐츠 편집 규칙

| 구분 | 편집 담당 |
|------|-----------|
| 일반 안내 문구, 섹션 소개, breadcrumb 라벨 등 | 작성자·에이전트가 자유롭게 수정 가능 |
| **구성원 이름·직책·이력, 수상, SNS** | **회사 담당자가 직접 수정** |
| **프로젝트 제목·설명·이미지·상세 링크** | **회사 담당자가 직접 수정** |
| **성과 지표 숫자**(클라이언트 수, 논문 인용 등) | **회사 담당자가 직접 수정** |

기준서에는 구체 수치를 적지 않습니다. HTML 해당 블록에만 반영합니다.

---

## 6. 네비게이션·접근성

- 드롭다운 트리거 `id`는 페이지당 **고유** (`navbardrop-solutions`, `navbardrop-services` 등).
- Breadcrumb의 Home은 **`index.html`**로 연결 (`href="#"` 지양).
- 스킵 링크 도입 시 `href="#main-content"` 사용 가능.

---

## 7. 파일 참조

| 용도 | 경로 |
|------|------|
| 디자인 토큰·레이아웃·내비 보정 | `css/modern-professional.css` |
| 레거시 템플릿 전역 스타일 | `css/style.css`, `css/responsive.css` |
| 테마 토글 | `js/script.js` |
| 공통 헤더·푸터 원본 | `partials/header.html`, `partials/footer.html` |
| partial 반영 스크립트 | `npm run build:partials` → `scripts/apply-partials.mjs` |
| 이 기준서 | `page-style-baseline.md` |

---

## 8. 다음 작업 체크리스트 (레이아웃 단계)

- [x] `<main class="site-main" id="main-content">`로 본문 구획 통일
- [x] 컨테이너 최대 너비·섹션 리듬 CSS 반영 (`--mp-container-max`, `.section-rhythm*`)
- [x] 내부 페이지 breadcrumb 첫 항목 → `index.html` (라벨 `홈`)
- [x] 드롭다운 `id` 고유화 (`navbardrop-solutions` / `navbardrop-services`)
- [x] 문서 `lang="ko"` 통일
- [x] 스킵 링크·공통 헤더/푸터 (`partials/` + `npm run build:partials`)
- [ ] (선택) 현재 페이지 `nav` `active` 표시
- [ ] (선택) 공통 헤더/푸터를 빌드 도구로 분리할 때 이 문서의 순서 유지

---

*이 문서는 AIKoreaInc 정적 사이트 기준으로 작성되었습니다. AstroWind로 이관할 경우 섹션을 컴포넌트로 옮기되, 위 “페이지 유형·콘텐츠 편집 규칙”은 그대로 적용하면 됩니다.*
