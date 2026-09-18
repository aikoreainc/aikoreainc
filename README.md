# aikoreainc.com

한국인공지능 주식회사(AI Korea Inc.) 공식 웹사이트.

## 기술 스택

| 항목 | 도구 |
|------|------|
| 프레임워크 | Astro 5 (정적 빌드) |
| 스타일 | Tailwind CSS 4 |
| 호스팅 | GitHub Pages |
| 도메인 | aikoreainc.com |
| 분석 | Google Analytics (G-824905R5KV) |
| 사이트맵 | @astrojs/sitemap (자동 생성) |

## 프로젝트 구조

```
src/
├── components/    # 재사용 UI 컴포넌트
├── content/       # 뉴스 등 콘텐츠 컬렉션 (Markdown)
├── data/          # 회사 정보, 상수
├── i18n/          # 다국어 번역 데이터
├── layouts/       # BaseLayout (GA, SEO, hreflang)
├── pages/         # 라우팅 (ko: 루트, en: /en/ 접두사)
└── styles/        # global.css (Tailwind)
```

## 명령어

```bash
npm run dev       # 개발 서버 (localhost:4321)
npm run build     # 정적 빌드 → dist/
npm run preview   # 빌드 결과 미리보기
npm run check     # TypeScript 타입 검사
```

## 규칙

### 커밋 컨벤션
- `feat:` 새 기능/페이지
- `fix:` 버그 수정
- `style:` 시각적 변경 (로직 무관)
- `chore:` 빌드/설정/의존성
- 메시지는 한국어, 한 줄 요약 + 필요 시 상세

### i18n
- 기본 로케일: `ko` (접두사 없음 → `/about/`)
- 영문: `/en/` 접두사 (→ `/en/about/`)
- `prefixDefaultLocale: false` — 한국어에 `/ko/` 접두사 사용 금지
- `/ko/*` 경로는 리다이렉트로 처리 (404 방지)

### SEO
- 모든 페이지에 `canonical`, `hreflang` (ko-KR, en-US, x-default) 필수
- 사이트맵은 빌드 시 자동 생성 — 수동 편집 금지
- `robots.txt`는 `public/` 아래가 아닌 빌드 시 자동 생성

### 배포
- `main` 브랜치 push → GitHub Actions → GitHub Pages 자동 배포
- `dist/`는 gitignore 대상 — 저장소에 커밋하지 않는다. Actions가 빌드해 Pages에 올린다
- CNAME: `aikoreainc.com`

### 외부 설정 변경 기록
- Git에 반영되지 않는 변경(Search Console, DNS, GA 설정 등)은 `CHANGELOG.md`에 기록

## 참고 링크
- 라이브: https://aikoreainc.com
- Search Console: Google Search Console (aikoreainc.com 속성)
- Analytics: Google Analytics (G-824905R5KV)
