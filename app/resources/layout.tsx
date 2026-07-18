import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/resources");

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
