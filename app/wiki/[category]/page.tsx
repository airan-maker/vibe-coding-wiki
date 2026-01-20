import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryById, getAllCategories } from "@/lib/wiki-data";
import PromptCard from "@/components/PromptCard";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.id,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-300">
          홈
        </Link>
        <span className="text-gray-600 mx-2">/</span>
        <span className="text-gray-300">{category.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="text-3xl font-bold text-white">{category.title}</h1>
        </div>
        <p className="text-gray-400">{category.description}</p>
      </header>

      {/* Prompt List */}
      <div className="grid md:grid-cols-2 gap-4">
        {category.prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            categoryId={category.id}
          />
        ))}
      </div>
    </div>
  );
}
