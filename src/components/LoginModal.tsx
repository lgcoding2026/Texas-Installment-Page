/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, ShieldCheck, Lock, User, Loader2, ArrowRight } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isWireframe?: boolean;
}

export default function LoginModal({ isOpen, onClose, isWireframe }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please key in your registered email and password.");
      return;
    }

    setIsLoading(true);

    // Simulate standard member login check
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1800);
  };

  if (isWireframe) {
    return (
      <div id="login-modal-overlay" className="fixed inset-0 bg-slate-900/40 flex items-center justify-center p-4 z-50 font-mono">
        <div id="login-modal-content" className="bg-white rounded-none w-full max-w-md border-2 border-slate-900 p-6 relative bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-dashed border-slate-400 mb-4">
            <span className="font-bold text-sm uppercase">[POPUP: MEMBER LOGIN]</span>
            <button 
              id="close-login-modal-btn" 
              onClick={onClose}
              type="button"
              className="border border-slate-900 px-2 py-0.5 text-xs font-bold bg-slate-50 hover:bg-slate-200"
            >
              [X]
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center space-y-4 py-4">
              <div className="border border-green-500 bg-green-50 text-green-850 p-4 text-xs font-bold uppercase">
                [SUCCESS: SIMULATED MEMBER SESSION]
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authentication record checked. Simulated token dispatched for testing. Credit Line: <strong>$1,200.00 Active</strong>.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="w-full border border-slate-900 bg-slate-100 font-bold text-xs uppercase py-2.5"
              >
                [EXIT SESSION WINDOW]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Testing utility schema for OCCC state regulated membership login layout.
              </p>

              {error && (
                <div className="border border-red-500 bg-red-50 text-red-750 p-3 text-[10px] font-bold uppercase">
                  [!ERROR] {error}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-700 block">[INPUT: MEMBER EMAIL URL]</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full border border-slate-400 bg-slate-50 text-xs p-2.5 outline-none font-mono focus:border-slate-800"
                  />
                  <span className="absolute right-3 top-3 text-[10px] text-slate-400">@</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-700 block">[INPUT: ACCOUNT PASS KEY]</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-slate-400 bg-slate-50 text-xs p-2.5 outline-none font-mono focus:border-slate-800"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full border-2 border-slate-900 text-slate-900 bg-slate-100 py-3 text-xs uppercase tracking-wider font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                {isLoading ? "[AUTHENTICATING WORKSPACE...]" : "[SUBMIT SECURITY ENVELOPE]"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div id="login-modal-overlay" className="fixed inset-0 bg-slate-900/60 flex items-center justify-center p-4 z-50 backdrop-blur-xs animate-fade-in">
      <div id="login-modal-content" className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden relative flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-150 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-blue-800/10 text-brand-blue-800 rounded-lg">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-brand-blue-900">
                Customer Portal Login
              </h3>
              <p className="text-[11px] text-slate-400 font-sans tracking-wide">Secure Texas Member Server</p>
            </div>
          </div>
          <button 
            id="close-login-modal-btn"
            onClick={onClose} 
            type="button"
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center space-y-4 py-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-lg text-emerald-900">
                Secure Session Established!
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                Welcome back! Simulated security credentials loaded. Your pre-qualified Texas Credit Access Business limit remains <strong>$1,200.00</strong>.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 text-left space-y-2 mt-4 text-xs font-sans">
                <div className="flex justify-between"><span className="text-slate-400">Account Owner:</span><span className="font-semibold text-slate-700">{email}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Eligible Limit:</span><span className="font-semibold text-brand-blue-900">$1,200.00</span></div>
                <div className="flex justify-between"><span className="text-slate-400">CAB Status:</span><span className="font-bold text-emerald-600 flex items-center gap-0.5">● ACTIVE LICENSE</span></div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-brand-blue-800 hover:bg-brand-blue-950 text-white font-display font-semibold py-3 px-4 rounded-xl transition duration-150 mt-4 active:scale-95 shadow-sm text-sm"
              >
                Proceed to Dashboard Area
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-700 rounded-xl p-3 border border-red-150 text-xs font-semibold flex items-center gap-1.5">
                  <span>⚠</span> {error}
                </div>
              )}

              <div id="login-guidance" className="bg-brand-teal-light text-brand-blue-900 p-3.5 rounded-xl text-xs space-y-1 border border-brand-teal/15 mb-2 leading-relaxed font-medium">
                <span className="font-bold text-brand-blue-950 block">💡 Prototype Simulation Member Login:</span>
                <span>Enter any mock testing email and password credential pair to simulate logging in instantly.</span>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Registered Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-xs md:text-sm text-slate-800 outline-none focus:bg-white focus:border-brand-teal transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-700 block">Account Password</label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert("Verification code simulated via SMS."); }} className="text-[10px] text-brand-blue-800 hover:underline">Forgot?</a>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-slate-400">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-xs md:text-sm text-slate-800 outline-none focus:bg-white focus:border-brand-teal transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-blue-800 hover:bg-brand-blue-950 text-white font-display font-extrabold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-95 shadow-md hover:shadow-brand-blue-850/15"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Establishing Channel...
                  </>
                ) : (
                  <>
                    Sign In Securing Portal <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-[10px] text-slate-400 text-center mt-5 uppercase tracking-wider block font-medium">
            🔒 Protected by Industry-Grade Direct Encryption
          </p>
        </div>
      </div>
    </div>
  );
}
