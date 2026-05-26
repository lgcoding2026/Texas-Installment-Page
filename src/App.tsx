/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  HelpCircle, 
  ChevronDown, 
  MapPin, 
  PhoneCall, 
  ShieldCheck, 
  BookmarkCheck,
  Zap,
  Clock,
  Briefcase,
  IdCard
} from "lucide-react";
import { FAQ_DATA } from "./data";
import { LoanFrequency } from "./types";
import ApplicationModal from "./components/ApplicationModal";
import CitySelector from "./components/CitySelector";
import TrustpilotBadge from "./components/TrustpilotBadge";
import LoginModal from "./components/LoginModal";
// @ts-expect-error - resolved by Vite but unrecognized by standard TS rules
import monumentValley from "./assets/images/monument_valley_1779474514751.png";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAmount, setModalAmount] = useState(500);
  const [modalFrequency, setModalFrequency] = useState<LoanFrequency>(LoanFrequency.BI_WEEKLY);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // FAQ accordion state
  const [activeFaqId, setActiveFaqId] = useState<string | null>("early-payoff");
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>("all");

  const openApplication = (amount: number, freq: LoanFrequency) => {
    setModalAmount(amount);
    setModalFrequency(freq);
    setIsModalOpen(true);
  };

  const filteredFaqs = FAQ_DATA.filter(
    (faq) => faqCategoryFilter === "all" || faq.category === faqCategoryFilter
  );

  return (
    <div 
      id="landing-root" 
      className={`min-h-screen flex flex-col antialiased transition-all duration-300 relative ${
        isWireframe 
          ? "bg-white font-mono text-slate-900 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]" 
          : "bg-slate-50 font-sans text-slate-800"
      }`}
    >
      
      {/* 1. Header & Navigation */}
      <header 
        id="main-nav-header" 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isWireframe 
            ? "bg-white border-b-2 border-slate-900 font-mono" 
            : "bg-white/95 backdrop-blur-md border-b border-slate-150"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            {isWireframe ? (
              <div className="border border-dashed border-slate-900 p-2 text-xs font-bold uppercase">
                [BOX_ICON]
              </div>
            ) : (
              <div className="p-2 bg-brand-blue-800 text-brand-teal rounded-xl shadow-inner flex items-center justify-center">
                <Building2 className="w-6 h-6 animate-pulse" />
              </div>
            )}
            <div>
              {isWireframe ? (
                <div className="font-bold text-base uppercase tracking-tight text-slate-900">
                  [Net Pay Advance Wireframe]
                </div>
              ) : (
                <div className="flex items-center font-display font-black text-xl tracking-tight text-brand-blue-900">
                  <span>Net Pay</span>
                  <span className="text-brand-teal ml-1">Advance</span>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-655">
            <a href="#how-it-works-section" className="hover:text-slate-900 transition-colors">Loans</a>
            <a href="#local-silo-section" className="hover:text-slate-900 transition-colors">Locations</a>
            <a href="#why-us-section" className="hover:text-slate-900 transition-colors">Learn More</a>
            <a href="#regulatory-compliance-footer" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          {/* Action CTA & Wireframe Toggler Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Header Switcher */}
            <div className={`flex rounded-lg p-1 text-xs border ${isWireframe ? "bg-slate-50 border-slate-900" : "bg-slate-100 border-slate-200"}`}>
              <button 
                type="button"
                onClick={() => setIsWireframe(false)} 
                className={`px-2.5 py-1 rounded transition-all ${!isWireframe ? 'bg-white shadow text-slate-900 font-black' : 'text-slate-400 hover:text-slate-700'}`}
              >
                🌟 High-Fi
              </button>
              <button 
                type="button"
                onClick={() => setIsWireframe(true)} 
                className={`px-2.5 py-1 rounded transition-all ${isWireframe ? 'bg-slate-900 text-white font-black' : 'text-slate-405 hover:text-slate-700'}`}
              >
                📐 Structure
              </button>
            </div>

            <button
              id="desktop-header-login-btn"
              type="button"
              onClick={() => setIsLoginModalOpen(true)}
              className={
                isWireframe
                  ? "border border-slate-900 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase py-2 px-3.5 font-mono"
                  : "text-slate-600 hover:text-brand-blue-900 font-semibold text-sm transition-colors py-2 px-3.5"
              }
            >
              {isWireframe ? "[LOGIN]" : "Login"}
            </button>
            <button
              id="desktop-header-apply-btn"
              type="button"
              onClick={() => openApplication(500, LoanFrequency.BI_WEEKLY)}
              className={
                isWireframe 
                  ? "border border-slate-900 bg-slate-100 text-slate-900 font-bold text-xs uppercase py-2 px-4 rounded-none font-mono"
                  : "bg-brand-blue-800 hover:bg-brand-blue-950 text-white font-display font-semibold text-sm py-2.5 px-5 rounded-xl transition duration-155 transform active:scale-95 shadow-sm"
              }
            >
              {isWireframe ? "[APPLY]" : "Apply"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu container */}
        {mobileMenuOpen && (
          <div id="mobile-menu-container" className="md:hidden bg-white border-b border-slate-200 p-5 space-y-4 animate-fade-in">
            <nav className="flex flex-col gap-3 font-semibold text-slate-700 text-sm">
              <a 
                href="#how-it-works-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-teal py-1"
              >
                {isWireframe ? "[NAV: LOANS]" : "Loans"}
              </a>
              <a 
                href="#local-silo-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-teal py-1"
              >
                {isWireframe ? "[NAV: LOCATIONS]" : "Locations"}
              </a>
              <a 
                href="#why-us-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-teal py-1"
              >
                {isWireframe ? "[NAV: LEARN_MORE]" : "Learn More"}
              </a>
              <a 
                href="#regulatory-compliance-footer" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-teal py-1"
              >
                {isWireframe ? "[NAV: CONTACT]" : "Contact"}
              </a>
            </nav>
            <div className="border-t border-slate-105 pt-4 flex flex-col gap-3">
              {/* Mobile Wireframe Toggle */}
              <div className="flex justify-between items-center bg-slate-100 p-1.5 rounded-lg text-xs font-mono">
                <span className="text-slate-500 font-medium pl-1">Redesign Mode:</span>
                <div className="flex gap-1">
                  <button 
                    type="button"
                    onClick={() => { setIsWireframe(false); setMobileMenuOpen(false); }} 
                    className={`px-2 py-1 rounded ${!isWireframe ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-500'}`}
                  >
                    High-Fi
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setIsWireframe(true); setMobileMenuOpen(false); }} 
                    className={`px-2 py-1 rounded ${isWireframe ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                  >
                    Wireframe
                  </button>
                </div>
              </div>

              {/* Login and Apply actions stacked/row for mobile */}
              <div className="grid grid-cols-2 gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className={
                    isWireframe
                      ? "w-full border border-slate-950 bg-white text-slate-950 text-center py-2.5 font-bold uppercase text-xs"
                      : "w-full bg-slate-100 hover:bg-slate-200 text-brand-blue-900 font-display font-semibold text-center py-2.5 rounded-xl text-xs transition"
                  }
                >
                  {isWireframe ? "[LOGIN]" : "Login"}
                </button>
                <button
                  id="mobile-nav-apply-btn"
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openApplication(500, LoanFrequency.BI_WEEKLY);
                  }}
                  className={
                    isWireframe
                      ? "w-full border border-slate-950 bg-slate-105 text-slate-950 text-center py-2.5 font-bold uppercase text-xs"
                      : "w-full bg-brand-blue-800 hover:bg-brand-blue-950 text-white font-display font-semibold text-center py-2.5 rounded-xl text-xs transition"
                  }
                >
                  {isWireframe ? "[APPLY]" : "Apply"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section 
        id="hero-section" 
        className={
          isWireframe 
            ? "relative bg-white text-slate-900 border-b-2 border-slate-900 flex items-center min-h-[calc(100vh-72px)] py-12 md:py-24 overflow-hidden"
            : "relative bg-brand-blue-800 text-white flex items-center min-h-[calc(100vh-72px)] py-12 md:py-24 overflow-hidden"
        }
      >
        {isWireframe ? (
          /* Wireframe schematic cross diagram */
          <div className="absolute inset-0 select-none pointer-events-none z-0">
            <svg className="absolute inset-0 w-full h-full text-slate-205/65" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-slate-400 text-xs gap-1.5 p-6 text-center">
              <span className="bg-white border border-slate-300 px-3 py-1 font-bold">[BACKGROUND IMAGE PLACEHOLDER: monument_valley.png]</span>
              <span className="bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px]">opacity-20 • mix-blend-luminosity • center-center</span>
            </div>
          </div>
        ) : (
          /* Background Skyline Image with clean monochromatic deep blue tinting */
          <div className="absolute inset-0 select-none pointer-events-none z-0">
            <img 
              src={monumentValley} 
              alt="Monument Valley Sunset Background" 
              className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity" 
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-4 md:gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="md:col-span-7 space-y-3.5 md:space-y-6 text-center md:text-left">
            {isWireframe ? (
              <span className="inline-block border border-dashed border-slate-900 font-bold text-[10px] md:text-xs py-1 px-3 bg-slate-50 uppercase tracking-wider">
                [TOP_TAGBAND: Same-Day Funding to Debit Card]
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 bg-brand-teal/20 text-brand-teal font-semibold text-[10px] md:text-xs py-1 px-3 md:py-1.5 md:px-3.5 rounded-full uppercase tracking-wider border border-brand-teal/25">
                <Zap className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-teal animate-pulse" /> Same-Day* Funding to Debit Card
              </span>
            )}
            
            <h1 className={
              isWireframe 
                ? "font-mono font-bold text-2xl sm:text-5xl tracking-tight leading-[1.1] text-slate-950"
                : "font-display font-black text-2xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white"
            }>
              {isWireframe ? (
                <span>[H1_HERO_TITLE] Smarter Online Texas Installment Loans up to $1,200</span>
              ) : (
                <>Smarter Online Texas <span className="text-brand-teal">Installment Loans</span> up to $1,200</>
              )}
            </h1>
            
            <p className={isWireframe ? "text-slate-600 text-xs md:text-base max-w-xl leading-relaxed" : "text-slate-200 text-xs md:text-base lg:text-lg max-w-xl leading-relaxed"}>
              {isWireframe 
                ? "[BODY_HEURISTIC_TEXT] If you want the speed of traditional payday loans but need more time to pay, a Texas installment loan is the perfect fit. Same-day funding available."
                : <>If you want the speed of traditional payday loans but need more time to pay, a Texas installment loan is the perfect fit. Get up to $1,200 deposited fast, with smaller payments that match your budget. Enjoy instant approval, no hard credit checks, and same-day* funding! <strong className="font-bold text-white">You deserve a smoother, stress-free path forward.</strong></>
              }
            </p>

            {/* Quick Benefits Bullet grid - incorporated on both mobile and desktop views */}
            <div className="grid grid-cols-2 gap-2 max-w-md mx-auto md:mx-0 text-left pt-1">
              {[
                { id: "1", text: "No Hard Credit Pulls" },
                { id: "2", text: "Instant Bank Decisions" },
                { id: "3", text: "OCCC State-Licensed" },
                { id: "4", text: "Bad Credit Welcomed" }
              ].map((bullet) => (
                <div 
                  key={bullet.id} 
                  id={`benefit-bullet-${bullet.id}`} 
                  className={`flex items-center gap-2 text-xs md:text-sm ${isWireframe ? "font-mono border border-dashed border-slate-300 p-2 bg-slate-50" : "font-semibold"}`}
                >
                  {isWireframe ? (
                    <span className="text-slate-400 font-bold">[✔]</span>
                  ) : (
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  )}
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>

            {/* Google Rating Quick Text */}
            <p className={isWireframe ? "text-[10px] text-slate-500 flex items-center justify-center md:justify-start" : "text-[11px] md:text-xs text-slate-300 flex items-center justify-center md:justify-start gap-1"}>
              {isWireframe 
                ? "[SOCIAL_METADATA_LINE: Rated 4.6/5.0 Stars by 8,000+ customers]"
                : "⭐ Rated 4.6 / 5.0 by 8,000+ happy customers. Fully paperless process."
              }
            </p>
          </div>

          {/* Right Direct-CTA Card (Pristine and compact on both mobile and desktop views) */}
          <div className="md:col-span-5 w-full">
            <div 
              id="desktop-hero-conversion-card" 
              className={
                isWireframe
                  ? "bg-white text-slate-900 p-4 md:p-6 border-2 border-slate-900 relative rounded-none shadow-none font-mono"
                  : "bg-white text-slate-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-white/10 relative"
              }
            >
              
              <h3 className={isWireframe ? "font-bold text-sm text-slate-950 mb-0.5 uppercase" : "font-display font-black text-base md:text-lg text-brand-blue-900 tracking-tight mb-0.5"}>
                {isWireframe ? "[BOX: PRE-QUALIFY INTERACTION]" : "Pre-Qualify in 3 Minutes"}
              </h3>
              <p className="text-[10px] md:text-xs text-slate-400 mb-3">Securing emergency capital has never been simpler.</p>
              
              <div className="space-y-3">
                <button
                  id="hero-apply-btn"
                  type="button"
                  onClick={() => openApplication(500, LoanFrequency.BI_WEEKLY)}
                  className={
                    isWireframe
                      ? "w-full border-2 border-slate-900 bg-slate-100 font-mono font-bold text-xs uppercase py-3 tracking-wider text-slate-900 flex justify-center items-center gap-1.5"
                      : "w-full bg-brand-teal hover:bg-brand-teal-dark active:scale-[0.98] text-brand-blue-900 font-display font-extrabold text-sm md:text-base py-2.5 md:py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-brand-teal/20"
                  }
                >
                  {isWireframe ? "[SUBMIT_BUTTON_ACTION]" : "Apply Online Now"} <ArrowRight className="w-5 h-5" />
                </button>

                {isWireframe ? (
                  <p className="text-[10px] text-slate-500 text-center font-mono">
                    [REQ: 18+ Years Old | TX Resident | Active Bank Account]
                  </p>
                ) : (
                  <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-semibold text-slate-600">
                    <span className="flex items-center gap-1">
                      <IdCard className="w-3.5 h-3.5 text-brand-teal" /> 18+ Years Old
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-teal" /> TX Resident
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-brand-teal" /> Active Bank Account
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof Banner */}
      <TrustpilotBadge isWireframe={isWireframe} />

      {/* 4. Three Simple Steps Section */}
      <section 
        id="how-it-works-section" 
        className={`py-16 md:py-24 transition-all duration-200 ${
          isWireframe 
            ? "bg-white border-b-2 border-slate-900 font-mono" 
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block ${
              isWireframe ? "border border-dashed border-slate-400 bg-slate-50" : "bg-slate-100 text-brand-blue-800 font-bold"
            }`}>
              {isWireframe ? "[SECTION: 100% DIGITAL SYSTEM]" : "100% Digital Process"}
            </span>
            <h2 className={
              isWireframe 
                ? "font-bold text-2xl md:text-3xl tracking-tight text-slate-950"
                : "font-display font-black text-3xl sm:text-4xl text-brand-blue-900 tracking-tight mt-1.5"
            }>
              {isWireframe ? "[HEADING: THREE STEP SYSTEM WIREFRAME]" : "How to Get Fast Loans Today* in Texas"}
            </h2>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              Applying for your online loan is safe and simple. Get the cash you need in three easy steps:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div 
              id="step-card-1" 
              className={
                isWireframe
                  ? "bg-slate-50/50 rounded-none p-6 border-2 border-dashed border-slate-300 flex flex-col justify-between"
                  : "bg-slate-50 rounded-2xl p-6 border border-slate-120 shadow-xs flex flex-col justify-between"
              }
            >
              <div>
                <div className={
                  isWireframe
                    ? "w-8 h-8 border border-slate-800 text-slate-900 flex items-center justify-center font-bold text-xs mb-4"
                    : "w-10 h-10 bg-brand-blue-800 text-white rounded-xl flex items-center justify-center font-display font-extrabold text-base mb-4 shadow-sm select-none"
                }>
                  01
                </div>
                <h4 className={isWireframe ? "font-bold text-sm uppercase text-slate-950 mb-2" : "font-display font-extrabold text-lg text-brand-blue-900 tracking-tight mb-2"}>
                  {isWireframe ? "[STEP_01: SUBMIT DETAILS]" : "Apply Online in Minutes"}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fill out our secure online form in less than three minutes. Just share your basic income info. There are no physical documents required.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              id="step-card-2" 
              className={
                isWireframe
                  ? "bg-slate-50/50 rounded-none p-6 border-2 border-dashed border-slate-300 flex flex-col justify-between"
                  : "bg-slate-50 rounded-2xl p-6 border border-slate-120 shadow-xs flex flex-col justify-between"
              }
            >
              <div>
                <div className={
                  isWireframe
                    ? "w-8 h-8 border border-slate-800 text-slate-900 flex items-center justify-center font-bold text-xs mb-4"
                    : "w-10 h-10 bg-brand-blue-800 text-white rounded-xl flex items-center justify-center font-display font-extrabold text-base mb-4 shadow-sm select-none"
                }>
                  02
                </div>
                <h4 className={isWireframe ? "font-bold text-sm uppercase text-slate-950 mb-2" : "font-display font-extrabold text-lg text-brand-blue-900 tracking-tight mb-2"}>
                  {isWireframe ? "[STEP_02: DECISION SYSTEM]" : "Get a Fast Decision"}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We look at your information right away to give you an instant decision. We verify your details quickly and can approve you for up to $1,200 immediately.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              id="step-card-3" 
              className={
                isWireframe
                  ? "bg-slate-50/50 rounded-none p-6 border-2 border-dashed border-slate-300 flex flex-col justify-between"
                  : "bg-slate-50 rounded-2xl p-6 border border-slate-120 shadow-xs flex flex-col justify-between"
              }
            >
              <div>
                <div className={
                  isWireframe
                    ? "w-8 h-8 border border-slate-800 text-slate-900 flex items-center justify-center font-bold text-xs mb-4"
                    : "w-10 h-10 bg-brand-blue-800 text-white rounded-xl flex items-center justify-center font-display font-extrabold text-base mb-4 shadow-sm select-none"
                }>
                  03
                </div>
                <h4 className={isWireframe ? "font-bold text-sm uppercase text-slate-950 mb-2" : "font-display font-extrabold text-lg text-brand-blue-900 tracking-tight mb-2"}>
                  {isWireframe ? "[STEP_03: CASH TRANSFER]" : "Get Your Funds Same-Day*"}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Choose Instant Funding to a debit card for money in seconds, or choose free standard direct deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Net Pay Advance? Section */}
      <section 
        id="why-us-section" 
        className={`py-16 md:py-24 transition-all duration-200 ${
          isWireframe 
            ? "bg-slate-50 border-b-2 border-slate-900 font-mono" 
            : "bg-white border-t border-slate-150"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block ${
              isWireframe ? "border border-dashed border-slate-400 bg-white" : "bg-brand-teal-light text-brand-teal-dark font-extrabold"
            }`}>
              {isWireframe ? "[ADVANTAGE SECTION]" : "Lone Star Advantage"}
            </span>
            <h2 className={
              isWireframe 
                ? "font-bold text-2xl md:text-3xl text-slate-950" 
                : "font-display font-black text-3xl sm:text-4xl text-brand-blue-900 tracking-tight mt-1.5"
            }>
              Why Choose Net Pay Advance?
            </h2>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              We love helping Texans get fast funds when they need it most. See why thousands of Texans trust our secure online loans to stay on track:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Value Prop 1 */}
            <div className={`flex flex-col items-start ${isWireframe ? "border border-dashed border-slate-350 p-5 bg-white" : ""}`}>
              {isWireframe ? (
                <div className="text-[10px] uppercase font-bold border border-slate-300 px-2 py-0.5 mb-3 bg-slate-50">
                  [ICON: SHIELD]
                </div>
              ) : (
                <div className="p-3 bg-brand-teal-light text-brand-teal rounded-xl mb-5">
                  <ShieldCheck className="w-6 h-6 text-brand-teal-dark" />
                </div>
              )}
              <h3 className={isWireframe ? "font-bold text-base mb-1" : "font-display font-extrabold text-lg text-brand-blue-900 mb-2"}>
                Trusted Texas Licensed Lender
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Borrow with confidence. We follow all Texas state laws to protect you. That means you get honest terms with no hidden fees or surprises.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className={`flex flex-col items-start ${isWireframe ? "border border-dashed border-slate-350 p-5 bg-white" : ""}`}>
              {isWireframe ? (
                <div className="text-[10px] uppercase font-bold border border-slate-300 px-2 py-0.5 mb-3 bg-slate-50">
                  [ICON: LIGHTNING]
                </div>
              ) : (
                <div className="p-3 bg-brand-teal-light text-brand-teal rounded-xl mb-5">
                  <Zap className="w-6 h-6 text-brand-teal-dark" />
                </div>
              )}
              <h3 className={isWireframe ? "font-bold text-base mb-1" : "font-display font-extrabold text-lg text-brand-blue-900 mb-2"}>
                Same-Day* Payouts to Debit Card
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Opt for Instant Funding straight to your debit card in seconds upon approval. Immediate assistance when minutes matter most.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className={`flex flex-col items-start ${isWireframe ? "border border-dashed border-slate-350 p-5 bg-white" : ""}`}>
              {isWireframe ? (
                <div className="text-[10px] uppercase font-bold border border-slate-300 px-2 py-0.5 mb-3 bg-slate-50">
                  [ICON: CHECK_BOX]
                </div>
              ) : (
                <div className="p-3 bg-brand-teal-light text-brand-teal rounded-xl mb-5">
                  <CheckCircle className="w-6 h-6 text-brand-teal-dark" />
                </div>
              )}
              <h3 className={isWireframe ? "font-bold text-base mb-1" : "font-display font-extrabold text-lg text-brand-blue-900 mb-2"}>
                Bad Credit is Welcome
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We care about your financial future, not your past. There are no hard credit checks when you apply. We use your current income to help get you approved fast!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Localized SEO / City Selector */}
      <section id="local-silo-section" className={`py-16 md:py-24 transition-all duration-200 ${isWireframe ? "bg-white font-mono" : "bg-brand-blue-900"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <CitySelector isWireframe={isWireframe} />
        </div>
      </section>

      {/* 8. Collapsible FAQ Section */}
      <section 
        id="faq-section" 
        className={`py-16 md:py-24 transition-all duration-200 ${
          isWireframe 
            ? "bg-slate-50 border-y-2 border-slate-900 font-mono" 
            : "bg-white border-t border-slate-150"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-10">
            <h3 className={isWireframe ? "font-bold text-2xl text-slate-950" : "font-display font-black text-3xl text-brand-blue-900 tracking-tight"}>
              {isWireframe ? "[FAQ MODULE: ACCORDIONS]" : "Frequently Asked Questions (FAQ)"}
            </h3>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-8">
            {[
              { id: "all", label: "Show All" },
              { id: "requirements", label: "Requirements" },
              { id: "credit", label: "FICO & Credit" },
              { id: "speed", label: "Funding Speed" },
              { id: "rates", label: "Rates & Terms" }
            ].map((cat) => (
              <button
                key={cat.id}
                id={`faq-filter-${cat.id}`}
                onClick={() => setFaqCategoryFilter(cat.id)}
                type="button"
                className={`py-1.5 px-3 rounded-md text-xs font-semibold border transition ${
                  faqCategoryFilter === cat.id
                    ? isWireframe 
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-brand-blue-800 text-white border-brand-blue-800 rounded-full"
                    : isWireframe
                      ? "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 rounded-full"
                }`}
              >
                {isWireframe ? `[${cat.label}]` : cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  id={`faq-accordion-item-${faq.id}`}
                  className={
                    isWireframe
                      ? `border-2 ${isOpen ? "border-slate-900" : "border-slate-300"} bg-white rounded-none transition-all`
                      : "border border-slate-200 bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xs"
                  }
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50/50"
                  >
                    <span className={isWireframe ? "font-bold text-slate-900 text-sm tracking-tight" : "font-display font-extrabold text-brand-blue-900 text-sm md:text-base tracking-tight leading-snug"}>
                      {isWireframe ? `❓ ${faq.question}` : faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className={`px-5 pb-5 pt-1 text-xs md:text-sm text-slate-550 leading-relaxed border-t bg-slate-50/20 ${isWireframe ? "border-slate-200 font-mono" : "border-slate-100/60"}`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. Final Pre-Footer Call to Action */}
      <section 
        id="final-cta-section" 
        className={
          isWireframe
            ? "bg-white text-slate-900 py-14 border-b-2 border-slate-905 text-center font-mono"
            : "bg-brand-blue-900 text-white py-14 border-t border-brand-blue-800 text-center relative overflow-hidden"
        }
      >
        {!isWireframe && (
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-brand-teal/8 rounded-full blur-2xl pointer-events-none select-none animate-pulse-slow" />
        )}
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className={
            isWireframe
              ? "border border-dashed border-slate-400 px-3 py-0.5 bg-slate-50 text-[10px] uppercase font-bold"
              : "bg-brand-teal text-brand-blue-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block"
          }>
            {isWireframe ? "[BOX: RE-CONVERSION FOOTER]" : "Get Money Today"}
          </span>
          <h2 className={isWireframe ? "font-bold text-2xl text-slate-950" : "font-display font-black text-3xl md:text-4xl leading-tight"}>
            {isWireframe ? "[HEADING] Need emergency funds up to $1,200?" : "Need emergency funds up to $1,200?"}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Submit your pre-qualification details online in 3 minutes. Applying does not require a hard credit check and will not affect your standard FICO® score.
          </p>
          <div className="flex justify-center pt-2">
            <button
              id="footer-action-apply-btn"
              type="button"
              onClick={() => openApplication(500, LoanFrequency.BI_WEEKLY)}
              className={
                isWireframe
                  ? "w-full sm:w-auto border-2 border-slate-905 bg-slate-100 font-mono font-bold text-xs uppercase py-3.5 px-6 tracking-wider text-slate-900 flex justify-center items-center gap-1.5"
                  : "w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-dark text-brand-blue-900 font-display font-extrabold text-base py-3 px-8 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-brand-teal/20"
              }
            >
              {isWireframe ? "[GET_STARTED_ACTION]" : "Get Started Now"} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 10. Regulatory License Disclosure & Standard Footer */}
      <footer 
        id="regulatory-compliance-footer" 
        className={
          isWireframe
            ? "bg-slate-50 text-slate-600 border-t border-slate-300 py-12 text-[10.5px] font-mono leading-relaxed"
            : "bg-slate-900 text-slate-400 border-t border-slate-800 py-12 text-xs"
        }
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          
          {/* Logo & Basic details */}
          <div className={`flex flex-col md:flex-row md:justify-between md:items-center pb-6 gap-4 ${isWireframe ? "border-b border-dashed border-slate-300" : "border-b border-slate-800"}`}>
            <div>
              {isWireframe ? (
                <div className="font-bold text-sm uppercase text-slate-900 tracking-tight">
                  [FOOTER LOGO: NET PAY ADVANCE]
                </div>
              ) : (
                <div className="font-display font-black text-lg tracking-tight text-white flex items-center gap-1">
                  <span>Net Pay</span>
                  <span className="text-brand-teal flex-shrink-0">Advance</span>
                </div>
              )}
              <p className="text-[10px] text-slate-550 mt-1">Regulated, licensed Credit Access Business in the state of Texas.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-[10px] font-bold text-slate-500 uppercase">
              <span className="flex items-center gap-1">
                🛡️ License: #16489-62456
              </span>
              <span className="flex items-center gap-1">
                📝 CAB Regulated (TX Finance Code Ch. 393)
              </span>
            </div>
          </div>

          {/* OCCC Mandatory Disclosures */}
          <div className="space-y-4 text-[10px] leading-relaxed text-slate-400">
            <p>
              *Net Pay Advance is a state-licensed direct lender in states where we originate consumer loans. See our Rates and Terms page for more information.
            </p>
            <p>
              <strong>Texas Residents:</strong> NPATX, LLC dba Net Pay Advance dba netpayadvance.com is a Credit Access Business, not a lender, in the state of Texas. All loans are made by an unaffiliated third-party lender.
            </p>
            <p>
              <strong>Kansas Residents:</strong> NPAKS, LLC dba Net Pay Advance dba netpayadvance.com is licensed by the Kansas Office of the State Bank Commissioner pursuant to the Kansas Uniform Consumer Credit Code, License No. SL.0026778.
            </p>
            <p>
              <strong>California Residents:</strong> By using this site, you acknowledge receipt of disclosures of setting forth your rights under the California Consumer Privacy Protection Act of 2018 as disclosed in our California Resident's Privacy Policy Addendum. Net Pay Advance, Inc. is licensed by the California Department of Financial Protection and Innovation pursuant to the California Deferred Deposit Transaction Law, License Number 10977-99, and maintains a license pursuant to the California Debt Collector Licensing Act.
            </p>
            <p>
              By submitting your information you understand and agree to our Privacy Policy and Terms of Use.
            </p>
            <p>
              Subject to state regulations, eligibility, underwriting, and approval. Rates, terms, restrictions, fees and conditions apply. Lending decisions and funding times are subject to system limitations. Some applications may require additional verification which can delay the lending decision.
            </p>
            <p>
              <strong>Customer Notice:</strong> Short-term advances should be used for short-term financial needs only, not as long-term financial solutions. Customers with credit difficulties should seek credit counseling.
            </p>
            <p>
              *Instant funding is not available for all debit cards and may be limited by system, bank restrictions, or eligibility. Additional conditions may apply. If approved after 7:30 PM CST (5:30 PM PST), or if your bank experiences delays—including weekends or holidays—funding may take longer.
            </p>
            <p>
              View our Rates and Terms to view the APR in your State. Failure to make timely payments may result in NSF or late fees. If your account becomes severely delinquent, it may be turned over to a third-party collection agency. Late payments, missed payments, or other defaults may be reflected in your credit report. Loans do not automatically renew without prior approval. If you renew or "rollover" your loan, your principal balance may not be reduced, and you will owe additional fees and/or interest.
            </p>
            <p>
              <strong>Accessibility Assistance:</strong> If you experience any difficulty using or accessing any part of this website, please feel free to call us at (888) 942-3320 or email us at customerservice@netpayadvance.com, and we will work with you to ensure that you have full access to the information in which you are interested and which is available to the public on our site.
            </p>
            <p>
              <strong>NOTICE:</strong> The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act. The Federal agency that administers compliance with this law concerning this creditor is the Federal Trade Commission, Consumer Response Center, 600 Pennsylvania Avenue NW, Washington DC 20580.
            </p>
          </div>

          {/* Copyrights and Date */}
          <div className={`flex flex-col md:flex-row md:justify-between pt-6 text-[9.5px] text-slate-450 ${isWireframe ? "border-t border-dashed border-slate-300" : "border-t border-slate-800/60"}`}>
            <p>© {new Date().getFullYear()} Net Pay Advance, Inc. All rights reserved. TX CAB License num: 16489-62456. Served in accordance with Texas Finance Code.</p>
            <p className="mt-2 md:mt-0">Design Redesign & Conversion Optimization Prototype • Wireframe Mode Active</p>
          </div>

        </div>
      </footer>

      {/* 11. Multi-Step Pre-qualify Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialAmount={modalAmount}
        initialFrequency={modalFrequency}
      />

      {/* 11.5 Customer Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        isWireframe={isWireframe}
      />

      {/* 12. Floating Redesign Mode Switcher Pill */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-2 rounded-full flex items-center gap-2 z-50 select-none">
        <span className="text-[10px] font-mono text-slate-400 font-semibold pl-3 uppercase tracking-wider hidden sm:inline">Redesign view:</span>
        <div className="flex bg-slate-100 rounded-full p-0.5 text-xs font-mono">
          <button 
            type="button"
            onClick={() => setIsWireframe(false)}
            className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${!isWireframe ? 'bg-white shadow text-slate-900 font-black' : 'text-slate-405 hover:text-slate-655'}`}
          >
            🌟 Premium UI
          </button>
          <button 
            type="button"
            onClick={() => setIsWireframe(true)}
            className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${isWireframe ? 'bg-slate-900 text-white font-black' : 'text-slate-500 hover:text-slate-705'}`}
          >
            📐 Wireframe
          </button>
        </div>
      </div>

    </div>
  );
}
