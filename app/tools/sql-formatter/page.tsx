"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "sql-formatter";

export default function Page() {
  const [sql, setSql] = useState("");
  const [formatted, setFormatted] = useState("");

  const formatSql = () => {
    try {
      setFormatted(format(sql));
    } catch {
      setFormatted("SQLの整形に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">SQLフォーマッタ</h1>
      <Textarea
        value={sql}
        onChange={(e) => setSql(e.target.value)}
        placeholder="SQLクエリを入力"
        className="mb-4"
      />
      <Button onClick={formatSql}>整形する</Button>
      <Textarea readOnly value={formatted} className="mt-4 font-mono whitespace-pre" />
    </ToolPage>
  );
}
