export interface PromptTemplate {
  id: string;
  title: string;
  prompt: string;
  explanation: string;
  tips: string[];
  badExample?: {
    prompt: string;
    reason: string;
  };
  tags: string[];
}

export interface WikiCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  prompts: PromptTemplate[];
}

export const wikiData: WikiCategory[] = [
  {
    id: "project-setup",
    title: "프로젝트 초기 설정",
    description: "새 프로젝트를 시작할 때 필요한 프롬프트",
    icon: "📁",
    prompts: [
      {
        id: "create-nextjs",
        title: "Next.js 프로젝트 생성",
        prompt: `Next.js 14 프로젝트를 생성해줘.
- App Router 사용
- TypeScript
- Tailwind CSS
- src/ 디렉토리 구조
- 절대 경로 import (@/)`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

AI에게 프로젝트 생성을 요청할 때 **구체적인 옵션을 명시**하면 나중에 "아, 이건 원하던 게 아닌데..."라는 상황을 피할 수 있습니다.

- **App Router 사용**: Next.js 13부터 새로운 라우팅 방식. Pages Router와 완전히 다른 구조이므로 명시 필수
- **TypeScript**: 타입 안전성. 나중에 추가하면 설정이 복잡해짐
- **src/ 디렉토리**: 루트에 파일이 많아지는 것을 방지. 프로젝트가 커지면 필수
- **절대 경로 import**: \`../../../components\` 대신 \`@/components\`로 깔끔하게`,
        tips: [
          "버전을 명시하면 더 정확한 결과를 얻을 수 있음 (예: Next.js 14.2)",
          "패키지 매니저도 명시 가능 (npm, yarn, pnpm)",
          "Turbopack 사용 여부도 추가할 수 있음",
        ],
        badExample: {
          prompt: "Next.js 프로젝트 만들어줘",
          reason:
            "어떤 라우터를 쓸지, TypeScript를 쓸지 등 중요한 결정들이 AI의 판단에 맡겨짐",
        },
        tags: ["초기설정", "Next.js", "TypeScript"],
      },
      {
        id: "folder-structure",
        title: "폴더 구조 설정",
        prompt: `다음 폴더 구조로 프로젝트를 세팅해줘:
- /src/app - 페이지 라우팅
- /src/components - 재사용 컴포넌트
- /src/lib - 유틸리티, API 클라이언트
- /src/hooks - 커스텀 훅
- /src/types - 타입 정의
- /src/stores - 상태 관리`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

폴더 구조는 프로젝트의 **설계도**입니다. 처음에 잘 잡아두지 않으면 나중에 파일을 어디에 둘지 매번 고민하게 됩니다.

- **/components**: 재사용 가능한 UI 조각들
- **/lib**: 비즈니스 로직, API 호출 등 React와 무관한 코드
- **/hooks**: React 로직 재사용 (useAuth, useFetch 등)
- **/types**: TypeScript 타입 중앙 관리
- **/stores**: 전역 상태 (Zustand, Jotai 등)

이렇게 명시하면 AI가 새 파일을 만들 때도 이 구조를 따릅니다.`,
        tips: [
          "팀 컨벤션이 있다면 그걸 그대로 적어주면 됨",
          "각 폴더에 index.ts로 re-export 패턴 사용 여부도 명시 가능",
          "테스트 파일 위치도 정해두면 좋음 (__tests__/ vs *.test.ts)",
        ],
        tags: ["초기설정", "아키텍처", "폴더구조"],
      },
      {
        id: "env-setup",
        title: "환경 변수 설정",
        prompt: `.env.example 파일을 만들어줘.
필요한 환경 변수:
- 데이터베이스 연결
- API 키들
- OAuth 시크릿
각 변수에 설명 주석도 달아줘.`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

\`.env.example\` 파일은 두 가지 목적이 있습니다:

1. **문서화**: 프로젝트에 어떤 환경 변수가 필요한지 한눈에 파악
2. **온보딩**: 새 팀원이 복사해서 자기 값만 채우면 됨

**주석이 중요한 이유**:
\`DATABASE_URL\`이라고만 써있으면 PostgreSQL인지 MySQL인지, 어떤 형식인지 모릅니다. 예시 형식까지 적어두면 실수를 줄일 수 있습니다.`,
        tips: [
          "실제 값은 절대 넣지 않고 placeholder만 (예: your-api-key-here)",
          "NEXT_PUBLIC_ 접두사는 클라이언트 노출용임을 표시",
          ".gitignore에 .env.local이 있는지 확인 요청도 같이",
        ],
        tags: ["초기설정", "보안", "환경변수"],
      },
    ],
  },
  {
    id: "authentication",
    title: "인증/로그인",
    description: "사용자 인증 시스템 구축 프롬프트",
    icon: "🔐",
    prompts: [
      {
        id: "supabase-auth",
        title: "Supabase Auth (추천)",
        prompt: `Supabase Auth를 사용해서 로그인 기능을 추가해줘.
- Google OAuth
- 이메일/비밀번호
- 로그인 후 /dashboard로 리다이렉트`,
        explanation: `**왜 Supabase Auth인가?**

Supabase Auth는 **무료 티어가 넉넉**하고 설정이 간단합니다.

- **Google OAuth**: 가장 많이 쓰는 소셜 로그인. 사용자 진입장벽 낮춤
- **이메일/비밀번호**: 소셜 로그인 싫어하는 사용자 대응
- **리다이렉트 명시**: 안 하면 AI가 임의로 정하거나 홈으로 보냄

**프롬프트에 리다이렉트 경로를 명시하는 이유**:
로그인 후 어디로 갈지는 UX에서 매우 중요합니다. 명시하지 않으면 AI가 \`/\`로 보내버릴 수 있습니다.`,
        tips: [
          "매직 링크(이메일 링크) 로그인도 추가 가능",
          "세션 유지 시간 설정도 명시할 수 있음",
          "로그아웃 기능도 같이 요청하면 좋음",
        ],
        tags: ["인증", "Supabase", "OAuth"],
      },
      {
        id: "nextauth",
        title: "NextAuth.js",
        prompt: `NextAuth.js를 사용해서 인증 시스템을 구축해줘.
- Google, GitHub 프로바이더
- 세션 기반 인증
- 미들웨어로 protected routes 설정`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

NextAuth.js는 Next.js와 가장 잘 어울리는 인증 라이브러리입니다.

- **프로바이더 명시**: 어떤 소셜 로그인을 지원할지 미리 결정
- **세션 기반 인증**: JWT vs Session 중 선택. 명시 안하면 AI가 결정
- **미들웨어 protected routes**: 핵심! 인증 안된 사용자가 /dashboard에 접근 못하게

**"미들웨어로"라고 명시하는 이유**:
Next.js 13+에서는 middleware.ts를 사용하는 것이 표준입니다. 안 쓰면 각 페이지에서 일일이 체크하는 구식 방법을 쓸 수 있음.`,
        tips: [
          "Adapter 설정도 명시 가능 (Prisma, Supabase 등)",
          "커스텀 로그인 페이지가 필요하면 추가 요청",
          "role 기반 권한 관리도 함께 요청 가능",
        ],
        badExample: {
          prompt: "로그인 기능 만들어줘",
          reason:
            "어떤 라이브러리? 어떤 방식? 소셜 로그인? 너무 많은 것이 불확실",
        },
        tags: ["인증", "NextAuth", "미들웨어"],
      },
      {
        id: "clerk-auth",
        title: "Clerk (가장 쉬움)",
        prompt: `Clerk를 사용해서 인증을 구현해줘.
- 소셜 로그인
- 사용자 프로필 관리
- 조직/팀 기능`,
        explanation: `**왜 Clerk인가?**

Clerk는 **가장 빠르게** 프로덕션 수준의 인증을 구현할 수 있습니다.

- **소셜 로그인**: Clerk 대시보드에서 클릭 몇 번으로 설정
- **프로필 관리**: 내장 UI 컴포넌트 제공 (UserButton, UserProfile)
- **조직/팀 기능**: B2B SaaS라면 필수. 다른 라이브러리에선 직접 구현 필요

**언제 Clerk를 선택?**
- MVP를 빠르게 만들 때
- B2B SaaS (팀/조직 기능 필요)
- 인증에 시간 쓰기 싫을 때`,
        tips: [
          "무료 티어: MAU 10,000까지",
          "Webhook으로 사용자 생성시 DB 동기화 가능",
          "커스텀 UI가 필요하면 headless 모드 사용",
        ],
        tags: ["인증", "Clerk", "SaaS"],
      },
    ],
  },
  {
    id: "payments",
    title: "결제 시스템",
    description: "결제 및 구독 시스템 연동 프롬프트",
    icon: "💳",
    prompts: [
      {
        id: "stripe-subscription",
        title: "Stripe 구독 결제 (글로벌)",
        prompt: `Stripe 결제를 연동해줘.
- 월간/연간 구독 플랜 2개
- Checkout Session 방식
- Webhook으로 결제 상태 동기화
- 구독 관리 포털 연결`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

Stripe 연동에는 여러 방식이 있는데, 이 프롬프트는 **가장 안전하고 표준적인 방식**을 지정합니다.

- **월간/연간 플랜 2개**: 구체적인 숫자를 주면 AI가 정확한 구조를 만듦
- **Checkout Session**: Stripe가 제공하는 결제 페이지 사용. 직접 카드 입력 UI 만들면 PCI 규정 문제
- **Webhook 동기화**: 결제 완료를 100% 확실하게 감지. 프론트엔드 콜백만 믿으면 결제 누락 발생
- **구독 관리 포털**: 카드 변경, 구독 취소 등을 Stripe UI로 처리. 직접 만들면 복잡

**Webhook이 핵심인 이유**:
사용자가 결제 후 브라우저를 닫아도, Webhook이 서버에 알려줍니다.`,
        tips: [
          "테스트 모드에서 먼저 개발 (sk_test_, pk_test_)",
          "Stripe CLI로 로컬에서 Webhook 테스트",
          "가격은 Stripe 대시보드에서 미리 생성하면 편함",
        ],
        badExample: {
          prompt: "Stripe 결제 추가해줘",
          reason:
            "일회성? 구독? Checkout? Elements? Webhook은? 너무 모호함",
        },
        tags: ["결제", "Stripe", "구독", "SaaS"],
      },
      {
        id: "toss-payments",
        title: "토스페이먼츠 (국내)",
        prompt: `토스페이먼츠를 연동해줘.
- 일반 결제 (카드)
- 결제 완료 콜백 처리
- 결제 내역 저장`,
        explanation: `**왜 토스페이먼츠인가?**

국내 결제는 PG사 연동이 필수이고, 토스페이먼츠가 **개발자 경험(DX)이 가장 좋습니다**.

- **일반 결제 (카드)**: 가장 기본. 필요하면 계좌이체, 가상계좌 추가
- **결제 완료 콜백**: successUrl, failUrl 처리
- **결제 내역 저장**: DB에 저장해야 영수증 조회, 환불 등 가능

**Stripe와 다른 점**:
국내 PG는 Webhook 대신 redirect 방식이 일반적. 결제 후 사용자가 돌아올 때 검증.`,
        tips: [
          "테스트 키로 먼저 개발 (테스트 카드번호 있음)",
          "결제 승인 API 호출 필수 (프론트에서 결제 완료 != 실제 완료)",
          "부분 취소/전체 취소 기능도 미리 구현해두면 좋음",
        ],
        tags: ["결제", "토스페이먼츠", "국내"],
      },
    ],
  },
  {
    id: "database",
    title: "데이터베이스",
    description: "DB 설계 및 쿼리 관련 프롬프트",
    icon: "🗄️",
    prompts: [
      {
        id: "supabase-tables",
        title: "Supabase 테이블 설계",
        prompt: `블로그 서비스용 Supabase 테이블을 설계해줘.
- users (프로필 정보)
- posts (글)
- comments (댓글)
- likes (좋아요)
RLS 정책도 설정해줘:
- 본인 글만 수정/삭제
- 모든 사람이 읽기 가능`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

DB 설계는 **테이블 이름과 관계**를 명확히 해야 원하는 구조가 나옵니다.

- **테이블 목록 나열**: AI가 필요한 컬럼을 알아서 추론
- **RLS (Row Level Security)**: Supabase의 핵심 보안 기능. 안 쓰면 누구나 모든 데이터 접근 가능

**RLS를 명시하는 이유**:
Supabase는 기본적으로 모든 테이블이 공개입니다. RLS 없이 배포하면 심각한 보안 문제!

- "본인 글만 수정/삭제" → \`auth.uid() = user_id\` 정책
- "모든 사람 읽기" → SELECT는 true`,
        tips: [
          "외래키 관계도 명시하면 더 정확함 (posts.user_id → users.id)",
          "인덱스가 필요한 컬럼도 알려주면 좋음",
          "soft delete (deleted_at) 사용 여부도 결정",
        ],
        tags: ["데이터베이스", "Supabase", "RLS", "보안"],
      },
      {
        id: "prisma-schema",
        title: "Prisma 스키마",
        prompt: `Prisma 스키마를 작성해줘.
모델:
- User (id, email, name, createdAt)
- Project (id, name, userId, createdAt)
- Task (id, title, status, projectId)
관계 설정과 인덱스도 포함해줘.`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

Prisma 스키마는 **타입 안전한 DB 접근**의 기반입니다.

- **필드 명시**: 필요한 필드를 직접 나열하면 원하는 구조 보장
- **관계 설정**: User-Project-Task의 1:N 관계를 명확히
- **인덱스**: 자주 조회하는 필드에 인덱스 걸면 성능 향상

**관계 설정이 중요한 이유**:
Prisma는 관계가 설정되면 \`user.projects\`, \`project.tasks\` 같은 타입 안전한 접근이 가능해집니다.`,
        tips: [
          "@unique, @default 등 제약조건도 명시 가능",
          "enum 타입이 필요하면 같이 요청",
          "cascade delete 동작도 정의해두면 좋음",
        ],
        tags: ["데이터베이스", "Prisma", "ORM"],
      },
    ],
  },
  {
    id: "api-development",
    title: "API 개발",
    description: "백엔드 API 개발 프롬프트",
    icon: "🔌",
    prompts: [
      {
        id: "rest-crud",
        title: "REST API CRUD",
        prompt: `/api/posts CRUD API를 만들어줘.
- GET /api/posts - 목록 (페이지네이션, 필터)
- GET /api/posts/[id] - 단일 조회
- POST /api/posts - 생성 (인증 필요)
- PATCH /api/posts/[id] - 수정 (작성자만)
- DELETE /api/posts/[id] - 삭제 (작성자만)
에러 핸들링과 타입 안전성 포함.`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

API 설계는 **HTTP 메서드와 권한**을 명확히 해야 합니다.

- **엔드포인트 전체 나열**: AI가 파일 구조까지 올바르게 생성
- **페이지네이션, 필터 명시**: 안 하면 전체 데이터 반환하는 API가 됨
- **권한 조건 명시**: "(인증 필요)", "(작성자만)" 이게 핵심!
- **에러 핸들링 명시**: 안 하면 에러시 500만 반환하는 코드가 됨

**PATCH vs PUT**:
PATCH는 부분 수정, PUT은 전체 교체. 일반적으로 PATCH가 더 유연함.`,
        tips: [
          "응답 형식도 명시 가능 (예: { data, meta, error })",
          "rate limiting이 필요하면 추가 요청",
          "soft delete vs hard delete 방식도 명시",
        ],
        badExample: {
          prompt: "posts API 만들어줘",
          reason:
            "어떤 기능? 어떤 권한? 페이지네이션은? 에러 처리는?",
        },
        tags: ["API", "REST", "CRUD", "백엔드"],
      },
      {
        id: "api-middleware",
        title: "API 인증 미들웨어",
        prompt: `API 인증 미들웨어를 만들어줘.
- JWT 토큰 검증
- 만료된 토큰 처리
- 인증 실패시 401 반환
- req.user에 사용자 정보 추가`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

미들웨어는 **모든 API가 공통으로 거치는 관문**입니다.

- **JWT 토큰 검증**: 토큰이 유효한지 확인
- **만료된 토큰 처리**: 만료시 적절한 에러 반환 (403 또는 401)
- **401 반환**: HTTP 표준 상태 코드. 프론트에서 로그인 페이지로 리다이렉트
- **req.user 추가**: 이후 API에서 \`req.user.id\`로 바로 사용

**이렇게 상세히 쓰는 이유**:
미들웨어 구현 방식이 다양하기 때문. 명시하지 않으면 AI 마음대로.`,
        tips: [
          "refresh token 로직도 필요하면 추가",
          "특정 라우트만 인증 필요한 경우 패턴 명시",
          "로깅 추가 여부도 결정",
        ],
        tags: ["API", "인증", "미들웨어", "JWT"],
      },
      {
        id: "rate-limiting",
        title: "Rate Limiting",
        prompt: `API에 rate limiting을 추가해줘.
- IP당 분당 60회 제한
- 인증된 사용자는 분당 120회
- 제한 초과시 429 반환
- X-RateLimit-* 헤더 포함`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

Rate limiting은 **API 남용 방지**의 기본입니다.

- **IP당 제한**: 비로그인 사용자 대응
- **인증된 사용자 구분**: 로그인 사용자에게 더 많은 할당량
- **429 상태코드**: HTTP 표준 "Too Many Requests"
- **X-RateLimit 헤더**: 클라이언트가 남은 횟수를 알 수 있음

**헤더가 중요한 이유**:
\`X-RateLimit-Remaining: 5\`를 보고 프론트에서 경고를 띄울 수 있음.`,
        tips: [
          "Redis 기반이 가장 안정적 (upstash/ratelimit)",
          "특정 엔드포인트만 다른 제한 적용 가능",
          "sliding window vs fixed window 방식 선택",
        ],
        tags: ["API", "보안", "Rate Limiting"],
      },
      {
        id: "openai-integration",
        title: "OpenAI API 연동",
        prompt: `OpenAI API를 연동해줘.
- API 클라이언트 래퍼 함수
- 스트리밍 응답 지원
- 에러 핸들링 (rate limit, timeout)
- 비용 추적을 위한 토큰 카운트 로깅`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

OpenAI API 연동은 **스트리밍과 에러 처리**가 핵심입니다.

- **래퍼 함수**: 직접 fetch 쓰면 코드 중복. 재사용 가능한 함수로 추상화
- **스트리밍 응답**: ChatGPT처럼 글자가 하나씩 나오는 UX
- **에러 핸들링**: OpenAI도 rate limit 있음. 재시도 로직 필요
- **토큰 카운트**: API 비용이 토큰 기반이라 추적 필수

**스트리밍이 중요한 이유**:
응답이 길면 10초 이상 걸릴 수 있음. 스트리밍 없이는 사용자가 멈춘 줄 알고 떠남.`,
        tips: [
          "tiktoken으로 토큰 미리 계산 가능",
          "응답 캐싱으로 비용 절약",
          "시스템 프롬프트 관리 방법도 정하기",
        ],
        tags: ["API", "OpenAI", "AI", "스트리밍"],
      },
    ],
  },
  {
    id: "ui-components",
    title: "UI/UX 컴포넌트",
    description: "프론트엔드 UI 컴포넌트 프롬프트",
    icon: "🎨",
    prompts: [
      {
        id: "shadcn-setup",
        title: "디자인 시스템 초기화",
        prompt: `shadcn/ui를 설치하고 기본 설정해줘.
- 다크모드 지원
- 기본 컴포넌트: Button, Input, Card, Dialog, Toast
- globals.css에 커스텀 색상 변수 추가`,
        explanation: `**왜 shadcn/ui인가?**

shadcn/ui는 **복사해서 쓰는 컴포넌트**라 커스터마이징이 자유롭습니다.

- **다크모드 지원**: 요즘 필수. next-themes와 연동
- **기본 컴포넌트 명시**: 자주 쓰는 것만 먼저 설치 (전체 설치하면 무거움)
- **커스텀 색상 변수**: 브랜드 색상 적용 준비

**왜 컴포넌트를 명시하나?**:
shadcn은 필요한 것만 설치하는 방식. "전부 설치해줘"하면 불필요한 것까지 들어감.`,
        tips: [
          "기본 테마 선택 가능 (default, new-york 등)",
          "아이콘 라이브러리도 같이 설치 (lucide-react)",
          "컴포넌트 위치를 components/ui로 할지 결정",
        ],
        tags: ["UI", "shadcn", "디자인시스템", "다크모드"],
      },
      {
        id: "landing-page",
        title: "랜딩 페이지",
        prompt: `SaaS 랜딩 페이지를 만들어줘.
섹션 구성:
- Hero (헤드라인 + CTA 버튼)
- Features (3-4개 기능 소개)
- Pricing (가격표)
- Testimonials (후기)
- FAQ (아코디언)
- Footer
반응형으로 만들어줘.`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

랜딩 페이지는 **섹션 구성**을 명확히 해야 원하는 결과가 나옵니다.

- **Hero**: 첫인상. 3초 안에 뭐하는 서비스인지 전달
- **Features**: 왜 써야 하는지 설득
- **Pricing**: 가격 투명하게 공개 (숨기면 이탈률 높음)
- **Testimonials**: 사회적 증거. 신뢰도 향상
- **FAQ**: 자주 묻는 질문. CS 부담 감소
- **반응형 명시**: 안 하면 데스크톱만 만들 수 있음

**섹션 순서도 의도적**:
Hero → Features → Pricing은 전환율 높은 표준 구성.`,
        tips: [
          "각 섹션에 애니메이션 추가 여부 명시 (framer-motion)",
          "CTA 버튼 텍스트도 정해주면 좋음",
          "소셜 프루프 (사용자 수, 기업 로고 등) 추가 가능",
        ],
        tags: ["UI", "랜딩페이지", "마케팅", "반응형"],
      },
      {
        id: "dashboard-layout",
        title: "대시보드 레이아웃",
        prompt: `관리자 대시보드 레이아웃을 만들어줘.
- 왼쪽 사이드바 (메뉴 네비게이션)
- 상단 헤더 (검색, 알림, 프로필)
- 메인 컨텐츠 영역
- 모바일에서는 사이드바 햄버거 메뉴로`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

대시보드는 **레이아웃 구조**가 핵심입니다.

- **왼쪽 사이드바**: 대시보드 표준 패턴. 메뉴가 많을 때 적합
- **상단 헤더**: 전역 기능 (검색, 알림 등) 배치
- **모바일 햄버거**: 사이드바를 숨겼다 보여주는 방식

**"모바일에서는" 이라고 명시하는 이유**:
반응형 동작을 구체적으로 지정. 안 하면 사이드바가 그냥 사라지거나 깨질 수 있음.`,
        tips: [
          "사이드바 접기/펴기 기능도 추가 가능",
          "breadcrumb 네비게이션도 고려",
          "탭 기반 네비게이션과 비교해서 선택",
        ],
        tags: ["UI", "대시보드", "레이아웃", "반응형"],
      },
      {
        id: "form-validation",
        title: "폼 컴포넌트 (유효성 검사)",
        prompt: `react-hook-form + zod로 회원가입 폼을 만들어줘.
필드:
- 이메일 (이메일 형식 검증)
- 비밀번호 (8자 이상, 특수문자 포함)
- 비밀번호 확인
- 이용약관 동의 체크박스
에러 메시지는 한글로.`,
        explanation: `**왜 react-hook-form + zod인가?**

이 조합이 **현재 표준**입니다.

- **react-hook-form**: 성능 좋은 폼 라이브러리. 리렌더링 최소화
- **zod**: 타입스크립트 친화적 스키마 검증
- **유효성 조건 명시**: AI가 정확한 검증 로직 생성
- **에러 메시지 한글**: 안 하면 "Invalid email" 같은 영어 메시지

**필드별 조건이 중요한 이유**:
"비밀번호 검증해줘"만 하면 AI가 임의로 조건을 정함. 보안 정책과 다를 수 있음.`,
        tips: [
          "실시간 검증 vs 제출시 검증 선택",
          "비밀번호 강도 표시 UI도 추가 가능",
          "제출 중 로딩 상태 처리도 요청",
        ],
        tags: ["UI", "폼", "유효성검사", "react-hook-form", "zod"],
      },
      {
        id: "data-table",
        title: "데이터 테이블",
        prompt: `데이터 테이블을 만들어줘.
기능:
- 정렬 (컬럼 클릭)
- 검색/필터
- 페이지네이션
- 행 선택 (체크박스)
- 반응형 (모바일에서 카드뷰)`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

테이블은 **기능 목록**을 명확히 해야 합니다.

- **정렬**: 대부분의 테이블에서 필수
- **검색/필터**: 데이터 많아지면 반드시 필요
- **페이지네이션**: 한 번에 모든 데이터 로드하면 성능 문제
- **행 선택**: 일괄 작업 (삭제, 상태 변경 등)에 필요
- **모바일 카드뷰**: 테이블은 모바일에서 깨지기 쉬움

**"반응형 (모바일에서 카드뷰)"의 의미**:
좁은 화면에서는 테이블 대신 카드 형태로 보여주는 패턴.`,
        tips: [
          "@tanstack/react-table 사용 권장",
          "가상화(virtualization) 필요하면 명시",
          "CSV/Excel 내보내기 기능도 추가 가능",
        ],
        tags: ["UI", "테이블", "데이터", "반응형"],
      },
    ],
  },
  {
    id: "deployment",
    title: "배포/DevOps",
    description: "배포 및 CI/CD 관련 프롬프트",
    icon: "🚀",
    prompts: [
      {
        id: "github-actions",
        title: "GitHub Actions CI/CD",
        prompt: `GitHub Actions 워크플로우를 만들어줘.
- PR시 린트/테스트/빌드 검사
- main 브랜치 푸시시 자동 배포
- 환경 변수는 GitHub Secrets 사용
- 슬랙 알림`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

CI/CD는 **트리거 조건과 액션**을 명확히 해야 합니다.

- **PR시 검사**: 코드 품질 게이트. 통과해야 머지 가능
- **main 푸시시 배포**: 머지되면 자동으로 프로덕션 배포
- **GitHub Secrets**: 비밀 키를 안전하게 관리
- **슬랙 알림**: 배포 성공/실패 알림

**린트/테스트/빌드 순서가 중요한 이유**:
빠른 것부터 실행해서 실패시 빨리 피드백. 린트 < 테스트 < 빌드`,
        tips: [
          "캐싱 설정하면 CI 속도 향상 (node_modules 등)",
          "branch protection rule도 같이 설정 권장",
          "Preview 배포 (PR별 별도 URL) 추가 가능",
        ],
        tags: ["배포", "CI/CD", "GitHub Actions", "자동화"],
      },
      {
        id: "docker-setup",
        title: "Docker 설정",
        prompt: `Next.js 앱용 Dockerfile을 만들어줘.
- 멀티스테이지 빌드
- standalone 출력 모드
- 이미지 크기 최소화
- 비root 사용자 실행
docker-compose.yml도 포함 (로컬 개발용).`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

Docker 이미지는 **크기와 보안**이 중요합니다.

- **멀티스테이지 빌드**: 빌드 도구는 최종 이미지에 포함 안 함
- **standalone 모드**: Next.js 전용. node_modules 없이 실행 가능
- **이미지 크기 최소화**: 배포 속도, 저장 비용 절약
- **비root 사용자**: 보안 모범 사례. 컨테이너가 뚫려도 권한 제한

**standalone이 핵심인 이유**:
일반 빌드: ~1GB, standalone: ~100MB. 10배 차이.`,
        tips: [
          ".dockerignore 파일도 같이 요청",
          "health check 설정 추가 가능",
          "ARM64 (M1 Mac) 호환성도 명시 가능",
        ],
        tags: ["배포", "Docker", "컨테이너", "최적화"],
      },
    ],
  },
  {
    id: "testing",
    title: "테스트",
    description: "테스트 코드 작성 프롬프트",
    icon: "🧪",
    prompts: [
      {
        id: "unit-test",
        title: "단위 테스트",
        prompt: `Jest로 유틸리티 함수 테스트를 작성해줘.
- formatDate 함수
- calculatePrice 함수
- validateEmail 함수
엣지 케이스 포함.`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

단위 테스트는 **테스트할 함수와 범위**를 명시해야 합니다.

- **함수 이름 나열**: 어떤 함수를 테스트할지 명확
- **"엣지 케이스 포함"**: 이게 핵심! 빈 값, null, 경계값 등

**엣지 케이스란?**:
- formatDate: null 날짜, 잘못된 형식
- calculatePrice: 0원, 음수, 소수점
- validateEmail: 빈 문자열, 특수문자만

안 쓰면 happy path만 테스트해서 실제 버그를 못 잡음.`,
        tips: [
          "테스트 커버리지 목표 명시 가능 (예: 80% 이상)",
          "mock 필요한 의존성도 알려주면 좋음",
          "describe/it 구조로 그룹핑 요청",
        ],
        tags: ["테스트", "Jest", "단위테스트"],
      },
      {
        id: "component-test",
        title: "컴포넌트 테스트",
        prompt: `React Testing Library로 컴포넌트 테스트를 작성해줘.
테스트할 컴포넌트: LoginForm
- 렌더링 확인
- 입력값 변경
- 유효성 검사 에러 표시
- 제출 동작`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

컴포넌트 테스트는 **사용자 관점의 시나리오**를 명시합니다.

- **렌더링 확인**: 컴포넌트가 에러 없이 그려지는지
- **입력값 변경**: 사용자가 타이핑하는 것처럼 테스트
- **유효성 검사 에러**: 잘못된 입력시 에러 표시되는지
- **제출 동작**: 버튼 클릭시 예상 동작 실행되는지

**"사용자 관점"이 중요한 이유**:
내부 구현(state, ref)을 테스트하면 리팩토링할 때마다 테스트가 깨짐.
사용자가 보는 것(텍스트, 버튼)을 테스트해야 안정적.`,
        tips: [
          "userEvent 사용 권장 (fireEvent보다 실제에 가까움)",
          "API 호출 mock 방법도 명시",
          "접근성(a11y) 테스트도 추가 가능",
        ],
        tags: ["테스트", "React Testing Library", "컴포넌트"],
      },
      {
        id: "e2e-test",
        title: "E2E 테스트",
        prompt: `Playwright로 E2E 테스트를 작성해줘.
시나리오: 회원가입 → 로그인 → 프로필 수정
- 각 단계별 assertions
- 스크린샷 캡처
- CI에서 실행 가능하게`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

E2E 테스트는 **전체 플로우를 시나리오**로 설명합니다.

- **시나리오 명시**: 실제 사용자 여정 그대로
- **각 단계별 assertions**: 각 화면에서 확인할 것
- **스크린샷 캡처**: 실패시 디버깅용
- **CI에서 실행**: headless 모드, 타임아웃 설정 등

**Playwright 선택 이유**:
Cypress보다 빠르고, 여러 브라우저 지원, CI 친화적.`,
        tips: [
          "테스트용 DB 시드 데이터도 같이 요청",
          "병렬 실행 설정으로 속도 향상",
          "모바일 뷰포트 테스트도 추가 가능",
        ],
        tags: ["테스트", "Playwright", "E2E", "CI/CD"],
      },
    ],
  },
  {
    id: "performance",
    title: "성능 최적화",
    description: "성능 개선 관련 프롬프트",
    icon: "⚡",
    prompts: [
      {
        id: "image-optimization",
        title: "이미지 최적화",
        prompt: `이미지 로딩을 최적화해줘.
- next/image 사용
- 반응형 이미지
- blur placeholder
- WebP 포맷
- CDN 캐싱`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

이미지는 웹 페이지에서 **가장 무거운 자원**입니다.

- **next/image**: 자동 최적화, lazy loading 기본 제공
- **반응형 이미지**: 화면 크기에 맞는 이미지만 로드
- **blur placeholder**: 이미지 로딩 중 흐릿한 미리보기 (UX 향상)
- **WebP 포맷**: JPEG보다 30% 작음
- **CDN 캐싱**: 전세계 어디서든 빠른 로딩

**이렇게 나열하는 이유**:
"이미지 최적화해줘"만 하면 일부만 적용될 수 있음. 전부 명시해야 완벽.`,
        tips: [
          "priority prop으로 LCP 이미지 우선 로드",
          "sizes 속성 정확히 설정해야 효과 있음",
          "외부 이미지 도메인 설정도 확인",
        ],
        tags: ["성능", "이미지", "최적화", "Core Web Vitals"],
      },
      {
        id: "bundle-optimization",
        title: "번들 최적화",
        prompt: `번들 크기를 분석하고 최적화해줘.
- @next/bundle-analyzer 설정
- 동적 import (code splitting)
- tree shaking 확인
- 큰 라이브러리 대체 제안`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

JavaScript 번들 크기는 **초기 로딩 속도**를 결정합니다.

- **bundle-analyzer**: 어떤 라이브러리가 얼마나 차지하는지 시각화
- **동적 import**: 당장 필요 없는 코드는 나중에 로드
- **tree shaking**: 사용 안 하는 코드 제거
- **라이브러리 대체**: moment.js → date-fns, lodash → lodash-es

**분석 먼저, 최적화 나중**:
뭐가 문제인지 모르고 최적화하면 효과가 미미. 분석 도구 먼저.`,
        tips: [
          "번들 크기 목표 설정 (예: 200KB 이하)",
          "Server Components 활용으로 클라이언트 번들 감소",
          "lazy loading으로 초기 로딩 최소화",
        ],
        tags: ["성능", "번들", "최적화", "빌드"],
      },
    ],
  },
  {
    id: "security",
    title: "보안",
    description: "보안 관련 프롬프트",
    icon: "🔒",
    prompts: [
      {
        id: "input-validation",
        title: "입력값 검증",
        prompt: `모든 API 입력값을 검증하는 미들웨어를 만들어줘.
- zod 스키마 기반
- XSS 방지 (sanitize)
- SQL injection 방지
- 파일 업로드 타입/크기 제한`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

입력값 검증은 **보안의 첫 번째 방어선**입니다.

- **zod 스키마**: 타입과 형식을 동시에 검증
- **XSS 방지**: 악성 스크립트 입력 차단
- **SQL injection 방지**: DB 쿼리 조작 차단
- **파일 업로드 제한**: 악성 파일, 대용량 파일 차단

**"모든 API"가 중요한 이유**:
하나라도 빠지면 그게 공격 경로가 됨. 일관된 검증 필수.`,
        tips: [
          "에러 메시지에 민감 정보 노출 주의",
          "허용 목록(whitelist) 방식이 차단 목록보다 안전",
          "검증 실패 로깅으로 공격 탐지",
        ],
        tags: ["보안", "입력검증", "XSS", "SQL Injection"],
      },
      {
        id: "csp-headers",
        title: "CSP 헤더 설정",
        prompt: `Content Security Policy를 설정해줘.
- 인라인 스크립트 제한
- 외부 리소스 화이트리스트
- 리포트 URI 설정
- Next.js에 적용`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

CSP는 **XSS 공격의 마지막 방어선**입니다.

- **인라인 스크립트 제한**: <script>alert('xss')</script> 실행 차단
- **외부 리소스 화이트리스트**: 허용된 도메인에서만 리소스 로드
- **리포트 URI**: CSP 위반 발생시 알림 받음
- **Next.js 적용**: next.config.js 또는 middleware에서 설정

**CSP가 어려운 이유**:
너무 엄격하면 정상 기능도 막힘. 점진적으로 적용하고 리포트로 모니터링.`,
        tips: [
          "report-only 모드로 먼저 테스트",
          "Google Analytics, Stripe 등 외부 서비스 도메인 추가",
          "nonce 기반 인라인 스크립트 허용 방법",
        ],
        tags: ["보안", "CSP", "헤더", "XSS 방지"],
      },
    ],
  },
  {
    id: "monitoring",
    title: "모니터링/로깅",
    description: "모니터링 및 로깅 관련 프롬프트",
    icon: "📊",
    prompts: [
      {
        id: "analytics-setup",
        title: "애널리틱스 설정",
        prompt: `Vercel Analytics와 Google Analytics를 설정해줘.
- 페이지뷰 자동 추적
- 커스텀 이벤트 (버튼 클릭, 전환)
- 개발 환경에서는 비활성화`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

애널리틱스는 **사용자 행동 데이터**를 수집합니다.

- **Vercel Analytics + GA**: Vercel은 Web Vitals, GA는 상세 분석
- **페이지뷰 자동 추적**: 기본 중의 기본
- **커스텀 이벤트**: 중요한 액션 추적 (가입, 결제 등)
- **개발 환경 비활성화**: 테스트 데이터가 섞이면 분석 불가

**두 개 다 쓰는 이유**:
Vercel Analytics는 성능 중심, GA는 마케팅/전환 분석에 강함.`,
        tips: [
          "GDPR 대응 쿠키 동의 배너도 고려",
          "이벤트 네이밍 컨벤션 정하기",
          "UTM 파라미터 추적 설정",
        ],
        tags: ["모니터링", "애널리틱스", "GA", "Vercel"],
      },
      {
        id: "error-monitoring",
        title: "에러 모니터링",
        prompt: `Sentry를 설정해줘.
- 클라이언트/서버 에러 캡처
- 사용자 컨텍스트 추가
- 환경별 분리 (dev/prod)
- 소스맵 업로드`,
        explanation: `**왜 이렇게 쓰면 좋은가?**

프로덕션 에러는 **사용자가 알려주기 전에** 알아야 합니다.

- **클라이언트/서버 분리**: 각각 다른 방식으로 캡처
- **사용자 컨텍스트**: 어떤 사용자에게 발생했는지 추적
- **환경별 분리**: 개발 에러와 프로덕션 에러 구분
- **소스맵 업로드**: 난독화된 코드를 원본으로 변환

**소스맵이 중요한 이유**:
프로덕션 JS는 minify되어 있어서 에러 위치 파악 불가. 소스맵 없으면 디버깅 불가능.`,
        tips: [
          "에러 알림 임계값 설정 (너무 많으면 피로)",
          "민감 정보 필터링 설정",
          "성능 모니터링도 같이 활성화 가능",
        ],
        tags: ["모니터링", "에러추적", "Sentry", "디버깅"],
      },
    ],
  },
];

import { newCategories } from "./new-categories";

export function getAllCategories(): WikiCategory[] {
  return [...wikiData, ...newCategories];
}

export function getCategoryById(id: string): WikiCategory | undefined {
  const allCategories = getAllCategories();
  return allCategories.find((cat) => cat.id === id);
}

export function getPromptById(
  categoryId: string,
  promptId: string
): PromptTemplate | undefined {
  const category = getCategoryById(categoryId);
  return category?.prompts.find((p) => p.id === promptId);
}

export function searchPrompts(query: string): PromptTemplate[] {
  const lowerQuery = query.toLowerCase();
  const results: PromptTemplate[] = [];

  wikiData.forEach((category) => {
    category.prompts.forEach((prompt) => {
      if (
        prompt.title.toLowerCase().includes(lowerQuery) ||
        prompt.prompt.toLowerCase().includes(lowerQuery) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      ) {
        results.push(prompt);
      }
    });
  });

  return results;
}
