import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/multiple");

export default function MultipleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
