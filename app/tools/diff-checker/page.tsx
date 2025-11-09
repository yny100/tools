"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DiffChecker() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [result, setResult] = useState("");

  const compare = () => {
    const linesA = textA.split("\n");
    const linesB = textB.split("\n");
    const diffs = linesA.map((line, i) => (line === linesB[i] ? `  ${line}` : `- ${line}\n+ ${linesB[i] || ""}`));
    setResult(diffs.join("\n"));
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">テキスト比較ツール</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Textarea value={textA} onChange={(e) => setTextA(e.target.value)} placeholder="テキストA" />
        <Textarea value={textB} onChange={(e) => setTextB(e.target.value)} placeholder="テキストB" />
      </div>
      <Button onClick={compare}>比較する</Button>
      <h2 className="text-lg font-semibold mt-4">結果：</h2>
      <Textarea readOnly value={result} />
    </ToolPage>
  );
}
