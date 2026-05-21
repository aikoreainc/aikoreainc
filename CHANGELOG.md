# Changelog (Git 외 수정사항)

Git 커밋에 포함되지 않는 외부 설정 변경, 수동 작업, 인프라 조치 등을 기록합니다.

---

## 2026-05-21

### Google Search Console — 404 색인 오류 대응
- **증상**: `/ko/`, `/ko/about/`, `/ko/services/` 등 locale prefix URL이 404로 보고됨
- **원인**: Astro `prefixDefaultLocale: false` 설정으로 한국어 페이지는 루트(`/`)에 존재하지만, Google이 `/en/*` 패턴을 보고 `/ko/*`를 추론 크롤링
- **조치**: `astro.config.mjs`에 `/ko/*` → `/*` 리다이렉트 추가 (커밋 `88812ea`)
- **후속**: Search Console에서 "수정 확인 요청" 제출 필요

---

## 2026-05-21

### Google Analytics 설정
- **측정 ID**: `G-824905R5KV`
- **위치**: `src/layouts/BaseLayout.astro` 하드코딩
- **조건**: `import.meta.env.PROD`일 때만 로드

---

## 템플릿

```
## YYYY-MM-DD

### 제목
- **증상/배경**: 
- **원인**: 
- **조치**: 
- **후속**: 
```
