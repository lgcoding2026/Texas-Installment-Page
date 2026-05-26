/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, ShieldCheck } from "lucide-react";
import { TEXAS_CITIES } from "../data";

export default function CitySelector({ isWireframe }: { isWireframe?: boolean }) {
  if (isWireframe) {
    return (
      <div id="city-selector-widget" className="bg-white rounded-none p-6 md:p-8 border-2 border-slate-300 font-mono">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-wider border border-dashed border-slate-400 px-3 py-1 bg-slate-50 inline-block mb-3">
            [SECTION: TEXAS STATEWIDE COVERAGE]
          </span>
          <h4 className="text-xl font-bold text-slate-800 tracking-tight leading-7">
            [HEADING: 8 Served Municipalities Across Texas]
          </h4>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Placeholder for coverage description. Wireframe view outlines 8 municipal zones fully serviced Online with CAB-compliant local licenses.
          </p>
        </div>

        {/* Wireframe grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TEXAS_CITIES.map((city) => (
            <div
              key={city.id}
              id={`city-card-${city.id}`}
              className="p-4 rounded-none border border-dashed border-slate-300 text-center bg-slate-50"
            >
              <div className="w-8 h-8 rounded-none border border-slate-350 flex items-center justify-center mx-auto mb-2 text-xs font-bold text-slate-400">
                🖈
              </div>
              <h5 className="font-bold text-slate-800 text-sm">{city.name}</h5>
              <p className="text-[10px] text-slate-400">Zip: {city.zipCode}</p>
              <div className="mt-2 text-[9px] text-slate-400 uppercase tracking-tight">
                [100% Online Zone]
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="city-selector-widget" className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <span className="text-brand-teal text-xs font-bold uppercase tracking-wider bg-brand-teal-light px-3 py-1 rounded-full inline-block mb-2">
          Texas Statewide Coverage
        </span>
        <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-blue-900 tracking-tight">
          Licensed & Serving Communities Across the Lone Star State
        </h4>
        <p className="text-sm text-slate-500 mt-2">
          Net Pay Advance is licensed to operate in every municipality across Texas. We proudly offer secure online installment loans to residents of these major metro areas and surrounding cities:
        </p>
      </div>

      {/* Simplified, elegant grid of served cities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {TEXAS_CITIES.map((city) => (
          <div
            key={city.id}
            id={`city-card-${city.id}`}
            className="p-5 rounded-2xl border border-slate-150 text-center bg-slate-50/40 hover:bg-white hover:border-brand-teal/40 hover:shadow-md transition duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h5 className="font-bold text-slate-800 text-base">{city.name}</h5>
            <p className="text-[11px] text-slate-400 mt-0.5">Zip code: {city.zipCode}</p>
            <div className="mt-2.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-slate-150 rounded-full text-[9px] font-mono text-slate-550">
                <ShieldCheck className="w-3 h-3 text-brand-teal" /> 100% Online
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
