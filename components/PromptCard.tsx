"use client";

import Link from "next/link";
import CopyButton from "./CopyButton";
import type { PromptTemplate } from "@/lib/wiki-data";

interface PromptCardProps {
  prompt: PromptTemplate;
  categoryId: string;
  showFull?: boolean;
}

export default function PromptCard({
  prompt,
  categoryId,
  showFull = false,
}: PromptCardProps) {
  if (showFull) {
    return (
      <article className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{prompt.title}</h1>
          <div className="flex flex-wrap gap-2">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Prompt */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="text-purple-400">▸</span>
              프롬프트
            </h2>
            <CopyButton text={prompt.prompt} />
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <pre className="text-gray-100 text-sm whitespace-pre-wrap font-mono leading-relaxed">
              {prompt.prompt}
            </pre>
          </div>
        </section>

        {/* Explanation */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
            <span className="text-green-400">▸</span>
            왜 이렇게 쓰면 좋은가?
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <div className="prose prose-invert prose-sm max-w-none">
              {prompt.explanation.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={idx} className="text-white font-semibold mt-4 mb-2">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-1 text-gray-300">
                      {items.map((item, i) => (
                        <li key={i}>{formatText(item.replace("- ", ""))}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-gray-300 leading-relaxed">
                    {formatText(paragraph)}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
            <span className="text-yellow-400">▸</span>
            추가 팁
          </h2>
          <div className="bg-yellow-900/20 rounded-xl p-5 border border-yellow-800/30">
            <ul className="space-y-2">
              {prompt.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <span className="text-yellow-500 mt-0.5">💡</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bad Example */}
        {prompt.badExample && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
              <span className="text-red-400">▸</span>
              이렇게 쓰면 안 좋아요
            </h2>
            <div className="bg-red-900/20 rounded-xl p-5 border border-red-800/30">
              <div className="mb-3">
                <span className="text-red-400 text-sm font-medium">❌ 나쁜 예시:</span>
                <pre className="mt-2 text-gray-400 text-sm bg-gray-800/50 p-3 rounded-lg font-mono">
                  {prompt.badExample.prompt}
                </pre>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400">→</span>
                <span className="text-gray-300">{prompt.badExample.reason}</span>
              </div>
            </div>
          </section>
        )}
      </article>
    );
  }

  // Card view for listings
  return (
    <Link
      href={`/wiki/${categoryId}/${prompt.id}`}
      className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all hover:bg-gray-800"
    >
      <h3 className="text-lg font-semibold text-white mb-2">{prompt.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2 mb-3 font-mono">
        {prompt.prompt.slice(0, 100)}...
      </p>
      <div className="flex flex-wrap gap-1">
        {prompt.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs bg-gray-700 text-gray-400 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function formatText(text: string): React.ReactNode {
  // Handle inline code
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="px-1.5 py-0.5 bg-gray-700 text-purple-300 rounded text-xs font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    // Handle bold
    if (part.includes("**")) {
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((bp, j) => {
        if (bp.startsWith("**") && bp.endsWith("**")) {
          return <strong key={`${i}-${j}`} className="text-white">{bp.slice(2, -2)}</strong>;
        }
        return bp;
      });
    }
    return part;
  });
}
