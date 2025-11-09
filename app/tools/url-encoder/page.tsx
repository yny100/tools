"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UrlEncoder() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encodeUrl = () => {
    try {
      setResult(encodeURIComponent(text));
    } catch {
      setResult("URLエンコード中にエラーが発生しました");
    }
  };

  const decodeUrl = () => {
    try {
      setResult(decodeURIComponent(text));
    } catch {
      setResult("URLデコード中にエラーが発生しました");
    }
  };

  const clear = () => {
    setText("");
    setResult("");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">URLエンコード / デコードツール</h1>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここに文字列またはURLエンコード文字列を入力してください"
        className="mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={encodeUrl}>URLエンコード</Button>
        <Button onClick={decodeUrl}>URLデコード</Button>
        <Button variant="secondary" onClick={clear}>クリア</Button>
      </div>

      <h2 className="text-lg font-semibold mb-2">結果：</h2>
      <Textarea readOnly value={result} placeholder="変換結果がここに表示されます" />
    </ToolPage>
  );
}
