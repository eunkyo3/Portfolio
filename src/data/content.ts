export const profile = {
  name: '정은교',
  birthDate: '2006.02.09',
  role: 'AI와 데이터를 연결하는 백엔드 개발자',
  email: 'dmsry060209@gmail.com',
  github: 'https://github.com/eunkyo3',
  summary:
    '어린 시절 접한 컴퓨터 게임을 통해 소프트웨어의 세계에 눈을 떴고, 자연스럽게 개발자라는 꿈을 키우게 되었습니다. 특성화 고등학교 진학 후 마주한 개발의 세계는 낯설고 어려웠지만, 하나하나 문제를 해결해 나가는 과정에서 깊은 성취감과 재미를 느꼈습니다. 특히 보이지 않는 곳에서 데이터를 제어하여 사용자에게 편의를 제공하는 백엔드 분야에 매력을 느꼈습니다. 현재는 탄탄한 백엔드 기술력을 바탕으로, AI 모델을 서비스에 효과적으로 접목하는 “AI 활용 능력을 갖춘 백엔드 개발자”를 목표로 정진하고 있습니다. 배움의 자세로 끊임없이 성장하는 개발자가 되겠습니다.',
}

export const experiences = [
  {
    role: '사원 (정규직)',
    company: '애니셀',
    period: '2024.03 ~ 현재',
    summary: '보안·출입 게이트 IoT 통신 스택을 1인으로 설계·구현했습니다.',
    items: [
      {
        title: 'Gatelink Gateway (Python, asyncio)',
        description:
          'Linux SBC에서 MCU UART(keep-alive·EVT)를 파싱해 MQTT·REST로 동일 JSON을 전송하는 비동기 게이트웨이입니다. 환경 변수로 업링크를 전환하고, UART 링크 telemetry와 클라우드 업링크 성공·실패를 MCU에 server-connected/disconnected로 피드백합니다. 전송 장애 시에도 시리얼 수신은 유지하고 outbound 큐(최대 512건)에 이벤트를 적재한 뒤 복구 시 순서대로 drain하는 coordinator로 UART·전송 수명을 분리했습니다. publish 성공과 백엔드 수신을 구분한 관측성 정리, telemetry 스팸 방지 정책, 메시지 스펙 문서화로 현장·백엔드 연동을 맞췄습니다.',
      },
      {
        title: 'BrokerServer (Spring Boot, HiveMQ Embedded)',
        description:
          'TCP·WebSocket MQTT 브로커와 REST API를 단일 프로세스로 제공하는 통합 백엔드입니다. MQTT·HTTP 인입을 동일 파이프라인으로 처리해 PostgreSQL에 저장하고, 텔레메트리 기반 last_seen_at·스케줄러 타임아웃으로 장치 연결 상태를 판단합니다. QoS 재전송 대비 (device_code, source_event_code) 유니크와 ON CONFLICT DO NOTHING으로 이벤트 멱등성을 보장하고, UI·임베디드 clientId별 MQTT 인증·구독을 분리했습니다. 이벤트 CSV는 StreamingResponseBody로 스트리밍하며 X-Total-Count로 빈 결과를 구분하고, Flyway·Docker Compose·Jenkins prod 배포까지 담당했습니다.',
      },
    ],
  },
]

export const projects = [
  {
    category: '풀스택 서비스',
    tier: 'featured',
    title: 'Playlist Insight – 유튜브 플레이리스트 3D 인사이트',
    description:
      '공개된 유튜브·유튜브 뮤직 플레이리스트 링크를 붙여넣으면 반복 등장하는 채널과 추론된 음악 씬(장르), 플레이리스트 규모를 3D 우주 지도처럼 인터랙티브하게 시각화하는 서비스입니다. 두 URL 형식을 재생목록 list ID 기준으로 정규화하고 공식 YouTube Data API로 공개 데이터를 수집한 뒤, 반복 채널을 3D 허브로 배치하고 각 채널의 트랙을 주변 궤도로 표현합니다. 장르·씬 요약, 관측 명확도, 플레이리스트 등급, 채널 탐색기를 제공하며, 원본 재생목록이 바뀌어도 결과가 유지되는 안정적 스냅샷 공유 URL을 지원합니다. (Gemini 요약은 선택 기능)',
    tech: ['Next.js', 'TypeScript', 'Three.js', 'PostgreSQL', 'YouTube Data API', 'Gemini', 'Docker', 'Vitest'],
    problemSolving: [
      'Next.js가 패치한 global fetch가 특정 환경에서 비동기 크래시(unhandledRejection)를 유발 → YouTube·Gemini 호출을 node:https 기반 커스텀 transport로 우회 구현해 파이프라인 런타임 크래시 제거 (services/youtube.ts)',
      '만료된 키·API 장애가 전체 분석을 중단시키지 않도록, Gemini 요약 실패 시 결정론적 Fallback 생성기로 자동 강등하고 기본값을 비활성으로 두어 키 없이도 항상 결과 보장 (services/summary.ts)',
      '대형 플레이리스트에서 관계 간선이 O(n^2)로 폭증해 3D 뷰가 무거워지는 문제를, 인접 트랙만 연결하고 MAX_RELATIONSHIPS(400) 상한을 둬 방지 (domain/analysis.ts)',
      '공유 결과가 원본 변경에 흔들리지 않도록 분석을 불변 스냅샷으로 저장하고, 트랜잭션 + ON CONFLICT 업서트 + 버전 채번으로 원자적으로 처리 (services/snapshots.ts)',
    ],
    repo: 'https://github.com/eunkyo3/playlist-insight',
  },
  {
    category: '데이터 서비스',
    tier: 'featured',
    title: 'NutriRank – 가공식품 건강 등급·순위 서비스',
    description:
      '영양성분표를 직접 해석하지 않고도 음료·과자의 건강성을 건강 등급(A~E)과 카테고리 순위로 한눈에 확인하게 해 주는 서비스입니다. 식약처 「전국통합식품영양성분정보」 공개 데이터를 적재·정규화하고, 2023 Nutri-Score 알고리즘으로 건강 점수·등급·카테고리 순위를 사전 계산해 조회 시 실시간 연산 없이 즉시 응답합니다. 제품명 검색·필터, 등급 근거(기여 영양소)까지 보여주는 제품 상세, 카테고리별 순위, 분포·평균·상관·추세를 보는 집계 분석 대시보드를 제공합니다.',
    tech: ['Next.js 15', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS', 'Vitest', 'Playwright', 'Docker'],
    problemSolving: [
      '배치가 원천 데이터를 잘못 적재하면 서빙 등급·순위가 오염되는 리스크를, 물량 급감·필수필드 결측을 검사하는 품질 게이트 통과 시에만 교체하고 실패 시 마지막 정상본 유지 (scripts/ingest/gate.ts)',
      '앱이 등급 미계산 신규 제품을 노출하거나 서빙 경로가 사전계산 테이블을 덮어쓰는 위험을, SQLite 읽기전용 연결 + 배치 단일 라이터 + 단일 트랜잭션 원자적 스왑으로 차단 (db/client.ts, persist.ts)',
      '영양값 미측정을 0으로 대체하면 등급이 부당히 좋아지는 문제를, 필수 감점성분 결측 시 0 대입 대신 등급 불가로 판정 (lib/grading/index.ts)',
      'Docker 배포에서 better-sqlite3 네이티브 의존이 Next standalone 번들에서 누락되던 실제 장애를 deref 복사로 해결하고, Tailwind가 lib/를 스캔하지 않아 등급 배지 색이 빠지던 버그는 content 경로 추가와 safelist로 수정 (Dockerfile, tailwind.config.ts)',
    ],
    repo: 'https://github.com/eunkyo3/NutriRank',
  },
  {
    category: 'AI·데이터',
    tier: 'practice',
    title: 'AI 뉴스 기반 종목 추천 시스템',
    description:
      '실시간 뉴스 기사에서 종목을 추출하고 KoBERT 기반 감성 분석으로 투자 유망 종목을 추천하는 시스템입니다. 네이버 뉴스 크롤링, 종목명 추출, 감정 분류, 점수 계산, DART 기업 정보 및 공시 연동까지 하나의 흐름으로 통합한 프로젝트입니다.',
    tech: ['Python', 'Streamlit', 'KoBERT', 'BeautifulSoup', 'DART Open API'],
    problemSolving: [
      '기사 제목에 기업명이 그대로 등장하지 않아(약칭·연관어) 단순 문자열 검색으로 종목이 누락되는 문제를, keyword_extractor의 fallback 키워드 매핑(예: 배터리→LG엔솔·삼성SDI)으로 추출 커버리지 보완',
      'DART API 지연·실패가 대시보드 전체 중단으로 번지는 리스크를, timeout 5초·예외처리·응답 status 검증·실패 시 빈값 반환으로 방어 (dart/dart_api.py)',
      'DART 인증키 하드코딩 유출을, 키를 api_keys.py로 분리하고 .gitignore에 등록해 커밋에서 제외로 사전 차단',
      '매 실행 반복되는 외부 호출의 속도·안정성 문제를, corpCode를 1회 받아 로컬 캐싱하고 KoBERT 모델을 로컬 저장해 오프라인 CPU 추론으로 해결',
    ],
    repo: 'https://github.com/eunkyo3/stock-news-ai',
  },
  {
    category: '백엔드 학습',
    tier: 'practice',
    title: '연락처 관리 앱 (Node.js & Sequelize)',
    description:
      'Sequelize ORM을 사용해 연락처를 관리하는 서버 사이드 애플리케이션입니다. Node.js 환경에서 모델·마이그레이션을 구성하고, RESTful 방식으로 연락처 생성/조회/수정/삭제를 처리하도록 설계했습니다. 추후 로그인 및 세션, 토큰 기반 인증, 암호화 등 보안 기능 확장을 고려한 구조로 구현했습니다.',
    tech: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'EJS'],
    problemSolving: [
      '평문 비밀번호 저장 리스크를 bcrypt 해싱(cost 10)과 compare 검증으로 예방 (controllers/loginController.js)',
      '토큰 탈취(XSS) 리스크를, JWT를 httpOnly 쿠키로 내려 클라이언트 스크립트의 토큰 접근을 차단',
      'HTML form이 PUT/DELETE를 표현하지 못하는 문제를 method-override로 RESTful 하게 해결',
      '스키마 변경을 안전하게, up/down을 갖춘 Sequelize 마이그레이션으로 되돌릴 수 있게 구성',
    ],
    repo: 'https://github.com/eunkyo3/contact-app',
  },
  {
    category: '백엔드 학습',
    tier: 'practice',
    title: '메모 관리 웹 애플리케이션 (Java)',
    description:
      'HTML과 Java 기반으로 구현한 메모 관리 웹 애플리케이션입니다. Gradle을 사용해 빌드 환경을 구성하고, 웹 인터페이스를 통해 메모를 작성·조회할 수 있도록 설계했습니다. 추후 인증, 데이터 영속화, 배포 자동화 등을 추가해 백엔드 역량을 확장할 수 있는 기반 프로젝트입니다.',
    tech: ['Java', 'Spring Boot', 'HTML', 'Gradle'],
    problemSolving: [
      'Controller가 하위 객체를 직접 new해 강한 결합·중복 생성되던 문제를, Controller→Service→Repository 분리와 생성자 주입(DI)으로 Spring IoC가 Bean을 관리하도록 전환',
      '존재하지 않는 메모의 수정·삭제가 조용히 처리되는 리스크를, findById 존재 검증 후 없으면 예외를 던지도록 방어',
      '저장 직후 생성된 PK를 응답에 반영해야 하는 요구를, JdbcTemplate GeneratedKeyHolder(RETURN_GENERATED_KEYS)로 해결',
    ],
    repo: 'https://github.com/eunkyo3/memo',
  },
  {
    category: '앱',
    tier: 'practice',
    title: 'Flutter 앱 모음 포트폴리오',
    description:
      '플러터로 개발한 여러 개의 모바일 앱(번호 뽑기, 영화 박스오피스/검색, 급식 조회·평가, 타이머, 다이어리, 인스타그램 클론 등)을 한 페이지에서 체험할 수 있도록 구성한 포트폴리오 사이트입니다. 각 프로젝트는 상태 관리, 네트워크 통신, UI 구성 등 플러터 기본기를 학습하고 실습하기 위한 목적을 가지고 있습니다.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://eunkyo3.github.io/',
  },
  {
    category: 'AI·비전',
    tier: 'practice',
    title: 'BrainAI – OpenVINO 얼굴·나이·성별·감정 인식',
    description:
      'Intel OpenVINO 툴킷과 Open Model Zoo의 사전 학습 모델을 활용해 얼굴 검출, 나이·성별, 감정을 인식하는 프로젝트입니다. 정지 이미지에 대해 얼굴/나이/성별/감정을 분석하는 Jupyter Notebook과, 웹캠으로 실시간 얼굴을 검출하고 나이·성별을 추론하는 파이썬 스크립트(webcam_age_gender.py)를 제공해, Vision 기반 AI 파이프라인과 모델 배포 과정을 실습할 수 있습니다.',
    tech: ['Python', 'OpenVINO', 'Open Model Zoo', 'OpenCV', 'Jupyter Notebook'],
    problemSolving: [
      '얼굴 크롭 좌표가 프레임을 벗어나면 빈 배열이 모델에 들어가 크래시하는 리스크를, 좌표 클램핑과 무효 박스 skip으로 사전 차단 (webcam_age_gender.py)',
      '성별 확률 경계값에서의 오분류를, female 0.65·male 0.55 비대칭 임계값과 미달 시 unknown 폴백으로 완화',
      '실시간 추론에서 프레임마다 모델을 재로딩하는 지연을, 3개 모델을 루프 진입 전 1회만 compile해 재사용하고 FP16으로 CPU 부하 절감',
    ],
    repo: 'https://github.com/eunkyo3/face-recognition',
  },
  {
    category: 'AI·생성',
    tier: 'practice',
    title: 'AI Video Studio – 실사 스타일 영상 생성',
    description:
      'RTX 3060 Ti 로컬 환경에서 실사(Photorealistic) 스타일의 동영상을 생성하기 위해 최적화된 올인원 솔루션입니다. Streamlit 기반의 GUI를 제공하며, AnimateDiff(생성), Motion LoRA(카메라 무빙), RIFE(보간), Real-ESRGAN(업스케일링) 기술이 파이프라인으로 연결되어 있습니다. 텍스트 프롬프트 입력부터 고화질 영상 파일 생성까지의 전 과정을 자동화하여, VRAM 8GB 한계를 극복하기 위한 CPU Offload 최적화를 적용했습니다.',
    tech: ['Python', 'Streamlit', 'Diffusers', 'AnimateDiff', 'Motion LoRA', 'RIFE', 'Real-ESRGAN', 'FFmpeg', 'PyTorch'],
    problemSolving: [
      '8GB VRAM에서 AnimateDiff 영상 생성 시 OOM 리스크를, model CPU offload와 float16 적용으로 한계 내 구동 (logic.py)',
      '512x768 VAE 디코딩 OOM으로 얼굴이 깨지는 문제를, VAE tiling 타일 디코딩으로 방지 (master_video.py)',
      '후처리 VRAM 추가 소모를, RIFE·Real-ESRGAN을 ncnn-vulkan 바이너리로 분리(subprocess)하고 생성 직후 파이프라인 해제·캐시 비움으로 단계 간 OOM 방지',
      '외부 실행파일·모델 누락으로 도중 실패하는 리스크를, 실행 전 check_tools로 선검증하고 실패 시 즉시 중단해 장시간 연산 낭비 예방 (utils.py)',
    ],
    repo: 'https://github.com/eunkyo3/gen-ai-video',
  },
  {
    category: '자동화',
    tier: 'practice',
    title: '학교 급식 정보 카카오톡 자동 전송 시스템',
    description:
      '교육부 NEIS(Open API)에서 학교 급식 정보를 조회하여 카카오톡 나에게 메시지로 매일 아침 자동 전송하는 파이썬 스크립트입니다. NEIS API 연동으로 급식 메뉴를 가져오고, 카카오톡 OAuth 인증을 통해 액세스 토큰을 관리하며, schedule 라이브러리를 활용해 매일 08:30에 자동으로 급식 정보를 전송합니다. 환경변수를 통한 API 키 관리와 토큰 자동 갱신 기능을 포함하고 있습니다.',
    tech: ['Python', 'NEIS API', '카카오톡 API', 'OAuth', 'schedule', 'requests'],
    problemSolving: [
      '카카오 access token이 약 6시간마다 만료돼 자동 전송이 끊기는 문제를, 매 실행 refresh_token으로 재발급·저장해 무인 장기 실행에서도 인증 만료 없이 전송 (kakao.py)',
      'API 키 하드코딩 노출을, 환경변수 로드와 미설정 시 즉시 실패(ValueError) 가드로 전환해 유출 방지·설정 누락 조기 검출',
      'NEIS 급식 원시 문자열의 br 태그·알레르기 괄호·특수문자를 정제하고 날짜 포맷을 변환해 가독성 있는 메시지로 가공 (api.py)',
    ],
    repo: 'https://github.com/eunkyo3/python_meals_to_kakao',
  },
  {
    category: '백엔드 아키텍처',
    tier: 'featured',
    title: 'Synapse Commerce – 하이브리드 커머스 검색·재고 관리 플랫폼',
    description:
      'NestJS 기반 CQRS·이벤트 드리븐 아키텍처로 설계된 커머스 검색·재고 관리 플랫폼입니다. PostgreSQL을 쓰기 DB, Elasticsearch를 읽기 DB로 분리해 상품 검색 성능을 최적화하고, Redis를 캐시·레이트 리미팅·세션 스토어로 활용해 고가용성을 목표로 합니다.',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Elasticsearch', 'Redis', 'CQRS', 'Docker'],
    problemSolving: [
      '읽기/쓰기 정합성을, CQRS로 PostgreSQL(쓰기)·Elasticsearch(읽기)를 분리하고 트랜잭션 커밋 이후에만 이벤트를 발행해 롤백된 쓰기가 검색 인덱스에 반영되는 오류 방지 (create-product.handler.ts)',
      '재고 동시 수정의 Lost Update·음수 재고를, 낙관적 락(VersionColumn)·DB 체크 제약(stock>=0)·재고 부족 가드로 3중 방어 (base.entity.ts, product.entity.ts)',
      '캐시 무효화 시 Redis KEYS 블로킹 리스크를 SCAN 커서 방식으로 회피하고, 연결 실패 시 지수 백오프로 캐시 장애를 서비스 전체 장애로부터 격리 (redis.module.ts)',
      'API 남용·DDoS를, 다층 레이트리밋(초10/분100/시1000) 전역 가드와 Helmet·화이트리스트 ValidationPipe로 방어 (app.module.ts, main.ts)',
    ],
    repo: 'https://github.com/eunkyo3/Synapse-Commerce',
  },
  {
    category: '백엔드·풀스택',
    tier: 'featured',
    title: 'On-Quest – 게임형 온보딩 플랫폼',
    description:
      '신입 사원의 조직 적응을 돕기 위해 퀘스트 형태의 과제를 부여하고, 사수(관리자)가 증빙을 검토하며 n8n을 통해 Slack으로 실시간 알림을 보내는 MVP입니다. companyCode 기반 멀티 테넌트와 admin/employee 역할 분리, 퀘스트 v2 상태 흐름(대기→착수→검토 대기→완료/반려), PostgreSQL bytea 증빙 저장, HMAC 서명 웹훅·JWT refresh·마감 Cron 알림 등 백엔드·자동화·프론트를 Docker Compose로 일괄 구성했습니다.',
    tech: [
      'React',
      'Vite',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'n8n',
      'Slack API',
      'Docker',
      'JWT',
    ],
    problemSolving: [
      '멀티테넌트에서 타 회사 데이터 접근을, 서비스 전 구간 companyCode 강제(buildListWhere·assertQuestAccess)와 회사 스코프 유니크 제약으로 DB 레벨까지 격리 (quest.service.ts, schema.prisma)',
      'n8n 웹훅 위·변조를 HMAC-SHA256과 타임스탬프로 방지하고, JSON.stringify 키 순서 차이로 서명이 깨지던 문제를 stableStringify 정규 직렬화기로 해결 (automation/n8n.service.ts)',
      '로그아웃 후 토큰 재사용을, 사용자별 tokenVersion으로 무효화해 매 요청 DB 최신 값과 대조로 불일치 토큰을 즉시 폐기 (jwt.strategy.ts)',
      '동시 요청 시 퀘스트 상태 오전이(TOCTOU)를, updateMany 조건부 원자 갱신으로 기대 상태 행만 선점하고 0건이면 409를 반환해 방지 (applyStatusTransition)',
    ],
    repo: 'https://github.com/eunkyo3/on-quest',
  },
  {
    category: '풀스택 제품',
    tier: 'featured',
    title: 'MediScan – 시니어 친화형 알약 인식 서비스',
    description:
      '카메라로 촬영한 알약을 YOLOv8·OCR로 인식해 약 정보를 조회하는 시니어(60~80대) 친화 모바일 서비스입니다. 온디바이스 추론·큰 글씨·음성 안내(TTS)를 갖춘 Flutter 앱, YOLOv8 Nano 알약 탐지 모델 학습·TFLite 경량화, 식약처 공공데이터를 동기화해 문자·모양·색상으로 알약을 식별하는 Spring Boot API까지 앱·AI·백엔드 전 계층을 직접 설계·구현했습니다.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'YOLOv8', 'TFLite', 'OCR', 'Spring Boot', 'PostgreSQL', 'OpenFeign', 'PyTorch'],
    problemSolving: [
      '[앱] 시니어 사용성 저하를 Silver Care 디자인(큰 글씨·1.2배 배율·최소 56px 터치·ko-KR TTS·햅틱)으로 해결 (app_theme.dart)',
      '[앱] 추론 시 UI 멈춤·프라이버시를, YOLOv8n TFLite를 별도 아이솔레이트에서 온디바이스 실행하고 신뢰도 임계·NMS를 직접 구현 (yolo_detector.dart)',
      '[AI] 모바일에 대형 모델이 부적합한 문제를, YOLOv8 Nano 파인튜닝과 TFLite 경량화 파이프라인, CUDA·CPU 자동 폴백으로 해결 (train.py)',
      '[서버] 매 검색마다 외부 API를 호출해 외부 장애가 전파되는 리스크를, 기동 시 로컬 DB 선동기화 후 로컬만 조회하도록 경로 분리 (PillDataSyncService.java)',
      '[서버] 공공데이터 items가 객체·배열로 오는 비일관 스키마 역직렬화 오류를 커스텀 Deserializer로 방어 (PillItemsDeserializer.java)',
    ],
    links: [
      { label: '앱 (Flutter)', href: 'https://github.com/eunkyo3/medi-scan-client' },
      { label: 'AI 모델 (YOLOv8)', href: 'https://github.com/eunkyo3/medi-scan-ai-model-training-YOLOv8' },
      { label: '서버 (Spring Boot)', href: 'https://github.com/eunkyo3/medi-scan-server' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Client Side',
    highlight: false,
    rows: [
      { label: 'Web', items: ['React', 'Vue', 'JavaScript'] },
      { label: 'Mobile', items: ['Flutter', 'Dart'] },
    ],
  },
  {
    title: 'Server Side',
    highlight: true,
    rows: [
      { label: 'Core', items: ['Java', 'Python', 'Spring(Boot)', 'Node.js'] },
      { label: 'Key Competency', items: ['RESTful API 설계', '시큐어 코딩'] },
    ],
  },
  {
    title: 'Data Layer',
    highlight: false,
    rows: [
      { label: 'Database', items: ['MySQL', 'PostgreSQL', 'Oracle'] },
      { label: 'Cache & BaaS', items: ['Redis', 'Firebase'] },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    highlight: false,
    rows: [
      { label: 'Deployment', items: ['AWS (Lightsail, S3, EC2, VPC)', 'Vercel'] },
      { label: 'Operations', items: ['Docker', 'Kubernetes', 'Linux'] },
    ],
  },
  {
    title: 'Etc',
    highlight: false,
    rows: [{ label: '', items: ['Git', 'Gradle', '이슈 트래킹', '리버스 엔지니어링'] }],
  },
]


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


