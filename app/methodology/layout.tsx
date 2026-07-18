import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/methodology");

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
