"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatHtml = async () => {
    try {
      const formatted = await prettier.format(input, { parser: "html", plugins: [parserHtml] });
      setOutput(formatted);
    } catch {
      setOutput("HTMLの整形に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">HTML整形ツール</h1>
      <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="HTMLコードを入力" className="mb-4" />
      <Button onClick={formatHtml}>整形する</Button>
      <Textarea readOnly value={output} className="mt-4" />
    </ToolPage>
  );
}
