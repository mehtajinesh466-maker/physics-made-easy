import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/science");

export default function ScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
