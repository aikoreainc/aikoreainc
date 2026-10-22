# Changelog (Git 외 수정사항)

Git 커밋에 포함되지 않는 외부 설정 변경, 수동 작업, 인프라 조치 등을 기록합니다.

---

## 2026-10-22

### Homosilicus → 실리쿠스(Silicus) 일원화
- **결정**: Homosilicus 브랜드를 없애고 실리쿠스로 일원화(사용자, 10-22). homosilicus.com은 우리 도메인이 아니다.
- **사이트 밖 조치**: `homosilicus/homosilicus.github.io`를 이 사이트 서비스 쪽으로 넘기는 안내 페이지로 바꾸고 저장소를 보관(archive)한다. GitHub 조직 `homosilicus`는 이름을 지키려고 지우지 않는다.
- **실리쿠스 주소**: https://silicus.kr (한국인공지능 주식회사 명의, Vercel). 지금은 비밀번호 화면이라 이 사이트에서 링크하지 않는다. 공개하면 `company.links.silicus`로 바깥 링크를 건다.

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
