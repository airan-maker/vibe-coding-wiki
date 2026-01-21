import Link from "next/link";
import { getAllTutorials, getTutorialsByDifficulty } from "@/lib/tutorials-data";

const difficultyConfig = {
  beginner: {
    label: "Beginner",
    emoji: "🟢",
    color: "bg-green-900/50 text-green-300",
    description: "당장 필요한 웹앱을 만들어보자",
  },
  intermediate: {
    label: "Intermediate",
    emoji: "🟡",
    color: "bg-yellow-900/50 text-yellow-300",
    description: "매일 사용하는 서비스 MVP를 만들어보자",
  },
  advanced: {
    label: "Advanced",
    emoji: "🔴",
    color: "bg-red-900/50 text-red-300",
    description: "이제 진짜 실전입니다",
  },
};

export default function TutorialsPage() {
  const beginnerTutorials = getTutorialsByDifficulty("beginner");
  const intermediateTutorials = getTutorialsByDifficulty("intermediate");
  const advancedTutorials = getTutorialsByDifficulty("advanced");

  return (
    <div className="p-4 pt-16 sm:p-6 sm:pt-16 lg:p-8 lg:pt-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-10 lg:mb-14">
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

      {/* Beginner Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{difficultyConfig.beginner.emoji}</span>
          <h2 className="text-xl font-bold text-white">Beginner</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6">{difficultyConfig.beginner.description}</p>
        <div className="grid gap-4">
          {beginnerTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{difficultyConfig.intermediate.emoji}</span>
          <h2 className="text-xl font-bold text-white">Intermediate</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6">{difficultyConfig.intermediate.description}</p>
        <div className="grid gap-4">
          {intermediateTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </section>

      {/* Advanced Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{difficultyConfig.advanced.emoji}</span>
          <h2 className="text-xl font-bold text-white">Advanced</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6">{difficultyConfig.advanced.description}</p>
        <div className="grid gap-4">
          {advancedTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </section>

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

function TutorialCard({ tutorial }: { tutorial: ReturnType<typeof getAllTutorials>[0] }) {
  const config = difficultyConfig[tutorial.difficulty];

  return (
    <Link href={`/tutorials/${tutorial.id}`} className="group block">
      <div className="bg-gray-800/50 rounded-xl p-5 sm:p-6 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon */}
          <div className="text-3xl sm:text-4xl">{tutorial.icon}</div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="text-gray-500 text-sm">{tutorial.subtitle}</p>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {tutorial.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {tutorial.description}
            </p>

            {/* Key Concepts */}
            <div className="mb-4">
              <p className="text-gray-500 text-xs mb-2">핵심 개념:</p>
              <div className="flex flex-wrap gap-1.5">
                {tutorial.keyConcepts.map((concept) => (
                  <span
                    key={concept}
                    className="px-2 py-0.5 text-xs bg-purple-900/30 text-purple-300 rounded"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {tutorial.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-gray-700/50 text-gray-400 rounded"
                >
                  {tech}
                </span>
              ))}
              {tutorial.techStack.length > 4 && (
                <span className="px-2 py-0.5 text-xs text-gray-500">
                  +{tutorial.techStack.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex items-center">
            <span className="text-xl text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all">
              →
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-500">
          <span>약 {tutorial.estimatedPrompts}개 프롬프트</span>
          <span>{tutorial.steps.length} Steps</span>
        </div>
      </div>
    </Link>
  );
}
