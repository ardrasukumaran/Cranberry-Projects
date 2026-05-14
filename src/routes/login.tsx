import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Berry } from '@/components/Berry';
import { Phone, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [{ title: 'Sign in — Migraine tracker' }],
  }),
  component: LoginPage,
});

const COUNTRY_CODES = [
  { code: '+1',   label: '+1  🇺🇸 United States' },
  { code: '+1',   label: '+1  🇨🇦 Canada' },
  { code: '+44',  label: '+44 🇬🇧 United Kingdom' },
  { code: '+91',  label: '+91 🇮🇳 India' },
  { code: '+61',  label: '+61 🇦🇺 Australia' },
  { code: '+64',  label: '+64 🇳🇿 New Zealand' },
  { code: '+49',  label: '+49 🇩🇪 Germany' },
  { code: '+33',  label: '+33 🇫🇷 France' },
  { code: '+39',  label: '+39 🇮🇹 Italy' },
  { code: '+34',  label: '+34 🇪🇸 Spain' },
  { code: '+31',  label: '+31 🇳🇱 Netherlands' },
  { code: '+46',  label: '+46 🇸🇪 Sweden' },
  { code: '+47',  label: '+47 🇳🇴 Norway' },
  { code: '+45',  label: '+45 🇩🇰 Denmark' },
  { code: '+358', label: '+358 🇫🇮 Finland' },
  { code: '+41',  label: '+41 🇨🇭 Switzerland' },
  { code: '+43',  label: '+43 🇦🇹 Austria' },
  { code: '+32',  label: '+32 🇧🇪 Belgium' },
  { code: '+351', label: '+351 🇵🇹 Portugal' },
  { code: '+30',  label: '+30 🇬🇷 Greece' },
  { code: '+48',  label: '+48 🇵🇱 Poland' },
  { code: '+7',   label: '+7  🇷🇺 Russia' },
  { code: '+380', label: '+380 🇺🇦 Ukraine' },
  { code: '+55',  label: '+55 🇧🇷 Brazil' },
  { code: '+52',  label: '+52 🇲🇽 Mexico' },
  { code: '+54',  label: '+54 🇦🇷 Argentina' },
  { code: '+56',  label: '+56 🇨🇱 Chile' },
  { code: '+57',  label: '+57 🇨🇴 Colombia' },
  { code: '+51',  label: '+51 🇵🇪 Peru' },
  { code: '+58',  label: '+58 🇻🇪 Venezuela' },
  { code: '+81',  label: '+81 🇯🇵 Japan' },
  { code: '+82',  label: '+82 🇰🇷 South Korea' },
  { code: '+86',  label: '+86 🇨🇳 China' },
  { code: '+65',  label: '+65 🇸🇬 Singapore' },
  { code: '+60',  label: '+60 🇲🇾 Malaysia' },
  { code: '+63',  label: '+63 🇵🇭 Philippines' },
  { code: '+66',  label: '+66 🇹🇭 Thailand' },
  { code: '+84',  label: '+84 🇻🇳 Vietnam' },
  { code: '+62',  label: '+62 🇮🇩 Indonesia' },
  { code: '+880', label: '+880 🇧🇩 Bangladesh' },
  { code: '+92',  label: '+92 🇵🇰 Pakistan' },
  { code: '+94',  label: '+94 🇱🇰 Sri Lanka' },
  { code: '+971', label: '+971 🇦🇪 UAE' },
  { code: '+966', label: '+966 🇸🇦 Saudi Arabia' },
  { code: '+972', label: '+972 🇮🇱 Israel' },
  { code: '+90',  label: '+90 🇹🇷 Turkey' },
  { code: '+20',  label: '+20 🇪🇬 Egypt' },
  { code: '+234', label: '+234 🇳🇬 Nigeria' },
  { code: '+27',  label: '+27 🇿🇦 South Africa' },
  { code: '+254', label: '+254 🇰🇪 Kenya' },
  { code: '+233', label: '+233 🇬🇭 Ghana' },
  { code: '+212', label: '+212 🇲🇦 Morocco' },
];

// Hardcoded valid Order IDs — key: full phone (countryCode+digits), value: order id
const VALID_ORDER_IDS: Record<string, string> = {
  '+911234567890': '1516', // example placeholder
  // Natasha: any phone she enters maps to 1516 for now
};
const DEFAULT_ORDER_ID = '1516';

function getValidOrderId(fullPhone: string): string {
  return VALID_ORDER_IDS[fullPhone] ?? DEFAULT_ORDER_ID;
}

function LoginPage() {
  const { login, phone, isLoading } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pendingPhone, setPendingPhone] = useState('');
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading && phone) navigate({ to: '/' });
  }, [isLoading, phone, navigate]);

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phoneNumber.replace(/\D/g, '');
    if (digits.length < 6) {
      setError('Please enter a valid phone number.');
      return;
    }
    setPendingPhone(`${countryCode}${digits}`);
    setError('');
    setStep('otp');
  }

  function handleOtpSubmit(e: React.FormEvent) {
    e.preventDefault();
    const expected = getValidOrderId(pendingPhone);
    if (orderId.trim() !== expected) {
      setError('Invalid Order ID. Please try again.');
      return;
    }
    login(pendingPhone);
    navigate({ to: '/' });
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    setPhoneNumber(e.target.value.replace(/[^\d\s\-()]/g, ''));
  }

  return (
    <div className="phone-frame bg-background flex flex-col">
      {/* Purple glow at top */}
      <div
        className="absolute inset-x-0 top-0 h-56 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,107,168,0.28) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 py-10">

        {/* Berry + wordmark */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Berry mood="wave" size={80} />
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-warm-grey/50 font-medium mb-1">
              Migraine tracker
            </p>
            <h1 className="font-serif-display text-[28px] leading-tight text-foreground">
              {step === 'phone' ? 'Welcome back.' : 'Verify your identity.'}
            </h1>
            <p className="mt-1 text-sm text-warm-grey/70">
              {step === 'phone'
                ? 'Sign in with your phone number to continue.'
                : `Enter the Order ID sent to ${pendingPhone}`}
            </p>
          </div>
        </div>

        {/* ── Step 1: Phone number ── */}
        {step === 'phone' && (
          <form onSubmit={handlePhoneSubmit} className="w-full space-y-4" noValidate>
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-warm-grey/60 font-semibold mb-2">
                Phone number
              </label>
              <div className="flex gap-2">
                <div className="relative shrink-0">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-grey/50 pointer-events-none"
                    aria-hidden
                  />
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none h-12 pl-9 pr-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#7B6BA8] focus:border-[#7B6BA8] transition cursor-pointer"
                    style={{ minWidth: '96px' }}
                  >
                    {COUNTRY_CODES.map((c, i) => (
                      <option key={`${c.code}-${i}`} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="e.g. 98765 43210"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="flex-1 h-12 px-4 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-warm-grey/40 focus:outline-none focus:ring-2 focus:ring-[#7B6BA8] focus:border-[#7B6BA8] transition"
                  autoComplete="tel-local"
                  required
                />
              </div>
              {error && (
                <p className="mt-2 text-xs text-destructive" role="alert">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl font-semibold text-sm text-white transition active:scale-[0.98]"
              style={{ backgroundColor: '#7B6BA8' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6a5b97')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#7B6BA8')}
            >
              Continue
            </button>
          </form>
        )}

        {/* ── Step 2: Order ID ── */}
        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit} className="w-full space-y-4" noValidate>
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-warm-grey/60 font-semibold mb-2">
                Order ID
              </label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Order ID"
                value={orderId}
                onChange={(e) => { setError(''); setOrderId(e.target.value); }}
                className="w-full h-12 px-4 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-warm-grey/40 focus:outline-none focus:ring-2 focus:ring-[#7B6BA8] focus:border-[#7B6BA8] transition tracking-widest text-center text-lg font-semibold"
                autoComplete="one-time-code"
                autoFocus
                required
              />
              {error && (
                <p className="mt-2 text-xs text-destructive text-center" role="alert">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl font-semibold text-sm text-white transition active:scale-[0.98]"
              style={{ backgroundColor: '#7B6BA8' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6a5b97')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#7B6BA8')}
            >
              Verify & Sign in
            </button>

            <button
              type="button"
              onClick={() => { setStep('phone'); setOrderId(''); setError(''); }}
              className="w-full flex items-center justify-center gap-1.5 text-xs text-warm-grey/60 font-medium py-2"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to phone number
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-[11px] text-warm-grey/40 max-w-xs leading-relaxed">
          Your data is stored locally on this device and is never shared.
        </p>
      </div>
    </div>
  );
}
