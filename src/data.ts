/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, TexasCity } from "./types";

export const FAQ_DATA: FAQItem[] = [
  {
    id: "early-payoff",
    category: "rates",
    question: "Can I pay off my Texas loan early? Are there any prepayment penalties?",
    answer: "Absolutely. You can repay your Texas installment loan early at any time with zero penalty fees, interest markups, or administrative surcharges. In fact, paying your balance down early will minimize the daily CAB fees or interest accrued on your account, saving you money!"
  },
  {
    id: "change-payment-date",
    category: "requirements",
    question: "What should I do if my payroll cycle shifts and I need to adjust a payment date?",
    answer: "We offer flexible payments to match your real payroll details. If you need to make changes to an upcoming scheduled installment, simply log into your consumer portal or get in touch with our Texas servicing support team at least two banking business days prior to your original due date."
  },
  {
    id: "late-missed-payments",
    category: "credit",
    question: "What happens if I miss a scheduled payment? Will you report it to major credit bureaus?",
    answer: "No. Since Net Pay Advance does not pull traditional reports from Equifax, Experian, or TransUnion, we also do not report missed payments to them. However, if a payment is returned unpaid by your bank, standard returned item fees may apply. Contact us prior to your due date to set up a free payment extension or custom repayment arrangement."
  },
  {
    id: "multiple-active-loans",
    category: "rates",
    question: "Can I take out multiple installment loans simultaneously?",
    answer: "To help you borrow safely and stay on track financially, Texas regulations and our internal underwriting policies permit only one active loan with Net Pay Advance at a time. Once your current outstanding balance is fully paid, you are instantly eligible to reapply online."
  },
  {
    id: "instant-funding-failed",
    category: "speed",
    question: "What happens if my debit card does not support Instant Funding?",
    answer: "If your debit card or issuing banking brand does not support real-time network transaction credits (or our card verification check fails), we automatically offer to dispatch your funds via standard same-day or next-day direct deposit (ACH) for free, so you still get your money rapidly."
  }
];

export const TEXAS_CITIES: TexasCity[] = [
  {
    id: "houston",
    name: "Houston",
    zipCode: "77002",
    description: "From midtown careers to local energy transitions, Houstonians count on swift, same-day cash flows without standard office hold-ups.",
    localStat: "Average Instant Funding time: 14 seconds",
    testimonials: [
      {
        id: "h1",
        name: "Marcus G.",
        city: "Houston, TX",
        rating: 5,
        date: "May 12, 2026",
        text: "My central AC went out right before a crazy humid Houston weekend. Standard banks wanted 3 days of paperwork. Net Pay got me $750 instantly on my debit card Friday afternoon. Lifesaver."
      },
      {
        id: "h2",
        name: "Elena R.",
        city: "Houston, TX",
        rating: 5,
        date: "Apr 28, 2026",
        text: "Very straightforward, no credit check, and I liked paying it over two months instead of all at once. Highly recommended for short term emergencies."
      }
    ]
  },
  {
    id: "dallas",
    name: "Dallas",
    zipCode: "75201",
    description: "Keeping pace with Metroplex speed. Dallas residents use secure mobile advances to navigate unpredictable medical, auto, or home repair bills.",
    localStat: "Rated 4.8/5 by 3,200+ Dallas borrowers",
    testimonials: [
      {
        id: "d1",
        name: "Sarah M.",
        city: "Dallas, TX",
        rating: 5,
        date: "May 05, 2026",
        text: "I was worried about my credit because it's not perfect. Net Pay Advance did a soft check and approved me for $600. Repaying in 4 smaller installments fits my budget perfectly!"
      },
      {
        id: "d2",
        name: "Devon K.",
        city: "Dallas, TX",
        rating: 4,
        date: "Mar 19, 2026",
        text: "Super fast and paperless. Customer care helped me change a payment date with no fuss. It's the most professional CAB loan service in Texas."
      }
    ]
  },
  {
    id: "fort-worth",
    name: "Fort Worth",
    zipCode: "76102",
    description: "Honest, straightforward service for Tarrant County families. We keep fees clear and terms flexible to power you through to your next check.",
    localStat: "Same-Day ACH cutoff: 1:00 PM Central time",
    testimonials: [
      {
        id: "fw1",
        name: "Patricia T.",
        city: "Fort Worth, TX",
        rating: 5,
        date: "Apr 11, 2026",
        text: "I've used other payday lenders in Fort Worth before and got stuck in that loop of paying them back and immediately borrowing again because it was too much at once. Installements are so much easier."
      }
    ]
  },
  {
    id: "san-antonio",
    name: "San Antonio",
    zipCode: "78205",
    description: "Serving defense families, hospitality pros, and local business owners across Alamo City with transparent, secure installment options.",
    localStat: "15,400+ loans funded in Bexar County",
    testimonials: [
      {
        id: "sa1",
        name: "Carlos V.",
        city: "San Antonio, TX",
        rating: 5,
        date: "May 18, 2026",
        text: "Excellent service! Setup took me maybe 4 minutes on my phone. Approved in seconds. Got my installment loan funded same-day. The fees are listed clearly right on the screen."
      }
    ]
  },
  {
    id: "waco",
    name: "Waco",
    zipCode: "76701",
    description: "Serving McLennan County with flexible, licensed online installment options. Waco families enjoy seamless same-day funding directly to debit card.",
    localStat: "Average Approval Time: 15 seconds",
    testimonials: [
      {
        id: "wa1",
        name: "Vanessa P.",
        city: "Waco, TX",
        rating: 5,
        date: "May 09, 2026",
        text: "Simple application interface and super honest terms. Happy to find a reliable CAB license holder that actually processes paperless in minutes."
      }
    ]
  },
  {
    id: "austin",
    name: "Austin",
    zipCode: "78701",
    description: "Austin's fast-moving tech and creative workforce chooses Net Pay Advance for streamlined, digital-first capital when unexpected expenses crop up.",
    localStat: "100% paperless mobile-optimized workflow",
    testimonials: [
      {
        id: "a1",
        name: "Liam O.",
        city: "Austin, TX",
        rating: 5,
        date: "May 14, 2026",
        text: "The application was extremely easy. No scan, no fax, just simple bank verification. Had my bank deposit by 5 PM. Very convenient!"
      }
    ]
  },
  {
    id: "el-paso",
    name: "El Paso",
    zipCode: "79901",
    description: "Bringing reliable, OCCC-compliant online advances to El Paso County with zero hard credit checks and custom payment plans.",
    localStat: "Bi-lingual Spanish-friendly support standard",
    testimonials: [
      {
        id: "ep1",
        name: "Roberto S.",
        city: "El Paso, TX",
        rating: 5,
        date: "May 01, 2026",
        text: "Excelente y muy rápido. No revisan el buró tradicional de crédito, así que pude calificar sin problemas. Todo el proceso fue transparente."
      }
    ]
  },
  {
    id: "arlington",
    name: "Arlington",
    zipCode: "76010",
    description: "Whether visiting the entertainment district or working locally, Arlington residents enjoy fast, streamlined access to funds directly online.",
    localStat: "Licensed CAB installment lending in Arlington",
    testimonials: [
      {
        id: "ar1",
        name: "Tyler B.",
        city: "Arlington, TX",
        rating: 5,
        date: "May 10, 2026",
        text: "Needed some emergency cash to fix my car. The process was super simple, took only a few minutes. I got the money on my debit card almost instantly!"
      }
    ]
  }
];
