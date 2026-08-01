import { Search, Bell, HelpCircle, Settings } from 'lucide-react';
import { currentUser } from '../../data/mockData';

function IconButton({ children }) {
  return (
    <button
      type="button"
      className="grid h-9 w-9 place-items-center rounded-full text-ink-500 transition-colors hover:bg-surface hover:text-ink-700"
    >
      {children}
    </button>
  );
}

/**
 * left: ReactNode rendered in the left slot — either a breadcrumb trail
 *       or a search input, depending on the page.
 * showUserName: whether to render the user's name next to their avatar.
 */
export default function TopBar({ left, right, showUserName = false }) {
  return (
    <header className="flex h-[72px] shrink-0 items-center justify-between gap-6 border-b border-border bg-surface px-8">
      <div className="min-w-0 flex-1">{left}</div>

      <div className="flex shrink-0 items-center gap-4">
        {right}
        <div className="flex items-center gap-1">
        <IconButton>
          <Bell size={19} />
        </IconButton>
        <IconButton>
          <HelpCircle size={19} />
        </IconButton>
        <IconButton>
          <Settings size={19} />
        </IconButton>

        <div className="ml-2 flex items-center gap-2.5">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          {showUserName && (
            <span className="text-sm font-semibold text-ink-900">
              {currentUser.name}
            </span>
          )}
        </div>
        </div>
      </div>
    </header>
  );
}

export function SearchField({ placeholder }) {
  return (
    <div className="relative max-w-md">
      <Search
        size={16}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-panel py-2.5 pl-10 pr-4 text-sm text-ink-700 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink-400">›</span>}
            <span
              className={
                isLast ? 'font-semibold text-brand-600' : 'text-ink-500'
              }
            >
              {item}
            </span>
          </span>
        );
      })}
    </nav>
  );
}
