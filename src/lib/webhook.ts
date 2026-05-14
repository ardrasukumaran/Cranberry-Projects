import type { AttackLog } from './storage';

// Set VITE_WEBHOOK_URL in your .env file to enable data forwarding.
// See .env.example for setup instructions.
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL as string | undefined;

export interface WebhookPayload {
  phone: string;
  date: string;
  intensity: number;
  status: string;
  duration: string;
  foods: string;      // comma-separated, easier to read in a spreadsheet
  loggedAt: string;   // ISO timestamp
}

export function sendAttackToWebhook(attack: AttackLog, phone: string): void {
  if (!WEBHOOK_URL) return;

  const payload: WebhookPayload = {
    phone,
    date: attack.date,
    intensity: attack.intensity,
    status: attack.status,
    duration: attack.duration,
    foods: attack.foods.join(', '),
    loggedAt: new Date(attack.createdAt).toISOString(),
  };

  // Fire-and-forget — don't block the UI or surface errors to the user
  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Silently ignore network failures; data is still saved locally
  });
}
