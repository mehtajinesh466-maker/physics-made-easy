import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/terms");

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
