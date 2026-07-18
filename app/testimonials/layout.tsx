import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/testimonials");

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
