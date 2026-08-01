import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import NewPurchaseOrder from './pages/NewPurchaseOrder/NewPurchaseOrder';
import BulkEntryRequisition from './pages/BulkEntryRequisition/BulkEntryRequisition';

function DevSwitcher() {
  const location = useLocation();
  const linkClass = (path) =>
    `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
      location.pathname === path
        ? 'bg-brand-600 text-white'
        : 'bg-white text-ink-700 hover:bg-brand-50'
    }`;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-white/95 p-1.5 shadow-card backdrop-blur">
      <Link to="/purchase-orders/new" className={linkClass('/purchase-orders/new')}>
        New PO
      </Link>
      <Link
        to="/requisitions/bulk-entry"
        className={linkClass('/requisitions/bulk-entry')}
      >
        Bulk Entry
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/purchase-orders/new" replace />} />
        <Route path="/purchase-orders/new" element={<NewPurchaseOrder />} />
        <Route path="/requisitions/bulk-entry" element={<BulkEntryRequisition />} />
      </Routes>
      <DevSwitcher />
    </>
  );
}
