"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const templates: Record<string, string> = {
  Node: "node_modules/\n.env\nnpm-debug.log",
  React: "node_modules/\n.env\nbuild/\n.DS_Store",
  Nextjs: ".next/\nnode_modules/\n.env\nout/",
  Python: "__pycache__/\n.env\n*.pyc\n.venv/",
  Java: "target/\n*.class\n*.jar\n.env",
};

export default function Page() {
  const [framework, setFramework] = useState("");
  const [result, setResult] = useState("");

  const generate = () => {
    setResult(templates[framework] || "対象のテンプレートが見つかりません");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">.gitignoreジェネレーター</h1>
      <Select onValueChange={setFramework}>
        <SelectTrigger className="mb-4">
          <SelectValue placeholder="プロジェクトを選択" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(templates).map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={generate}>生成する</Button>
      <Textarea readOnly value={result} className="mt-4" />
    </ToolPage>
  );
}
