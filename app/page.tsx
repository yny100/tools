import { ToolCard } from "@/components/ToolCard";

const tools = [
  {
    title: "文字数カウンター",
    description: "テキストの文字をすぐにカウント",
    href: "/tools/text-counter",
  },
  {
    title: "文字列を逆順にする",
    description: "テキストを逆から並べ替えます",
    href: "/tools/reverse-text",
  },
  {
    title: "大文字・小文字変換ツール",
    description: "大文字を小文字に、小文字を大文字に変換",
    href: "/tools/case-converter",
  },
  {
    title: "Base64 ⇄ 文字列変換ツール",
    description: "Base64を文字列に、文字列をBase64に変換",
    href: "/tools/base64-converter",
  },
  {
    title: "URLエンコード / デコードツール",
    description: "日本語や記号をURLエンコードに変換・復元",
    href: "/tools/url-encoder",
  },
  {
    title: "JSON整形ツール",
    description: "JSONを整形（インデント）・圧縮・検証",
    href: "/tools/json-formatter",
  },
  {
    title: "HTMLエスケープ / アンエスケープツール",
    description: "&lt;div&gt; ⇄ <div> の変換",
    href: "/tools/html-escape",
  },
];

export default function Home() {
  return (
    <div className="px-10 space-y-6 sm:px-20 lg:px-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.href} {...tool} />
        ))}
      </div>
    </div>
  );
}