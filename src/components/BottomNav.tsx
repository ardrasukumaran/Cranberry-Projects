import { Link, useLocation } from "@tanstack/react-router";
import { Home, BarChart3, Calendar, MessageCircleHeart, Plus } from "lucide-react";

type Tab = { to: string; label: string; icon: typeof Home; primary?: boolean };
const tabs: Tab[] = [
  { to: "/", label: "Today", icon: Home },
  { to: "/insights", label: "Insights", icon: BarChart3 },
  { to: "/log", label: "Log", icon: Plus, primary: true },
  { to: "/calendar", label: "History", icon: Calendar },
  { to: "/coach", label: "Berry", icon: MessageCircleHeart },
];

export function BottomNav() {
  const loc = useLocation();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pointer-events-none">
      <div className="w-full max-w-[430px] mx-auto px-3 pb-3 pointer-events-auto">
        <div className="bg-card/95 backdrop-blur border border-border rounded-3xl ring-soft px-2 py-2 flex items-center justify-between">
          {tabs.map(({ to, label, icon: Icon, primary }) => {
            const active = loc.pathname === to;
            if (primary) {
              return (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center justify-center -mt-7 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-[0_8px_20px_-6px_rgba(113,66,215,0.55)] active:scale-95 transition"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              );
            }
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl text-[11px] font-medium transition ${
                  active ? "text-primary" : "text-warm-grey/70"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "stroke-[2.4]" : ""}`} />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
