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
    id: "google-api",
    title: "Google API 연동",
    description: "Google Maps, Sheets, Calendar 등 Google API 연동 프롬프트",
    icon: "🗺️",
    prompts: [
      {
        id: "google-maps-basic",
        title: "Google Maps 기본 연동",
        prompt: `Google Maps를 Next.js에 연동해줘.
- 지도 표시 컴포넌트
- 마커 추가 (여러 개)
- 마커 클릭시 정보창 표시
- 현재 위치 표시
- 환경 변수로 API 키 관리`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

Google Maps 연동의 **기본 기능**을 빠르게 구현합니다.

- **지도 표시**: 가장 기본적인 지도 렌더링
- **마커 추가**: 위치 표시의 핵심
- **정보창**: 마커에 대한 상세 정보 표시
- **현재 위치**: Geolocation API 활용
- **API 키 관리**: 노출 방지 필수

**라이브러리 추천**:
@react-google-maps/api가 React에 최적화되어 있음.`,
        tips: [
          "Google Cloud Console에서 Maps JavaScript API 활성화",
          "API 키에 도메인 제한 설정 (보안)",
          "로딩 중 스켈레톤 UI 추가하면 UX 향상",
        ],
        tags: ["Google Maps", "지도", "위치", "API"],
        level: "beginner",
      },
      {
        id: "google-maps-places",
        title: "Google Places 자동완성",
        prompt: `Google Places API로 주소 자동완성을 구현해줘.
- 검색창에 타이핑하면 주소 후보 표시
- 후보 선택시 좌표 반환
- 한국 주소 우선
- 디바운싱 적용 (300ms)
- 선택한 위치로 지도 이동`,
        explanation: `**왜 Places 자동완성인가?**

사용자가 **정확한 주소를 쉽게 입력**할 수 있습니다.

- **자동완성**: 타이핑만으로 주소 검색
- **좌표 반환**: 지도 표시, 거리 계산에 필요
- **한국 주소 우선**: componentRestrictions 설정
- **디바운싱**: API 호출 최소화 (비용 절약)

**활용 사례**:
- 배달 주소 입력
- 매장 찾기
- 부동산 검색`,
        tips: [
          "Places API는 별도 활성화 필요",
          "세션 토큰으로 비용 최적화",
          "모바일에서 터치 UX 최적화",
        ],
        tags: ["Google Maps", "Places", "자동완성", "주소"],
        level: "beginner",
      },
      {
        id: "google-maps-directions",
        title: "Google 길찾기/경로 표시",
        prompt: `Google Directions API로 경로를 표시해줘.
기능:
- 출발지/도착지 입력
- 경로 폴리라인으로 지도에 표시
- 예상 소요 시간, 거리 표시
- 대중교통/자동차/도보 모드 선택
- 경유지 추가 기능
- 드래그로 경로 수정`,
        explanation: `**왜 Directions API인가?**

**이동 경로와 시간**을 시각적으로 보여줍니다.

- **폴리라인 표시**: 경로를 지도 위에 선으로
- **소요 시간/거리**: 실시간 교통 정보 반영
- **이동 수단 선택**: 사용자 상황에 맞게
- **경유지**: 여러 곳을 거치는 경로
- **드래그 수정**: 원하는 길로 조정

**비용 주의**:
Directions API는 호출당 과금. 클라이언트에서 무제한 호출 주의.`,
        tips: [
          "서버사이드에서 호출하고 결과 캐싱 권장",
          "alternatives: true로 대안 경로 표시",
          "waypoints로 경유지 최적화 가능",
        ],
        tags: ["Google Maps", "Directions", "길찾기", "경로"],
        level: "advanced",
      },
      {
        id: "google-maps-heatmap",
        title: "Google Maps 히트맵",
        prompt: `Google Maps에 히트맵을 표시해줘.
- 위치 데이터 배열을 받아서 히트맵 생성
- 가중치(weight) 적용 가능
- 색상 그라데이션 커스텀
- 줌 레벨에 따른 radius 조정
- 토글로 히트맵 on/off`,
        explanation: `**왜 히트맵인가?**

**데이터 밀집도**를 직관적으로 시각화합니다.

- **가중치**: 단순 위치 외에 값(매출, 인구 등) 반영
- **색상 커스텀**: 브랜드 색상 또는 의미에 맞게
- **줌 반응형**: 확대/축소에 따른 표현 조정
- **토글**: 다른 레이어와 비교 가능

**활용 사례**:
- 매출 분포 분석
- 고객 밀집 지역 파악
- 범죄/사고 발생 지도`,
        tips: [
          "visualization 라이브러리 추가 로드 필요",
          "대량 데이터는 클러스터링과 병행",
          "모바일에서는 터치 성능 최적화",
        ],
        tags: ["Google Maps", "히트맵", "시각화", "분석"],
        level: "advanced",
      },
      {
        id: "google-sheets-read",
        title: "Google Sheets 읽기/쓰기",
        prompt: `Google Sheets API를 연동해줘.
기능:
- 스프레드시트 데이터 읽기
- 새 행 추가 (폼 제출 데이터)
- 특정 셀 업데이트
- 서비스 계정 인증
- 환경 변수로 credentials 관리

예시: 문의 폼 제출 → Google Sheets에 기록`,
        explanation: `**왜 Google Sheets 연동인가?**

**간단한 데이터베이스** 대용으로 활용할 수 있습니다.

- **읽기**: 설정값, 콘텐츠 관리
- **쓰기**: 폼 데이터, 로그 기록
- **서비스 계정**: 사용자 로그인 없이 서버에서 접근
- **비개발자 접근**: 마케팅팀도 데이터 확인/수정 가능

**활용 사례**:
- 문의/신청 폼 → 시트 기록
- CMS 대용 (콘텐츠 관리)
- 간단한 재고 관리`,
        tips: [
          "서비스 계정 JSON 키는 절대 커밋 금지",
          "시트 공유 설정에 서비스 계정 이메일 추가",
          "API 할당량 주의 (분당 요청 제한)",
        ],
        tags: ["Google Sheets", "스프레드시트", "데이터", "API"],
        level: "beginner",
      },
      {
        id: "google-calendar-sync",
        title: "Google Calendar 연동",
        prompt: `Google Calendar API를 연동해줘.
기능:
- OAuth로 사용자 캘린더 접근
- 일정 목록 조회 (특정 기간)
- 새 일정 생성
- 일정 수정/삭제
- 리마인더 설정

UI:
- 주간/월간 캘린더 뷰
- 일정 클릭시 상세 모달
- 드래그로 일정 이동`,
        explanation: `**왜 Calendar 연동인가?**

**일정 관리 기능**을 직접 구현하지 않고 Google Calendar 활용.

- **OAuth**: 사용자 동의 후 캘린더 접근
- **양방향 동기화**: 앱에서 추가한 일정이 Google Calendar에도 반영
- **리마인더**: 알림 기능 활용
- **공유 캘린더**: 팀 일정 관리

**활용 사례**:
- 예약 시스템
- 프로젝트 일정 관리
- 회의 스케줄링`,
        tips: [
          "calendar.readonly 스코프로 시작 (필요시 확장)",
          "watch API로 변경사항 실시간 감지",
          "시간대(timezone) 처리 주의",
        ],
        tags: ["Google Calendar", "일정", "OAuth", "API"],
        level: "advanced",
      },
      {
        id: "google-oauth-login",
        title: "Google OAuth 로그인",
        prompt: `Google OAuth 로그인을 구현해줘.
- NextAuth.js 사용
- Google 프로바이더 설정
- 프로필 정보 (이름, 이메일, 프로필 사진)
- 세션 관리
- 로그인 버튼 컴포넌트
- 보호된 페이지 미들웨어`,
        explanation: `**왜 Google OAuth인가?**

**가장 많이 사용하는 소셜 로그인**입니다.

- **신뢰도**: 사용자가 익숙하고 신뢰
- **간편함**: 비밀번호 입력 불필요
- **프로필 정보**: 이름, 사진 자동 획득
- **이메일 검증**: Google이 이미 검증한 이메일

**NextAuth.js 선택 이유**:
Next.js와 완벽 호환. 세션 관리 자동화.`,
        tips: [
          "Google Cloud Console에서 OAuth 동의 화면 설정",
          "개발 중에는 테스트 사용자 추가 필요",
          "프로덕션 배포 전 앱 검증 필요 (민감한 스코프 사용시)",
        ],
        tags: ["Google OAuth", "로그인", "인증", "NextAuth"],
        level: "beginner",
      },
      {
        id: "google-drive-upload",
        title: "Google Drive 파일 업로드",
        prompt: `Google Drive API로 파일 업로드 기능을 만들어줘.
기능:
- 파일 업로드 (이미지, 문서)
- 특정 폴더에 저장
- 업로드 진행률 표시
- 공유 링크 생성
- 파일 목록 조회
- 썸네일 미리보기

인증: 서비스 계정 (백엔드) 또는 OAuth (사용자 드라이브)`,
        explanation: `**왜 Google Drive 연동인가?**

**파일 저장소**를 직접 구축하지 않아도 됩니다.

- **용량**: Google 드라이브 용량 활용
- **공유 링크**: 파일 공유 간편
- **썸네일**: 이미지 미리보기 자동 생성
- **검색**: Drive 내 검색 기능 활용

**서비스 계정 vs OAuth**:
- 서비스 계정: 앱 전용 드라이브 (사용자 로그인 불필요)
- OAuth: 사용자 개인 드라이브 접근`,
        tips: [
          "resumable upload로 대용량 파일 처리",
          "MIME 타입 정확히 지정",
          "폴더 ID는 URL에서 확인 가능",
        ],
        tags: ["Google Drive", "파일", "업로드", "저장소"],
        level: "advanced",
      },
      {
        id: "google-translate-api",
        title: "Google Translate 번역",
        prompt: `Google Cloud Translation API를 연동해줘.
기능:
- 텍스트 번역 (한↔영, 기타 언어)
- 언어 자동 감지
- 배치 번역 (여러 텍스트 한번에)
- 번역 결과 캐싱
- API 호출 최소화 (중복 방지)

UI: 번역 입력창 + 결과 표시`,
        explanation: `**왜 Cloud Translation인가?**

**다국어 지원**을 쉽게 구현할 수 있습니다.

- **자동 감지**: 입력 언어 모르는 경우
- **배치 처리**: API 호출 횟수 절약
- **캐싱**: 같은 문장 반복 번역 방지
- **높은 품질**: Google 번역 엔진

**비용 주의**:
월 50만자 무료, 이후 100만자당 $20`,
        tips: [
          "Basic vs Advanced 에디션 선택",
          "glossary로 특정 용어 번역 커스텀",
          "HTML 태그 유지 옵션 활용",
        ],
        tags: ["Google Translate", "번역", "다국어", "API"],
        level: "beginner",
      },
      {
        id: "google-gemini-api",
        title: "Google Gemini AI 연동",
        prompt: `Google Gemini API를 연동해줘.
기능:
- 텍스트 생성 (gemini-pro)
- 이미지 분석 (gemini-pro-vision)
- 스트리밍 응답
- 대화 컨텍스트 유지 (chat)
- 안전 설정 (safety settings)
- 에러 핸들링

UI: ChatGPT 스타일 채팅 인터페이스`,
        explanation: `**왜 Gemini API인가?**

**Google의 최신 AI 모델**을 활용합니다.

- **gemini-pro**: 텍스트 생성, 코드 작성
- **gemini-pro-vision**: 이미지 이해 + 텍스트
- **스트리밍**: 실시간 응답 표시
- **안전 설정**: 부적절한 콘텐츠 필터링

**OpenAI vs Gemini**:
- 가격: Gemini가 더 저렴
- 무료 티어: Gemini 있음
- 이미지 분석: Gemini 기본 지원`,
        tips: [
          "AI Studio에서 무료로 테스트 가능",
          "@google/generative-ai 패키지 사용",
          "system instruction으로 페르소나 설정",
        ],
        tags: ["Google Gemini", "AI", "LLM", "생성형AI"],
        level: "advanced",
      },
    ],
  },
  {
    id: "reference-clone",
    title: "레퍼런스 클론 & 재해석",
    description: "잘 만든 서비스를 분석하고 나만의 버전으로 만드는 프롬프트",
    icon: "🎯",
    prompts: [
      {
        id: "clone-landing-page",
        title: "랜딩페이지 클론 & 커스텀",
        prompt: `[레퍼런스 URL]의 랜딩페이지를 분석하고 클론해줘.

분석할 것:
- 레이아웃 구조 (Hero, Features, CTA 등)
- 색상 팔레트와 타이포그래피
- 애니메이션과 인터랙션
- 반응형 처리 방식

클론 후 커스텀:
- 내 서비스에 맞게 텍스트 교체
- 색상을 [브랜드 색상]으로 변경
- [추가 섹션] 넣어줘`,
        explanation: `**왜 클론부터 시작하나?**

잘 만든 서비스를 분석하면 **왜 그렇게 만들었는지** 이해할 수 있습니다.

- **레이아웃 구조**: 정보 배치의 이유 파악
- **색상 팔레트**: 브랜드 느낌을 어떻게 전달하는지
- **애니메이션**: 어디서 사용자 시선을 끄는지
- **반응형**: 모바일에서 어떤 정보를 우선하는지

**"클론 후 커스텀"이 핵심**:
그대로 베끼는 게 아니라, 배운 것을 내 서비스에 적용.`,
        tips: [
          "스크린샷이나 URL을 첨부하면 더 정확한 분석 가능",
          "특정 섹션만 클론하고 싶다면 명시",
          "저작권 주의: 디자인 참고는 OK, 에셋 무단 사용은 X",
        ],
        tags: ["클론", "랜딩페이지", "레퍼런스", "분석"],
        level: "beginner",
      },
      {
        id: "clone-dashboard",
        title: "대시보드 UI 클론",
        prompt: `[레퍼런스 서비스]의 대시보드 UI를 분석하고 클론해줘.

분석 포인트:
- 사이드바/네비게이션 구조
- 카드/위젯 레이아웃
- 데이터 시각화 방식 (차트, 테이블)
- 필터/검색 UI 패턴

구현:
- Next.js + Tailwind CSS
- shadcn/ui 컴포넌트 활용
- 반응형 (모바일: 하단 탭)
- 더미 데이터로 작동하게`,
        explanation: `**왜 대시보드 클론인가?**

대시보드는 **복잡한 정보를 정리하는 기술**의 집약체입니다.

- **네비게이션**: 많은 기능을 어떻게 구조화하는지
- **카드 레이아웃**: 정보 밀도와 가독성 균형
- **데이터 시각화**: 숫자를 의미있게 보여주는 방법
- **필터/검색**: 대량 데이터 접근 방식

**더미 데이터가 중요한 이유**:
실제 데이터 없이도 UI가 어떻게 작동하는지 확인 가능.`,
        tips: [
          "Notion, Linear, Vercel 대시보드가 좋은 레퍼런스",
          "다크모드 지원 여부도 확인",
          "로딩 상태, 빈 상태 UI도 참고",
        ],
        tags: ["클론", "대시보드", "레퍼런스", "UI"],
      },
      {
        id: "clone-mobile-app",
        title: "모바일 앱 UI 웹으로 구현",
        prompt: `[앱 이름]의 모바일 UI를 웹으로 구현해줘.

참고할 화면:
- 메인 피드
- 상세 페이지
- 프로필/설정

웹 구현 시:
- 모바일 퍼스트 (max-width: 480px 기준)
- 네이티브 느낌 애니메이션
- 하단 탭 네비게이션
- Pull to refresh 제스처
- PWA로 앱처럼 설치 가능하게`,
        explanation: `**왜 앱 UI를 웹으로?**

모바일 앱은 **UX 디자인의 정수**입니다. 제한된 공간에서 최적의 경험을 만들어야 하기 때문.

- **네이티브 느낌**: 웹이지만 앱처럼 부드럽게
- **하단 탭**: 엄지로 쉽게 접근
- **Pull to refresh**: 친숙한 인터랙션
- **PWA**: 홈 화면에 설치하면 앱과 동일

**좋은 레퍼런스 앱**:
인스타그램, 카카오톡, 토스 등 매일 쓰는 앱이 최고의 선생님.`,
        tips: [
          "framer-motion으로 네이티브급 애니메이션",
          "앱 스토어 스크린샷을 레퍼런스로 활용",
          "iOS/Android 디자인 가이드라인 참고",
        ],
        tags: ["클론", "모바일", "PWA", "앱"],
      },
      {
        id: "reverse-engineering",
        title: "서비스 구조 역분석",
        prompt: `[서비스명]의 구조를 역분석해줘.

분석 항목:
1. **기술 스택 추정**
   - 프론트엔드 프레임워크
   - 상태 관리 방식
   - CSS 방법론

2. **데이터 모델 추정**
   - 주요 엔티티
   - 관계 구조
   - API 엔드포인트 패턴

3. **핵심 기능 분해**
   - 메인 기능 플로우
   - 부가 기능 목록
   - 수익 모델 연결점

MVP로 만든다면 어떤 기능부터 구현해야 할지 우선순위도 정해줘.`,
        explanation: `**왜 역분석인가?**

좋은 서비스를 만들려면 **좋은 서비스가 어떻게 만들어졌는지** 알아야 합니다.

- **기술 스택**: Wappalyzer 등으로 확인 가능
- **데이터 모델**: 화면에서 역추적
- **기능 분해**: 복잡해 보이는 서비스도 쪼개면 단순

**MVP 우선순위가 중요한 이유**:
모든 기능을 다 만들 필요 없음. 핵심만 먼저, 나머지는 성장하면서.`,
        tips: [
          "Network 탭에서 API 패턴 확인 가능",
          "경쟁 서비스 3개 이상 비교하면 패턴 보임",
          "유료 기능과 무료 기능 구분도 중요",
        ],
        tags: ["역분석", "MVP", "기획", "분석"],
      },
      {
        id: "clone-animation",
        title: "인터랙션/애니메이션 클론",
        prompt: `[레퍼런스]의 인터랙션을 분석하고 구현해줘.

분석할 애니메이션:
- 페이지 전환 효과
- 스크롤 기반 애니메이션
- 호버/클릭 마이크로 인터랙션
- 로딩 애니메이션

구현:
- framer-motion 사용
- 성능 최적화 (will-change, GPU 가속)
- reduced-motion 미디어 쿼리 대응
- 60fps 유지`,
        explanation: `**왜 애니메이션 클론인가?**

애니메이션은 **서비스의 감성**을 결정합니다.

- **페이지 전환**: 부드러우면 고급스럽고, 툭툭 끊기면 저렴해 보임
- **스크롤 애니메이션**: 스토리텔링 효과
- **마이크로 인터랙션**: 버튼 하나에도 피드백
- **로딩**: 기다림을 즐거운 경험으로

**성능이 더 중요**:
화려해도 버벅이면 역효과. 60fps가 기본.`,
        tips: [
          "Awwwards, Dribbble에서 레퍼런스 찾기",
          "애니메이션 타이밍은 ease-out이 자연스러움",
          "너무 많은 애니메이션은 피로감 유발",
        ],
        tags: ["클론", "애니메이션", "인터랙션", "framer-motion"],
      },
    ],
  },
];
