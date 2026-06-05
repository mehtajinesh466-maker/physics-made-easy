import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/study");

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
