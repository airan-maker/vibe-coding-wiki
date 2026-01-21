"use client";

import { useState } from "react";
import Link from "next/link";
import {
  glossaryTerms,
  getTermsByCategory,
  categoryInfo,
  categoryOrder,
  type GlossaryTerm,
} from "@/lib/glossary-data";

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const termsByCategory = getTermsByCategory();

  // 검색 필터링
  const filteredTerms = searchQuery
    ? glossaryTerms.filter(
        (term) =>
          term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  // 카테고리 필터링
  const displayCategories = selectedCategory
    ? [selectedCategory]
    : categoryOrder;

  return (
    <div className="p-4 pt-16 sm:p-6 sm:pt-16 lg:p-8 lg:pt-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">📖</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            개발 용어 사전
          </h1>
        </div>
        <p className="text-gray-400">
          바이브코딩할 때 자주 나오는 용어들을 쉽게 설명합니다
        </p>
      </header>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="용어 검색... (예: API, React, 배포)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === null
              ? "bg-purple-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          전체
        </button>
        {categoryOrder.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            <span>{categoryInfo[category]?.icon}</span>
            {category}
          </button>
        ))}
      </div>

      {/* Search Results */}
      {filteredTerms ? (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            검색 결과 ({filteredTerms.length}개)
          </h2>
          {filteredTerms.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              검색 결과가 없습니다
            </p>
          ) : (
            <div className="space-y-3">
              {filteredTerms.map((term) => (
                <TermCard
                  key={term.id}
                  term={term}
                  isExpanded={expandedTerm === term.id}
                  onToggle={() =>
                    setExpandedTerm(expandedTerm === term.id ? null : term.id)
                  }
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Category Sections */
        displayCategories.map((category) => (
          <section key={category} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{categoryInfo[category]?.icon}</span>
              <h2 className="text-xl font-bold text-white">{category}</h2>
              <span className="text-gray-500 text-sm ml-2">
                {categoryInfo[category]?.description}
              </span>
            </div>
            <div className="space-y-3">
              {termsByCategory[category]?.map((term) => (
                <TermCard
                  key={term.id}
                  term={term}
                  isExpanded={expandedTerm === term.id}
                  onToggle={() =>
                    setExpandedTerm(expandedTerm === term.id ? null : term.id)
                  }
                />
              ))}
            </div>
          </section>
        ))
      )}

      {/* Quick Navigation */}
      <div className="fixed bottom-6 right-6 hidden lg:block">
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 border border-gray-700 shadow-xl">
          <p className="text-xs text-gray-500 mb-2">빠른 이동</p>
          <div className="flex flex-col gap-1">
            {categoryOrder.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery("");
                }}
                className="text-left text-sm text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700"
              >
                {categoryInfo[category]?.icon} {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TermCardProps {
  term: GlossaryTerm;
  isExpanded: boolean;
  onToggle: () => void;
}

function TermCard({ term, isExpanded, onToggle }: TermCardProps) {
  return (
    <div
      className={`bg-gray-800/50 rounded-xl border transition-all ${
        isExpanded
          ? "border-purple-500/50 bg-gray-800"
          : "border-gray-700 hover:border-gray-600"
      }`}
    >
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-white">{term.term}</span>
          <span className="text-gray-400 text-sm">{term.shortDesc}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {/* Explanation */}
          <div>
            <h4 className="text-sm font-medium text-purple-400 mb-2">
              설명
            </h4>
            <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
              {term.explanation}
            </p>
          </div>

          {/* Analogy */}
          {term.analogy && (
            <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-800/30">
              <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center gap-1">
                <span>💡</span> 쉬운 비유
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {term.analogy}
              </p>
            </div>
          )}

          {/* Example */}
          {term.example && (
            <div className="bg-gray-900/50 rounded-lg p-3">
              <h4 className="text-sm font-medium text-green-400 mb-2 flex items-center gap-1">
                <span>📝</span> 실제 사용 예시
              </h4>
              <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                {term.example}
              </pre>
            </div>
          )}

          {/* Related Terms */}
          {term.related && term.related.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-500 text-sm">관련 용어:</span>
              {term.related.map((relatedTerm) => (
                <span
                  key={relatedTerm}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                >
                  {relatedTerm}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
