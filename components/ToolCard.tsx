"use client";

import Link from "next/link";

interface ToolCard {
  title: string;
  description: string;
  href: string;
}

export function ToolCard({ title, description, href }: ToolCard) {
  return (
    <Link href={href}>
      <div className="relative flex flex-col gap-2 rounded-sm border p-2 hover:bg-black duration-300 group">
        <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <p className="text-sm text-[#5f5f5f] dark:text-gray-300">{description}</p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm">
          確認!
        </div>
      </div>
    </Link>
  );
}
