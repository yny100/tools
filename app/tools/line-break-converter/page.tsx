"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LineBreakConverter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const toLF = () => setResult(text.replace(/\r\n|\r/g, "\n"));
  const toCRLF = () => setResult(text.replace(/\r?\n/g, "\r\n"));
  const toCR = () => setResult(text.replace(/\r?\n/g, "\r"));
  const clear = () => {
    setText("");
    setResult("");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">改行コード変換ツール</h1>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力してください"
        className="mb-4 font-mono"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={toLF}>LF (Unix)</Button>
        <Button onClick={toCRLF}>CRLF (Windows)</Button>
        <Button onClick={toCR}>CR (Mac 旧式)</Button>
        <Button variant="secondary" onClick={clear}>クリア</Button>
      </div>

      <h2 className="text-lg font-semibold mb-2">変換結果：</h2>
      <Textarea readOnly value={result} placeholder="変換結果がここに表示されます" />
    </ToolPage>
  );
}
