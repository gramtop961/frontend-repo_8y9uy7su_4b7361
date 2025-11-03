import React from 'react';
import { Home, LayoutDashboard, User, Settings, Info } from 'lucide-react';

const DockItem = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    className="group relative flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-cyan-50/90 hover:text-cyan-50 transition-colors"
  >
    <div className="relative">
      <div className="absolute -inset-2 rounded-2xl bg-cyan-400/0 blur-xl transition-all group-hover:bg-cyan-400/15" />
      <Icon className="h-5 w-5" />
    </div>
    <span className="text-[10px] opacity-80">{label}</span>
  </a>
);

const DockNav = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div
        className="flex items-center gap-3 rounded-[22px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-pink-500/15 px-4 py-2 backdrop-blur-xl shadow-[0_8px_40px_rgba(34,211,238,0.25)]"
      >
        <DockItem href="/" label="Home" Icon={Home} />
        <DockItem href="/dashboard" label="Dashboard" Icon={LayoutDashboard} />
        <DockItem href="/profile" label="Profile" Icon={User} />
        <DockItem href="/settings" label="Settings" Icon={Settings} />
        <DockItem href="/about" label="About" Icon={Info} />
      </div>
    </nav>
  );
};

export default DockNav;
