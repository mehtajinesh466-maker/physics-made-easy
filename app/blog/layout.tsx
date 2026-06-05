import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/blog");

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
