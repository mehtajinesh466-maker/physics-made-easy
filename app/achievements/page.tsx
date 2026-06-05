import { buildMetadata } from "@/lib/seo";
import AchievementsBanner from "@/components/ui/AchievementsBanner";

export const metadata = buildMetadata("/achievements");
import AchievementsSection from "@/components/ui/AchievementsSection";
export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <AchievementsBanner />
      <AchievementsSection/>
    </div>
  );
}
