import Sidebar from './Sidebar';

export default function PageLayout({ activeKey, children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-surface">
      <Sidebar activeKey={activeKey} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
