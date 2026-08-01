export default function Badge({ children, tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-surface text-ink-500 border border-border',
    brand: 'bg-brand-50 text-brand-600 border border-brand-100',
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xxs font-bold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
