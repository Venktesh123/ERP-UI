const VARIANTS = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-card border border-transparent',
  secondary:
    'bg-panel text-ink-700 border border-border hover:bg-surface',
  ghost: 'bg-transparent text-danger hover:bg-danger/5 border border-transparent',
  dark: 'bg-ink-900 text-white hover:bg-black border border-transparent',
};

export default function Button({
  children,
  variant = 'secondary',
  icon: Icon,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
