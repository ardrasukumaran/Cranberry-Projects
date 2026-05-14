const STORAGE_KEY = 'cranberry_phone';

export function getStoredPhone(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function storePhone(phone: string): void {
  localStorage.setItem(STORAGE_KEY, phone);
}

export function clearPhone(): void {
  localStorage.removeItem(STORAGE_KEY);
}
