"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
  const [uuid, setUuid] = useState("");

  const generate = () => {
    setUuid(uuidv4());
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">UUID生成ツール</h1>
      <Button onClick={generate} className="mb-4">
        UUIDを生成
      </Button>
      <Input readOnly value={uuid} placeholder="生成されたUUIDがここに表示されます" />
    </ToolPage>
  );
}
