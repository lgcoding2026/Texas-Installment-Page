/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "rates" | "requirements" | "speed" | "credit" | "licensing";
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
}

export interface TexasCity {
  id: string;
  name: string;
  zipCode: string;
  description: string;
  localStat: string;
  testimonials: Testimonial[];
}

export enum LoanFrequency {
  BI_WEEKLY = "Bi-weekly",
  SEMI_MONTHLY = "Semi-monthly",
  MONTHLY = "Monthly"
}

export interface LoanCalculation {
  principal: number;
  interest: number;
  cabFee: number;
  total: number;
  numberOfPayments: number;
  paymentAmount: number;
  schedule: Array<{
    paymentNumber: number;
    dueDate: string;
    amount: number;
  }>;
}
