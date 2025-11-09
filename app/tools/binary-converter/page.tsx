"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const toBinary = () => {
    const bin = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    setResult(bin);
  };

  const fromBinary = () => {
    try {
      const chars = text
        .split(" ")
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
      setResult(chars);
    } catch {
      setResult("変換に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">バイナリ ⇄ テキスト変換ツール</h1>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="文字列またはバイナリを入力"
        className="mb-4"
      />
      <div className="flex gap-2 mb-4">
        <Button onClick={toBinary}>文字列 → バイナリ</Button>
        <Button onClick={fromBinary}>バイナリ → 文字列</Button>
      </div>
      <Textarea readOnly value={result} placeholder="変換結果" />
    </ToolPage>
  );
}
