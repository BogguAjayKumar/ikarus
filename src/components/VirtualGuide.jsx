import React, { useState, useEffect } from 'react';
import { Bot, X, ArrowRight, ArrowLeft, Play, Sparkles, MapPin, Award, Terminal, BookOpen, Users, HelpCircle, CheckCircle2, MessageSquare } from 'lucide-react';

export default function VirtualGuide({ activeTab, setActiveTab, onSelectTrack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tourStep, setTourStep] = useState(null); // null when not in step-by-step tour
  const [userQuery, setUserQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'guide',
      text: "👋 Hi there! I'm Alex, your official IKARUS 2026 Virtual Guide at KG Reddy College. I can guide you anywhere on this webpage or explain any challenge!"
    }
  ]);

  // Tour steps definition
  const tourSteps = [
    {
      step: 1,
      title: "1. Welcome & Fest Overview",
      tab: 'overview',
      message: "Welcome to IKARUS 2026 at KG Reddy College of Engineering & Technology! Here you can find the event overview, venue location (KGRCET CSE Labs), and rules of conduct.",
    },
    {
      step: 2,
      title: "2. The 3 Event Tracks",
      tab: 'competitions',
      message: "Here are the 3 specialized tracks: 1st Year (Digital Footprint Hunt), 2nd Year (Steg-Ops), and 3rd Year (Operation Decrypt). Click any track to see detailed round breakdowns!",
    },
    {
      step: 3,
      title: "3. Interactive Practice Arena",
      tab: 'arena',
      track: '1st',
      message: "This is our flagship Practice Arena! You can interactively inspect evidence files (profile, email, SMS logs), answer questions, solve steganography ciphers, and crack hashes!",
    },
    {
      step: 4,
      title: "4. Cyber Tools & Cheat Sheet",
      tab: 'tools',
      message: "Need Google Dorks, Steghide commands, or a Caesar/ROT13 cipher transformer? Everything is available in this Cyber Toolkit!",
    },
    {
      step: 5,
      title: "5. Live Leaderboard",
      tab: 'leaderboard',
      message: "Keep track of live rank standings, points, and completion time tiebreakers here. You're now fully guided and ready to win!",
    }
  ];

  const handleStartTour = () => {
    setTourStep(0);
    setActiveTab(tourSteps[0].tab);
  };

  const handleNextTourStep = () => {
    if (tourStep !== null && tourStep < tourSteps.length - 1) {
      const nextIndex = tourStep + 1;
      setTourStep(nextIndex);
      setActiveTab(tourSteps[nextIndex].tab);
      if (tourSteps[nextIndex].track && onSelectTrack) {
        onSelectTrack(tourSteps[nextIndex].track);
      }
    } else {
      setTourStep(null); // finish tour
    }
  };

  const handlePrevTourStep = () => {
    if (tourStep !== null && tourStep > 0) {
      const prevIndex = tourStep - 1;
      setTourStep(prevIndex);
      setActiveTab(tourSteps[prevIndex].tab);
    }
  };

  const handleQuickNavigate = (tab, track = null) => {
    setActiveTab(tab);
    if (track && onSelectTrack) {
      onSelectTrack(track);
    }
    setChatHistory((prev) => [
      ...prev,
      { sender: 'user', text: `Take me to ${tab.toUpperCase()} ${track ? `(${track} Year)` : ''}` },
      { sender: 'guide', text: `✨ Done! I have navigated you to the ${tab.toUpperCase()} section. Let me know if you need help with anything here!` }
    ]);
  };

  const handleSendQuestion = (questionText) => {
    const q = questionText || userQuery;
    if (!q.trim()) return;

    let answer = "I'm here to help! You can use the buttons above to navigate to any section, or ask me about the 1st, 2nd, or 3rd year tracks!";
    
    const lower = q.toLowerCase();
    if (lower.includes('1st year') || lower.includes('footprint') || lower.includes('osint') || lower.includes('scam')) {
      answer = "The 1st Year competition 'The Digital Footprint Hunt' involves OSINT clue tracing (Round 1) and 'Spot the Scam' phishing email/SMS analysis (Round 2). Would you like me to take you to the 1st Year Practice Arena?";
    } else if (lower.includes('2nd year') || lower.includes('steg') || lower.includes('cipher')) {
      answer = "The 2nd Year competition 'Steg-Ops' involves inspecting image steganography (Round 1) and breaking Base64/Caesar ciphers (Round 2) to get the flag IKARUS{st3g0_ninja_2026}.";
    } else if (lower.includes('3rd year') || lower.includes('hash') || lower.includes('zip')) {
      answer = "The 3rd Year competition 'Operation Decrypt' involves reversing SHA-256 hashes via CrackStation (Round 1) and unlocking protected ZIP archives (Round 2) to retrieve flag.txt!";
    } else if (lower.includes('rule') || lower.includes('tie') || lower.includes('score')) {
      answer = "Scores are calculated based on accuracy and correct reasoning. If two teams tie on points, the fastest submission timestamp on the server wins!";
    } else if (lower.includes('venue') || lower.includes('college') || lower.includes('where')) {
      answer = "IKARUS 2026 is hosted live at KG Reddy College of Engineering & Technology (KGRCET) in the CSE Department Computer Laboratories.";
    }

    setChatHistory((prev) => [
      ...prev,
      { sender: 'user', text: q },
      { sender: 'guide', text: answer }
    ]);

    setUserQuery('');
  };

  return (
    <>
      {/* Floating Avatar Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Tooltip speech bubble when closed */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="glass-panel py-2 px-3.5 border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-xl cursor-pointer hover:scale-105 transition-all flex items-center gap-2 animate-bounce"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Need a guide? Click Alex!</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
            isOpen 
              ? 'bg-rose-600 text-white rotate-90 scale-110' 
              : 'bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white hover:scale-110 ring-4 ring-cyan-500/30'
          }`}
          title="Toggle AI Virtual Guide"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
        </button>
      </div>

      {/* Virtual Guide Modal / Drawer Overlay */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 max-w-md w-full glass-panel border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Guide Avatar Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-cyan-950/60 to-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white border-2 border-cyan-400/50 shadow">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 absolute bottom-0 right-0"></span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Alex</span>
                  <span className="badge badge-cyan text-[9px] py-0 px-1.5">KGRCET Guide</span>
                </h3>
                <p className="text-[10px] text-cyan-300 font-mono">Interactive Webpage Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-slate-900/80 border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Active Step-by-Step Tour Banner (If Tour is Active) */}
          {tourStep !== null && (
            <div className="p-3 bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                <span>{tourSteps[tourStep].title}</span>
                <span className="font-mono text-[10px] text-gray-400">Step {tourStep + 1} of 5</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                {tourSteps[tourStep].message}
              </p>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handlePrevTourStep}
                  disabled={tourStep === 0}
                  className="btn btn-secondary text-[10px] py-1 px-2.5 disabled:opacity-40"
                >
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>

                <button
                  onClick={handleNextTourStep}
                  className="btn btn-emerald text-[10px] py-1 px-3 font-bold"
                >
                  {tourStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next Step'} <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* Quick Teleport Navigation Shortcuts */}
          <div className="p-3 bg-slate-950/80 border-b border-white/10 space-y-2">
            <div className="text-[10px] uppercase font-bold text-gray-400 flex items-center justify-between">
              <span>Guided Teleport Navigation:</span>
              <button 
                onClick={handleStartTour}
                className="text-cyan-400 font-bold hover:underline flex items-center gap-1 font-mono text-[10px]"
              >
                <Play className="w-3 h-3 text-amber-400" /> Start 5-Step Tour
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold">
              <button
                onClick={() => handleQuickNavigate('arena', '1st')}
                className="p-2 rounded bg-slate-900 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-left truncate transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 shrink-0" /> 1st Year Arena
              </button>

              <button
                onClick={() => handleQuickNavigate('arena', '2nd')}
                className="p-2 rounded bg-slate-900 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-left truncate transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 shrink-0" /> 2nd Year Arena
              </button>

              <button
                onClick={() => handleQuickNavigate('arena', '3rd')}
                className="p-2 rounded bg-slate-900 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-left truncate transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 shrink-0" /> 3rd Year Arena
              </button>

              <button
                onClick={() => handleQuickNavigate('tools')}
                className="p-2 rounded bg-slate-900 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-left truncate transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 shrink-0" /> Cyber Toolkit
              </button>
            </div>
          </div>

          {/* Chat / Message Stream */}
          <div className="p-4 overflow-y-auto space-y-3 max-h-56 font-sans text-xs flex-1">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'guide' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-xl max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none font-medium'
                      : 'bg-slate-900 border border-white/10 text-gray-200 rounded-bl-none font-mono text-[11px]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ Chips & Question Input */}
          <div className="p-3 bg-slate-950 border-t border-white/10 space-y-2">
            <div className="flex gap-1.5 overflow-x-auto pb-1 text-[10px] font-medium text-gray-300">
              <button 
                onClick={() => handleSendQuestion("What is the flag format?")}
                className="px-2 py-1 rounded bg-slate-900 border border-white/10 hover:border-cyan-400 shrink-0"
              >
                Flag format?
              </button>
              <button 
                onClick={() => handleSendQuestion("Where is the venue?")}
                className="px-2 py-1 rounded bg-slate-900 border border-white/10 hover:border-cyan-400 shrink-0"
              >
                Venue location?
              </button>
              <button 
                onClick={() => handleSendQuestion("How does tiebreaker work?")}
                className="px-2 py-1 rounded bg-slate-900 border border-white/10 hover:border-cyan-400 shrink-0"
              >
                Tiebreaker rule?
              </button>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask Alex anything..."
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
                className="input-field text-xs"
              />
              <button
                onClick={() => handleSendQuestion()}
                className="btn btn-emerald py-2 px-3 text-xs shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
