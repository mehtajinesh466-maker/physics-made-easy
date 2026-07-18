import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/courses/a-level");

export default function ALevelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
