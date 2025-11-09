import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
}

export function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-md hover:-translate-y-0.5 transition-transform">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}