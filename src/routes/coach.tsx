import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Berry } from "@/components/Berry";

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "Berry — your migraine coach" },
      { name: "description", content: "Berry, coming soon." },
    ],
  }),
  component: CoachPage,
});

function CoachPage() {
  return (
    <AppShell subtitle="Berry" title="Chat with Berry">
      <div className="mt-16 flex flex-col items-center text-center">
        <Berry mood="wave" size={160} />
        <h2 className="font-serif-display text-[32px] mt-4">Coming soon</h2>
        <p className="text-sm text-warm-grey/80 mt-2 max-w-[260px]">
          Berry's chat is on the way.
        </p>
      </div>
    </AppShell>
  );
}
