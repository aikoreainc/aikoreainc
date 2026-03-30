#!/usr/bin/env node
/**
 * partials/header.html · partials/footer.html 내용을
 * 저장소 루트의 모든 *.html 에 주입합니다.
 * GitHub Pages는 SSI가 없으므로, 배포 전에 이 스크립트를 실행해
 * 생성된 HTML을 커밋하는 방식을 사용합니다.
 *
 * 사용: npm run build:partials
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const headerPath = path.join(root, "partials", "header.html");
const footerPath = path.join(root, "partials", "footer.html");

const header = fs.readFileSync(headerPath, "utf8").replace(/\r\n/g, "\n");
const footer = fs.readFileSync(footerPath, "utf8").replace(/\r\n/g, "\n");

const headerRe = /(<body class="darker">)[\s\S]*?(\n    <main class="site-main" id="main-content">)/;
const footerRe = /(\n    <\/main>)[\s\S]*?(<\/body>)/i;

const htmlFiles = fs
  .readdirSync(root)
  .filter((f) => f.endsWith(".html") && !f.startsWith("."));

let ok = 0;
for (const name of htmlFiles) {
  const fp = path.join(root, name);
  let html = fs.readFileSync(fp, "utf8").replace(/\r\n/g, "\n");

  if (!headerRe.test(html)) {
    console.error(`[skip] ${name}: 본문 <main> 패턴을 찾지 못했습니다.`);
    continue;
  }
  if (!footerRe.test(html)) {
    console.error(`[skip] ${name}: </main> … </body> 패턴을 찾지 못했습니다.`);
    continue;
  }

  html = html.replace(headerRe, `$1\n${header}\n$2`);
  html = html.replace(footerRe, `$1\n\n${footer}\n\n$2`);

  fs.writeFileSync(fp, html, "utf8");
  console.log(`[ok] ${name}`);
  ok++;
}

console.log(`\n완료: ${ok}/${htmlFiles.length}개 파일 갱신`);
if (ok !== htmlFiles.length) {
  process.exit(1);
}
