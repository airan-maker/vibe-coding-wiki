"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllCategories } from "@/lib/wiki-data";
import { getAllTutorials } from "@/lib/tutorials-data";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const categories = getAllCategories();
  const tutorials = getAllTutorials();

  // 페이지 이동시 모바일 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const isTutorialsActive = pathname?.startsWith("/tutorials");

  return (
    <>
      {/* 모바일 햄버거 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-100 hover:bg-gray-700 transition-colors"
        aria-label="메뉴 열기"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* 모바일 오버레이 */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`
          w-64 bg-gray-900 text-gray-100 h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-800 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6">
          <Link href="/" className="block" onClick={() => setIsOpen(false)}>
            <h1 className="text-xl font-bold text-white">
              Vibe Coding
              <span className="text-purple-400"> Wiki</span>
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              AI와 함께하는 개발 가이드
            </p>
          </Link>
        </div>

        <nav className="px-4 pb-6">
          {/* 실전 프로젝트 섹션 */}
          <div className="mb-4">
            <Link
              href="/tutorials"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isTutorialsActive && pathname === "/tutorials"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="text-lg">🚀</span>
              <span className="text-sm font-medium">실전 프로젝트</span>
              <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">NEW</span>
            </Link>

            {isTutorialsActive && (
              <div className="ml-9 mt-1 space-y-1">
                {tutorials.map((tutorial) => {
                  const isActive = pathname === `/tutorials/${tutorial.id}`;
                  return (
                    <Link
                      key={tutorial.id}
                      href={`/tutorials/${tutorial.id}`}
                      className={`block px-3 py-1.5 text-xs rounded transition-colors ${
                        isActive
                          ? "text-green-300 bg-gray-800"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {tutorial.icon} {tutorial.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-t border-gray-800 my-4" />

          {/* 프롬프트 카테고리 */}
          <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 px-3">
            프롬프트 템플릿
          </p>
          {categories.map((category) => {
            const isActive = pathname?.includes(`/wiki/${category.id}`);
            return (
              <div key={category.id} className="mb-2">
                <Link
                  href={`/wiki/${category.id}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm font-medium">{category.title}</span>
                </Link>

                {isActive && (
                  <div className="ml-9 mt-1 space-y-1">
                    {category.prompts.map((prompt) => {
                      const isPromptActive = pathname?.includes(
                        `/wiki/${category.id}/${prompt.id}`
                      );
                      return (
                        <Link
                          key={prompt.id}
                          href={`/wiki/${category.id}/${prompt.id}`}
                          className={`block px-3 py-1.5 text-xs rounded transition-colors ${
                            isPromptActive
                              ? "text-purple-300 bg-gray-800"
                              : "text-gray-500 hover:text-gray-300"
                          }`}
                        >
                          {prompt.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-gray-800">
          <p className="text-xs text-gray-600 text-center">
            Built with Antigravity + Claude
          </p>
        </div>
      </aside>
    </>
  );
}
