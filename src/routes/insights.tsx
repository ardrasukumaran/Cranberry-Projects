import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Berry } from "@/components/Berry";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Migraine tracker" },
      { name: "description", content: "Your patterns, coming soon." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <AppShell subtitle="Insights" title="Your patterns">
      <ComingSoon />
    </AppShell>
  );
}

function ComingSoon() {
  return (
    <div className="mt-16 flex flex-col items-center text-center">
      <Berry mood="binoculars" size={160} />
      <h2 className="font-serif-display text-[32px] mt-4">Coming soon</h2>
      <p className="text-sm text-warm-grey/80 mt-2 max-w-[260px]">
        Berry is gathering your patterns. Check back shortly.
      </p>
    </div>
  );
}
