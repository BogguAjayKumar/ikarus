import React, { useState } from 'react';
import { Trophy, Clock, Search, Award, CheckCircle2, Shield } from 'lucide-react';

export default function LeaderboardPreview() {
  const [selectedYear, setSelectedYear] = useState('1st');
  const [searchQuery, setSearchQuery] = useState('');

  const leaderboardData = {
    '1st': [
      { rank: 1, team: 'Cipher Hunters', members: 'Rahul V. & Sneha P.', points: 950, time: '22m 14s', status: 'Solved All 4 Qs + 4/4 Scams' },
      { rank: 2, team: 'OSINT Ninjas', members: 'Vikram R.', points: 900, time: '24m 45s', status: 'Solved 4 Qs + 3/4 Scams' },
      { rank: 3, team: 'Byte Trackers', members: 'Ananya M. & Karthik G.', points: 850, time: '28m 02s', status: 'Solved 3 Qs + 4/4 Scams' },
      { rank: 4, team: 'Shadow Detectives', members: 'Pooja K.', points: 780, time: '31m 10s', status: 'Solved 3 Qs + 2/4 Scams' }
    ],
    '2nd': [
      { rank: 1, team: 'StegMasters_KGRCET', members: 'Aditya S. & Rohan M.', points: 1000, time: '18m 32s', status: 'Flag Verified: IKARUS{st3g0_ninja_2026}' },
      { rank: 2, team: 'Null Pointers', members: 'Deepak T. & Priya N.', points: 1000, time: '23m 15s', status: 'Flag Verified: IKARUS{st3g0_ninja_2026}' },
      { rank: 3, team: 'EXIF Inspectors', members: 'Harish R. & Bhavana K.', points: 600, time: '40m 10s', status: 'Stage 1 Completed' }
    ],
    '3rd': [
      { rank: 1, team: 'HashCrackers_CSE', members: 'Siddharth V. & Manasa R.', points: 1000, time: '29m 08s', status: 'Flag Verified: IKARUS{h4sh_cr4ck3d_2026}' },
      { rank: 2, team: 'RainbowTable_Force', members: 'Nikhil P. & Swati L.', points: 1000, time: '34m 50s', status: 'Flag Verified: IKARUS{h4sh_cr4ck3d_2026}' },
      { rank: 3, team: 'Crypto Knights', members: 'Varun K. & Akhil B.', points: 500, time: '45m 00s', status: 'Hash Cracked' }
    ]
  };

  const list = leaderboardData[selectedYear].filter(item => 
    item.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.members.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 bg-[#070a12]">
      <div className="container max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <span className="badge badge-amber font-mono text-xs">LIVE SCORES & STANDINGS</span>
          <h2 className="text-3xl font-extrabold text-white">
            IKARUS 2026 <span className="text-amber-400">Leaderboard</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Real-time rankings updated instantly upon flag submission. Tiebreakers resolved by completion timestamp.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 border-white/10">
          {/* Year Track Selector */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setSelectedYear('1st')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                selectedYear === '1st' ? 'bg-emerald-500 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              1st Year Track
            </button>
            <button
              onClick={() => setSelectedYear('2nd')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                selectedYear === '2nd' ? 'bg-purple-500 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              2nd Year Track
            </button>
            <button
              onClick={() => setSelectedYear('3rd')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                selectedYear === '3rd' ? 'bg-amber-500 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              3rd Year Track
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search team or student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-9 text-xs"
            />
          </div>
        </div>

        {/* Table Display */}
        <div className="glass-panel overflow-hidden border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-gray-400 uppercase font-mono text-[10px] border-b border-white/10">
                <tr>
                  <th className="p-4 text-center">Rank</th>
                  <th className="p-4">Team & Participants</th>
                  <th className="p-4">Progress / Flag Status</th>
                  <th className="p-4 text-center">Time Taken</th>
                  <th className="p-4 text-right">Total Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {list.map((row) => (
                  <tr key={row.rank} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-center">
                      {row.rank === 1 && <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-400/20 text-amber-300 font-bold text-sm border border-amber-400/40">🥇 1</span>}
                      {row.rank === 2 && <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-400/20 text-slate-200 font-bold text-sm border border-slate-400/40">🥈 2</span>}
                      {row.rank === 3 && <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700/20 text-amber-500 font-bold text-sm border border-amber-700/40">🥉 3</span>}
                      {row.rank > 3 && <span className="text-gray-400 font-mono font-bold">#{row.rank}</span>}
                    </td>

                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{row.team}</div>
                      <div className="text-gray-400 text-xs">{row.members}</div>
                    </td>

                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {row.status}
                      </span>
                    </td>

                    <td className="p-4 text-center font-mono text-gray-300">
                      <div className="flex items-center justify-center gap-1 text-xs">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {row.time}
                      </div>
                    </td>

                    <td className="p-4 text-right">
                      <span className="font-extrabold text-base text-emerald-400 font-mono">
                        {row.points} pts
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
