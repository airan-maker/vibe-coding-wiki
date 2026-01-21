"use client";

import { useState } from "react";
import type { PromptTemplate } from "@/lib/wiki-data";
import PromptCard from "./PromptCard";

interface LevelFilterProps {
  prompts: PromptTemplate[];
  categoryId: string;
}

type LevelType = "all" | "beginner" | "advanced";

export default function LevelFilter({ prompts, categoryId }: LevelFilterProps) {
  const [selectedLevel, setSelectedLevel] = useState<LevelType>("all");

  const filteredPrompts = prompts.filter((prompt) => {
    if (selectedLevel === "all") return true;
    return prompt.level === selectedLevel;
  });

  const beginnerCount = prompts.filter((p) => p.level === "beginner").length;
  const advancedCount = prompts.filter((p) => p.level === "advanced").length;

  return (
    <div>
      {/* Level Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedLevel("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedLevel === "all"
              ? "bg-purple-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          전체 ({prompts.length})
        </button>
        {beginnerCount > 0 && (
          <button
            onClick={() => setSelectedLevel("beginner")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              selectedLevel === "beginner"
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span>Beginner</span>
            <span className={`text-xs px-1.5 py-0.5 rounded ${
              selectedLevel === "beginner"
                ? "bg-green-500/30"
                : "bg-green-900/50 text-green-400"
            }`}>
              {beginnerCount}
            </span>
          </button>
        )}
        {advancedCount > 0 && (
          <button
            onClick={() => setSelectedLevel("advanced")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              selectedLevel === "advanced"
                ? "bg-orange-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span>Advanced</span>
            <span className={`text-xs px-1.5 py-0.5 rounded ${
              selectedLevel === "advanced"
                ? "bg-orange-500/30"
                : "bg-orange-900/50 text-orange-400"
            }`}>
              {advancedCount}
            </span>
          </button>
        )}
      </div>

      {/* Level Description */}
      {selectedLevel !== "all" && (
        <div className={`mb-6 p-4 rounded-lg border ${
          selectedLevel === "beginner"
            ? "bg-green-900/20 border-green-800/30"
            : "bg-orange-900/20 border-orange-800/30"
        }`}>
          {selectedLevel === "beginner" ? (
            <p className="text-green-300 text-sm">
              <span className="font-semibold">Beginner 프롬프트:</span> 대화형으로 Claude와 티키타카하며 진행하는 간단한 프롬프트입니다.
              전문 용어를 몰라도 괜찮아요!
            </p>
          ) : (
            <p className="text-orange-300 text-sm">
              <span className="font-semibold">Advanced 프롬프트:</span> 구체적인 기술 스택과 옵션을 명시하는 상세한 프롬프트입니다.
              원하는 결과를 더 정확하게 얻을 수 있어요.
            </p>
          )}
        </div>
      )}

      {/* Prompt Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {filteredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            categoryId={categoryId}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredPrompts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">해당 레벨의 프롬프트가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
