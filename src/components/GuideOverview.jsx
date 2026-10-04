import React, { useState } from 'react';
import { Shield, CheckCircle, Clock, AlertTriangle, Trophy, Zap, Cpu, Search, Lock, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

export default function GuideOverview({ setActiveTab }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Where will IKARUS 2026 be held?",
      a: "The event is hosted live at KG Reddy College of Engineering & Technology (KGRCET) in the CSE Department Computer Laboratories. Participants will be assigned lab workstations."
    },
    {
      q: "Can 1st Year students participate in pairs?",
      a: "Yes! The 1st Year competition ('The Digital Footprint Hunt') allows both individual participation and 2-member teams."
    },
    {
      q: "What tools are allowed during the competition?",
      a: "Standard browser tools, command line tools (strings, steghide, openssl), online hash lookup tools (like CrackStation), and cipher decoders are permitted. Usage of unauthorized external AI solvers or unauthorized devices is prohibited."
    },
    {
      q: "How are tiebreakers decided if multiple teams get full marks?",
      a: "Tiebreakers are strictly decided by the fastest completion timestamp recorded on the system server."
    },
    {
      q: "What format should secret victory flags follow?",
      a: "Secret flags generally follow the standard format, e.g., IKARUS{st3g0_ninja_2026} or IKARUS{h4sh_cr4ck3d_2026}. Exact format rules are specified inside each round description."
    }
  ];

  return (
    <div className="py-12 bg-[#070a12]">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Intro Header */}
        <div className="glass-panel p-8 relative overflow-hidden border-cyan-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="badge badge-cyan font-mono text-xs">EVENT HANDBOOK & STUDENT GUIDE</span>
              <h2 className="text-3xl font-extrabold text-white">
                Welcome to <span className="text-cyan-400">IKARUS 2026</span>
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Organized at <strong className="text-white">KG Reddy College of Engineering and Technology (KGRCET)</strong>, 
                IKARUS 2026 is designed to test your real-world cybersecurity acumen, OSINT investigation skills, image forensics, 
                and cryptographic password extraction across 3 customized academic tracks.
              </p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-xl border border-white/10 text-center min-w-[220px]">
              <div className="text-xs text-gray-400 font-medium mb-1">Venue & Host</div>
              <div className="text-sm font-bold text-white mb-2">KGRCET CSE Labs</div>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <MapPin className="w-3.5 h-3.5" /> Campus Lab PCs
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Competition Workflow */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">How The Competition Works</h3>
            <p className="text-sm text-gray-400">Simple step-by-step procedure on event day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-cyan-500/20">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-lg mb-4 border border-cyan-500/30">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">1. Access Assigned Lab PC</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Log into your allocated workstation in the KGRCET Computer Science Lab. Open the official IKARUS portal dashboard.
              </p>
            </div>

            <div className="glass-card p-6 border-purple-500/20">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-lg mb-4 border border-purple-500/30">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">2. Solve Round 1 & Round 2</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Inspect evidence files, analyze phishing emails, extract hidden steganography data, or crack MD5 hashes to unlock archives.
              </p>
            </div>

            <div className="glass-card p-6 border-emerald-500/20">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-500/30">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">3. Submit Flag & Claim Victory</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Submit your verified answers or secret flag string <code className="text-emerald-400 font-mono">IKARUS&#123;...&#125;</code> before the timer expires!
              </p>
            </div>
          </div>
        </div>

        {/* Scoring & Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rules & Guidelines */}
          <div className="glass-panel p-6 border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Event Rules & Code of Conduct</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Participants must work within their designated year category track.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>All evidence datasets, profiles, and emails provided are strictly fictional for educational testing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>No attacking or interfering with the competition platform or other lab workstations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Time limits range from 30 to 60 minutes depending on the competition track.</span>
              </li>
            </ul>
          </div>

          {/* Victory & Tiebreaker Rules */}
          <div className="glass-panel p-6 border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Scoring & Victory Criteria</h3>
            </div>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                <span className="font-bold text-cyan-300 block mb-1">1st Year Track Scoring:</span>
                Points awarded for each clue correctly traced in Round 1 + each scam correctly identified (with valid reasoning) in Round 2.
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                <span className="font-bold text-purple-300 block mb-1">2nd & 3rd Year Track Victory:</span>
                First team to extract and submit the exact victory flag string <code className="text-emerald-400 font-mono">IKARUS&#123;...&#125;</code> wins!
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-amber-500/20 text-amber-200">
                <span className="font-bold block mb-0.5">⏱️ Tiebreaker Rule:</span>
                If scores are equal, the fastest submission timestamp is used as tiebreaker.
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="glass-panel p-8 border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>Frequently Asked Questions</span>
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-white/10 rounded-xl overflow-hidden bg-slate-900/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-gray-200 hover:text-white"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-gray-400 border-t border-white/5 leading-relaxed bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40 border border-cyan-500/30 text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Ready to test your skills in the Practice Arena?</h3>
          <p className="text-xs text-cyan-200/80 max-w-xl mx-auto">
            Try out real sample challenges for 1st Year, 2nd Year, and 3rd Year competition tracks in our interactive simulator.
          </p>
          <button
            onClick={() => setActiveTab('arena')}
            className="btn btn-emerald py-3 px-8 text-sm font-bold shadow-lg"
          >
            <Zap className="w-4 h-4" /> Enter Practice Arena Now
          </button>
        </div>
      </div>
    </div>
  );
}
