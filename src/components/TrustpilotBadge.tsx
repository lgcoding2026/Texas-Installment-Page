/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, ShieldCheck, Heart, Award } from "lucide-react";

export default function TrustpilotBadge({ isWireframe }: { isWireframe?: boolean }) {
  if (isWireframe) {
    return (
      <div id="trustpilot-rating-bar" className="bg-slate-50 border-y border-dashed border-slate-350 py-5 w-full font-mono text-xs text-slate-605">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          <div className="border border-dashed border-slate-300 p-3 rounded text-center md:text-left">
            <span className="font-bold block">[⭐ TRUSTPILOT BADGE]</span>
            <span className="text-[10px] text-slate-450">8,000+ 5-Star Reviews</span>
          </div>

          <div className="border border-dashed border-slate-300 p-3 rounded text-center md:text-left">
            <span className="font-bold block">[⭐ GOOGLE BADGE]</span>
            <span className="text-[10px] text-slate-450">4.6 / 5.0 Rating • Support Score</span>
          </div>

          <div className="border border-dashed border-slate-300 p-3 rounded text-center flex items-center gap-2 justify-center md:justify-start">
            <span className="text-xl">🛡️</span>
            <div>
              <span className="font-bold block">[OCCC REGULATED]</span>
              <span className="text-[9px] text-slate-400">Texas CAB License #16489-62456</span>
            </div>
          </div>

          <div className="border border-dashed border-slate-300 p-3 rounded text-center flex items-center gap-2 justify-center md:justify-start">
            <span className="text-xl">🔒</span>
            <div>
              <span className="font-bold block">[SECURE SSL]</span>
              <span className="text-[9px] text-slate-400">Military-Grade Encryption</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div id="trustpilot-rating-bar" className="bg-slate-50 border-y border-slate-150 py-5 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        
        {/* Rating 1: Trustpilot */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-1">
          <div className="flex items-center gap-1.5 text-slate-800 text-sm font-black tracking-tight">
            <span className="text-brand-success">Trustpilot</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3.5 h-3.5 bg-brand-success rounded-xs flex items-center justify-center text-white text-[9px]">
                  ★
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            <strong>8,000+ 5-star reviews</strong>
          </p>
        </div>

        {/* Rating 2: Google Rating */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-1">
          <div className="flex items-center gap-1 text-slate-800 text-sm font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500 font-sans">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
            <span className="ml-1 text-xs text-slate-550">Rating</span>
            <div className="flex gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-brand-amber fill-brand-amber" />
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500">
            <strong>4.6 Average</strong> based on customer support
          </p>
        </div>

        {/* Highlight 3: Licensed */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 col-span-1 border-t md:border-t-0 border-slate-150 pt-3.5 md:pt-0">
          <div className="p-1.5 bg-brand-teal-light text-brand-teal-dark rounded-lg flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-705 uppercase tracking-wide">
              OCCC Regulated
            </span>
            <span className="block text-[10px] text-slate-450 font-mono">
              Texas CAB License #16489-62456
            </span>
          </div>
        </div>

        {/* Highlight 4: Security */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 col-span-1 border-t md:border-t-0 border-slate-150 pt-3.5 md:pt-0">
          <div className="p-1.5 bg-brand-teal-light text-brand-teal-dark rounded-lg flex-shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-705 uppercase tracking-wide">
              SSL Encrypted
            </span>
            <span className="block text-[10px] text-slate-450">
              Military-Grade Bank Privacy
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
