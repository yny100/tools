"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CleanCSS from "clean-css";

export default function Page() {
  const [css, setCss] = useState("");
  const [minified, setMinified] = useState("");

  const minify = () => {
    try {
      const output = new CleanCSS().minify(css);
      setMinified(output.styles || "");
    } catch {
      setMinified("圧縮中にエラーが発生しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">CSSミニファイツール</h1>
      <Textarea value={css} onChange={(e) => setCss(e.target.value)} placeholder="CSSコードを入力" className="mb-4" />
      <Button onClick={minify}>圧縮する</Button>
      <Textarea readOnly value={minified} className="mt-4" />
    </ToolPage>
  );
}
