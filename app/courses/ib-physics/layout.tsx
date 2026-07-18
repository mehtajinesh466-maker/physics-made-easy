import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/courses/ib-physics");

export default function IBPhysicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
