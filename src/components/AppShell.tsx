import { ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { BottomNav } from "./BottomNav";
import { useAuth } from "@/context/AuthContext";

export function AppShell({
  children,
  title,
  subtitle,
  right,
  bg = "default",
}: {
  children: ReactNode;
  title?: ReactNode;
  subtitle?: string;
  right?: ReactNode;
  bg?: "default" | "lavender" | "white";
}) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const bgClass =
    bg === "lavender"
      ? "bg-lavender"
      : bg === "white"
      ? "bg-white"
      : "bg-background";

  function handleLogout() {
    logout();
    navigate({ to: "/login" });
  }

  return (
    <div className={`phone-frame ${bgClass}`}>
      {/* Logout button — fixed top-right corner of the phone frame */}
      <button
        onClick={handleLogout}
        aria-label="Log out"
        title="Log out"
        className="absolute top-4 right-4 z-50 h-8 w-8 rounded-full flex items-center justify-center text-warm-grey/50 hover:text-foreground hover:bg-muted transition"
      >
        <LogOut className="h-4 w-4" />
      </button>

      {(title || right) && (
        <header className="px-5 pt-7 pb-4 flex items-end justify-between gap-3">
          <div>
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.18em] text-warm-grey/60 font-medium">
                {subtitle}
              </p>
            )}
            {title && (
              <h1 className="font-serif-display text-[34px] leading-[1.05] text-foreground mt-1">
                {title}
              </h1>
            )}
          </div>
          {right}
        </header>
      )}
      <main className="px-5 scroll-area-pad">{children}</main>
      <BottomNav />
    </div>
  );
}
