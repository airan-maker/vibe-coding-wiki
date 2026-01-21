import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTutorials, getTutorialById } from "@/lib/tutorials-data";
import TutorialSteps from "@/components/TutorialSteps";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  return tutorials.map((tutorial) => ({
    id: tutorial.id,
  }));
}

export default async function TutorialPage({ params }: PageProps) {
  const { id } = await params;
  const tutorial = getTutorialById(id);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="p-4 pt-16 sm:p-6 sm:pt-16 lg:p-8 lg:pt-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-xs sm:text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-300">
          홈
        </Link>
        <span className="text-gray-600 mx-2">/</span>
        <Link href="/tutorials" className="text-gray-500 hover:text-gray-300">
          실전 프로젝트
        </Link>
        <span className="text-gray-600 mx-2">/</span>
        <span className="text-gray-300">{tutorial.title}</span>
      </nav>

      {/* Header */}
      <header
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${tutorial.color} p-1 mb-8`}
      >
        <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="text-5xl sm:text-6xl">{tutorial.icon}</div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    tutorial.difficulty === "초급"
                      ? "bg-green-900/50 text-green-300"
                      : tutorial.difficulty === "중급"
                      ? "bg-yellow-900/50 text-yellow-300"
                      : "bg-red-900/50 text-red-300"
                  }`}
                >
                  {tutorial.difficulty}
                </span>
                <span className="text-gray-500 text-xs">
                  {tutorial.steps.length}단계 · 약 {tutorial.estimatedPrompts}개 프롬프트
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{tutorial.subtitle}</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {tutorial.title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {tutorial.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tutorial.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How to Use */}
      <section className="mb-8 bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700">
        <h2 className="text-lg font-semibold text-white mb-3">📖 사용 방법</h2>
        <ol className="space-y-2 text-gray-400 text-sm">
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">1.</span>
            각 단계의 프롬프트를 <strong className="text-white">복사</strong>합니다
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">2.</span>
            Claude Code (Antigravity)에 <strong className="text-white">붙여넣기</strong>합니다
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">3.</span>
            결과를 확인하고 필요시 <strong className="text-white">수정/보완</strong>을 요청합니다
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">4.</span>
            다음 단계로 넘어갑니다. 이전 단계의 결과가 <strong className="text-white">컨텍스트로 유지</strong>됩니다
          </li>
        </ol>
      </section>

      {/* Steps */}
      <TutorialSteps steps={tutorial.steps} />

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm mb-4">
          튜토리얼을 완료하셨나요? 🎉
        </p>
        <Link
          href="/tutorials"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          다른 프로젝트 보기
        </Link>
      </div>
    </div>
  );
}
