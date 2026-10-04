import React from 'react';
import { Shield, Sparkles, Terminal, Award, Clock, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero({ setActiveTab, onSelectTrack }) {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0b1021] via-[#070a12] to-[#070a12]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[280px] h-[280px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="badge badge-cyan shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IKARUS FEST 2026 • OFFICIAL GUIDE & ARENA</span>
          </div>
          <div className="badge badge-emerald">
            <MapPin className="w-3.5 h-3.5" />
            <span>KG REDDY COLLEGE OF ENGINEERING & TECHNOLOGY</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            CYBERSECURITY <span className="text-gradient-cyan">COMPETITIONS</span>
          </h1>
          <p className="text-lg sm:text-xl text-cyan-200/90 font-medium max-w-2xl mx-auto mb-3">
            Investigate. Decode. UnLock. Put your skills to the test.
          </p>
          <div className="inline-block px-4 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-400">
            <span className="text-amber-400 font-bold">REAL PROBLEMS.</span> REAL SKILLS. <span className="text-emerald-400 font-bold">REAL CHALLENGES.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => setActiveTab('arena')}
            className="btn btn-primary text-sm py-3 px-6 rounded-xl shadow-lg shadow-cyan-500/20"
          >
            <Terminal className="w-5 h-5" />
            <span>Launch Live Practice Arena</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={() => setActiveTab('competitions')}
            className="btn btn-secondary text-sm py-3 px-6 rounded-xl"
          >
            <Award className="w-5 h-5 text-cyan-400" />
            <span>View All 3 Event Tracks</span>
          </button>
        </div>

        {/* Quick Year Track Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 1st Year Card */}
          <div 
            onClick={() => { setActiveTab('arena'); onSelectTrack('1st'); }}
            className="glass-card p-6 border-emerald-500/30 hover:border-emerald-400 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="badge badge-emerald font-bold">1st Year Track</span>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 30-45 Mins
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
              The Digital Footprint Hunt
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Digital Investigation & Scam Detection. Trace fictitious profile clues across files, logs & detect phishing scams.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-emerald-400">
              <span>Individual or Pairs</span>
              <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Try Round 1 & 2 <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* 2nd Year Card */}
          <div 
            onClick={() => { setActiveTab('arena'); onSelectTrack('2nd'); }}
            className="glass-card p-6 border-purple-500/30 hover:border-purple-400 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:bg-purple-500/20 transition-all"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="badge badge-purple font-bold">2nd Year Track</span>
              <span className="text-xs text-purple-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 45 Mins
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
              Steg-Ops: Hidden in Plain Sight
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Steganography & Cipher Break. Inspect image forensics with Steghide/strings and crack Base64/Caesar ciphers.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-purple-400">
              <span>Teams of 2</span>
              <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Try Steg Sandbox <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* 3rd Year Card */}
          <div 
            onClick={() => { setActiveTab('arena'); onSelectTrack('3rd'); }}
            className="glass-card p-6 border-amber-500/30 hover:border-amber-400 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:bg-amber-500/20 transition-all"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="badge badge-amber font-bold">3rd Year Track</span>
              <span className="text-xs text-amber-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 45-60 Mins
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
              Operation: Decrypt & UnLock
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Hash Identification & Archive Access. Reverse MD5/SHA-256 hashes via rainbow tables to unlock protected ZIP flags.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-amber-400">
              <span>Teams of 2</span>
              <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Try Hash Cracker <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
