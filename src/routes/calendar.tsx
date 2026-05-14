import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Berry } from "@/components/Berry";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "History — Migraine tracker" },
      { name: "description", content: "Your migraine history, coming soon." },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <AppShell subtitle="History" title="Your history">
      <div className="mt-16 flex flex-col items-center text-center">
        <Berry mood="clipboard" size={160} />
        <h2 className="font-serif-display text-[32px] mt-4">Coming soon</h2>
        <p className="text-sm text-warm-grey/80 mt-2 max-w-[260px]">
          Your full timeline will live here.
        </p>
      </div>
    </AppShell>
  );
}
