import Link from "next/link";
import { getAllTutorials } from "@/lib/tutorials-data";

export default function TutorialsPage() {
  const tutorials = getAllTutorials();

  return (
    <div className="p-4 pt-16 sm:p-6 sm:pt-16 lg:p-8 lg:pt-8">
      {/* Header */}
      <header className="mb-8 lg:mb-12">
        <nav className="mb-4 text-xs sm:text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-300">
            홈
          </Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-gray-300">실전 프로젝트</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          🚀 실전 프로젝트
          <span className="text-purple-400"> Step-by-Step</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          아이디어부터 배포까지, 실제 서비스를 만드는 전체 과정을 따라해보세요
        </p>
      </header>

      {/* Tutorial Cards */}
      <div className="grid gap-6">
        {tutorials.map((tutorial) => (
          <Link
            key={tutorial.id}
            href={`/tutorials/${tutorial.id}`}
            className="group block"
          >
            <div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${tutorial.color} p-1`}
            >
              <div className="bg-gray-900 rounded-xl p-6 sm:p-8 hover:bg-gray-900/90 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="text-5xl sm:text-6xl">{tutorial.icon}</div>

                  {/* Content */}
                  <div className="flex-1">
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
                        약 {tutorial.estimatedPrompts}개 프롬프트
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-1">
                      {tutorial.subtitle}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {tutorial.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {tutorial.description}
                    </p>

                    {/* Tech Stack */}
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

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center">
                    <span className="text-2xl text-gray-600 group-hover:text-white group-hover:translate-x-2 transition-all">
                      →
                    </span>
                  </div>
                </div>

                {/* Steps Preview */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-gray-500 text-xs mb-3">주요 단계:</p>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.steps.slice(0, 5).map((step) => (
                      <span
                        key={step.step}
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-400 rounded"
                      >
                        {step.step}. {step.title}
                      </span>
                    ))}
                    {tutorial.steps.length > 5 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{tutorial.steps.length - 5}개 더
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          더 많은 프로젝트가 곧 추가됩니다!
        </p>
        <p className="text-gray-600 text-xs mt-2">
          원하는 프로젝트가 있다면 제안해주세요
        </p>
      </div>
    </div>
  );
}
