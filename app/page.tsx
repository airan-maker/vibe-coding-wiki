import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { getAllCategories } from "@/lib/wiki-data";

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="p-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Vibe Coding
          <span className="text-purple-400"> Wiki</span>
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          AI(Claude Code)와 함께 효율적으로 개발하기 위한 프롬프트 템플릿 모음
        </p>
        <SearchBar />
      </header>

      {/* Introduction */}
      <section className="mb-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-800/30">
        <h2 className="text-xl font-semibold text-white mb-4">
          이 Wiki는 어떻게 사용하나요?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div className="flex gap-3">
            <span className="text-2xl">1️⃣</span>
            <div>
              <h3 className="font-medium text-white">카테고리 선택</h3>
              <p className="text-sm">필요한 기능 카테고리를 선택하세요</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">2️⃣</span>
            <div>
              <h3 className="font-medium text-white">프롬프트 복사</h3>
              <p className="text-sm">상황에 맞는 프롬프트를 복사하세요</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">3️⃣</span>
            <div>
              <h3 className="font-medium text-white">Claude에게 전달</h3>
              <p className="text-sm">필요에 맞게 수정 후 사용하세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">카테고리</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/wiki/${category.id}`}
              className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all hover:bg-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {category.prompts.length}개의 템플릿
                </span>
                <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="mt-12 bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">
          💡 프롬프트 작성 핵심 원칙
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <div>
                <h3 className="text-white font-medium">구체적으로 작성</h3>
                <p className="text-gray-400 text-sm">
                  "로그인 만들어줘" → "NextAuth.js로 Google OAuth 로그인 구현해줘"
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <div>
                <h3 className="text-white font-medium">옵션을 나열</h3>
                <p className="text-gray-400 text-sm">
                  필요한 기능을 bullet point로 정리
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <div>
                <h3 className="text-white font-medium">권한/조건 명시</h3>
                <p className="text-gray-400 text-sm">
                  "(인증 필요)", "(작성자만)" 같은 조건 추가
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div>
                <h3 className="text-white font-medium">모호하게 작성</h3>
                <p className="text-gray-400 text-sm">
                  "결제 기능 추가해줘" - 어떤 결제? 구독? 일회성?
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div>
                <h3 className="text-white font-medium">기술 스택 생략</h3>
                <p className="text-gray-400 text-sm">
                  AI가 임의로 선택하면 원치 않는 결과가 나옴
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div>
                <h3 className="text-white font-medium">에러 처리 누락</h3>
                <p className="text-gray-400 text-sm">
                  명시하지 않으면 에러 핸들링 없는 코드가 생성됨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>
          Built with Antigravity + Claude Code |
          <a href="https://github.com" className="text-purple-400 hover:text-purple-300 ml-1">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
