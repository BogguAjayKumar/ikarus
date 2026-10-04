import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuideOverview from './components/GuideOverview';
import CompetitionsSection from './components/CompetitionsSection';
import ArenaSimulator from './components/ArenaSimulator';
import ToolsCheatSheet from './components/ToolsCheatSheet';
import LeaderboardPreview from './components/LeaderboardPreview';
import OrganizersModal from './components/OrganizersModal';
import VirtualGuide from './components/VirtualGuide';
import { Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTrack, setSelectedTrack] = useState('1st');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a14] text-gray-100 font-sans flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      <div>
        {/* Navigation Bar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Hero Section displayed on Overview */}
        {activeTab === 'overview' && (
          <Hero 
            setActiveTab={setActiveTab} 
            onSelectTrack={(track) => setSelectedTrack(track)}
          />
        )}

        {/* Tab Views */}
        <main>
          {activeTab === 'overview' && (
            <GuideOverview setActiveTab={setActiveTab} />
          )}

          {activeTab === 'competitions' && (
            <CompetitionsSection 
              setActiveTab={setActiveTab} 
              onSelectTrack={(track) => setSelectedTrack(track)} 
            />
          )}

          {activeTab === 'arena' && (
            <ArenaSimulator 
              selectedTrack={selectedTrack} 
              setSelectedTrack={setSelectedTrack} 
            />
          )}

          {activeTab === 'tools' && (
            <ToolsCheatSheet />
          )}

          {activeTab === 'leaderboard' && (
            <LeaderboardPreview />
          )}
        </main>
      </div>

      {/* Interactive AI Virtual Guide "Alex" (Bottom-Right Floating Character) */}
      <VirtualGuide 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onSelectTrack={(track) => setSelectedTrack(track)}
      />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040711] py-8 text-xs text-gray-400">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white font-display">IKARUS 2026 CYBERSECURITY FEST</div>
              <div className="text-[11px] text-gray-500">KG Reddy College of Engineering & Technology (KGRCET)</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 font-medium">
            <button onClick={() => setActiveTab('overview')} className="hover:text-cyan-400 transition-colors">Guide Handbook</button>
            <button onClick={() => setActiveTab('competitions')} className="hover:text-cyan-400 transition-colors">Track Breakdown</button>
            <button onClick={() => setActiveTab('arena')} className="hover:text-cyan-400 transition-colors">Practice Arena</button>
            <button onClick={() => setActiveTab('tools')} className="hover:text-cyan-400 transition-colors">Tools & CheatSheet</button>
            <button onClick={() => setIsContactOpen(true)} className="hover:text-cyan-400 transition-colors">Organizers Contact</button>
          </div>

          <div className="text-gray-500 font-mono text-[10px]">
            © 2026 KGRCET • IGNUS Fest
          </div>
        </div>
      </footer>

      {/* Organizers Modal */}
      <OrganizersModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
