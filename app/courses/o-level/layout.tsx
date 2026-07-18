import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/courses/o-level");

export default function OLevelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
