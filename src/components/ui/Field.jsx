import { ChevronDown } from 'lucide-react';

export function Field({ label, children, className = '' }) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xxs font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </span>
      {children}
    </label>
  );
}

const baseInput =
  'w-full rounded-md border border-border bg-panel px-3.5 py-2.5 text-sm text-ink-700 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100';

export function Input({ className = '', ...props }) {
  return <input className={`${baseInput} ${className}`} {...props} />;
}

export function Textarea({ className = '', ...props }) {
  return (
    <textarea className={`${baseInput} resize-none ${className}`} {...props} />
  );
}

export function Select({ className = '', children, ...props }) {
  return (
    <div className="relative">
      <select
        className={`${baseInput} appearance-none pr-9 ${className}`}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400"
      />
    </div>
  );
}
