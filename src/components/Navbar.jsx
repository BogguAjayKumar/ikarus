import React from 'react';
import { Shield, Award, Terminal, BookOpen, Users, HelpCircle, Bell, User } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenContact }) {
  const navItems = [
    { id: 'overview', label: 'Home', icon: Shield },
    { id: 'competitions', label: 'Competitions', icon: Award },
    { id: 'arena', label: 'Interactive Arena', icon: Terminal, highlight: true },
    { id: 'tools', label: 'Cyber Toolkit', icon: BookOpen },
    { id: 'leaderboard', label: 'Leaderboard', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070a14]/95 backdrop-blur-xl border-b border-white/10">
      <div className="container flex items-center justify-between h-20 px-4 sm:px-6">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-all">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                IKARUS <span className="text-cyan-400">2026</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full hidden sm:inline-block">
                KGRCET
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-medium tracking-wide">
              KG Reddy College of Engineering & Technology
            </p>
          </div>
        </div>

        {/* Center Main Navigation Tabs in strict order */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : item.highlight
                    ? 'text-amber-400 hover:bg-amber-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${item.highlight && !isActive ? 'animate-pulse text-amber-400' : ''}`} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400"></span>
                )}
                {item.highlight && !isActive && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Student Avatar Widget (Matching screenshot) & Help */}
        <div className="flex items-center gap-3">
          <button 
            className="p-2.5 rounded-lg text-gray-400 hover:text-white bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors hidden sm:flex"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenContact}
            className="p-2.5 rounded-lg text-gray-400 hover:text-white bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors"
            title="Helpdesk & Organizers"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* User Profile Pill matching screenshot top-right "JD John Doe" */}
          <div className="flex items-center gap-2.5 bg-slate-900/90 border border-white/10 py-1.5 px-3 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono">
              JD
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-white leading-none">Student Portal</div>
              <div className="text-[10px] text-cyan-400 font-mono">KGRCET CSE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation tab bar */}
      <div className="lg:hidden flex items-center justify-around bg-slate-950 px-2 py-2 border-t border-white/10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 text-[10px] font-semibold transition-all ${
                isActive ? 'text-cyan-400 font-bold' : 'text-gray-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
