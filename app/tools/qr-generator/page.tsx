"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCode from "qrcode";

export default function Page() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQr = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(text);
      setQr(dataUrl);
    } catch {
      setQr("");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">QRコード生成ツール</h1>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="テキストまたはURLを入力"
        className="mb-4"
      />
      <Button onClick={generateQr}>QRコード生成</Button>
      {qr && <img src={qr} alt="QRコード" className="mt-4 mx-auto w-40 h-40" />}
    </ToolPage>
  );
}
