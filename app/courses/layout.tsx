import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/courses");

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
