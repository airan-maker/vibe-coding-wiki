"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { searchPrompts, getAllCategories } from "@/lib/wiki-data";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof searchPrompts>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 1) {
      const found = searchPrompts(query);
      setResults(found.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getCategoryIdForPrompt = (promptId: string): string => {
    const categories = getAllCategories();
    for (const cat of categories) {
      if (cat.prompts.some((p) => p.id === promptId)) {
        return cat.id;
      }
    }
    return "";
  };

  const handleSelect = (promptId: string) => {
    const categoryId = getCategoryIdForPrompt(promptId);
    router.push(`/wiki/${categoryId}/${promptId}`);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 1 && setIsOpen(true)}
          placeholder="검색... (⌘K)"
          className="w-full px-4 py-2.5 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
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
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
          {results.map((prompt) => (
            <button
              key={prompt.id}
              onClick={() => handleSelect(prompt.id)}
              className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
            >
              <div className="text-white font-medium text-sm">{prompt.title}</div>
              <div className="text-gray-500 text-xs mt-0.5 truncate">
                {prompt.prompt.slice(0, 60)}...
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length > 1 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 z-50">
          <p className="text-gray-500 text-sm text-center">검색 결과가 없습니다</p>
        </div>
      )}
    </div>
  );
}
