import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryById, getPromptById, getAllCategories } from "@/lib/wiki-data";
import PromptCard from "@/components/PromptCard";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  const params: { category: string; slug: string }[] = [];

  categories.forEach((category) => {
    category.prompts.forEach((prompt) => {
      params.push({
        category: category.id,
        slug: prompt.id,
      });
    });
  });

  return params;
}

export default async function PromptPage({ params }: PageProps) {
  const { category: categoryId, slug } = await params;
  const category = getCategoryById(categoryId);
  const prompt = getPromptById(categoryId, slug);

  if (!category || !prompt) {
    notFound();
  }

  // Get next and previous prompts
  const currentIndex = category.prompts.findIndex((p) => p.id === prompt.id);
  const prevPrompt = currentIndex > 0 ? category.prompts[currentIndex - 1] : null;
  const nextPrompt =
    currentIndex < category.prompts.length - 1
      ? category.prompts[currentIndex + 1]
      : null;

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-300">
          홈
        </Link>
        <span className="text-gray-600 mx-2">/</span>
        <Link
          href={`/wiki/${category.id}`}
          className="text-gray-500 hover:text-gray-300"
        >
          {category.title}
        </Link>
        <span className="text-gray-600 mx-2">/</span>
        <span className="text-gray-300">{prompt.title}</span>
      </nav>

      {/* Main Content */}
      <PromptCard prompt={prompt} categoryId={categoryId} showFull />

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between">
        {prevPrompt ? (
          <Link
            href={`/wiki/${categoryId}/${prevPrompt.id}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-gray-500">이전</div>
              <div className="text-sm">{prevPrompt.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextPrompt ? (
          <Link
            href={`/wiki/${categoryId}/${nextPrompt.id}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-right"
          >
            <div>
              <div className="text-xs text-gray-500">다음</div>
              <div className="text-sm">{nextPrompt.title}</div>
            </div>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
