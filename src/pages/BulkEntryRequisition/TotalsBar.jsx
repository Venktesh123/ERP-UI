export default function TotalsBar({ totalLines, subtotal, tax, grandTotal }) {
  return (
    <footer className="flex shrink-0 items-center justify-between border-t border-border bg-panel px-8 py-4">
      <div className="flex items-center gap-10">
        <div>
          <p className="text-xxs font-bold uppercase tracking-wide text-ink-500">
            Total Lines
          </p>
          <p className="text-lg font-bold text-ink-900">{totalLines}</p>
        </div>
        <div>
          <p className="text-xxs font-bold uppercase tracking-wide text-ink-500">
            Subtotal
          </p>
          <p className="text-lg font-bold text-ink-900">
            ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div>
          <p className="text-xxs font-bold uppercase tracking-wide text-ink-500">
            Tax (8%)
          </p>
          <p className="text-lg font-bold text-ink-900">
            ${tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 rounded-full bg-brand-600 py-2.5 pl-6 pr-2.5">
        <div className="text-right">
          <p className="text-xxs font-semibold uppercase tracking-wide text-brand-100">
            Grand Total
          </p>
          <p className="text-xl font-bold text-white">
            ${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <button
          type="button"
          className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-brand-600 hover:bg-brand-50"
        >
          Confirm
        </button>
      </div>
    </footer>
  );
}
