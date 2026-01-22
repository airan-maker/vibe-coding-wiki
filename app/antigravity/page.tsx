import Link from "next/link";
import {
  antigravityIntro,
  antigravitySections,
  antigravityTips,
  antigravityUseCases,
} from "@/lib/antigravity-data";

export default function AntigravityPage() {
  return (
    <div className="p-4 pt-16 sm:p-6 sm:pt-16 lg:p-8 lg:pt-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-10 lg:mb-14">
        <nav className="mb-4 text-xs sm:text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-300">
            홈
          </Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-gray-300">Antigravity 가이드</span>
        </nav>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">🚀</span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {antigravityIntro.title}
            </h1>
            <p className="text-purple-400 text-lg">{antigravityIntro.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-400 text-base sm:text-lg whitespace-pre-line">
          {antigravityIntro.description}
        </p>

        {/* Download Button */}
        <a
          href="https://antigravity.google/download"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
        >
          <span>📥</span>
          <span>Antigravity 다운로드</span>
        </a>
      </header>

      {/* Quick Nav */}
      <nav className="mb-10 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
        <h2 className="text-sm font-medium text-gray-400 mb-3">빠른 이동</h2>
        <div className="flex flex-wrap gap-2">
          {antigravitySections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-3 py-1.5 text-sm bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
            >
              {section.icon} {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">
          이런 상황에 Antigravity가 유용해요
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {antigravityUseCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"
            >
              <span className="text-2xl">{useCase.icon}</span>
              <h3 className="text-white font-medium mt-2 text-sm">
                {useCase.title}
              </h3>
              <p className="text-gray-400 text-xs mt-1">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Sections */}
      {antigravitySections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mb-12 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{section.icon}</span>
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 sm:p-6 border border-gray-700">
            <div className="prose prose-invert prose-sm max-w-none">
              <MarkdownContent content={section.content} />
            </div>
          </div>
        </section>
      ))}

      {/* Tips Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">
          💡 효과적인 사용 팁
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-900/20 rounded-xl p-5 border border-green-800/30">
            <h3 className="text-green-400 font-medium mb-4 flex items-center gap-2">
              <span className="text-lg">✓</span> 이렇게 하세요
            </h3>
            <div className="space-y-3">
              {antigravityTips
                .filter((tip) => tip.type === "do")
                .map((tip) => (
                  <div key={tip.title}>
                    <h4 className="text-white text-sm font-medium">
                      {tip.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {tip.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Don'ts */}
          <div className="bg-red-900/20 rounded-xl p-5 border border-red-800/30">
            <h3 className="text-red-400 font-medium mb-4 flex items-center gap-2">
              <span className="text-lg">✗</span> 피해야 할 것
            </h3>
            <div className="space-y-3">
              {antigravityTips
                .filter((tip) => tip.type === "dont")
                .map((tip) => (
                  <div key={tip.title}>
                    <h4 className="text-white text-sm font-medium">
                      {tip.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {tip.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">📚 참고 자료</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://antigravity.google/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <h3 className="text-white font-medium mb-1">공식 문서</h3>
            <p className="text-gray-400 text-sm">antigravity.google/docs</p>
          </a>
          <a
            href="https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <h3 className="text-white font-medium mb-1">Google Developers Blog</h3>
            <p className="text-gray-400 text-sm">공식 소개 포스트</p>
          </a>
          <a
            href="https://codelabs.developers.google.com/getting-started-google-antigravity"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <h3 className="text-white font-medium mb-1">Google Codelabs</h3>
            <p className="text-gray-400 text-sm">튜토리얼</p>
          </a>
          <a
            href="https://www.codecademy.com/article/how-to-set-up-and-use-google-antigravity"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <h3 className="text-white font-medium mb-1">Codecademy Guide</h3>
            <p className="text-gray-400 text-sm">설정 및 사용법 가이드</p>
          </a>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pt-8 border-t border-gray-800">
        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 text-sm"
        >
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown parsing
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 text-gray-300 my-3">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(2); // Skip header separator row
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                {header.map((cell, i) => (
                  <th key={i} className="px-3 py-2 text-left text-gray-300 font-medium">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, i) => (
                <tr key={i} className="border-b border-gray-800">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 text-gray-400">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${elements.length}`} className="bg-gray-900 rounded-lg p-4 overflow-x-auto my-3">
            <code className="text-gray-300 text-xs">{codeContent.join("\n")}</code>
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      flushList();
      if (!inTable) inTable = true;
      const cells = line.split("|").filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      inTable = false;
      flushTable();
    }

    // Headers
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-lg font-semibold text-white mt-6 mb-3">
          {line.replace("## ", "")}
        </h3>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h4 key={`h4-${elements.length}`} className="text-base font-medium text-purple-300 mt-4 mb-2">
          {line.replace("### ", "")}
        </h4>
      );
      continue;
    }

    // List items
    if (line.startsWith("- ")) {
      listItems.push(line.replace("- ", ""));
      continue;
    } else {
      flushList();
    }

    // Empty line
    if (line.trim() === "") {
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${elements.length}`} className="text-gray-300 my-2">
        {line}
      </p>
    );
  }

  flushList();
  flushTable();

  return <>{elements}</>;
}
