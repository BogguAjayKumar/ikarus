import React, { useState } from 'react';
import { Search, Eye, KeyRound, Clock, Users, Trophy, CheckCircle, ArrowRight, Terminal, Shield, FileText, Lock } from 'lucide-react';

export default function CompetitionsSection({ setActiveTab, onSelectTrack }) {
  const [activeTrackTab, setActiveTrackTab] = useState('1st');

  const tracks = [
    {
      id: '1st',
      year: '1st Year',
      name: 'The Digital Footprint Hunt',
      subtitle: 'Digital Investigation • Scam & Phishing Detection',
      format: 'Individual or Pairs',
      time: '30 - 45 Mins',
      color: 'emerald',
      badgeClass: 'badge-emerald',
      borderClass: 'border-emerald-500/40',
      icon: Search,
      round1Title: 'Round 1: OSINT & Fictitious Profile Clue Tracing',
      round1Desc: 'Participants receive a fictitious target profile scenario (e.g., "Find the missing clue hidden across public dummy social profiles or Google search operators"). You will inspect files including user_profile.txt, email_conversation.eml, sms_logs.txt, website screenshots, and transactions.csv.',
      round2Title: 'Round 2: "Spot the Scam" Phishing Challenge',
      round2Desc: 'Participants inspect 10 realistic-looking emails, URLs, and SMS messages. You must identify which ones are phishing scams and provide valid technical reasoning.',
      victoryDesc: 'Points are awarded for each clue correctly traced in Round 1 and each scam correctly identified (with valid reasoning) in Round 2. The individual or pair with the highest combined score — and fastest completion time as tiebreaker — wins.',
      sampleFlag: 'Score Based + Reasoning Verification'
    },
    {
      id: '2nd',
      year: '2nd Year',
      name: 'Steg-Ops: Hidden in Plain Sight',
      subtitle: 'Steganography • Image Forensics • Cipher Breaking',
      format: 'Teams of 2',
      time: '45 Mins',
      color: 'purple',
      badgeClass: 'badge-purple',
      borderClass: 'border-purple-500/40',
      icon: Eye,
      round1Title: 'Round 1: Image Forensics & Steganography',
      round1Desc: 'Each team receives an image file that looks ordinary on the surface but has hidden data embedded using steganography. Teams must use tools like Steghide, inspect EXIF file metadata, or analyze binary strings (`strings` command) to extract the hidden payload.',
      round2Title: 'Round 2: Cipher Break & Multi-stage Decoding',
      round2Desc: 'The extracted payload contains an encoded cipher (e.g., Base64 encoding, ROT13 shift, or Caesar cipher). Teams must decode the message manually or using online/CLI decoders to reveal the final flag code.',
      victoryDesc: 'The decoded message reveals a secret victory flag code format. The first team to submit the exact decoded string wins the track!',
      sampleFlag: 'IKARUS{st3g0_ninja_2026}'
    },
    {
      id: '3rd',
      year: '3rd Year',
      name: 'Operation: Decrypt & UnLock',
      subtitle: 'Hash Lookup • Password Cracking • ZIP Extraction',
      format: 'Teams of 2',
      time: '45 - 60 Mins',
      color: 'amber',
      badgeClass: 'badge-amber',
      borderClass: 'border-amber-500/40',
      icon: KeyRound,
      round1Title: 'Round 1: Hash Identification & Reverse Lookup',
      round1Desc: 'Each team receives a target MD5 or SHA-256 hash string generated from a secret passphrase. Teams must identify the algorithm and use hash lookup engines or rainbow table databases (like CrackStation) to reverse the hash into its original plain-text password.',
      round2Title: 'Round 2: Password-Protected Archive Extraction',
      round2Desc: 'Once the team recovers the decrypted plain-text password, they must use it to unlock a password-protected encrypted .zip file located on their assigned lab PC.',
      victoryDesc: 'Inside the unlocked ZIP archive is a flag.txt document containing the secret victory code. The first team to submit the exact flag string wins!',
      sampleFlag: 'IKARUS{h4sh_cr4ck3d_2026}'
    }
  ];

  const currentTrack = tracks.find(t => t.id === activeTrackTab);

  return (
    <div className="py-12 bg-[#070a12]">
      <div className="container max-w-5xl mx-auto space-y-10">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="badge badge-cyan font-mono text-xs">OFFICIAL TRACK BREAKDOWN</span>
          <h2 className="text-3xl font-extrabold text-white">
            IKARUS 2026 <span className="text-cyan-400">Competitions Handbook</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Each academic year at KG Reddy College has a tailored competition track designed to test relevant skills. Select a track below to explore how it works.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className="grid grid-cols-3 gap-3 p-1.5 rounded-xl bg-slate-900 border border-white/10 max-w-2xl mx-auto">
          {tracks.map((track) => {
            const isActive = activeTrackTab === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrackTab(track.id)}
                className={`py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-lg border border-cyan-500/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <track.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                <span>{track.year}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Showcase */}
        {currentTrack && (
          <div className={`glass-panel p-8 border ${currentTrack.borderClass} space-y-8 relative overflow-hidden`}>
            
            {/* Track Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`badge ${currentTrack.badgeClass}`}>{currentTrack.year} Track</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> {currentTrack.time}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                    <Users className="w-3.5 h-3.5 text-purple-400" /> {currentTrack.format}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentTrack.name}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                  {currentTrack.subtitle}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectTrack(currentTrack.id);
                  setActiveTab('arena');
                }}
                className="btn btn-emerald py-3 px-5 text-xs font-bold shrink-0 shadow-lg"
              >
                <Terminal className="w-4 h-4" /> Practice {currentTrack.year} Challenge
              </button>
            </div>

            {/* Rounds Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Round 1 */}
              <div className="bg-slate-900/70 p-6 rounded-xl border border-white/10 space-y-3 relative">
                <div className="badge badge-cyan text-[10px]">STAGE 1</div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  {currentTrack.round1Title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {currentTrack.round1Desc}
                </p>
              </div>

              {/* Round 2 */}
              <div className="bg-slate-900/70 p-6 rounded-xl border border-white/10 space-y-3 relative">
                <div className="badge badge-purple text-[10px]">STAGE 2</div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-400" />
                  {currentTrack.round2Title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {currentTrack.round2Desc}
                </p>
              </div>
            </div>

            {/* The Victory Banner */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Trophy className="w-5 h-5" /> The Victory & Scoring
                </div>
                <p className="text-xs text-gray-300 max-w-2xl leading-relaxed">
                  {currentTrack.victoryDesc}
                </p>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-emerald-500/30 font-mono text-xs text-emerald-300 shrink-0">
                <div className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Sample Target Flag</div>
                <div>{currentTrack.sampleFlag}</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
