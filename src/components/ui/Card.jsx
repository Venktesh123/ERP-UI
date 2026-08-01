export default function Card({ title, icon: Icon, action, children, className = '' }) {
  return (
    <section
      className={`rounded-xl border border-border bg-panel shadow-panel ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between border-b border-border-light px-6 py-4">
          <div className="flex items-center gap-2">
            {Icon && <Icon size={18} className="text-brand-500" />}
            <h2 className="text-[15px] font-semibold text-ink-900">{title}</h2>
          </div>
          {action}
        </div>
      )}
      <div className="p-6">{children}</div>
    </section>
  );
}
