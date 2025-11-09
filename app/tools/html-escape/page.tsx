"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HtmlEscape() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const unescapeHtml = (str: string) =>
    str
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");

  const encode = () => setResult(escapeHtml(text));
  const decode = () => setResult(unescapeHtml(text));
  const clear = () => {
    setText("");
    setResult("");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">HTMLエスケープ / アンエスケープツール</h1>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにHTMLまたはエスケープ文字列を入力してください"
        className="mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={encode}>エスケープ</Button>
        <Button onClick={decode}>アンエスケープ</Button>
        <Button variant="secondary" onClick={clear}>クリア</Button>
      </div>

      <h2 className="text-lg font-semibold mb-2">結果：</h2>
      <Textarea
        readOnly
        value={result}
        placeholder="変換結果がここに表示されます"
      />
    </ToolPage>
  );
}
