"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { minify } from "terser";

export default function Page() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const compress = async () => {
    try {
      const minified = await minify(code);
      setResult(minified.code || "");
    } catch {
      setResult("JavaScriptの圧縮に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">JavaScriptミニファイツール</h1>
      <Textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="JavaScriptコードを入力" className="mb-4" />
      <Button onClick={compress}>圧縮する</Button>
      <Textarea readOnly value={result} className="mt-4" />
    </ToolPage>
  );
}
