import React from 'react';
import { X, Mail, Phone, MapPin, Shield, User, HelpCircle, AlertCircle } from 'lucide-react';

export default function OrganizersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0b1021] border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-white bg-slate-900 border border-white/10 hover:border-cyan-500/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Event Support & Organizers</h3>
            <p className="text-xs text-cyan-400 font-mono">KG Reddy College of Engineering & Technology</p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="space-y-3 text-xs">
          
          {/* Host Venue */}
          <div className="p-3 bg-slate-900/80 rounded-xl border border-white/10 space-y-1">
            <div className="font-bold text-gray-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" /> Venue Location
            </div>
            <p className="text-gray-400 leading-relaxed pl-5">
              CSE Department Computer Labs (Lab 1 - Lab 4), KG Reddy College of Engineering & Technology, Chilkur Balaji Temple Road, Hyderabad, Telangana.
            </p>
          </div>

          {/* Faculty Convenor */}
          <div className="p-3 bg-slate-900/80 rounded-xl border border-white/10 space-y-1">
            <div className="font-bold text-gray-300 flex items-center gap-1.5">
              <User className="w-4 h-4 text-cyan-400" /> Faculty Convenor & Head of Dept.
            </div>
            <div className="text-white font-semibold pl-5">Dr. Cybersecurity Lead / CSE Dept</div>
            <div className="text-gray-400 pl-5 font-mono">Email: convenor.ikarus@kgrcet.ac.in</div>
          </div>

          {/* Student Technical Coordinators */}
          <div className="p-3 bg-slate-900/80 rounded-xl border border-white/10 space-y-2">
            <div className="font-bold text-gray-300 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-purple-400" /> Student Technical Support Leads
            </div>
            <div className="pl-5 space-y-1 font-mono text-[11px] text-gray-300">
              <div className="flex justify-between">
                <span>Rohan Verma (Technical Lead):</span>
                <span className="text-cyan-400">+91 98765 12345</span>
              </div>
              <div className="flex justify-between">
                <span>Kavya Sharma (Event Coordinator):</span>
                <span className="text-cyan-400">+91 98765 67890</span>
              </div>
            </div>
          </div>

          {/* Technical Help Notice */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-[11px] flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              If you experience PC hardware issues or platform login glitches on event day, notify your assigned Lab Volunteer immediately.
            </span>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button onClick={onClose} className="btn btn-secondary text-xs py-2 px-5">
            Close Handbook Help
          </button>
        </div>

      </div>
    </div>
  );
}
