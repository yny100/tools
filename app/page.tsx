import { ToolCard } from "@/components/ToolCard";
import categories from "@/data/tools.json";

export default function Home() {
  return (
    <div className="px-10 space-y-10 sm:px-20 lg:px-30 pb-10">
      {categories.map(({ category, tools }) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
