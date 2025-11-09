"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function JsonFormatter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(text);
      setResult(JSON.stringify(parsed, null, 2));
    } catch {
      setResult("JSONの構文エラーがあります。正しいJSONを入力してください");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(text);
      setResult(JSON.stringify(parsed));
    } catch {
      setResult("JSONの構文エラーがあります");
    }
  };

  const clear = () => {
    setText("");
    setResult("");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">JSON整形ツール</h1>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにJSON文字列を入力してください"
        className="mb-4 font-mono"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={formatJson}>整形</Button>
        <Button onClick={minifyJson}>圧縮</Button>
        <Button variant="secondary" onClick={clear}>クリア</Button>
      </div>

      <h2 className="text-lg font-semibold mb-2">結果：</h2>
      <Textarea
        readOnly
        value={result}
        placeholder="整形または圧縮されたJSONがここに表示されます"
        className="font-mono"
      />
    </ToolPage>
  );
}
