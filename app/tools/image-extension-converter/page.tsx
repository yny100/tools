"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [targetExt, setTargetExt] = useState("png");
  const [outputUrl, setOutputUrl] = useState("");

  const convert = async () => {
    if (!file) return;

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);

      const mime = `image/${targetExt}`;
      const dataUrl = canvas.toDataURL(mime);
      setOutputUrl(dataUrl);
    };
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">画像拡張子変換ツール</h1>

      <div className="flex flex-col gap-4 mb-4 max-w-sm">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <Select value={targetExt} onValueChange={setTargetExt}>
          <SelectTrigger><SelectValue placeholder="変換後の拡張子" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="png">PNG</SelectItem>
            <SelectItem value="jpg">JPG</SelectItem>
            <SelectItem value="webp">WEBP</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={convert}>変換</Button>
      </div>

      {outputUrl && (
        <div className="mt-4 space-y-2">
          <img src={outputUrl} alt="converted" className="max-w-xs border" />
          <a
            href={outputUrl}
            download={`converted.${targetExt}`}
            className="text-blue-500 underline"
          >
            画像をダウンロード
          </a>
        </div>
      )}
    </ToolPage>
  );
}
