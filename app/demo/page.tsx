import GlassCard, {
  GlassContainer,
  GlassButton,
  GlassInput,
} from "@/components/GlassCard";

export default function DemoPage() {
  return (
    <div className="min-h-screen p-8 pt-20 lg:pt-8">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Glassmorphism 컴포넌트
        </h1>
        <p className="text-gray-400">
          반투명 유리 효과의 모던한 UI 컴포넌트 데모
        </p>
      </div>

      {/* Demo Section with Gradient Background */}
      <div className="max-w-6xl mx-auto">
        {/* Gradient Background for Glass Effect */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-12">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-pink-600/30" />

          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-30" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-30" />
          <div className="absolute top-40 right-40 w-64 h-64 bg-pink-500 rounded-full filter blur-[100px] opacity-20" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-8">
              ✨ Glass Card 변형
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Default variant */}
              <GlassCard variant="default">
                <div className="text-purple-400 text-2xl mb-3">🎨</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Default
                </h3>
                <p className="text-gray-300 text-sm">
                  기본 글래스모피즘 스타일. 다크/라이트 모드 모두 지원합니다.
                </p>
              </GlassCard>

              {/* Light variant */}
              <GlassCard variant="light">
                <div className="text-blue-400 text-2xl mb-3">💎</div>
                <h3 className="text-lg font-semibold text-white mb-2">Light</h3>
                <p className="text-gray-300 text-sm">
                  더 밝은 반투명 효과. 그라데이션 배경에서 잘 보입니다.
                </p>
              </GlassCard>

              {/* Dark variant */}
              <GlassCard variant="dark">
                <div className="text-green-400 text-2xl mb-3">🌙</div>
                <h3 className="text-lg font-semibold text-white mb-2">Dark</h3>
                <p className="text-gray-300 text-sm">
                  어두운 반투명 효과. 텍스트 가독성이 뛰어납니다.
                </p>
              </GlassCard>
            </div>

            {/* Feature Card */}
            <GlassCard className="mb-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    ✨ Glassmorphism 특징
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      backdrop-blur로 배경 흐림 효과
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      미세한 반투명 테두리
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      부드러운 그림자 효과
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      호버 시 애니메이션
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    🎯 사용 사례
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      대시보드 카드
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      모달 / 팝업
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      네비게이션 바
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      입력 폼
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* Buttons */}
            <h2 className="text-2xl font-bold text-white mb-6">🔘 Glass Buttons</h2>
            <div className="flex flex-wrap gap-4 mb-12">
              <GlassButton variant="primary">Primary Button</GlassButton>
              <GlassButton variant="secondary">Secondary Button</GlassButton>
            </div>

            {/* Input */}
            <h2 className="text-2xl font-bold text-white mb-6">📝 Glass Input</h2>
            <div className="max-w-md">
              <GlassInput placeholder="이메일을 입력하세요..." />
            </div>
          </div>
        </div>

        {/* Glass Container Demo */}
        <h2 className="text-2xl font-bold text-white mb-6">
          🎨 Glass Container (그라데이션 배경)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <GlassContainer gradient="purple">
            <GlassCard>
              <h3 className="text-lg font-semibold text-white mb-2">Purple</h3>
              <p className="text-gray-300 text-sm">보라색 그라데이션 배경</p>
            </GlassCard>
          </GlassContainer>

          <GlassContainer gradient="blue">
            <GlassCard>
              <h3 className="text-lg font-semibold text-white mb-2">Blue</h3>
              <p className="text-gray-300 text-sm">파란색 그라데이션 배경</p>
            </GlassCard>
          </GlassContainer>

          <GlassContainer gradient="green">
            <GlassCard>
              <h3 className="text-lg font-semibold text-white mb-2">Green</h3>
              <p className="text-gray-300 text-sm">초록색 그라데이션 배경</p>
            </GlassCard>
          </GlassContainer>

          <GlassContainer gradient="orange">
            <GlassCard>
              <h3 className="text-lg font-semibold text-white mb-2">Orange</h3>
              <p className="text-gray-300 text-sm">주황색 그라데이션 배경</p>
            </GlassCard>
          </GlassContainer>

          <GlassContainer gradient="pink">
            <GlassCard>
              <h3 className="text-lg font-semibold text-white mb-2">Pink</h3>
              <p className="text-gray-300 text-sm">핑크색 그라데이션 배경</p>
            </GlassCard>
          </GlassContainer>
        </div>

        {/* Code Example */}
        <GlassCard hover={false} className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">
            💻 사용 예시
          </h3>
          <pre className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto text-sm">
            <code className="text-gray-300">{`import GlassCard, { GlassContainer, GlassButton } from "@/components/GlassCard";

// 기본 사용
<GlassCard>
  <h3>제목</h3>
  <p>내용</p>
</GlassCard>

// 변형 사용
<GlassCard variant="light">...</GlassCard>
<GlassCard variant="dark">...</GlassCard>

// 호버 효과 비활성화
<GlassCard hover={false}>...</GlassCard>

// 그라데이션 배경과 함께
<GlassContainer gradient="purple">
  <GlassCard>...</GlassCard>
</GlassContainer>

// 버튼
<GlassButton variant="primary">Click</GlassButton>`}</code>
          </pre>
        </GlassCard>
      </div>
    </div>
  );
}
