"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ColorConverter() {
  const [color, setColor] = useState("");
  const [result, setResult] = useState("");

  const hexToRgb = (hex: string) => {
    const clean = hex.replace("#", "");
    if (clean.length !== 6) return null;
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const rgbToHex = (rgb: string) => {
    const m = rgb.match(/\d+/g);
    if (!m || m.length < 3) return null;
    const [r, g, b] = m.map(Number);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">色コード変換ツール</h1>
      <Input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="HEX または RGB 値を入力"
        className="mb-4"
      />
      <div className="flex gap-2 mb-4">
        <Button onClick={() => setResult(hexToRgb(color) || "無効なHEX")}>HEX → RGB</Button>
        <Button onClick={() => setResult(rgbToHex(color) || "無効なRGB")}>RGB → HEX</Button>
      </div>
      <Input readOnly value={result} placeholder="変換結果" />
    </ToolPage>
  );
}
