/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, Loader2, Landmark, ShieldAlert, BadgePercent, CheckCircle } from "lucide-react";
import { LoanFrequency } from "../types";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount: number;
  initialFrequency: LoanFrequency;
}

type Step = "details" | "income" | "funding" | "processing" | "success";

export default function ApplicationModal({ isOpen, onClose, initialAmount, initialFrequency }: ApplicationModalProps) {
  const [step, setStep] = useState<Step>("details");
  const [amount, setAmount] = useState<number>(initialAmount);
  
  // Form fields
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  
  // Employment
  const [employment, setEmployment] = useState("Employed");
  const [monthlyIncome, setMonthlyIncome] = useState("3200");
  const [hasBankAccount, setHasBankAccount] = useState(true);

  // Funding option
  const [fundingOption, setFundingOption] = useState<"instant" | "standard">("instant");

  // State text for processing step
  const [processingText, setProcessingText] = useState("Connecting security channels...");

  // Sync with prop when modal opens/changes
  useEffect(() => {
    if (isOpen) {
      setAmount(initialAmount);
      setStep("details");
    }
  }, [isOpen, initialAmount]);

  // Loading animation sequence
  useEffect(() => {
    if (step === "processing") {
      const timers = [
        setTimeout(() => setProcessingText("Validating Texas residency & address..."), 800),
        setTimeout(() => setProcessingText("Performing soft verification with alternative agencies..."), 1600),
        setTimeout(() => setProcessingText("Determining maximum Credit Access Business limit..."), 2400),
        setTimeout(() => setStep("success"), 3200),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fName || !lName || !email || !phone) {
      alert("Please fill in all standard details.");
      return;
    }
    setStep("income");
  };

  const handleIncomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(monthlyIncome) < 1000) {
      alert("Texas CAB requirements require minimum $1,000 monthly income.");
      return;
    }
    if (!hasBankAccount) {
      alert("An active bank account is required to deposit instant funds.");
      return;
    }
    setStep("funding");
  };

  const handleFundingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
  };

  return (
    <div id="application-modal-overlay" className="fixed inset-0 bg-slate-900/65 flex items-center justify-center p-4 z-50 backdrop-blur-xs animate-fade-in">
      <div 
        id="application-modal-content"
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden relative max-h-[90vh] flex flex-col"
      >
        {/* Header bar */}
        <div className="p-5 border-b border-slate-150 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="font-display font-extrabold text-lg text-brand-blue-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-pulse" />
              Secure Texas Loan Application
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">OCCC Registered CAB Portal • ID: #CAB-16489-62456</p>
          </div>
          <button 
            id="close-modal-btn"
            onClick={onClose} 
            type="button"
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {step !== "processing" && step !== "success" && (
          <div className="bg-slate-100 h-1 w-full relative">
            <div 
              className="bg-brand-teal h-full transition-all duration-300"
              style={{
                width: step === "details" ? "33%" : step === "income" ? "66%" : "100%"
              }}
            />
          </div>
        )}

        {/* Scrollable Form Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: Personal Details */}
          {step === "details" && (
            <form id="form-step-details" onSubmit={handleDetailsSubmit} className="space-y-4">
              <div className="bg-brand-teal-light text-brand-blue-800 p-3 rounded-xl text-xs flex items-center gap-2 mb-2 font-medium">
                <BadgePercent className="w-4.5 h-4.5 text-brand-teal-dark flex-shrink-0" />
                <span>Excellent choice! You are pre-applying for a <strong>${amount}</strong> Loan ({initialFrequency} schedule) with no hard FICO pull.</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="f-name-input" className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
                  <input
                    id="f-name-input"
                    type="text"
                    required
                    placeholder="Enter first name"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    className="w-full text-sm p-2.5 border border-slate-205 rounded-xl focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="l-name-input" className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
                  <input
                    id="l-name-input"
                    type="text"
                    required
                    placeholder="Enter last name"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                    className="w-full text-sm p-2.5 border border-slate-205 rounded-xl focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm p-2.5 border border-slate-205 rounded-xl focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">We never sell your email or spam you. Authorized critical updates only.</span>
              </div>

              <div>
                <label htmlFor="phone-input" className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number (Cell)</label>
                <input
                  id="phone-input"
                  type="tel"
                  required
                  placeholder="(512) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm p-2.5 border border-slate-205 rounded-xl focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="zip-input" className="block text-xs font-semibold text-slate-700 mb-1">Texas ZIP Code</label>
                <input
                  id="zip-input"
                  type="text"
                  required
                  maxLength={5}
                  placeholder="75001"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full text-sm p-2.5 border border-slate-205 rounded-xl focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">Loans only valid for residents inside the state of Texas.</span>
              </div>

              <div className="pt-3">
                <button
                  id="details-submit-btn"
                  type="submit"
                  className="w-full bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-display font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  Continue to Step 2 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Income / Employment */}
          {step === "income" && (
            <form id="form-step-income" onSubmit={handleIncomeSubmit} className="space-y-4">
              <h4 className="font-display font-bold text-slate-900 border-b border-slate-100 pb-2">Employment & Bank Affiliation</h4>

              <div>
                <label htmlFor="employment-select" className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Source of Income</label>
                <select
                  id="employment-select"
                  value={employment}
                  onChange={(e) => setEmployment(e.target.value)}
                  className="w-full text-sm p-2.5 border border-slate-205 rounded-xl bg-white outline-none focus:ring-2 focus:ring-brand-teal/40"
                >
                  <option value="Employed">Full-time/Part-time Employment (W2)</option>
                  <option value="SelfEmployed">Self-employed / Independent Contractor (1099)</option>
                  <option value="Benefits">Government Benefits (SSI, Disability, Retired)</option>
                  <option value="Other">Other verifiable monthly income</option>
                </select>
              </div>

              <div>
                <label htmlFor="income-input" className="block text-xs font-semibold text-slate-700 mb-1">Estimated Net Monthly Take-Home Pay</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 font-bold">$</div>
                  <input
                    id="income-input"
                    type="number"
                    required
                    placeholder="2800"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="w-full text-sm pl-7 pr-3 py-2.5 border border-slate-205 rounded-xl outline-none focus:ring-2 focus:ring-brand-teal/40"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-3 border border-slate-100">
                <div className="flex items-start gap-2.5">
                  <input
                    id="active-checking-checkbox"
                    type="checkbox"
                    checked={hasBankAccount}
                    onChange={(e) => setHasBankAccount(e.target.checked)}
                    className="mt-1 h-4 w-4 text-brand-teal rounded border-slate-300 accent-brand-teal"
                  />
                  <label htmlFor="active-checking-checkbox" className="text-xs text-slate-600 leading-tight">
                    I have an open, active checking account in my name with a positive history of over 30 days. <span className="text-brand-blue-700 font-semibold">(Required for cash deposits)</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between gap-3 pt-3">
                <button
                  id="income-back-btn"
                  type="button"
                  onClick={() => setStep("details")}
                  className="w-1/3 border border-slate-200 text-slate-605 font-semibold py-3 rounded-xl text-sm hover:bg-slate-50 transition"
                >
                  Back
                </button>
                <button
                  id="income-submit-btn"
                  type="submit"
                  className="w-2/3 bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-display font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  Step 3: Choose Payout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Funding Delivery Selector */}
          {step === "funding" && (
            <form id="form-step-funding" onSubmit={handleFundingSubmit} className="space-y-4">
              <h4 className="font-display font-bold text-slate-900 border-b border-slate-100 pb-2">Fast Funding Method</h4>
              <p className="text-xs text-slate-500 mb-2">
                Net Pay Advance offers direct-to-card and traditional electronic direct payments inside Texas. Select your preferred speed:
              </p>

              <div className="space-y-3">
                {/* Option A: Instant Debit Card */}
                <div 
                  id="funding-opt-instant"
                  onClick={() => setFundingOption("instant")}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    fundingOption === "instant" 
                      ? "border-brand-teal bg-brand-teal-light/30" 
                      : "border-slate-150 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-brand-teal text-brand-blue-900 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wider">
                        Recommended
                      </span>
                      <h5 className="font-display font-extrabold text-sm text-brand-blue-900 mt-1.5">
                        Instant Funding (Approved to Debit Card)
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">
                        Cash is pushed directly to your checking account's debit card in under 3 minutes, 24/7.
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      fundingOption === "instant" ? "border-brand-teal bg-brand-teal text-white" : "border-slate-300"
                    }`}>
                      {fundingOption === "instant" && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <span className="text-brand-success font-semibold text-xs mt-3 block flex items-center gap-1">
                    ⚡ Estimated arrival: Instant
                  </span>
                </div>

                {/* Option B: Standard Direct Deposit */}
                <div 
                  id="funding-opt-standard"
                  onClick={() => setFundingOption("standard")}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    fundingOption === "standard" 
                      ? "border-brand-teal bg-brand-teal-light/30" 
                      : "border-slate-150 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-display font-extrabold text-sm text-brand-blue-900">
                        Same-Day Direct Deposit (ACH Transfer)
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">
                        Electronic ACH deposit. If approved by 1:00 PM CT, money deposits tonight by 6:00 PM.
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      fundingOption === "standard" ? "border-brand-teal bg-brand-teal text-white" : "border-slate-300"
                    }`}>
                      {fundingOption === "standard" && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <span className="text-slate-500 font-semibold text-xs mt-3 block flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5 text-slate-400" /> Cutoff: 1 PM Central time for same-day
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-3 pt-3">
                <button
                  id="funding-back-btn"
                  type="button"
                  onClick={() => setStep("income")}
                  className="w-1/3 border border-slate-200 text-slate-650 font-semibold py-3 rounded-xl text-sm"
                >
                  Back
                </button>
                <button
                  id="funding-submit-btn"
                  type="submit"
                  className="w-2/3 bg-brand-teal hover:bg-brand-teal-dark text-brand-blue-900 font-display font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  Submit Pre-qualification
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Animated system evaluation */}
          {step === "processing" && (
            <div id="processing-state-widget" className="py-12 flex flex-col items-center justify-center space-y-4 animate-fade-in text-center">
              <Loader2 className="w-12 h-12 text-brand-teal animate-spin mb-2" />
              <h4 className="font-display font-bold text-slate-900 text-lg">Underwriting Evaluation in Progress</h4>
              <p className="text-sm text-slate-505 font-mono max-w-sm">
                {processingText}
              </p>
              <div className="text-[10px] text-slate-400 mt-8 flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <ShieldAlert className="w-4 h-4 text-brand-amber" /> Real-time active data isolation protocol
              </div>
            </div>
          )}

          {/* STEP 5: Congratulations / Pre-Approved layout */}
          {step === "success" && (
            <div id="success-state-widget" className="py-6 flex flex-col items-center justify-center animate-fade-in text-center">
              <div className="w-16 h-16 bg-brand-success/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-brand-success" />
              </div>
              <h4 className="font-display text-2xl font-extrabold text-brand-blue-900 leading-tight">
                Pre-Approved Up To $800!
              </h4>
              <p className="text-sm text-slate-500 mt-2 max-w-sm">
                Congratulations, <strong>{fName || "Texan"}</strong>! Our automated OCCC-compliant engine determined you qualify for instant emergency funding.
              </p>

              <div className="my-6 p-4 bg-brand-teal-light/40 border border-brand-teal/30 rounded-xl text-left w-full space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-brand-blue-900 font-medium">Eligible Credit Access CAB Limit:</span>
                  <span className="font-mono font-bold text-slate-900">$800.00</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-blue-900 font-medium">Underwriting Check Standard:</span>
                  <span className="text-brand-success font-semibold flex items-center gap-1">
                    ✅ Passed (No Hard FICO check)
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-blue-900 font-medium">Payout Method:</span>
                  <span className="text-slate-700 capitalize font-medium">{fundingOption === "instant" ? "Instant Debit Card Push" : "Same-Day Direct ACH"}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 text-left mb-6 space-y-1">
                <strong className="block text-amber-900">How to finalize your cash in 3 minutes:</strong>
                <p>We've dispatched an encrypted verification link to <strong>{email || "your email"}</strong>. Access the link to check your bank connection via Plaid and verify your identity.</p>
              </div>

              <button
                id="success-close-btn"
                onClick={onClose}
                type="button"
                className="w-full bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-display font-medium py-3 rounded-xl transition"
              >
                Go Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
