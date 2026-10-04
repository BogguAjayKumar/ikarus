import React, { useState } from 'react';
import { BookOpen, Terminal, Copy, Check, Search, KeyRound, Shield, Code, Sparkles } from 'lucide-react';

export default function ToolsCheatSheet() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Interactive Caesar / ROT13 state
  const [cipherInput, setCipherInput] = useState('IKARUS 2026 CYBERSECURITY');
  const [caesarShift, setCaesarShift] = useState(13);

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const applyCaesar = (str, shift) => {
    return str.replace(/[a-zA-Z]/g, (c) => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
    });
  };

  const commandsList = [
    {
      category: 'OSINT & Google Dorks (1st Year Track)',
      items: [
        { title: 'Find target files on site', cmd: 'site:kgrcet.ac.in filetype:pdf "mid term"' },
        { title: 'Search indexed directory listings', cmd: 'intitle:"index of" "user_profile" site:example.com' },
        { title: 'Find exact string matches', cmd: '"aarav.m_21" OR "aaravm21@studymail.com"' }
      ]
    },
    {
      category: 'Steganography & Image Forensics (2nd Year Track)',
      items: [
        { title: 'Extract Steghide payload', cmd: 'steghide extract -sf hidden_image.jpg -p ""' },
        { title: 'Extract ASCII strings from binary', cmd: 'strings hidden_image.png | grep -i "IKARUS"' },
        { title: 'View image EXIF metadata tags', cmd: 'exiftool hidden_image.jpg' }
      ]
    },
    {
      category: 'Cryptography & Hash Cracking (3rd Year Track)',
      items: [
        { title: 'Crack ZIP password via dictionary', cmd: 'fcrackzip -u -d -p rockyou.txt protected_archive.zip' },
        { title: 'Identify Hash Type via Hash-Identifier', cmd: 'hash-identifier 8d969eef6ecad3c29a3a629280e686cf' },
        { title: 'Calculate SHA-256 hash in PowerShell', cmd: 'Get-FileHash -Algorithm SHA256 protected_archive.zip' }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#070a12]">
      <div className="container max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <span className="badge badge-cyan font-mono text-xs">STUDENT RESOURCE KIT</span>
          <h2 className="text-3xl font-extrabold text-white">
            Cyber Tools & <span className="text-cyan-400">Cheat Sheets</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Essential commands, dorks, cipher decoders, and tools for IKARUS 2026 participants.
          </p>
        </div>

        {/* Live Interactive Cipher Tool Sandbox */}
        <div className="glass-panel p-6 border-cyan-500/30 space-y-4">
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Live Interactive ROT13 & Caesar Cipher Generator</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 space-y-2">
              <label className="text-xs text-gray-300 font-semibold block">Enter Text to Encrypt/Decrypt:</label>
              <input
                type="text"
                value={cipherInput}
                onChange={(e) => setCipherInput(e.target.value)}
                className="input-field font-mono text-xs text-cyan-300"
              />
            </div>

            <div className="md:col-span-4 space-y-2">
              <label className="text-xs text-gray-300 font-semibold flex items-center justify-between">
                <span>Shift Offset (Caesar):</span>
                <span className="text-cyan-400 font-mono font-bold">+{caesarShift}</span>
              </label>
              <input
                type="range"
                min="1"
                max="25"
                value={caesarShift}
                onChange={(e) => setCaesarShift(parseInt(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-3 bg-slate-900 rounded-xl border border-white/10 font-mono text-xs space-y-1">
              <span className="text-gray-400 text-[10px] uppercase font-bold">Base64 Encoded:</span>
              <div className="text-emerald-400 truncate">{btoa(cipherInput || '')}</div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-white/10 font-mono text-xs space-y-1">
              <span className="text-gray-400 text-[10px] uppercase font-bold">ROT13 Shift (+13):</span>
              <div className="text-purple-400 truncate">{applyCaesar(cipherInput, 13)}</div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-white/10 font-mono text-xs space-y-1">
              <span className="text-gray-400 text-[10px] uppercase font-bold">Caesar Shift (+{caesarShift}):</span>
              <div className="text-amber-400 truncate">{applyCaesar(cipherInput, caesarShift)}</div>
            </div>
          </div>
        </div>

        {/* Command Cheat Sheets */}
        <div className="space-y-6">
          {commandsList.map((cat, catIdx) => (
            <div key={catIdx} className="glass-panel p-6 border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                {cat.category}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {cat.items.map((item, itemIdx) => {
                  const globalIdx = `${catIdx}-${itemIdx}`;
                  const isCopied = copiedIndex === globalIdx;

                  return (
                    <div 
                      key={itemIdx}
                      className="p-3 bg-slate-900/90 rounded-lg border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
                    >
                      <div>
                        <div className="text-gray-400 text-[11px] font-sans font-medium">{item.title}</div>
                        <div className="text-cyan-300 font-bold mt-0.5">{item.cmd}</div>
                      </div>

                      <button
                        onClick={() => copyToClipboard(item.cmd, globalIdx)}
                        className="btn btn-secondary text-xs py-1.5 px-3 self-start sm:self-auto shrink-0"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
