"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [envText, setEnvText] = useState("");
  const [json, setJson] = useState("");

  const toJson = () => {
    const obj: Record<string, string> = {};
    envText.split("\n").forEach((line) => {
      const [key, ...rest] = line.split("=");
      if (key) obj[key.trim()] = rest.join("=").trim();
    });
    setJson(JSON.stringify(obj, null, 2));
  };

  const toEnv = () => {
    try {
      const obj = JSON.parse(json);
      const lines = Object.entries(obj).map(([k, v]) => `${k}=${v}`);
      setEnvText(lines.join("\n"));
    } catch {
      setEnvText("JSON形式が不正です");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">.env ⇄ JSON 変換ツール</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Textarea value={envText} onChange={(e) => setEnvText(e.target.value)} placeholder=".env形式" />
        <Textarea value={json} onChange={(e) => setJson(e.target.value)} placeholder="JSON形式" />
      </div>
      <div className="flex gap-2">
        <Button onClick={toJson}>.env → JSON</Button>
        <Button onClick={toEnv}>JSON → .env</Button>
      </div>
    </ToolPage>
  );
}
