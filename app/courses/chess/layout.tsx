import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/courses/chess");

export default function ChessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
