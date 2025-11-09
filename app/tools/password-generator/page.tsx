"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generate = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">パスワード生成ツール</h1>
      <div className="flex gap-2 mb-4 items-center">
        <label>長さ:</label>
        <Input
          type="number"
          min={4}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-20"
        />
        <Button onClick={generate}>生成</Button>
      </div>
      <Input readOnly value={password} placeholder="生成されたパスワードがここに表示されます" />
    </ToolPage>
  );
}
