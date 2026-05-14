export interface AttackLog {
  id: string;
  date: string;       // ISO date string e.g. "2025-05-14"
  intensity: number;  // 1–10
  status: string;     // "Just started" | "Ongoing" | "Done"
  duration: string;   // "3–6h" | "6h" | ">6h" | "24h"
  foods: string[];    // selected food names
  createdAt: number;  // timestamp for sorting
}

const ATTACKS_KEY = 'cranberry_attacks';

export function getAttacks(): AttackLog[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ATTACKS_KEY);
    return raw ? (JSON.parse(raw) as AttackLog[]) : [];
  } catch {
    return [];
  }
}

export function saveAttack(
  data: Omit<AttackLog, 'id' | 'createdAt'>,
): AttackLog {
  const attacks = getAttacks();
  const entry: AttackLog = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: Date.now(),
  };
  // Most recent first
  attacks.unshift(entry);
  localStorage.setItem(ATTACKS_KEY, JSON.stringify(attacks));
  return entry;
}

export function deleteAttack(id: string): void {
  const attacks = getAttacks().filter((a) => a.id !== id);
  localStorage.setItem(ATTACKS_KEY, JSON.stringify(attacks));
}

/** Format a stored ISO date string for display e.g. "Wed, May 14" */
export function formatAttackDate(isoDate: string): string {
  const d = new Date(isoDate + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
