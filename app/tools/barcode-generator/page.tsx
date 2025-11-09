"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function Page() {
  const [text, setText] = useState("");
  const svgRef = useRef<SVGSVGElement | null>(null);

  const generate = () => {
    if (svgRef.current) {
      try {
        JsBarcode(svgRef.current, text, { format: "CODE128", lineColor: "#000", width: 2, height: 60 });
      } catch {}
    }
  };

  useEffect(() => {
    if (text) generate();
  }, [text]);

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">バーコード生成ツール</h1>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="バーコードにしたい文字を入力"
        className="mb-4"
      />
      <div className="mt-4 flex justify-center">
        <svg ref={svgRef}></svg>
      </div>
    </ToolPage>
  );
}
