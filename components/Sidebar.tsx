"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllCategories } from "@/lib/wiki-data";

export default function Sidebar() {
  const pathname = usePathname();
  const categories = getAllCategories();

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-800">
      <div className="p-6">
        <Link href="/" className="block">
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
  );
}
