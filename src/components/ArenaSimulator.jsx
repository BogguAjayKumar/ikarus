import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Clock, FileText, Mail, MessageSquare, Globe, 
  Share2, DollarSign, CheckCircle2, XCircle, Search, KeyRound, 
  Eye, Lock, Download, Maximize2, AlertCircle, ArrowRight, RefreshCw, Trophy, Sparkles, Send, HelpCircle, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ArenaSimulator({ selectedTrack, setSelectedTrack }) {
  // Timer state (28:15)
  const [timeLeft, setTimeLeft] = useState(28 * 60 + 15);
  const [isTimerRunning] = useState(true);

  // Active round in current track
  const [currentRound, setCurrentRound] = useState(1);

  // 1st Year State
  const [activeFile, setActiveFile] = useState('profile');
  const [qIndex, setQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [phishingDecisions, setPhishingDecisions] = useState({});

  // 2nd Year State
  const [stegTool, setStegTool] = useState('metadata');
  const [cipherInput, setCipherInput] = useState('VW5sb2NrIHRoZSBzZWNyZXQgY29kZTogSUtBUlVTe3N0M2cwX25pbmphXzIwMjZ9');
  const [stegFlagInput, setStegFlagInput] = useState('');
  const [stegSolved, setStegSolved] = useState(false);

  // 3rd Year State
  const [targetHash] = useState('8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
  const [hashResult, setHashResult] = useState(null);
  const [zipPasswordInput, setZipPasswordInput] = useState('');
  const [zipUnlocked, setZipUnlocked] = useState(false);
  const [hashFlagInput, setHashFlagInput] = useState('');
  const [hashSolved, setHashSolved] = useState(false);

  // Timer Countdown Effect
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 1st Year Questions
  const questions1st = [
    {
      id: 1,
      q: "What is the full name of the person in the profile?",
      answer: "Aarav Mehta",
      hint: "Check user_profile.txt or the profile preview card."
    },
    {
      id: 2,
      q: "What is the suspicious phishing domain found in the SMS logs?",
      answer: "http://bit.ly/fake-kgrcet-verify",
      hint: "Inspect sms_logs.txt for suspicious urgency alerts."
    },
    {
      id: 3,
      q: "What username handle is used across Aarav's social accounts?",
      answer: "aarav.m_21",
      hint: "Inspect profile details or social media handles."
    },
    {
      id: 4,
      q: "What is the secret repository URL path mentioned in his social media post?",
      answer: "github.com/aarav21-hidden",
      hint: "Check social_media.txt post text."
    }
  ];

  const handleAnswerSubmit = (qId, expected) => {
    const val = (userAnswers[qId] || '').trim();
    if (!val) return;

    if (val.toLowerCase() === expected.toLowerCase()) {
      setFeedback({ ...feedback, [qId]: { success: true, msg: 'Correct answer! Points added to leaderboard.' } });
    } else {
      setFeedback({ ...feedback, [qId]: { success: false, msg: `Incorrect. Re-examine the evidence file carefully!` } });
    }
  };

  const scamItems = [
    {
      id: 1,
      sender: "Security Alert <security@kgrcet-verify-login.com>",
      subject: "URGENT: Password Expiration Notice",
      content: "Your college portal password expires in 1 hour. Click http://kgrcet-verify-login.com to reset now.",
      isScam: true,
      reason: "Spoofed domain (kgrcet-verify-login.com instead of kgrcet.ac.in)"
    },
    {
      id: 2,
      sender: "Exam Branch <exams@kgrcet.ac.in>",
      subject: "Schedule for Mid-Term Examinations 2026",
      content: "Dear Students, Please find attached the mid-term timetable for B.Tech CSE 2026.",
      isScam: false,
      reason: "Legitimate official domain & notice"
    },
    {
      id: 3,
      sender: "SMS: +91 9988776655",
      subject: "Banking Alert",
      content: "INR 15,000 debited from SBI A/C ending 4012. If not done by you, visit http://bit.ly/sbi-block-now",
      isScam: true,
      reason: "Shortened link (bit.ly) requesting credential verification"
    },
    {
      id: 4,
      sender: "IKARUS Coordinators <ikarus@kgrcet.ac.in>",
      subject: "Lab Assignment Confirmation",
      content: "Welcome to IKARUS 2026! Your assigned lab PC is Lab-2 Workstation 14.",
      isScam: false,
      reason: "Official event communication"
    }
  ];

  const handleScamDecision = (id, choice) => {
    setPhishingDecisions({ ...phishingDecisions, [id]: choice });
  };

  const handleSolveStegFlag = () => {
    if (stegFlagInput.trim() === 'IKARUS{st3g0_ninja_2026}') {
      setStegSolved(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      alert("Incorrect flag! Ensure you decode the string properly.");
    }
  };

  const handleCrackHash = () => {
    setHashResult({
      hash: targetHash,
      type: 'SHA-256',
      plaintext: 'kgrcet2026',
      status: 'CRACKED (Database Match Found in 0.04s)'
    });
  };

  const handleUnlockZip = () => {
    if (zipPasswordInput.trim() === 'kgrcet2026') {
      setZipUnlocked(true);
    } else {
      alert("Incorrect ZIP Password! Crack the SHA-256 hash first.");
    }
  };

  const handleSolveHashFlag = () => {
    if (hashFlagInput.trim() === 'IKARUS{h4sh_cr4ck3d_2026}') {
      setHashSolved(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } else {
      alert("Incorrect flag! Copy the exact string inside flag.txt.");
    }
  };

  const decodeBase64 = (str) => {
    try {
      return atob(str);
    } catch {
      return "Invalid Base64 string";
    }
  };

  return (
    <div className="py-6 bg-[#070a14] min-h-screen">
      <div className="container max-w-7xl mx-auto space-y-6">

        {/* 1. Main Banner (Exact match to screenshot top banner) */}
        <div className="glass-panel p-6 border-cyan-500/30 relative overflow-hidden bg-gradient-to-r from-slate-900 via-[#0d1424] to-slate-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                CYBERSECURITY <span className="text-cyan-400">COMPETITIONS</span>
              </h1>
              <p className="text-sm text-cyan-200/80 font-medium mt-1">
                Investigate. Decode. UnLock. Put your skills to the test.
              </p>
            </div>
            
            <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-right font-mono text-xs hidden sm:block">
              <div className="text-amber-400 font-bold tracking-wider">REAL PROBLEMS.</div>
              <div className="text-gray-300">REAL SKILLS.</div>
              <div className="text-emerald-400 font-bold">REAL CHALLENGES.</div>
            </div>
          </div>
        </div>

        {/* 2. Top 3 Track Selection Cards (Matching screenshot 3 Year Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* 1st Year Card */}
          <div 
            onClick={() => { setSelectedTrack('1st'); setCurrentRound(1); }}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedTrack === '1st' 
                ? 'bg-slate-900/90 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500' 
                : 'bg-slate-900/50 border-white/10 hover:border-emerald-500/50 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">1st Year</span>
                <h3 className="text-sm font-bold text-white leading-tight">The Digital Footprint Hunt</h3>
                <p className="text-[11px] text-gray-400 font-mono">Digital investigation • Scam detection</p>
              </div>
            </div>
          </div>

          {/* 2nd Year Card */}
          <div 
            onClick={() => { setSelectedTrack('2nd'); setCurrentRound(1); }}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedTrack === '2nd' 
                ? 'bg-slate-900/90 border-purple-500 shadow-lg shadow-purple-500/10 ring-1 ring-purple-500' 
                : 'bg-slate-900/50 border-white/10 hover:border-purple-500/50 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/40 text-purple-400 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">2nd Year</span>
                <h3 className="text-sm font-bold text-white leading-tight">Steg-Ops: Hidden in Plain Sight</h3>
                <p className="text-[11px] text-gray-400 font-mono">Steganography • Decode messages</p>
              </div>
            </div>
          </div>

          {/* 3rd Year Card */}
          <div 
            onClick={() => { setSelectedTrack('3rd'); setCurrentRound(1); }}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedTrack === '3rd' 
                ? 'bg-slate-900/90 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500' 
                : 'bg-slate-900/50 border-white/10 hover:border-amber-500/50 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">3rd Year</span>
                <h3 className="text-sm font-bold text-white leading-tight">Operation: Decrypt & UnLock</h3>
                <p className="text-[11px] text-gray-400 font-mono">Hash identification • Archive access</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Sub-Header Bar (Breadcrumb, Round Badge, Timer, Actions) */}
        <div className="glass-panel p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-cyan-500/20">
          
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
              <span>Competitions</span> &gt; <span>{selectedTrack} Year</span> &gt; <span className="text-cyan-400">Round {currentRound}</span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">
                {selectedTrack === '1st' && "The Digital Footprint Hunt"}
                {selectedTrack === '2nd' && "Steg-Ops: Hidden in Plain Sight"}
                {selectedTrack === '3rd' && "Operation: Decrypt & UnLock"}
              </h2>
              <span className="badge badge-emerald font-mono text-[10px]">
                Round {currentRound} of 2
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Analyse the given information and find the answers. All data is fictional.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Live Countdown Timer */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/40 text-cyan-400 font-mono font-bold text-sm shadow">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {/* Sub Action buttons matching screenshot */}
            <button 
              onClick={() => setCurrentRound(currentRound === 1 ? 2 : 1)}
              className="btn btn-secondary text-xs py-1.5 px-3"
            >
              Switch Round
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. TRACK 1 STUDIO LAYOUT (Matching screenshot exact 3 columns) */}
        {/* ------------------------------------------------------------- */}
        {selectedTrack === '1st' && (
          <div>
            {currentRound === 1 ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                {/* Column 1: Evidence Files List */}
                <div className="lg:col-span-3 glass-panel p-4 border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-400" /> Evidence Files
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono font-bold">6 files</span>
                  </div>

                  <div className="space-y-1.5">
                    {[
                      { id: 'profile', label: 'Profile Details', file: 'user_profile.txt', icon: FileText, color: 'text-blue-400' },
                      { id: 'email', label: 'Email', file: 'email_conversation.eml', icon: Mail, color: 'text-amber-400' },
                      { id: 'sms', label: 'SMS Messages', file: 'sms_logs.txt', icon: MessageSquare, color: 'text-emerald-400' },
                      { id: 'website', label: 'Website Screenshot', file: 'website.png', icon: Globe, color: 'text-purple-400' },
                      { id: 'social', label: 'Social Media Posts', file: 'social_media.txt', icon: Share2, color: 'text-cyan-400' },
                      { id: 'transactions', label: 'Transaction Info', file: 'transactions.csv', icon: DollarSign, color: 'text-emerald-400' }
                    ].map((item) => {
                      const Icon = item.icon;
                      const isActive = activeFile === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveFile(item.id)}
                          className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all ${
                            isActive
                              ? 'bg-cyan-500/15 border border-cyan-500/40 text-white font-semibold'
                              : 'hover:bg-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${item.color}`} />
                          <div className="overflow-hidden">
                            <div className="text-xs truncate">{item.label}</div>
                            <div className="text-[10px] font-mono text-gray-500 truncate">{item.file}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Center Inspector & Question Box */}
                <div className="lg:col-span-5 glass-panel p-5 border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold text-white font-mono">
                          {activeFile === 'profile' && 'user_profile.txt'}
                          {activeFile === 'email' && 'email_conversation.eml'}
                          {activeFile === 'sms' && 'sms_logs.txt'}
                          {activeFile === 'website' && 'website.png'}
                          {activeFile === 'social' && 'social_media.txt'}
                          {activeFile === 'transactions' && 'transactions.csv'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <button className="px-2 py-1 rounded bg-slate-900 border border-white/10 hover:bg-white/10 text-[10px] flex items-center gap-1">
                          <Maximize2 className="w-3 h-3" /> Fullscreen
                        </button>
                        <button className="px-2 py-1 rounded bg-slate-900 border border-white/10 hover:bg-white/10 text-[10px] flex items-center gap-1">
                          <Download className="w-3 h-3" /> Download
                        </button>
                      </div>
                    </div>

                    {/* File Content Display */}
                    <div className="bg-[#040711] p-4 rounded-xl border border-white/10 font-mono text-xs text-cyan-100 min-h-[300px] max-h-[380px] overflow-y-auto leading-relaxed">
                      {activeFile === 'profile' && (
                        <div className="space-y-1.5">
                          <p><span className="text-gray-400">Name:</span> <strong className="text-white">Aarav Mehta</strong></p>
                          <p><span className="text-gray-400">Username:</span> <span className="text-cyan-300">aarav.m_21</span></p>
                          <p><span className="text-gray-400">Email:</span> <span className="text-cyan-300">aaravm21@studymail.com</span></p>
                          <p><span className="text-gray-400">Phone:</span> +91 98765 43210</p>
                          <p><span className="text-gray-400">Location:</span> Pune, India</p>
                          <p><span className="text-gray-400">Date of Birth:</span> 12 March 2004</p>
                          <p><span className="text-gray-400">College:</span> IGNUS College / KGRCET</p>
                          <p><span className="text-gray-400">Course:</span> B.Tech CSE</p>
                          <p><span className="text-gray-400">Hobbies:</span> Gaming, Photography, Travel</p>
                          <div className="pt-2 border-t border-white/10 text-amber-200 italic">
                            Bio: "Just a college student exploring tech and photography. Always up for new adventures!"
                          </div>
                        </div>
                      )}

                      {activeFile === 'email' && (
                        <div className="space-y-2">
                          <div className="text-gray-400 text-[11px] border-b border-white/10 pb-2">
                            From: security-alert@ignus-verify.fake-portal.com<br/>
                            To: aaravm21@studymail.com<br/>
                            Subject: Action Required: Verify Account Activity
                          </div>
                          <p>Dear Student,</p>
                          <p>We detected an unverified sign-in attempt on your student profile from IP address 192.168.1.105 (Pune, India).</p>
                          <p className="text-amber-300">Please confirm your identity by clicking the link below within 24 hours:</p>
                          <p className="text-rose-400 underline">http://ignus-verify.fake-portal.com/login?token=948102</p>
                        </div>
                      )}

                      {activeFile === 'sms' && (
                        <div className="space-y-3">
                          <div className="p-2 bg-slate-900 rounded border border-white/5">
                            <span className="text-amber-400 font-bold">[14:10] BANK-ALERT:</span> OTP 849201 for transaction of INR 2,499. Do not share with anyone.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-rose-500/30 text-rose-200">
                            <span className="text-rose-400 font-bold">[14:25] URGENT-NOTICE:</span> Your library access is suspended due to unpaid dues. Verify now at <span className="underline">http://bit.ly/fake-kgrcet-verify</span>
                          </div>
                        </div>
                      )}

                      {activeFile === 'website' && (
                        <div className="text-center py-6 space-y-3">
                          <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-cyan-400 border border-cyan-500/40">
                            AM
                          </div>
                          <h4 className="text-sm font-bold text-white">Aarav Mehta Social Media Snapshot</h4>
                          <p className="text-xs text-gray-400">@aarav.m_21 • B.Tech CSE</p>
                        </div>
                      )}

                      {activeFile === 'social' && (
                        <div className="space-y-3">
                          <div className="p-3 bg-slate-900 rounded border border-white/5">
                            <div className="text-cyan-400 font-bold mb-1">@aarav.m_21 • 2 hours ago</div>
                            <p>Just landed in Hyderabad for #IKARUS2026! Check out my secret repo at <span className="text-emerald-400 underline">github.com/aarav21-hidden</span></p>
                          </div>
                        </div>
                      )}

                      {activeFile === 'transactions' && (
                        <div className="space-y-1">
                          <div className="text-gray-400 border-b border-white/10 pb-1 flex justify-between font-bold">
                            <span>TIMESTAMP</span><span>MERCHANT</span><span>AMOUNT</span>
                          </div>
                          <div className="flex justify-between text-emerald-300">
                            <span>14-Mar 10:15</span><span>kgrcet_canteen@upi</span><span>₹120.00</span>
                          </div>
                          <div className="flex justify-between text-rose-300">
                            <span>14-Mar 12:30</span><span>scam_phish_pay@upi</span><span>₹1,500.00</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Questions Section Below */}
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-mono">
                          {qIndex + 1}
                        </span>
                        <span>Question {qIndex + 1} of {questions1st.length}</span>
                      </span>
                      
                      <div className="flex gap-1">
                        {questions1st.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setQIndex(idx)}
                            className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono ${
                              qIndex === idx ? 'bg-cyan-500 text-white font-bold' : 'bg-slate-800 text-gray-400'
                            }`}
                          >
                            {idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-gray-200 font-medium">
                      {questions1st[qIndex].q}
                    </p>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type your answer here..."
                        value={userAnswers[questions1st[qIndex].id] || ''}
                        onChange={(e) => setUserAnswers({ ...userAnswers, [questions1st[qIndex].id]: e.target.value })}
                        className="input-field text-xs"
                      />
                      <button
                        onClick={() => handleAnswerSubmit(questions1st[qIndex].id, questions1st[qIndex].answer)}
                        className="btn btn-emerald text-xs font-bold px-4 shrink-0 flex items-center gap-1"
                      >
                        <span>Next Question</span> <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {feedback[questions1st[qIndex].id] && (
                      <div className={`p-2 rounded text-xs flex items-center gap-2 ${
                        feedback[questions1st[qIndex].id].success 
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                          : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                      }`}>
                        {feedback[questions1st[qIndex].id].success ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        <span>{feedback[questions1st[qIndex].id].msg}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Column 3: Preview Card (Matching screenshot preview card exact layout) */}
                <div className="lg:col-span-4 glass-panel p-5 border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Preview
                    </span>
                    <span className="badge badge-cyan text-[10px]">Verified Profile</span>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-5 border border-white/10 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-cyan-400/50 shadow-lg">
                      AM
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Aarav Mehta</h3>
                      <p className="text-xs text-cyan-400 font-mono">@aarav.m_21</p>
                    </div>

                    <div className="text-xs text-gray-300 space-y-1 pt-2 border-t border-white/10">
                      <div>IGNUS / KG Reddy College</div>
                      <div className="text-gray-400">B.Tech CSE Student</div>
                    </div>

                    <p className="text-xs text-gray-400 italic bg-slate-950 p-3 rounded border border-white/5">
                      "Just a college student exploring tech and photography. Always up for new adventures!"
                    </p>
                  </div>
                </div>

              </div>
            ) : (
              /* Round 2: Spot the Scam Challenge */
              <div className="glass-panel p-6 border-cyan-500/30 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="badge badge-emerald font-mono text-xs">ROUND 2 OF 2</span>
                    <h3 className="text-2xl font-bold text-white mt-1">"Spot the Scam" Phishing Identification</h3>
                    <p className="text-xs text-gray-400">Analyse incoming communications and classify them accurately.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scamItems.map((item) => {
                    const decision = phishingDecisions[item.id];
                    const isEvaluated = decision !== undefined;
                    const isCorrect = isEvaluated && decision === item.isScam;

                    return (
                      <div key={item.id} className="bg-slate-900/80 p-5 rounded-xl border border-white/10 space-y-3">
                        <div className="text-xs font-mono text-cyan-400 border-b border-white/5 pb-2">
                          <div>From: {item.sender}</div>
                          <div className="text-white font-bold text-sm mt-0.5">{item.subject}</div>
                        </div>

                        <p className="text-xs text-gray-300 bg-slate-950 p-3 rounded border border-white/5 font-mono">
                          {item.content}
                        </p>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleScamDecision(item.id, true)}
                              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                                decision === true 
                                  ? 'bg-rose-500 text-white shadow' 
                                  : 'bg-slate-800 text-rose-300 hover:bg-rose-500/20'
                              }`}
                            >
                              🚨 Mark Phishing Scam
                            </button>
                            <button
                              onClick={() => handleScamDecision(item.id, false)}
                              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                                decision === false 
                                  ? 'bg-emerald-500 text-white shadow' 
                                  : 'bg-slate-800 text-emerald-300 hover:bg-emerald-500/20'
                              }`}
                            >
                              ✅ Mark Safe
                            </button>
                          </div>
                        </div>

                        {isEvaluated && (
                          <div className={`p-2.5 rounded text-xs space-y-1 ${
                            isCorrect ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300' : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                          }`}>
                            <div className="font-bold flex items-center gap-1.5">
                              {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                              {isCorrect ? "Correct Classification!" : "Incorrect Classification!"}
                            </div>
                            <div className="text-[11px] text-gray-300 font-mono">Reason: {item.reason}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TRACK 2 SIMULATOR (2nd YEAR) */}
        {/* ------------------------------------------------------------- */}
        {selectedTrack === '2nd' && (
          <div className="glass-panel p-6 border-purple-500/30 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="badge badge-purple text-xs font-mono">2ND YEAR TRACK ARENA</span>
                <h3 className="text-2xl font-bold text-white mt-1">Steg-Ops: Hidden in Plain Sight</h3>
                <p className="text-xs text-gray-400">Extract steganography payload & decode multi-stage ciphers.</p>
              </div>

              <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setStegTool('metadata')}
                  className={`px-3 py-1.5 rounded text-xs font-bold ${stegTool === 'metadata' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
                >
                  EXIF Metadata
                </button>
                <button
                  onClick={() => setStegTool('strings')}
                  className={`px-3 py-1.5 rounded text-xs font-bold ${stegTool === 'strings' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
                >
                  Binary Strings Command
                </button>
                <button
                  onClick={() => setStegTool('cipher')}
                  className={`px-3 py-1.5 rounded text-xs font-bold ${stegTool === 'cipher' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
                >
                  Cipher Decoder
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              <div className="lg:col-span-5 bg-slate-900/80 p-5 rounded-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-purple-300">
                  <span>Target File: sample_evidence.png</span>
                  <span className="text-gray-400 font-mono">512 KB</span>
                </div>

                <div className="h-44 rounded-xl bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950 border border-purple-500/30 flex flex-col items-center justify-center p-4 text-center space-y-2 relative overflow-hidden">
                  <Eye className="w-10 h-10 text-purple-400 animate-pulse" />
                  <div className="text-sm font-bold text-white">Steganography Image Payload</div>
                  <p className="text-[11px] text-gray-400 font-mono">Hidden payload injected inside binary LSB strings</p>
                </div>

                <div className="bg-[#050811] p-4 rounded-xl border border-white/10 font-mono text-xs text-purple-200 space-y-2">
                  <div className="text-[10px] uppercase font-bold text-gray-400 border-b border-white/10 pb-1">
                    Tool Execution Output ({stegTool})
                  </div>

                  {stegTool === 'metadata' && (
                    <div className="space-y-1">
                      <div>File Name: sample_evidence.png</div>
                      <div>Image Size: 1920x1080</div>
                      <div>Camera Model: KGRCET CyberLab Cam v2</div>
                      <div className="text-amber-300 font-bold pt-1">
                        CommentTag: VW5sb2NrIHRoZSBzZWNyZXQgY29kZTogSUtBUlVTe3N0M2cwX25pbmphXzIwMjZ9
                      </div>
                    </div>
                  )}

                  {stegTool === 'strings' && (
                    <div className="space-y-1 text-emerald-300">
                      <div>$ strings sample_evidence.png | grep -i "IKARUS"</div>
                      <div className="text-white font-bold bg-slate-900 p-2 rounded border border-emerald-500/30 mt-2">
                        FLAG_RAW: VW5sb2NrIHRoZSBzZWNyZXQgY29kZTogSUtBUlVTe3N0M2cwX25pbmphXzIwMjZ9
                      </div>
                    </div>
                  )}

                  {stegTool === 'cipher' && (
                    <div className="space-y-2">
                      <div>Cipher Text: {cipherInput}</div>
                      <div className="text-emerald-300 font-bold bg-slate-900 p-2 rounded">
                        Decoded Base64: "{decodeBase64(cipherInput)}"
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-900/80 p-5 rounded-xl border border-white/10 space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-purple-400" /> Interactive Cipher Breaker
                </h4>

                <div className="space-y-2">
                  <label className="text-xs text-gray-300 font-semibold block">Base64 Decoder Sandbox:</label>
                  <input
                    type="text"
                    value={cipherInput}
                    onChange={(e) => setCipherInput(e.target.value)}
                    className="input-field font-mono text-xs text-cyan-300"
                  />
                  <div className="p-3 rounded-lg bg-slate-950 border border-white/10 font-mono text-xs">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Decoded Plaintext Result:</span>
                    <span className="text-emerald-400 font-bold text-sm">{decodeBase64(cipherInput)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <label className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-400" /> Submit Secret Flag:
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="IKARUS{...}"
                      value={stegFlagInput}
                      onChange={(e) => setStegFlagInput(e.target.value)}
                      className="input-field font-mono text-xs text-emerald-300"
                    />
                    <button
                      onClick={handleSolveStegFlag}
                      className="btn btn-emerald text-xs font-bold px-6 shrink-0"
                    >
                      Submit Flag
                    </button>
                  </div>

                  {stegSolved && (
                    <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 text-xs space-y-1">
                      <div className="font-extrabold text-base text-emerald-300 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /> VICTORY! Flag Accepted!
                      </div>
                      <p>Congratulations! You extracted the hidden steganography payload and decoded the secret flag.</p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TRACK 3 SIMULATOR (3rd YEAR) */}
        {/* ------------------------------------------------------------- */}
        {selectedTrack === '3rd' && (
          <div className="glass-panel p-6 border-amber-500/30 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="badge badge-amber text-xs font-mono">3RD YEAR TRACK ARENA</span>
                <h3 className="text-2xl font-bold text-white mt-1">Operation: Decrypt & UnLock</h3>
                <p className="text-xs text-gray-400">Reverse SHA-256 hash database lookup to extract protected ZIP flag.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="bg-slate-900/80 p-5 rounded-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <span>Stage 1: Reverse Hash Lookup</span>
                  <span className="badge badge-cyan text-[10px]">CrackStation Replica</span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 block font-mono">Target SHA-256 Hash String:</label>
                  <div className="p-3 bg-[#050811] rounded border border-white/10 font-mono text-xs text-amber-300 break-all">
                    {targetHash}
                  </div>
                </div>

                <button
                  onClick={handleCrackHash}
                  className="btn btn-primary w-full text-xs font-bold py-2.5"
                >
                  <Search className="w-4 h-4" /> Query Rainbow Table Database
                </button>

                {hashResult && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> {hashResult.status}
                    </div>
                    <div className="text-gray-300">
                      Recovered Plaintext Password: <strong className="text-amber-300 text-sm">{hashResult.plaintext}</strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-slate-900/80 p-5 rounded-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <span>Stage 2: Encrypted ZIP Archive</span>
                  <span className="font-mono text-gray-400">protected_archive.zip</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <Lock className={`w-8 h-8 ${zipUnlocked ? 'text-emerald-400' : 'text-amber-400'}`} />
                    <div>
                      <div className="text-xs font-bold text-white">protected_archive.zip</div>
                      <div className="text-[11px] text-gray-400">Contains: flag.txt (AES-256 Encrypted)</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="Enter recovered password..."
                      value={zipPasswordInput}
                      onChange={(e) => setZipPasswordInput(e.target.value)}
                      className="input-field text-xs font-mono"
                    />
                    <button
                      onClick={handleUnlockZip}
                      className="btn btn-emerald text-xs font-bold px-4 shrink-0"
                    >
                      Unlock ZIP
                    </button>
                  </div>
                </div>

                {zipUnlocked && (
                  <div className="p-4 rounded-xl bg-[#040711] border border-emerald-500/40 font-mono text-xs space-y-2">
                    <div className="text-gray-400 text-[10px] uppercase font-bold">Extracted File: flag.txt</div>
                    <div className="p-2 bg-slate-900 rounded text-emerald-300 font-bold text-sm">
                      IKARUS{'{'}h4sh_cr4ck3d_2026{'}'}
                    </div>
                  </div>
                )}

                <div className="pt-2 space-y-2">
                  <label className="text-xs font-bold text-white block">Submit 3rd Year Secret Flag:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="IKARUS{...}"
                      value={hashFlagInput}
                      onChange={(e) => setHashFlagInput(e.target.value)}
                      className="input-field font-mono text-xs text-amber-300"
                    />
                    <button
                      onClick={handleSolveHashFlag}
                      className="btn btn-emerald text-xs font-bold px-5 shrink-0"
                    >
                      Submit
                    </button>
                  </div>

                  {hashSolved && (
                    <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 text-xs font-bold flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-400" />
                      <span>VICTORY! Flag Verified! Operation Decrypt Completed!</span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
