## Eunkyo's Portfolio

AI와 데이터를 연결하는 백엔드 개발자 **정은교**의 포트폴리오입니다.
보안에서 출발해 백엔드·데이터·클라우드·AI 프로젝트까지 확장해 온 실무·대외활동 경험을 담았습니다.

> 🔗 **Live:** https://eunkyo3.github.io/Portfolio/

---

### 구성

단일 페이지(SPA) 안에서 **Home · About · Experience · Projects · Skills · Certificates · Activities · Contact** 섹션이 이어집니다. 상단 내비게이션으로 각 섹션에 바로 이동할 수 있고, **다크/라이트 테마**와 **한국어/영어 전환**을 지원합니다.

Projects는 실서비스·풀스택 중심의 **주요 프로젝트**와 기술 학습 중심의 **학습·실습**으로 나눠 보여주며, 각 프로젝트에는 코드 분석 기반의 "문제 해결" 항목이 정리돼 있습니다.

> 표시되는 콘텐츠(프로필·경력·프로젝트·스킬·자격증·활동·수상)는 **`src/data/content.ts` 한 곳**에서 한국어/영어로 관리됩니다.

### 기술 스택

- **Frontend**: React 19 · TypeScript · Vite · Tailwind CSS v4
- **State / Routing**: React Router · React Context (Theme · I18n)
- **Deploy**: GitHub Pages (`base: /Portfolio/`, 빌드 산출물 `docs/`)

### 로컬 실행

```bash
git clone https://github.com/eunkyo3/Portfolio.git
cd Portfolio
npm install
npm run dev      # http://localhost:5173
```

빌드 및 린트:

```bash
npm run build    # tsc -b + vite build → docs/
npm run lint
```
