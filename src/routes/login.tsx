import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Berry } from '@/components/Berry';
import { Phone } from 'lucide-react';

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title: 'Sign in — Migraine tracker' },
    ],
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

function LoginPage() {
  const { login, phone, isLoading } = useAuth();
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect to home
  useEffect(() => {
    if (!isLoading && phone) {
      navigate({ to: '/' });
    }
  }, [isLoading, phone, navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phoneNumber.replace(/\D/g, '');
    if (digits.length < 6) {
      setError('Please enter a valid phone number.');
      return;
    }
    login(`${countryCode}${digits}`);
    navigate({ to: '/' });
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    // Allow digits, spaces, dashes, parentheses
    const val = e.target.value.replace(/[^\d\s\-()]/g, '');
    setPhoneNumber(val);
  }

  return (
    <div className="phone-frame bg-background flex flex-col min-h-screen">
      {/* Top decoration */}
      <div
        className="absolute inset-x-0 top-0 h-64 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,107,168,0.28) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center justify-center flex-1 px-6 py-12">
        {/* Berry + wordmark */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <Berry mood="calm" size={80} />
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-warm-grey/50 font-medium mb-1">
              Migraine tracker
            </p>
            <h1 className="font-serif-display text-[30px] leading-tight text-foreground">
              Welcome back.
            </h1>
            <p className="mt-1 text-sm text-warm-grey/70">
              Sign in with your phone number to continue.
            </p>
          </div>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4"
          noValidate
        >
          {/* Country code + phone row */}
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-warm-grey/60 font-semibold mb-2">
              Phone number
            </label>
            <div className="flex gap-2">
              {/* Country code select */}
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

              {/* Phone number input */}
              <input
                type="tel"
                inputMode="tel"
                placeholder="e.g. 415 555 0100"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="flex-1 h-12 px-4 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-warm-grey/40 focus:outline-none focus:ring-2 focus:ring-[#7B6BA8] focus:border-[#7B6BA8] transition"
                autoComplete="tel-local"
                required
              />
            </div>

            {error && (
              <p className="mt-2 text-xs text-destructive" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 rounded-xl font-semibold text-sm text-white transition active:scale-[0.98]"
            style={{ backgroundColor: '#7B6BA8' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                '#6a5b97')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                '#7B6BA8')
            }
          >
            Continue
          </button>
        </form>

        <p className="mt-8 text-center text-[11px] text-warm-grey/40 max-w-xs leading-relaxed">
          Your phone number is stored locally on this device and is never shared.
        </p>
      </div>
    </div>
  );
}
