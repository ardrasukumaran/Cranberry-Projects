import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

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
  const bgClass =
    bg === "lavender"
      ? "bg-lavender"
      : bg === "white"
      ? "bg-white"
      : "bg-background";
  return (
    <div className={`phone-frame ${bgClass}`}>
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
