import { Plus } from 'lucide-react';
import Card from '../../components/ui/Card';
import { purchaseOrderLineItems as lineItems, currency } from '../../data/mockData';

const columns = [
  'ID',
  'ITEM CODE',
  'DESCRIPTION',
  'QTY',
  'UNIT',
  'UNIT PRICE',
  'TAX (%)',
  'TOTAL',
];

function lineTotal(item) {
  const base = item.qty * item.unitPrice;
  return base + base * (item.tax / 100);
}

export default function OrderLineItems() {
  const subtotal = lineItems.reduce((sum, i) => sum + i.qty * i.unitPrice, 0);
  const tax = lineItems.reduce(
    (sum, i) => sum + i.qty * i.unitPrice * (i.tax / 100),
    0
  );
  const grandTotal = subtotal + tax;

  return (
    <Card
      title="Order Line Items"
      action={
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          <Plus size={16} />
          Add Row
        </button>
      }
      className="col-span-2"
    >
      <div className="overflow-x-auto thin-scroll">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
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
                <td className="px-3 py-4 text-ink-500">{item.id}</td>
                <td className="px-3 py-4 font-semibold text-ink-900">
                  {item.itemCode}
                </td>
                <td className="px-3 py-4 text-ink-700">{item.description}</td>
                <td className="px-3 py-4 text-ink-700">{item.qty}</td>
                <td className="px-3 py-4 text-ink-700">{item.unit}</td>
                <td className="px-3 py-4 text-ink-700">
                  {item.unitPrice.toFixed(2)}
                </td>
                <td className="px-3 py-4 text-ink-700">{item.tax}</td>
                <td className="px-3 py-4 font-semibold text-ink-900">
                  {currency(lineTotal(item))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-start justify-between gap-6">
        <p className="max-w-sm text-xs text-ink-400">
          * Values are calculated in real-time based on quantity and regional
          tax rules.
        </p>

        <div className="w-72 shrink-0 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold uppercase tracking-wide text-xxs text-ink-500">
              Subtotal
            </span>
            <span className="font-medium text-ink-900">
              {currency(subtotal)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold uppercase tracking-wide text-xxs text-ink-500">
              Estimated Tax
            </span>
            <span className="font-medium text-ink-900">{currency(tax)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-2">
            <span className="text-xxs font-bold uppercase tracking-wide text-brand-600">
              Grand Total
            </span>
            <span className="text-xl font-bold text-ink-900">
              {currency(grandTotal)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
