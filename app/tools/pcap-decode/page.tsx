"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert(".pcap ファイルを選択してください");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/decodePcap", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data.output || "解析に失敗しました。");
    } catch (e) {
      console.error(e);
      setResult("エラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">PCAP Decoder</h1>
      <p className="text-sm text-gray-600 mb-4">
        .pcap ファイルをアップロードして通信内容を解析・復号します。
      </p>

      <div className="mb-4 flex flex-col gap-2">
        <input
          type="file"
          accept=".pcap,.pcapng"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer hover:file:opacity-90"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <Button onClick={handleUpload} disabled={loading}>
          {loading ? "解析中..." : "解析する"}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setFile(null);
            setResult("");
          }}
        >
          リセット
        </Button>
      </div>

      <Textarea
        readOnly
        value={result}
        placeholder="ここに解析結果が表示されます"
        className="min-h-[400px] font-mono text-sm resize-none"
      />
    </ToolPage>
  );
}
