import type { WikiCategory } from "./wiki-data";

export const newCategories: WikiCategory[] = [
  {
    id: "design-trends",
    title: "디자인 요소",
    description: "트렌디한 UI/UX 디자인 요소 적용 프롬프트",
    icon: "✨",
    prompts: [
      {
        id: "bento-grid",
        title: "Bento Grid 레이아웃",
        prompt: `Bento Grid 스타일의 대시보드를 만들어줘.
- 다양한 크기의 카드 조합 (1x1, 2x1, 2x2)
- 부드러운 그림자와 둥근 모서리
- 호버시 살짝 떠오르는 효과
- 각 카드에 아이콘 + 숫자 + 작은 차트
- 모바일에서는 단일 컬럼으로`,
        explanation: `**왜 Bento Grid인가?**

Apple이 시작해서 2024-2025년 가장 핫한 레이아웃 트렌드입니다.

- **다양한 크기 조합**: 정보의 중요도를 시각적으로 표현
- **둥근 모서리**: 친근하고 모던한 느낌
- **호버 효과**: 인터랙티브한 경험
- **아이콘 + 숫자 + 차트**: 한눈에 정보 파악

**왜 이렇게 구체적으로 쓰나?**
"Bento Grid 만들어줘"만 하면 기본적인 그리드만 나옴. 효과와 반응형까지 명시해야 완성도 높은 결과.`,
        tips: [
          "CSS Grid의 grid-template-areas 활용",
          "framer-motion으로 애니메이션 추가",
          "드래그앤드롭으로 카드 순서 변경 가능하게",
        ],
        tags: ["디자인", "Bento Grid", "트렌드", "대시보드"],
      },
      {
        id: "glassmorphism",
        title: "Glassmorphism 카드",
        prompt: `Glassmorphism 스타일의 카드 컴포넌트를 만들어줘.
- 반투명 배경 (backdrop-blur)
- 미세한 테두리 (border: 1px solid rgba)
- 그라데이션 배경 위에서 잘 보이게
- 다크모드/라이트모드 모두 지원
- 내부 텍스트 가독성 확보`,
        explanation: `**왜 Glassmorphism인가?**

iOS 이후 계속 인기 있는 스타일로, **고급스러운 느낌**을 줍니다.

- **backdrop-blur**: 뒤의 내용이 흐릿하게 비침
- **미세한 테두리**: 카드 경계를 명확히
- **그라데이션 배경**: glassmorphism은 배경이 있어야 효과가 남
- **다크/라이트 모두 지원**: 투명도 조절 필요

**가독성 주의**:
반투명이라 텍스트가 안 보일 수 있음. 반드시 명시해야 함.`,
        tips: [
          "성능: backdrop-filter는 무거울 수 있음",
          "fallback: 지원 안하는 브라우저용 대체 스타일",
          "그라데이션 배경 색상도 같이 제안받기",
        ],
        tags: ["디자인", "Glassmorphism", "트렌드", "카드"],
      },
      {
        id: "micro-interactions",
        title: "Micro Interactions",
        prompt: `버튼과 카드에 micro interaction을 추가해줘.
- 버튼: 클릭시 살짝 눌리는 효과 (scale 0.95)
- 버튼: 호버시 배경색 그라데이션 이동
- 카드: 호버시 그림자 확대 + 살짝 위로
- 체크박스: 체크시 바운스 애니메이션
- 로딩: skeleton shimmer 효과
framer-motion 사용.`,
        explanation: `**왜 Micro Interaction인가?**

작은 움직임이 **UX 품질을 크게 향상**시킵니다.

- **클릭 피드백**: 사용자가 "눌렸다"고 느낌
- **호버 효과**: 클릭 가능함을 암시
- **바운스 애니메이션**: 재미 요소, 완료 느낌
- **Skeleton shimmer**: 로딩 중이라는 시각적 피드백

**framer-motion 명시 이유**:
CSS만으로도 가능하지만, framer-motion이 더 부드럽고 제어가 쉬움.`,
        tips: [
          "과하면 역효과, 미묘하게 적용",
          "reduced-motion 설정 존중 (접근성)",
          "일관된 duration과 easing 사용",
        ],
        tags: ["디자인", "애니메이션", "UX", "framer-motion"],
      },
      {
        id: "dark-mode-design",
        title: "다크모드 최적 디자인",
        prompt: `다크모드에 최적화된 색상 시스템을 설계해줘.
- 순수 검정(#000) 대신 다크 그레이 계열
- 텍스트는 순수 흰색 대신 약간 어두운 흰색
- 액센트 색상은 밝기 조절
- 그림자 대신 subtle한 테두리
- 계층 구분을 위한 표면 색상 단계
CSS 변수로 관리.`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

다크모드는 **단순히 색 반전이 아닙니다**.

- **순수 검정 피하기**: 눈의 피로도 증가, 콘트라스트 너무 강함
- **약간 어두운 흰색**: 가독성은 유지하면서 부드러움
- **그림자 → 테두리**: 다크모드에서 그림자는 안 보임
- **표면 색상 단계**: 카드, 모달 등 계층 구분

**CSS 변수 명시 이유**:
테마 전환시 변수만 바꾸면 됨. 하드코딩하면 유지보수 지옥.`,
        tips: [
          "Material Design 3 다크테마 가이드 참고",
          "시스템 설정 자동 감지 (prefers-color-scheme)",
          "이미지/아이콘도 다크모드용 버전 필요할 수 있음",
        ],
        tags: ["디자인", "다크모드", "색상", "CSS변수"],
      },
      {
        id: "scroll-animations",
        title: "스크롤 기반 애니메이션",
        prompt: `스크롤에 따라 나타나는 애니메이션을 구현해줘.
- 섹션이 뷰포트에 들어오면 fade-in + slide-up
- 스크롤 진행률에 따른 progress bar
- 패럴랙스 효과 (배경 느리게)
- Intersection Observer 사용
- 성능 최적화 (will-change, transform)`,
        explanation: `**왜 스크롤 애니메이션인가?**

긴 페이지에서 **사용자 주목도**를 높입니다.

- **fade-in + slide-up**: 가장 클래식하고 효과적인 조합
- **progress bar**: 읽기 진행률, 완독 유도
- **패럴랙스**: 깊이감, 시각적 흥미
- **Intersection Observer**: scroll 이벤트보다 성능 좋음

**성능 최적화 명시 이유**:
애니메이션 잘못하면 스크롤이 버벅임. will-change, transform 필수.`,
        tips: [
          "framer-motion의 useScroll, useInView 활용",
          "throttle/debounce로 이벤트 최적화",
          "모바일에서는 간소화 (배터리, 성능)",
        ],
        tags: ["디자인", "애니메이션", "스크롤", "성능"],
      },
    ],
  },
  {
    id: "data-scraping",
    title: "데이터 스크래핑",
    description: "웹 크롤링 및 데이터 수집 프롬프트",
    icon: "🕷️",
    prompts: [
      {
        id: "puppeteer-basic",
        title: "Puppeteer 기본 스크래핑",
        prompt: `Puppeteer로 웹 스크래핑 함수를 만들어줘.
대상: 상품 목록 페이지
수집 데이터:
- 상품명
- 가격
- 이미지 URL
- 상품 링크
기능:
- 무한 스크롤 처리
- 로딩 대기 (waitForSelector)
- 에러시 재시도 (3회)
- 결과는 JSON으로 저장`,
        explanation: `**왜 Puppeteer인가?**

Puppeteer는 **실제 브라우저를 제어**해서 JavaScript로 렌더링되는 페이지도 스크래핑 가능합니다.

- **수집 데이터 명시**: 어떤 정보를 추출할지 명확히
- **무한 스크롤 처리**: 요즘 많은 사이트가 이 방식
- **waitForSelector**: 동적 로딩 대기
- **재시도 로직**: 네트워크 에러, 타임아웃 대응

**에러 핸들링이 핵심**:
스크래핑은 실패하기 쉬움. 재시도 로직 없으면 중간에 멈춤.`,
        tips: [
          "headless: 'new'로 최신 모드 사용",
          "userAgent 설정으로 차단 우회",
          "rate limiting 적용 (사이트 부하 방지)",
          "robots.txt 확인 (법적 이슈)",
        ],
        badExample: {
          prompt: "웹사이트 스크래핑해줘",
          reason: "어떤 사이트? 어떤 데이터? 동적 페이지? 너무 모호함",
        },
        tags: ["스크래핑", "Puppeteer", "크롤링", "자동화"],
      },
      {
        id: "cheerio-static",
        title: "Cheerio 정적 페이지 파싱",
        prompt: `Cheerio로 정적 HTML 파싱 함수를 만들어줘.
대상: 뉴스 기사 페이지
수집 데이터:
- 제목 (h1)
- 본문 (article 내 p 태그들)
- 작성일
- 작성자
- 이미지 URL들
기능:
- HTML 정리 (불필요한 태그 제거)
- 텍스트 정규화 (공백, 줄바꿈)
- 날짜 파싱 (Date 객체로)`,
        explanation: `**왜 Cheerio인가?**

Cheerio는 **서버사이드 jQuery**로, 정적 HTML 파싱에 최적화되어 있습니다.

- **Puppeteer보다 빠름**: 브라우저 실행 불필요
- **셀렉터 명시**: CSS 셀렉터로 정확한 요소 지정
- **텍스트 정규화**: 스크래핑한 텍스트는 지저분함
- **날짜 파싱**: 문자열 → Date 객체 변환

**언제 Cheerio vs Puppeteer?**
- 정적 HTML, 서버 렌더링 → Cheerio (빠름)
- JavaScript 렌더링, SPA → Puppeteer (느리지만 확실)`,
        tips: [
          "axios로 HTML 먼저 가져오기",
          "인코딩 문제 주의 (EUC-KR 등)",
          "셀렉터는 사이트 변경에 취약, 유지보수 고려",
        ],
        tags: ["스크래핑", "Cheerio", "파싱", "정적페이지"],
      },
      {
        id: "api-scraping",
        title: "API 역분석 스크래핑",
        prompt: `웹사이트의 내부 API를 역분석해서 데이터를 수집해줘.
방법:
1. 브라우저 DevTools Network 탭 분석
2. XHR/Fetch 요청 중 데이터 반환하는 API 찾기
3. 해당 API 직접 호출하는 함수 작성
고려사항:
- 인증 토큰 처리 (헤더)
- 페이지네이션 파라미터
- rate limiting 준수
- 응답 타입 정의 (TypeScript)`,
        explanation: `**왜 API 역분석인가?**

HTML 파싱보다 **훨씬 깔끔하고 빠릅니다**.

- **구조화된 데이터**: JSON으로 바로 받음
- **안정적**: HTML 구조 변경에 영향 없음
- **빠름**: 필요한 데이터만 전송

**주의사항**:
- API가 변경될 수 있음
- 인증이 필요한 경우 토큰 관리
- 너무 빠르게 요청하면 차단

**이 방식이 가능한 경우**:
대부분의 SPA/모던 웹사이트는 내부 API를 사용함.`,
        tips: [
          "브라우저 DevTools에서 요청 복사 → cURL/fetch",
          "Postman으로 API 먼저 테스트",
          "응답 스키마 변경 감지 로직 추가",
        ],
        tags: ["스크래핑", "API", "역분석", "효율적"],
      },
      {
        id: "scheduled-scraping",
        title: "정기 스크래핑 시스템",
        prompt: `정기적으로 데이터를 수집하는 시스템을 만들어줘.
구성:
- 스케줄러: node-cron으로 매일 오전 9시 실행
- 데이터 저장: Supabase에 저장
- 중복 체크: URL 기준으로 이미 수집한 데이터 스킵
- 변경 감지: 가격 등 변경시 알림
- 에러 처리: 실패시 Slack 알림
- 로깅: 수집 통계 기록`,
        explanation: `**왜 이렇게 구성하나?**

일회성 스크래핑이 아닌 **지속적인 데이터 수집**이 목표입니다.

- **스케줄러**: 자동 실행. 수동 트리거 불필요
- **중복 체크**: 같은 데이터 반복 저장 방지
- **변경 감지**: 가격 추적, 재고 모니터링 등
- **에러 알림**: 사이트 구조 변경 등 문제 즉시 인지
- **로깅**: 수집량, 실패율 등 모니터링

**Supabase 선택 이유**:
무료 티어 충분, SQL로 분석 가능, 실시간 구독 가능.`,
        tips: [
          "Vercel Cron 또는 GitHub Actions로도 스케줄 가능",
          "프록시 로테이션으로 IP 차단 우회",
          "수집 속도 조절로 서버 부하 배려",
        ],
        tags: ["스크래핑", "자동화", "스케줄링", "모니터링"],
      },
      {
        id: "anti-blocking",
        title: "스크래핑 차단 우회",
        prompt: `스크래핑 차단을 우회하는 기법들을 적용해줘.
기법:
- User-Agent 랜덤 로테이션
- 요청 간 랜덤 딜레이 (2-5초)
- 프록시 서버 사용 (IP 로테이션)
- 쿠키/세션 관리
- Headless 브라우저 감지 우회
  - navigator.webdriver 숨기기
  - 플러그인 목록 조작
주의: 합법적 용도로만 사용`,
        explanation: `**왜 차단 우회가 필요한가?**

많은 사이트가 **봇 감지 시스템**을 운영합니다.

- **User-Agent 로테이션**: 같은 UA 반복 요청 = 봇
- **랜덤 딜레이**: 일정한 간격 = 봇
- **IP 로테이션**: 한 IP에서 대량 요청 = 차단
- **Headless 감지 우회**: Puppeteer 기본 설정은 감지됨

**법적 주의**:
- robots.txt 확인
- 서비스 약관 확인
- 과도한 요청으로 서비스 방해 금지`,
        tips: [
          "puppeteer-extra-plugin-stealth 사용",
          "Bright Data, Oxylabs 등 프록시 서비스",
          "캡차 우회는 법적 리스크 있음",
        ],
        tags: ["스크래핑", "차단우회", "프록시", "보안"],
      },
    ],
  },
  {
    id: "reddit-api",
    title: "Reddit API 연동",
    description: "Reddit API를 활용한 다양한 기능 프롬프트",
    icon: "🤖",
    prompts: [
      {
        id: "reddit-auth",
        title: "Reddit OAuth 인증",
        prompt: `Reddit API OAuth 인증을 구현해줘.
- Script 타입 앱 (개인용)
- Access Token 발급
- Token 자동 갱신
- 환경 변수로 credentials 관리
snoowrap 라이브러리 사용.`,
        explanation: `**왜 OAuth 인증이 필요한가?**

Reddit API는 **인증 없이 사용 불가**합니다.

- **Script 타입**: 개인 프로젝트용, 설정 간단
- **Access Token**: 모든 API 요청에 필요
- **자동 갱신**: 토큰은 1시간마다 만료
- **환경 변수**: 시크릿 노출 방지

**snoowrap 선택 이유**:
Reddit API를 Promise 기반으로 쉽게 사용. 토큰 갱신도 자동 처리.`,
        tips: [
          "reddit.com/prefs/apps에서 앱 생성",
          "rate limit: 분당 60회 요청",
          "User-Agent 필수 (앱 이름, 버전, 사용자명)",
        ],
        tags: ["Reddit", "OAuth", "인증", "API"],
      },
      {
        id: "reddit-trending",
        title: "트렌딩 포스트 수집",
        prompt: `Reddit에서 트렌딩 포스트를 수집하는 기능을 만들어줘.
대상:
- 특정 서브레딧 (예: r/programming, r/webdev)
- Hot, Top, Rising 정렬
수집 데이터:
- 제목, 내용, 작성자
- 업보트 수, 댓글 수
- 작성 시간
- 링크/이미지 URL
기능:
- 여러 서브레딧 동시 수집
- 시간 필터 (오늘, 이번 주)
- 결과 정렬 및 중복 제거`,
        explanation: `**왜 트렌딩 수집인가?**

Reddit은 **특정 분야의 트렌드**를 파악하기 좋은 소스입니다.

- **Hot/Top/Rising**: 각각 다른 트렌드 포착
- **여러 서브레딧**: 한 번에 여러 커뮤니티 모니터링
- **시간 필터**: 최신 트렌드 vs 역대 인기글
- **업보트/댓글 수**: 관심도 지표

**활용 사례**:
- 기술 트렌드 모니터링
- 콘텐츠 아이디어 발굴
- 시장 반응 조사`,
        tips: [
          "after 파라미터로 페이지네이션",
          "NSFW 필터링 옵션 추가",
          "rate limit 고려해서 배치 처리",
        ],
        tags: ["Reddit", "트렌딩", "데이터수집", "모니터링"],
      },
      {
        id: "reddit-sentiment",
        title: "Reddit 감성 분석",
        prompt: `Reddit 댓글의 감성을 분석하는 기능을 만들어줘.
프로세스:
1. 특정 키워드 관련 포스트 검색
2. 각 포스트의 상위 댓글 수집
3. OpenAI API로 감성 분석 (긍정/부정/중립)
4. 전체 감성 비율 계산
5. 주요 의견 요약
출력:
- 감성 점수 (-1 ~ 1)
- 긍정/부정 키워드
- 대표 의견 3개`,
        explanation: `**왜 Reddit 감성 분석인가?**

Reddit은 **솔직한 의견**이 많아 감성 분석에 적합합니다.

- **키워드 검색**: 특정 제품, 브랜드, 주제
- **상위 댓글**: 커뮤니티가 동의한 의견
- **AI 감성 분석**: 대량 텍스트 자동 처리
- **감성 점수**: 정량화된 지표

**활용 사례**:
- 브랜드 평판 모니터링
- 신제품 반응 조사
- 투자 심리 분석 (r/wallstreetbets)`,
        tips: [
          "GPT-4보다 GPT-3.5가 비용 효율적",
          "배치 처리로 API 호출 최소화",
          "영어 외 언어는 번역 후 분석",
        ],
        tags: ["Reddit", "감성분석", "AI", "NLP"],
      },
      {
        id: "reddit-alert",
        title: "Reddit 키워드 알림",
        prompt: `Reddit에서 특정 키워드가 언급되면 알림을 보내는 봇을 만들어줘.
모니터링:
- 지정한 서브레딧들
- 새 포스트 + 새 댓글
- 키워드 목록 (정규식 지원)
알림:
- Slack 웹훅으로 발송
- 포스트 제목, 링크, 매칭된 키워드 포함
- 중복 알림 방지 (이미 알린 포스트 기록)
실행:
- 5분마다 체크
- Vercel Cron 또는 서버리스`,
        explanation: `**왜 키워드 알림인가?**

**실시간 모니터링**으로 중요한 언급을 놓치지 않습니다.

- **서브레딧 지정**: 관련 커뮤니티만 모니터링
- **정규식 지원**: 유연한 키워드 매칭
- **Slack 알림**: 팀과 공유, 즉시 대응
- **중복 방지**: 같은 포스트 반복 알림 차단

**활용 사례**:
- 브랜드/회사 언급 모니터링
- 경쟁사 동향 파악
- 고객 불만 즉시 대응`,
        tips: [
          "new 정렬로 최신 포스트 우선",
          "rate limit 때문에 너무 자주 체크 불가",
          "키워드 화이트리스트/블랙리스트 관리",
        ],
        tags: ["Reddit", "알림", "모니터링", "자동화"],
      },
      {
        id: "reddit-content-curation",
        title: "콘텐츠 큐레이션 봇",
        prompt: `Reddit에서 양질의 콘텐츠를 큐레이션하는 시스템을 만들어줘.
수집 기준:
- 업보트 100개 이상
- 댓글 10개 이상
- 특정 flair 태그
- 24시간 이내 작성
처리:
- AI로 콘텐츠 요약 (3줄)
- 카테고리 자동 분류
- 관련 이미지 추출
출력:
- 매일 뉴스레터 형식으로 정리
- Notion 페이지에 자동 업데이트
- RSS 피드 생성`,
        explanation: `**왜 콘텐츠 큐레이션인가?**

Reddit의 방대한 콘텐츠 중 **가치 있는 것만** 선별합니다.

- **업보트/댓글 기준**: 커뮤니티 검증된 콘텐츠
- **flair 필터**: 특정 유형만 (예: [Tutorial], [Resource])
- **AI 요약**: 빠른 파악 가능
- **자동 분류**: 체계적 정리

**출력 다양화 이유**:
- 뉴스레터: 이메일 구독자용
- Notion: 팀 내부 공유
- RSS: 자동화 연동`,
        tips: [
          "Resend로 뉴스레터 발송",
          "Notion API로 페이지 자동 생성",
          "이미지는 저작권 주의",
        ],
        tags: ["Reddit", "큐레이션", "자동화", "뉴스레터"],
      },
    ],
  },
];
