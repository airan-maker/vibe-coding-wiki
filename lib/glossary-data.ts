export interface GlossaryTerm {
  id: string;
  term: string;
  shortDesc: string; // 한 줄 설명
  explanation: string; // 자세한 설명
  analogy?: string; // 비유로 설명
  example?: string; // 실제 사용 예시
  related?: string[]; // 관련 용어
  category: "기본" | "프론트엔드" | "백엔드" | "데이터" | "배포" | "도구";
}

export const glossaryTerms: GlossaryTerm[] = [
  // ===== 기본 용어 =====
  {
    id: "api",
    term: "API",
    shortDesc: "프로그램끼리 대화하는 방법",
    explanation: `API(Application Programming Interface)는 프로그램들이 서로 소통하는 방법입니다.

예를 들어, 날씨 앱이 기상청 데이터를 가져올 때 API를 사용합니다. "오늘 서울 날씨 알려줘"라고 요청하면, 기상청 서버가 "맑음, 23도"라고 응답하는 식이죠.`,
    analogy: `식당의 메뉴판과 비슷해요. 메뉴판(API)을 보고 주문하면, 주방(서버)에서 음식(데이터)을 가져다줍니다. 주방이 어떻게 요리하는지 몰라도 메뉴판만 보면 주문할 수 있어요.`,
    example: `"날씨 API 연동해줘" → 날씨 정보를 가져오는 기능 추가
"카카오 로그인 API 써줘" → 카카오 계정으로 로그인하는 기능`,
    related: ["REST", "JSON", "서버"],
    category: "기본",
  },
  {
    id: "json",
    term: "JSON",
    shortDesc: "데이터를 주고받는 형식",
    explanation: `JSON(JavaScript Object Notation)은 데이터를 저장하고 전달하는 형식입니다.

사람이 읽기 쉽고, 컴퓨터도 이해하기 쉬워서 거의 모든 곳에서 사용됩니다.`,
    analogy: `택배 상자에 붙이는 송장과 비슷해요. "보내는 사람: 홍길동, 받는 사람: 김철수, 내용물: 책" 이렇게 정해진 형식으로 적으면 누구나 알아볼 수 있죠.`,
    example: `{
  "name": "홍길동",
  "age": 25,
  "city": "서울"
}

이렇게 중괄호 안에 "키": "값" 형태로 데이터를 담습니다.`,
    related: ["API", "데이터베이스"],
    category: "기본",
  },
  {
    id: "server",
    term: "서버",
    shortDesc: "24시간 돌아가는 컴퓨터",
    explanation: `서버는 인터넷에 연결되어 요청을 받고 응답하는 컴퓨터입니다.

여러분이 웹사이트에 접속하면, 그 사이트의 서버가 페이지를 보내줍니다. 서버는 보통 24시간 켜져 있어요.`,
    analogy: `편의점과 비슷해요. 손님(사용자)이 와서 물건(데이터)을 요청하면, 편의점(서버)이 물건을 찾아서 줍니다. 24시간 영업하는 것처럼 서버도 항상 켜져 있어요.`,
    example: `"서버에 저장해줘" → 데이터를 인터넷 컴퓨터에 저장
"서버가 죽었어" → 그 컴퓨터가 작동을 멈췄다는 뜻`,
    related: ["API", "데이터베이스", "배포"],
    category: "기본",
  },
  {
    id: "database",
    term: "데이터베이스 (DB)",
    shortDesc: "데이터를 저장하는 창고",
    explanation: `데이터베이스는 데이터를 체계적으로 저장하고 관리하는 시스템입니다.

회원 정보, 게시글, 주문 내역 등을 저장할 때 사용합니다. 엑셀처럼 표 형태로 데이터를 관리한다고 생각하면 됩니다.`,
    analogy: `도서관과 비슷해요. 책(데이터)을 분류해서 보관하고, 원하는 책을 빠르게 찾을 수 있게 해줍니다. "저자가 홍길동인 책 찾아줘"처럼 조건으로 검색할 수 있어요.`,
    example: `"사용자 DB 만들어줘" → 회원 정보를 저장할 테이블 생성
"Supabase 연결해줘" → Supabase라는 DB 서비스를 사용`,
    related: ["Supabase", "SQL", "서버"],
    category: "기본",
  },
  {
    id: "frontend",
    term: "프론트엔드",
    shortDesc: "사용자가 보는 화면",
    explanation: `프론트엔드는 사용자가 직접 보고 상호작용하는 부분입니다.

버튼, 입력창, 이미지, 애니메이션 등 눈에 보이는 모든 것이 프론트엔드입니다.`,
    analogy: `식당의 홀과 비슷해요. 손님이 앉는 테이블, 메뉴판, 인테리어 등 손님이 직접 보고 경험하는 부분이에요. 주방(백엔드)은 안 보이죠.`,
    example: `"버튼 색깔 바꿔줘" → 프론트엔드 작업
"로딩 애니메이션 추가해줘" → 프론트엔드 작업`,
    related: ["백엔드", "React", "CSS"],
    category: "기본",
  },
  {
    id: "backend",
    term: "백엔드",
    shortDesc: "뒤에서 일하는 부분",
    explanation: `백엔드는 사용자 눈에 보이지 않는 서버 쪽 작업입니다.

로그인 처리, 데이터 저장, 결제 처리 등 "뒤에서" 일어나는 모든 것이 백엔드입니다.`,
    analogy: `식당의 주방과 비슷해요. 손님은 주방을 못 보지만, 주문을 받으면 요리를 만들어서 내보내죠. 눈에 안 보여도 핵심적인 일을 합니다.`,
    example: `"로그인 기능 만들어줘" → 백엔드 작업 포함
"결제 처리해줘" → 백엔드 작업`,
    related: ["프론트엔드", "서버", "API"],
    category: "기본",
  },
  {
    id: "deploy",
    term: "배포",
    shortDesc: "만든 걸 인터넷에 올리기",
    explanation: `배포는 만든 웹사이트나 앱을 인터넷에 공개하는 것입니다.

배포 전에는 내 컴퓨터에서만 볼 수 있지만, 배포 후에는 누구나 URL로 접속할 수 있어요.`,
    analogy: `책을 출판하는 것과 비슷해요. 원고(코드)를 완성하고, 출판사(Vercel 등)를 통해 책(웹사이트)을 세상에 내놓는 거예요.`,
    example: `"Vercel에 배포해줘" → Vercel 서비스를 통해 인터넷에 공개
"배포 URL 알려줘" → 공개된 웹사이트 주소`,
    related: ["Vercel", "GitHub", "서버"],
    category: "기본",
  },

  // ===== 프론트엔드 =====
  {
    id: "html",
    term: "HTML",
    shortDesc: "웹페이지의 뼈대",
    explanation: `HTML(HyperText Markup Language)은 웹페이지의 구조를 만드는 언어입니다.

제목, 문단, 이미지, 버튼 등 "무엇이 있는지"를 정의합니다. 디자인(CSS)이나 동작(JavaScript)과는 별개예요.`,
    analogy: `집의 뼈대(골조)와 비슷해요. 방이 몇 개인지, 문이 어디 있는지 구조를 잡는 거예요. 벽지(CSS)나 가전제품(JavaScript)은 나중에 추가하죠.`,
    example: `<h1>제목</h1>
<p>문단입니다</p>
<button>클릭</button>

이런 태그들로 구조를 만들어요.`,
    related: ["CSS", "JavaScript", "React"],
    category: "프론트엔드",
  },
  {
    id: "css",
    term: "CSS",
    shortDesc: "웹페이지의 디자인",
    explanation: `CSS(Cascading Style Sheets)는 웹페이지를 예쁘게 꾸미는 언어입니다.

색상, 크기, 위치, 애니메이션 등 "어떻게 보이는지"를 정의합니다.`,
    analogy: `집의 인테리어와 비슷해요. 뼈대(HTML)가 있으면, 벽지 색깔, 가구 배치, 조명 등을 꾸미는 거예요.`,
    example: `button {
  background-color: blue;
  color: white;
  padding: 10px;
}

이렇게 하면 버튼이 파란색 배경에 흰 글씨가 됩니다.`,
    related: ["HTML", "Tailwind CSS", "프론트엔드"],
    category: "프론트엔드",
  },
  {
    id: "javascript",
    term: "JavaScript",
    shortDesc: "웹페이지를 움직이게 하는 언어",
    explanation: `JavaScript는 웹페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다.

버튼 클릭 처리, 데이터 불러오기, 애니메이션 등을 만들 수 있어요.`,
    analogy: `집의 가전제품과 비슷해요. 뼈대(HTML)와 인테리어(CSS)가 있으면, 에어컨, TV, 조명 스위치처럼 실제로 작동하는 것들을 추가하는 거예요.`,
    example: `"버튼 누르면 알림 뜨게 해줘" → JavaScript 작업
"스크롤하면 메뉴 숨겨줘" → JavaScript 작업`,
    related: ["TypeScript", "React", "Node.js"],
    category: "프론트엔드",
  },
  {
    id: "typescript",
    term: "TypeScript",
    shortDesc: "더 안전한 JavaScript",
    explanation: `TypeScript는 JavaScript에 타입 검사를 추가한 언어입니다.

실수로 숫자 대신 문자를 넣는 등의 오류를 미리 잡아줍니다.`,
    analogy: `맞춤법 검사기가 있는 문서 편집기와 비슷해요. 글(JavaScript)을 쓸 때 틀린 부분을 빨간 줄로 알려주는 것처럼, 코드의 실수를 미리 알려줍니다.`,
    example: `AI가 만드는 코드는 대부분 TypeScript입니다.
.ts 또는 .tsx 파일이 TypeScript 파일이에요.`,
    related: ["JavaScript", "React", "Next.js"],
    category: "프론트엔드",
  },
  {
    id: "react",
    term: "React",
    shortDesc: "UI를 만드는 도구",
    explanation: `React는 사용자 인터페이스(UI)를 만드는 JavaScript 라이브러리입니다.

페이스북에서 만들었고, 컴포넌트라는 재사용 가능한 조각으로 화면을 구성합니다.`,
    analogy: `레고 블록과 비슷해요. 버튼, 카드, 헤더 같은 블록(컴포넌트)을 만들어두고, 이걸 조합해서 페이지를 만들어요. 같은 블록을 여러 곳에 재사용할 수 있죠.`,
    example: `"React 컴포넌트 만들어줘" → 재사용 가능한 UI 조각 생성
AI가 만드는 웹앱은 대부분 React 기반입니다.`,
    related: ["Next.js", "컴포넌트", "JavaScript"],
    category: "프론트엔드",
  },
  {
    id: "nextjs",
    term: "Next.js",
    shortDesc: "React를 더 강력하게",
    explanation: `Next.js는 React를 기반으로 한 프레임워크입니다.

페이지 라우팅, 서버 기능, 최적화 등을 자동으로 처리해줘서 웹사이트를 더 쉽게 만들 수 있어요.`,
    analogy: `React가 레고 블록이라면, Next.js는 레고 블록 + 설명서 + 완성 키트예요. 블록만 있으면 뭘 만들지 고민해야 하지만, 키트가 있으면 바로 멋진 걸 만들 수 있죠.`,
    example: `AI에게 "프로젝트 만들어줘"라고 하면 보통 Next.js를 사용합니다.
Vercel과 궁합이 좋아서 배포도 쉬워요.`,
    related: ["React", "Vercel", "TypeScript"],
    category: "프론트엔드",
  },
  {
    id: "tailwindcss",
    term: "Tailwind CSS",
    shortDesc: "클래스로 디자인하는 CSS",
    explanation: `Tailwind CSS는 미리 만들어진 클래스를 조합해서 디자인하는 CSS 프레임워크입니다.

'bg-blue-500'처럼 클래스 이름만으로 스타일을 적용할 수 있어요.`,
    analogy: `색연필 세트와 비슷해요. 직접 물감을 섞을 필요 없이, 이미 만들어진 색연필(클래스)을 골라서 칠하면 돼요.`,
    example: `<button className="bg-blue-500 text-white p-4 rounded">
  클릭
</button>

이렇게 클래스 이름만으로 파란 버튼이 완성됩니다.`,
    related: ["CSS", "React", "Next.js"],
    category: "프론트엔드",
  },
  {
    id: "component",
    term: "컴포넌트",
    shortDesc: "재사용 가능한 UI 조각",
    explanation: `컴포넌트는 독립적으로 재사용할 수 있는 UI 조각입니다.

버튼, 카드, 모달 등을 컴포넌트로 만들면 여러 곳에서 재사용할 수 있어요.`,
    analogy: `공장에서 만든 부품과 비슷해요. 나사, 볼트처럼 규격화된 부품을 여러 제품에 쓸 수 있듯이, 버튼 컴포넌트를 여러 페이지에서 쓸 수 있어요.`,
    example: `"버튼 컴포넌트 만들어줘" → 재사용 가능한 버튼 생성
"카드 컴포넌트로 목록 보여줘" → 카드 형태의 UI 생성`,
    related: ["React", "props", "프론트엔드"],
    category: "프론트엔드",
  },

  // ===== 백엔드 & 데이터 =====
  {
    id: "supabase",
    term: "Supabase",
    shortDesc: "쉬운 데이터베이스 서비스",
    explanation: `Supabase는 데이터베이스, 인증, 스토리지를 제공하는 서비스입니다.

복잡한 서버 설정 없이 데이터를 저장하고 사용자 로그인을 처리할 수 있어요.`,
    analogy: `올인원 사무용품 세트와 비슷해요. 펜, 노트, 파일철이 다 들어있듯이, DB, 로그인, 파일 저장이 한 번에 제공됩니다.`,
    example: `"Supabase로 로그인 만들어줘" → 소셜 로그인 포함 인증 기능
"Supabase에 데이터 저장해줘" → 데이터베이스 연동`,
    related: ["데이터베이스", "인증", "Firebase"],
    category: "백엔드",
  },
  {
    id: "rest",
    term: "REST API",
    shortDesc: "API를 만드는 규칙",
    explanation: `REST는 API를 설계하는 방식 중 하나입니다.

URL로 자원을 표현하고, HTTP 메서드(GET, POST 등)로 동작을 구분해요.`,
    analogy: `도서관 대출 시스템과 비슷해요.
- GET /books → 책 목록 보기
- POST /books → 새 책 등록
- DELETE /books/1 → 1번 책 삭제

URL과 동작이 직관적으로 연결됩니다.`,
    example: `"REST API 만들어줘" → CRUD 기능이 있는 API 생성
GET, POST, PUT, DELETE 같은 용어가 나오면 REST API입니다.`,
    related: ["API", "서버", "JSON"],
    category: "백엔드",
  },
  {
    id: "authentication",
    term: "인증 (Authentication)",
    shortDesc: "누구인지 확인하기",
    explanation: `인증은 사용자가 누구인지 확인하는 과정입니다.

로그인할 때 아이디/비밀번호를 입력하거나, 구글 계정으로 로그인하는 것이 인증입니다.`,
    analogy: `회원증 확인과 비슷해요. 헬스장에 들어갈 때 회원증을 보여주면 "아, 홍길동 회원이시군요" 하고 확인하는 것처럼요.`,
    example: `"로그인 기능 만들어줘" → 인증 기능 구현
"구글 로그인 추가해줘" → 소셜 인증 추가`,
    related: ["Supabase", "OAuth", "세션"],
    category: "백엔드",
  },
  {
    id: "env",
    term: "환경변수 (.env)",
    shortDesc: "비밀 정보 저장소",
    explanation: `환경변수는 비밀번호, API 키 등 민감한 정보를 저장하는 곳입니다.

코드에 직접 쓰면 노출될 수 있어서, .env 파일에 따로 보관합니다.`,
    analogy: `금고와 비슷해요. 중요한 물건(API 키)을 금고(.env)에 넣어두고, 필요할 때만 꺼내 쓰는 거예요. 금고 내용은 아무에게도 안 보여주고요.`,
    example: `NEXT_PUBLIC_API_KEY=abc123
SUPABASE_URL=https://xxx.supabase.co

이런 식으로 저장하고, 코드에서 불러와 사용합니다.`,
    related: ["API", "배포", "보안"],
    category: "백엔드",
  },

  // ===== 배포 & 도구 =====
  {
    id: "vercel",
    term: "Vercel",
    shortDesc: "웹사이트 배포 서비스",
    explanation: `Vercel은 웹사이트를 쉽게 배포할 수 있는 서비스입니다.

GitHub에 코드를 올리면 자동으로 배포해주고, URL도 제공해줍니다. Next.js를 만든 회사예요.`,
    analogy: `원클릭 출판 서비스와 비슷해요. 원고(코드)만 올리면 알아서 책(웹사이트)을 만들어서 서점(인터넷)에 올려줍니다.`,
    example: `"Vercel에 배포해줘" → 인터넷에 웹사이트 공개
AI가 만든 프로젝트는 보통 Vercel로 배포합니다.`,
    related: ["배포", "GitHub", "Next.js"],
    category: "배포",
  },
  {
    id: "github",
    term: "GitHub",
    shortDesc: "코드 저장소 & 협업 도구",
    explanation: `GitHub는 코드를 저장하고 버전을 관리하는 서비스입니다.

코드의 변경 이력을 추적하고, 다른 사람과 협업할 수 있어요.`,
    analogy: `구글 드라이브 + 위키피디아와 비슷해요. 파일(코드)을 저장하고, 변경 이력을 보고, 여러 사람이 함께 수정할 수 있어요.`,
    example: `"GitHub에 올려줘" → 코드를 저장소에 업로드
"깃헙 Push" → 변경된 코드를 업로드`,
    related: ["Git", "Vercel", "배포"],
    category: "도구",
  },
  {
    id: "git",
    term: "Git",
    shortDesc: "코드 버전 관리 도구",
    explanation: `Git은 코드의 변경 이력을 관리하는 도구입니다.

언제, 누가, 무엇을 바꿨는지 기록하고, 필요하면 이전 버전으로 돌아갈 수 있어요.`,
    analogy: `게임의 세이브 포인트와 비슷해요. 중요한 지점마다 저장(commit)해두면, 나중에 실수해도 그 지점으로 돌아갈 수 있어요.`,
    example: `"커밋해줘" → 현재 상태를 저장
"푸시해줘" → 저장한 내용을 GitHub에 업로드`,
    related: ["GitHub", "commit", "push"],
    category: "도구",
  },
  {
    id: "npm",
    term: "npm",
    shortDesc: "패키지(라이브러리) 관리자",
    explanation: `npm(Node Package Manager)은 다른 사람이 만든 코드를 쉽게 가져다 쓸 수 있게 해주는 도구입니다.

수백만 개의 패키지가 있어서, 필요한 기능을 직접 만들 필요 없이 가져다 쓸 수 있어요.`,
    analogy: `앱스토어와 비슷해요. 필요한 앱(패키지)을 검색해서 설치하면 바로 쓸 수 있듯이, 필요한 기능을 npm으로 설치하면 바로 쓸 수 있어요.`,
    example: `"npm install" → 필요한 패키지들 설치
"npm run dev" → 개발 서버 실행
"npm run build" → 배포용으로 빌드`,
    related: ["Node.js", "package.json", "yarn"],
    category: "도구",
  },
  {
    id: "terminal",
    term: "터미널 (명령어)",
    shortDesc: "텍스트로 컴퓨터 조작",
    explanation: `터미널은 텍스트 명령어로 컴퓨터를 조작하는 도구입니다.

마우스 클릭 대신 글자를 입력해서 파일을 만들고, 프로그램을 실행하고, 서버를 관리합니다.`,
    analogy: `마법 주문과 비슷해요. "npm run dev"라고 주문(명령)을 외치면 개발 서버가 실행되는 것처럼, 정해진 명령어로 원하는 동작을 실행할 수 있어요.`,
    example: `"터미널에서 실행해줘" → 명령어를 실행
AI가 알려주는 명령어를 복사해서 붙여넣기하면 됩니다.`,
    related: ["npm", "Git", "CLI"],
    category: "도구",
  },
  {
    id: "localhost",
    term: "localhost",
    shortDesc: "내 컴퓨터에서만 보이는 서버",
    explanation: `localhost는 내 컴퓨터에서 실행 중인 서버를 가리킵니다.

개발할 때 localhost:3000 같은 주소로 접속하면, 내 컴퓨터에서만 볼 수 있는 웹사이트가 열려요.`,
    analogy: `거울과 비슷해요. 거울에 비친 내 모습은 나만 볼 수 있듯이, localhost는 내 컴퓨터에서만 접속 가능해요. 배포해야 다른 사람도 볼 수 있어요.`,
    example: `"localhost:3000에서 확인해봐" → 브라우저에서 이 주소로 접속
개발 중인 사이트를 미리 확인할 때 사용합니다.`,
    related: ["서버", "배포", "npm run dev"],
    category: "도구",
  },
  {
    id: "responsive",
    term: "반응형 (Responsive)",
    shortDesc: "화면 크기에 맞게 변하는 디자인",
    explanation: `반응형 디자인은 PC, 태블릿, 모바일 등 다양한 화면 크기에 맞게 레이아웃이 변하는 것입니다.

하나의 웹사이트가 어떤 기기에서도 잘 보이게 해줍니다.`,
    analogy: `변신 로봇과 비슷해요. 같은 로봇이지만 상황에 따라 자동차도 되고, 비행기도 되는 것처럼, 같은 웹사이트가 화면 크기에 따라 형태가 변해요.`,
    example: `"모바일에서도 잘 보이게 해줘" → 반응형 디자인 적용
"반응형으로 만들어줘" → 모든 화면 크기 지원`,
    related: ["CSS", "Tailwind CSS", "모바일"],
    category: "프론트엔드",
  },
  {
    id: "build",
    term: "빌드 (Build)",
    shortDesc: "배포용으로 코드 변환",
    explanation: `빌드는 개발용 코드를 배포용으로 변환하는 과정입니다.

코드를 압축하고, 최적화해서 사용자에게 빠르게 전달할 수 있게 만들어요.`,
    analogy: `원고를 인쇄용 파일로 만드는 것과 비슷해요. 워드 문서(개발 코드)를 PDF(배포용 코드)로 변환해서 누구나 볼 수 있게 하는 거예요.`,
    example: `"빌드해줘" → npm run build 실행
"빌드 에러" → 배포용 변환 과정에서 오류 발생`,
    related: ["배포", "npm", "Vercel"],
    category: "배포",
  },
];

// 카테고리별로 그룹화
export function getTermsByCategory(): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};

  glossaryTerms.forEach((term) => {
    if (!grouped[term.category]) {
      grouped[term.category] = [];
    }
    grouped[term.category].push(term);
  });

  return grouped;
}

// ID로 용어 찾기
export function getTermById(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.id === id);
}

// 검색
export function searchTerms(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.shortDesc.toLowerCase().includes(lowerQuery) ||
      term.explanation.toLowerCase().includes(lowerQuery)
  );
}

// 카테고리 순서 및 아이콘
export const categoryInfo: Record<
  string,
  { icon: string; description: string }
> = {
  기본: { icon: "📚", description: "개발의 기초가 되는 핵심 개념" },
  프론트엔드: { icon: "🎨", description: "사용자가 보는 화면 관련 용어" },
  백엔드: { icon: "⚙️", description: "서버와 데이터 처리 관련 용어" },
  데이터: { icon: "🗄️", description: "데이터 저장 및 관리 관련 용어" },
  배포: { icon: "🚀", description: "서비스 공개 관련 용어" },
  도구: { icon: "🛠️", description: "개발에 사용하는 도구들" },
};

export const categoryOrder = [
  "기본",
  "프론트엔드",
  "백엔드",
  "배포",
  "도구",
];
