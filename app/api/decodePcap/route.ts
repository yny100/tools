import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ① フロントから送られてきた FormData を取得
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "ファイルが見つかりません。" }, { status: 400 });
    }

    const RENDER_API_URL = "https://pcap-decompile-api.onrender.com/decodePcap";

    const forwardForm = new FormData();
    forwardForm.append("file", file, file.name);

    const res = await fetch(RENDER_API_URL, {
      method: "POST",
      body: forwardForm,
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ output: "サーバーエラーが発生しました。" }, { status: 500 });
  }
}
