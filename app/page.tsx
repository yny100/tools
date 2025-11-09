import { ToolCard } from "@/components/ToolCard";
import tools from "@/data/tools.json";

export default function Home() {
  return (
    <div className="px-10 space-y-6 sm:px-20 lg:px-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.href} {...tool} />
        ))}
      </div>
    </div>
  );
}