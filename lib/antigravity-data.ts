export interface AntigravitySection {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export interface AntigravityTip {
  title: string;
  description: string;
  type: "do" | "dont";
}

export const antigravityIntro = {
  title: "Google Antigravity",
  subtitle: "AI 에이전트 기반 개발 플랫폼",
  description: `Google Antigravity는 2025년 11월 Gemini 3와 함께 출시된 AI 기반 IDE입니다.
기존의 줄 단위 코딩 대신, AI 에이전트가 자율적으로 계획을 세우고 코드를 작성하는 "에이전트 우선" 개발 방식을 지원합니다.

개발자는 직접 코드를 타이핑하는 대신 건축가처럼 고수준에서 지시하고, AI 에이전트가 실제 구현을 담당합니다.`,
};

export const antigravitySections: AntigravitySection[] = [
  {
    id: "installation",
    title: "설치 방법",
    icon: "📥",
    content: `## 시스템 요구사항

**macOS**
- Monterey 12 이상
- Apple Silicon(M1/M2/M3/M4) 최적화

**Windows**
- 64비트 Windows 10 또는 11
- C 드라이브에 설치 권장

**Linux**
- Ubuntu 20.04+, Debian 10+, Fedora 36+
- glibc 2.28 이상

## 설치 단계

1. [antigravity.google/download](https://antigravity.google/download) 에서 설치 프로그램 다운로드
2. 설치 프로그램 실행
3. "Start fresh" 옵션 선택 (기존 VS Code 설정 가져오기도 가능)
4. IDE 테마 선택
5. Agent Manager 모드 설정
6. Google 계정으로 로그인
7. AI 모델 선택 (Gemini 3 Pro 권장)`,
  },
  {
    id: "interface",
    title: "인터페이스 구성",
    icon: "🖥️",
    content: `## 두 가지 메인 뷰

### Editor View (에디터 뷰)
VS Code와 유사한 익숙한 IDE 환경에 AI 사이드바가 추가된 형태입니다.
- 에이전트 생성 파일 편집
- 코드 자동완성
- 인라인 AI 제안

### Manager View (매니저 뷰)
여러 에이전트를 동시에 관리하는 제어판입니다.
- 활성/완료된 작업 추적
- 다중 에이전트 병렬 실행
- 비동기 작업 관리

## 주요 인터페이스 요소

| 요소 | 기능 |
|------|------|
| **Editor Panel** | 코드 편집, AI 생성 코드 표시 |
| **Agent Manager** | 활성 작업 추적, 에이전트 reasoning 확인 |
| **Artifacts Panel** | 로그, 코드 diff, 계획서 저장 |
| **Browser Preview** | 웹앱 실시간 테스트 |
| **Terminal** | 패키지 설치, 명령어 실행 |`,
  },
  {
    id: "modes",
    title: "개발 모드",
    icon: "⚙️",
    content: `## 네 가지 개발 모드

### 1. Agent-driven (에이전트 주도)
완전 자동화 모드입니다. AI가 모든 작업을 자율적으로 수행합니다.
- 빠른 프로토타이핑에 적합
- 간단한 작업에 추천

### 2. Agent-assisted (에이전트 보조) ⭐ 권장
사용자 제어를 유지하면서 안전하게 자동화하는 균형 잡힌 모드입니다.
- 주요 검증 지점에서 중단
- 사용자 확인 후 진행
- 대부분의 상황에 적합

### 3. Review-driven (검토 주도)
모든 주요 작업 전에 사용자 승인이 필요합니다.
- 중요한 프로덕션 코드에 적합
- 학습 목적으로 유용

### 4. Custom (커스텀)
작업 유형별로 다른 모드를 설정합니다.
- 세밀한 제어가 필요할 때
- 팀별 정책 적용`,
  },
  {
    id: "artifacts",
    title: "Artifacts 시스템",
    icon: "📦",
    content: `## Artifacts란?

AI 에이전트가 작업하면서 생성하는 검증 가능한 산출물입니다.
에이전트의 작업 과정을 투명하게 확인할 수 있습니다.

## Artifacts 종류

- **작업 목록 (Task Lists)**: 에이전트가 수행할 단계별 계획
- **구현 계획 (Implementation Plans)**: 아키텍처 결정, 파일 구조
- **스크린샷**: UI 변경 사항 시각적 확인
- **브라우저 녹화**: 기능 동작 확인 영상
- **코드 Diff**: 변경된 코드 비교

## 피드백 제공

Artifacts에 직접 코멘트를 남길 수 있습니다.
문서에 주석 다는 것처럼 에이전트에게 피드백을 전달하면,
에이전트는 실행을 멈추지 않고 피드백을 반영합니다.`,
  },
  {
    id: "workflow",
    title: "개발 워크플로우",
    icon: "🔄",
    content: `## 에이전트 기반 개발 흐름

### 1. 프롬프트 입력
자연어로 원하는 기능을 설명합니다.

예시:
\`\`\`
자동차가 위로 이동하고 충돌하는 다른 자동차들을 피해야 하는
엔드리스 러너 게임을 만들어줘.
난이도는 쉬움/중간/어려움이 있고,
진행할수록 속도가 빨라져야 해.
\`\`\`

### 2. 에이전트 계획 수립
AI가 구현 계획을 세우고 Artifact로 제시합니다.
- 필요한 파일 목록
- 구현 순서
- 기술적 결정 사항

### 3. 계획 검토 및 승인
사용자가 계획을 확인하고 수정 요청 또는 승인합니다.

### 4. 자동 구현
에이전트가 코드 작성, 테스트, 디버깅을 수행합니다.
- 필요한 라이브러리 자동 설치
- 오류 발생 시 자동 수정 시도

### 5. 검증 및 테스트
브라우저 미리보기로 결과를 확인합니다.`,
  },
  {
    id: "multi-agent",
    title: "멀티 에이전트",
    icon: "👥",
    content: `## 멀티 에이전트 시스템

Antigravity의 핵심 차별점은 여러 에이전트가 동시에 협력하는 것입니다.

## 에이전트 역할 분담 예시

### Design Lead
- CSS와 시각 레이아웃 담당
- 백엔드 로직 건드리지 않음

### Backend Engineer
- API 엔드포인트 구현
- 데이터베이스 연동

### QA Agent
- 테스트 코드 작성
- 엣지 케이스 검증

### Research Agent
- 라이브러리 조사
- 최적 솔루션 탐색

## 병렬 작업

Manager View에서 여러 에이전트를 동시에 실행하고
각각의 작업 상태, 산출물, 검증 상태를 한눈에 추적할 수 있습니다.`,
  },
  {
    id: "models",
    title: "지원 모델",
    icon: "🤖",
    content: `## 기본 모델

### Gemini 3 Pro
- 기본 코딩 에이전트
- 코드 추론과 다단계 계획 수립에 최적화

### Gemini 3 Deep Think
- 복잡한 문제 해결
- 깊은 추론이 필요한 작업

### Gemini 3 Flash
- 빠른 응답이 필요한 작업
- 간단한 코드 수정

## 외부 모델 지원

- **Claude Sonnet 4.5 / Opus 4.5** (Anthropic)
- **GPT-OSS-120B** (OpenAI 오픈소스 변형)

## 모델 선택 팁

- 일반 개발: Gemini 3 Pro
- 복잡한 아키텍처: Gemini 3 Deep Think
- 빠른 수정: Gemini 3 Flash`,
  },
  {
    id: "mcp",
    title: "MCP 도구 연동",
    icon: "🔌",
    content: `## MCP (Model Context Protocol)란?

외부 도구를 에이전트에 연결하여 실제 데이터에 접근하도록 하는 시스템입니다.

## 주요 MCP 도구

### FireCrawl
- 웹 스크래핑
- 웹 페이지 데이터 수집

### Supabase
- 데이터베이스 연동
- 실시간 데이터 접근

### Pinecone
- 의미 기반 메모리
- 벡터 검색

## 설정 방법

1. Settings > MCP Tools 메뉴 접근
2. 원하는 도구 선택 및 API 키 입력
3. 워크스페이스별로 활성화

## 주의사항

한 번에 50개 이상의 MCP 도구를 실행하지 마세요.
너무 많은 도구는 에이전트 성능을 저하시킵니다.`,
  },
  {
    id: "rules",
    title: "Rules 설정",
    icon: "📋",
    content: `## Rules란?

AI의 코딩 스타일과 행동을 정의하는 설정입니다.
세 가지 레벨에서 적용됩니다.

## Rules 레벨

### 1. Global Rules
모든 프로젝트에 적용되는 기본 규칙
- 코딩 스타일 (들여쓰기, 네이밍 컨벤션)
- 선호하는 라이브러리

### 2. Workspace Rules
특정 프로젝트에만 적용
- 프로젝트별 기술 스택
- 팀 코딩 가이드라인

### 3. Task Rules
특정 작업에만 적용
- 이번 작업의 특수 요구사항

## 완료 조건 명시

Rules에서 "완료 조건"을 명시하면 AI가 더 철저하게 작업합니다.

예시:
\`\`\`
완료 조건:
- UI가 정상 렌더링되는지 확인
- 모든 엣지 케이스 테스트
- README 문서 업데이트
\`\`\``,
  },
  {
    id: "pricing",
    title: "요금제",
    icon: "💳",
    content: `## 현재 (Public Preview)

**무료**
- 개인 사용자 무료
- Gemini 3 Pro 사용 가능
- 관대한 rate limit

## 예상 요금제 (2026년 이후)

### Individual (개인)
- 무료
- 제한된 rate limit

### Pro
- 월 ~$20
- 높은 rate limit
- 우선 접근

### Enterprise
- 월 ~$40-60/사용자
- SSO
- 데이터 상주 옵션
- 관리자 콘솔
- Google Cloud IAM 연동`,
  },
];

export const antigravityTips: AntigravityTip[] = [
  {
    title: "목표 지향적 프롬프트",
    description: "구현 방법보다 달성하고 싶은 결과를 설명하세요",
    type: "do",
  },
  {
    title: "에이전트 역할 명시",
    description: "각 에이전트에 명확한 책임을 부여하세요",
    type: "do",
  },
  {
    title: "계획 검토 후 승인",
    description: "에이전트가 제시한 계획을 꼼꼼히 확인하세요",
    type: "do",
  },
  {
    title: "디자인 참고자료 제공",
    description: "참고 이미지 3-5개를 폴더에 넣어 시각적 기준을 제시하세요",
    type: "do",
  },
  {
    title: "작업별 폴더 구성",
    description: "관련 파일을 체계적으로 정리하세요",
    type: "do",
  },
  {
    title: "관련 없는 작업 혼합",
    description: "서로 다른 기능을 한 번에 요청하면 혼란이 생깁니다",
    type: "dont",
  },
  {
    title: "너무 많은 MCP 도구",
    description: "50개 이상의 도구를 동시에 사용하지 마세요",
    type: "dont",
  },
  {
    title: "생명 관련 시스템 사용",
    description: "금융, 의료, 인프라 등에는 아직 부적합합니다",
    type: "dont",
  },
];

export const antigravityUseCases = [
  {
    title: "UI 프로토타이핑",
    description: "자연어로 UI를 설명하여 빠르게 생성",
    icon: "🎨",
  },
  {
    title: "대규모 리팩토링",
    description: "여러 파일에 걸친 코드 구조 개선",
    icon: "🔧",
  },
  {
    title: "버그 수정",
    description: "대규모 코드베이스에서 버그 추적 및 수정",
    icon: "🐛",
  },
  {
    title: "앱 스캐폴딩",
    description: "완전한 애플리케이션 구조 자동 생성",
    icon: "🏗️",
  },
  {
    title: "복잡한 기능 구현",
    description: "인증, 결제 등 복잡한 기능 빠르게 구현",
    icon: "⚡",
  },
  {
    title: "MVP 개발",
    description: "아이디어를 빠르게 프로토타입으로 전환",
    icon: "🚀",
  },
];
