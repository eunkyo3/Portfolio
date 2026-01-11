export const profile = {
  name: '정은교',
  role: 'AI와 데이터를 연결하는 백엔드 개발자',
  summary:
    '어린 시절 접한 컴퓨터 게임을 통해 소프트웨어의 세계에 눈을 떴고, 자연스럽게 개발자라는 꿈을 키우게 되었습니다. 특성화 고등학교 진학 후 마주한 개발의 세계는 낯설고 어려웠지만, 하나하나 문제를 해결해 나가는 과정에서 깊은 성취감과 재미를 느꼈습니다. 특히 보이지 않는 곳에서 데이터를 제어하여 사용자에게 편의를 제공하는 백엔드 분야에 매력을 느꼈습니다. 현재는 탄탄한 백엔드 기술력을 바탕으로, AI 모델을 서비스에 효과적으로 접목하는 “AI 활용 능력을 갖춘 백엔드 개발자”를 목표로 정진하고 있습니다. 배움의 자세로 끊임없이 성장하는 개발자가 되겠습니다.',
}

export const experiences = [
  {
    role: '사원 (정규직)',
    company: '애니셀',
    period: '2025.01.02 ~ 현재',
    summary:
      '보안 솔루션 기업에서 게이트웨이부터 관제 대시보드까지 이어지는 4단계 통신 아키텍처를 다루며, 다중 서버 환경에서 프로토콜 정의와 데이터 정합성을 맞추는 백엔드 개발을 전담했습니다. MQTT, WebSocket, RESTful API를 활용한 실시간 데이터 처리와 로그 기반 장애 분석 경험을 바탕으로 안정적인 서비스 운영에 기여하고 있습니다. 특히 UWB 프로젝트에서는 센서 데이터가 불규칙하게 튀는 지터링 문제를 하드웨어 탓으로만 보지 않고, DB 저장 단계에서 필터링 로직을 적용해 데이터 품질을 개선한 경험이 있습니다.',
  },
]

export const projects = [
  {
    title: 'SignGPT – 실시간 수어 통역 AI 서비스',
    description:
      '청각장애인과 비장애인 간의 실시간 의사소통 격차를 줄이기 위해, 수어 영상 인식 딥러닝과 LLM 기반 자연어 생성·요약을 결합한 양방향 통역 서비스를 지향합니다. 카메라로 입력된 수어를 단어 단위로 인식해 자연스러운 문장·음성으로 변환하고, 반대로 텍스트·음성을 수어 애니메이션으로 출력해 수어만으로도 챗봇과 대화할 수 있는 환경을 제공합니다. 이를 통해 교육·고용·일상에서 청각장애인의 정보 접근성과 소통 기회를 넓히는 것을 목표로 합니다.',
    tech: ['Computer Vision', 'Sign Language Recognition', 'LLM', 'Python', 'AI 서비스 연동'],
    repo: 'https://www.signgpt.org/',
  },
  {
    title: 'AI 뉴스 기반 종목 추천 시스템',
    description:
      '실시간 뉴스 기사에서 종목을 추출하고 KoBERT 기반 감성 분석으로 투자 유망 종목을 추천하는 시스템입니다. 네이버 뉴스 크롤링, 종목명 추출, 감정 분류, 점수 계산, DART 기업 정보 및 공시 연동까지 하나의 흐름으로 통합한 프로젝트입니다.',
    tech: ['Python', 'Streamlit', 'KoBERT', 'BeautifulSoup', 'DART Open API'],
    repo: 'https://github.com/eunkyo3/stock-news-ai',
  },
  {
    title: '연락처 관리 앱 (Node.js & Sequelize)',
    description:
      'Sequelize ORM을 사용해 연락처를 관리하는 서버 사이드 애플리케이션입니다. Node.js 환경에서 모델·마이그레이션을 구성하고, RESTful 방식으로 연락처 생성/조회/수정/삭제를 처리하도록 설계했습니다. 추후 로그인 및 세션, 토큰 기반 인증, 암호화 등 보안 기능 확장을 고려한 구조로 구현했습니다.',
    tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'EJS'],
    repo: 'https://github.com/eunkyo3/contact-app',
  },
  {
    title: '메모 관리 웹 애플리케이션 (Java)',
    description:
      'HTML과 Java 기반으로 구현한 메모 관리 웹 애플리케이션입니다. Gradle을 사용해 빌드 환경을 구성하고, 웹 인터페이스를 통해 메모를 작성·조회할 수 있도록 설계했습니다. 추후 인증, 데이터 영속화, 배포 자동화 등을 추가해 백엔드 역량을 확장할 수 있는 기반 프로젝트입니다.',
    tech: ['Java', 'Spring Boot', 'HTML', 'Gradle'],
    repo: 'https://github.com/eunkyo3/memo',
  },
  {
    title: 'Flutter 앱 모음 포트폴리오',
    description:
      '플러터로 개발한 여러 개의 모바일 앱(번호 뽑기, 영화 박스오피스/검색, 급식 조회·평가, 타이머, 다이어리, 인스타그램 클론 등)을 한 페이지에서 체험할 수 있도록 구성한 포트폴리오 사이트입니다. 각 프로젝트는 상태 관리, 네트워크 통신, UI 구성 등 플러터 기본기를 학습하고 실습하기 위한 목적을 가지고 있습니다.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://eunkyo3.github.io/',
  },
  {
    title: 'Vue 기반 개인 포트폴리오 웹사이트',
    description:
      'Vue 3와 Vite, Tailwind CSS로 구현 중인 개인 포트폴리오 웹사이트입니다. SPA 구조로 About, Skills, Experience, Projects 섹션 등을 구성하고 있으며, 반응형 레이아웃을 적용해 다양한 환경에서 일관된 사용자 경험을 제공하는 것을 목표로 하고 있습니다.',
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
    repo: 'https://github.com/eunkyo3/Portfolio',
  },
  {
    title: 'BrainAI – OpenVINO 얼굴·나이·성별·감정 인식',
    description:
      'Intel OpenVINO 툴킷과 Open Model Zoo의 사전 학습 모델을 활용해 얼굴 검출, 나이·성별, 감정을 인식하는 프로젝트입니다. 정지 이미지에 대해 얼굴/나이/성별/감정을 분석하는 Jupyter Notebook과, 웹캠으로 실시간 얼굴을 검출하고 나이·성별을 추론하는 파이썬 스크립트(webcam_age_gender.py)를 제공해, Vision 기반 AI 파이프라인과 모델 배포 과정을 실습할 수 있습니다.',
    tech: ['Python', 'OpenVINO', 'Open Model Zoo', 'OpenCV', 'Jupyter Notebook'],
    repo: 'https://github.com/eunkyo3/face-recognition',
  },
  {
    title: 'AI Video Studio – 실사 스타일 영상 생성',
    description:
      'RTX 3060 Ti 로컬 환경에서 실사(Photorealistic) 스타일의 동영상을 생성하기 위해 최적화된 올인원 솔루션입니다. Streamlit 기반의 GUI를 제공하며, AnimateDiff(생성), Motion LoRA(카메라 무빙), RIFE(보간), Real-ESRGAN(업스케일링) 기술이 파이프라인으로 연결되어 있습니다. 텍스트 프롬프트 입력부터 고화질 영상 파일 생성까지의 전 과정을 자동화하여, VRAM 8GB 한계를 극복하기 위한 CPU Offload 최적화를 적용했습니다.',
    tech: ['Python', 'Streamlit', 'Diffusers', 'AnimateDiff', 'Motion LoRA', 'RIFE', 'Real-ESRGAN', 'FFmpeg', 'PyTorch'],
    repo: 'https://github.com/eunkyo3/gen-ai-video',
  },
  {
    title: '학교 급식 정보 카카오톡 자동 전송 시스템',
    description:
      '교육부 NEIS(Open API)에서 학교 급식 정보를 조회하여 카카오톡 나에게 메시지로 매일 아침 자동 전송하는 파이썬 스크립트입니다. NEIS API 연동으로 급식 메뉴를 가져오고, 카카오톡 OAuth 인증을 통해 액세스 토큰을 관리하며, schedule 라이브러리를 활용해 매일 08:30에 자동으로 급식 정보를 전송합니다. 환경변수를 통한 API 키 관리와 토큰 자동 갱신 기능을 포함하고 있습니다.',
    tech: ['Python', 'NEIS API', '카카오톡 API', 'OAuth', 'schedule', 'requests'],
    repo: 'https://github.com/eunkyo3/python_meals_to_kakao',
  },
]

export const skills = {
  languages: ['Python', 'Java', 'JavaScript', 'SQL', 'Dart & Flutter'],
  frontend: ['React', 'Vue'],
  backend: ['Spring', 'Node.js', 'RESTful API 설계', '시큐어 코딩', 'Gradle', 'Firebase'],
  data: ['MySQL', 'PostgreSQL', 'Oracle'],
  devops: ['AWS 인프라 구축', 'AWS (ECS, EB)', 'Docker', 'Kubernetes', 'Redis', 'Vercel', 'Linux'],
  etc: ['Git', '리버스 엔지니어링 기초', '모의해킹/화이트해킹 실습', '문서화 및 이슈 트래킹'],
}


export const certificates = [
  { title: '정보처리기능사', issuer: '한국산업인력공단', date: '2022.12.09' },
  { title: '정보처리산업기사', issuer: '한국산업인력공단', date: '2024.03.15' },
  { title: 'SQLD', issuer: '한국데이터산업진흥원', date: '2024.06.21' },
  { title: '웹디자인개발기능사', issuer: '한국산업인력공단', date: '2024.07.03' },
  { title: 'SW개발_L3_22V2', issuer: '한국산업인력공단', date: '2024.12.26' },
]

export const activities = [
  {
    title: '사이버가디언즈',
    detail:
      '2022.09 ~ 2022.12 · 한국정보기술연구원(KITRI) · C 언어로 기초 문법을 학습하고, 네트워크 구조와 패킷 동작 원리를 이해했으며, Git을 활용한 협업과 버전 관리를 익혔습니다. 이를 바탕으로 보안 분야 전반에 대한 기초 지식을 쌓을 수 있었습니다.',
  },
  {
    title: '화이트해커 양성교육',
    detail:
      '2023.07 ~ 2023.10 · 현대오토에버 / 함께일하는재단 · ChatGPT를 활용한 정보보안 학습, 웹 해킹과 CTF 실습, 와이어샤크를 이용한 네트워크 공격 패킷 분석, 파이썬 기반 보안 업무 자동화, 도커·쿠버네티스 및 안드로이드 모바일 해킹, 버그헌팅·시나리오 모의해킹까지 실전형 커리큘럼을 수료',
  },
  {
    title: 'AI 슈퍼컴퓨터 청소년 캠프',
    detail:
      '2024.07 ~ 2024.08 · UNIST / KISTI · 초고성능 컴퓨팅(HPC) 환경에서 AI 모델 학습 및 병렬 처리, 슈퍼컴퓨터 활용 교육을 수료하고, TensorFlow·Keras 기반 이미지 분류 및 레이트레이싱 실습을 통해 대규모 연산 환경에서의 딥러닝 워크로드를 경험했습니다.',
  },
  {
    title: '화이트해커 양성교육',
    detail:
      '2024.07 ~ 2024.10 · 현대오토에버 / 함께일하는재단 · 공급망 해킹, 대칭·비대칭·하이브리드 암호, 네트워크/ARP 기반 MITM, hping3를 활용한 패킷 분석 등 심화 보안 개념을 학습하고, 웹 취약점·WAF·제로트러스트·OT/ICS 보안까지 아우르는 실전형 모의해킹 커리큘럼을 수료했습니다.',
  },
]

export const awards = [
  {
    title: '2023 지방기능경기대회 클라우드컴퓨팅(AWS)',
    detail: '2023.04 · 경기도기능경기위원회 · AWS 기반 클라우드 인프라 구축 분야 지방기능경기대회 참가',
  },
  {
    title: '화이트해커 경진대회 – 입상',
    detail: '2023.11 · 현대오토에버 / 함께일하는재단 · 화이트해커 경진대회에서 CTF 문제를 해결하여 입상',
  },
  {
    title: '2024 지방기능경기대회 클라우드컴퓨팅(AWS)',
    detail: '2024.04 · 경기도기능경기위원회 · AWS 기반 클라우드 인프라 구축 분야 지방기능경기대회 참가',
  },
  {
    title: '화이트해커 경진대회 – 우수상',
    detail: '2024.11 · 현대오토에버 / 함께일하는재단 · 화이트해커 경진대회에서 CTF 문제를 해결하여 우수상 수상',
  },
  {
    title: 'AI Youth Challenge – 교육부 장관상',
    detail: '2024.07 ~ 2024.08 · 포스코DX · AI Youth Challenge에서 기술로 농인의 정보 접근성을 높이고 소통의 장벽을 낮추는 SignGPT 팀 프로젝트 성과로 교육부 장관상 수상',
  },
  {
    title: '디지털새싹 인공지능 메이커톤 – 어벤져스상(최우수상)',
    detail: '2024.12 · 화성시인재육성재단 / 동탄중앙이음터 · 디지털새싹 인공지능 메이커톤에서 기존 SignGPT 성능 및 UI 개선하여 어벤져스상(최우수상) 수상',
  },
  {
    title: '사이드임팩트 AI 트랙 - 우수 선정팀',
    detail: '2026.01 · 브라이언 임팩트 · 사이드임팩트 AI 트랙에서 SignGPT 기능 개선으로 우수 선정팀에 선정되었습니다. 주요 개선 내용으로는 UI 개편, 호버 시 수어 출력, 일반인과 농인의 대화 기능 추가, 미국 수어 지원 추가',
  },
]


