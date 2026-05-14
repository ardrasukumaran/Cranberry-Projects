import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Berry } from "@/components/Berry";
import { Plus, Pencil } from "lucide-react";
import { RECENT_ATTACKS } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Today — Migraine tracker" },
      { name: "description", content: "Daily check-in and gentle insights for your migraine journey." },
    ],
  }),
  component: TodayPage,
});

function TodayPage() {
  return (
    <AppShell
      subtitle="Thursday, May 14"
      title={<>Hi Natasha.<br /><span className="text-primary">How's your head today?</span></>}
      right={<Berry mood="wave" size={68} className="-mt-2 -mr-1" />}
    >
      {/* BIG plus — log attack */}
      <section className="mt-6">
        <Link
          to="/log"
          className="block rounded-[32px] bg-primary text-primary-foreground p-6 ring-soft active:scale-[0.99] transition relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" aria-hidden />
          <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/5" aria-hidden />

          <div className="relative flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-card text-primary grid place-items-center shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)] shrink-0">
              <Plus className="h-11 w-11" strokeWidth={2.6} />
            </div>
            <div>
              <p className="font-serif-display text-[28px] leading-tight">Log an attack</p>
              <p className="text-[12px] opacity-80 mt-1">Takes under a minute.</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Recent attacks */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-[0.18em] text-warm-grey/70 font-semibold">Recent attacks</p>
          <Link to="/calendar" className="text-xs font-semibold text-primary">See all</Link>
        </div>
        <div className="space-y-2">
          {RECENT_ATTACKS.slice(0, 3).map((a) => (
            <div key={a.date} className="rounded-2xl bg-card border border-border p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[13px] font-semibold">{a.date}</p>
                <p className="text-[11px] text-warm-grey/80 truncate">{a.duration} · {a.triggers.join(", ")}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className={`h-9 w-9 rounded-full grid place-items-center text-sm font-bold ${
                  a.intensity >= 7 ? "bg-primary text-primary-foreground" : "bg-mid-lavender/50 text-primary-foreground"
                }`}>
                  {a.intensity}
                </div>
                <Link
                  to="/log"
                  aria-label={`Edit attack on ${a.date}`}
                  className="h-9 w-9 rounded-full grid place-items-center bg-muted text-foreground hover:bg-accent transition"
                >
                  <Pencil className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
