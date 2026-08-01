import {
  LayoutGrid,
  Users,
  Landmark,
  Wallet,
  BarChart3,
  LifeBuoy,
  LogOut,
} from 'lucide-react';
import { navItems, footerNavItems } from '../../data/mockData';

const ICONS = {
  LayoutGrid,
  Users,
  Landmark,
  Wallet,
  BarChart3,
  LifeBuoy,
  LogOut,
};

function NavRow({ icon, label, active }) {
  const Icon = ICONS[icon];
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
        active
          ? 'bg-brand-500 text-white'
          : 'text-ink-700 hover:bg-surface'
      }`}
    >
      <Icon size={18} strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar({ activeKey = 'customers' }) {
  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col justify-between border-r border-border bg-sidebar px-3 py-5">
      <div>
        {/* Brand */}
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 text-lg font-bold text-white">
            I
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-bold text-ink-900">Incurv ERP</p>
            <p className="text-xxs font-medium tracking-wide text-ink-400">
              ENTERPRISE CENTRAL
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavRow key={item.key} {...item} active={item.key === activeKey} />
          ))}
        </nav>
      </div>

      {/* Footer nav */}
      <div className="border-t border-border-light pt-3">
        <nav className="flex flex-col gap-1">
          {footerNavItems.map((item) => (
            <NavRow key={item.key} {...item} active={false} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
