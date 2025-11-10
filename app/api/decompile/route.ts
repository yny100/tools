import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const backendUrl = "https://dotnet-decompiler-api.onrender.com/decompile";

  const res = await fetch(backendUrl, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return NextResponse.json(data);
}
