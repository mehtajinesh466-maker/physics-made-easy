import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/courses/skills");

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
