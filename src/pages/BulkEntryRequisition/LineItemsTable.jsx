import { Search, ChevronDown, Plus } from 'lucide-react';
import { requisitionLineItems as lineItems, currency } from '../../data/mockData';

const columns = ['ID', 'ITEM CODE', 'DESCRIPTION', 'QTY', 'UNIT', 'UNIT PRICE', 'TOTAL'];

export default function LineItemsTable() {
  return (
    <div className="rounded-xl border border-border bg-panel shadow-panel">
      <div className="overflow-x-auto thin-scroll">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface text-left">
              <th className="w-12 px-4 py-3">
                <input type="checkbox" className="h-4 w-4 rounded border-border" />
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-3 py-3 text-xxs font-bold uppercase tracking-wide text-ink-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item) => (
              <tr key={item.id} className="border-b border-border-light">
                <td className="px-4 py-4">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                </td>
                <td className="px-3 py-4 text-ink-500">{item.id}</td>
                <td className="px-3 py-4">
                  {item.isEmpty ? (
                    <div className="flex items-center gap-2 text-ink-400">
                      <span className="border-b border-dashed border-border pb-0.5 italic">
                        Start typing code...
                      </span>
                      <Search size={13} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 font-semibold text-ink-900">
                      {item.itemCode}
                      <Search size={13} className="text-ink-400" />
                    </div>
                  )}
                </td>
                <td className="px-3 py-4 text-ink-700">
                  {item.isEmpty ? (
                    <span className="italic text-ink-400">System lookup...</span>
                  ) : (
                    item.description
                  )}
                </td>
                <td className="px-3 py-4 text-ink-700">{item.qty ?? ''}</td>
                <td className="px-3 py-4">
                  <span className="inline-flex items-center gap-1 text-ink-700">
                    {item.unit}
                    <ChevronDown size={14} className="text-ink-400" />
                  </span>
                </td>
                <td className="px-3 py-4 text-ink-700">
                  {item.isEmpty ? '$0.00' : `$${item.unitPrice.toFixed(2)}`}
                </td>
                <td className="px-3 py-4 font-semibold text-ink-900">
                  {item.isEmpty
                    ? '$0.00'
                    : currency(item.qty * item.unitPrice)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center border-t border-border-light py-5">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-2.5 text-sm font-semibold text-ink-500 hover:border-brand-500 hover:text-brand-600"
        >
          <Plus size={16} />
          Add New Empty Row
        </button>
      </div>
    </div>
  );
}
