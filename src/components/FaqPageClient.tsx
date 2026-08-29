"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle, Plus } from 'lucide-react';
import { STORE_FAQS_DE, STORE_FAQS_EN } from '@/lib/storeFaqs';
import { useLocale } from '@/context/LocaleContext';

export default function FaqPageClient() {
  const { isGerman } = useLocale();
  const faqs = isGerman ? STORE_FAQS_DE : STORE_FAQS_EN;

  return (
    <main className="min-h-screen bg-[#F6F8F5]">
      <section className="bg-gradient-to-r from-[#1D2E24] to-[#142019] px-4 py-14 text-[#F6F8F5] sm:py-20 border-b border-[#D1A966]/20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D1A966] text-[#142019]">
            <HelpCircle className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl text-[#F6F8F5]">
            {isGerman ? 'Häufig gestellte Fragen (FAQ)' : 'Frequently Asked Questions (FAQ)'}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#F6F8F5]/85 sm:text-lg">
            {isGerman
              ? 'Hier finden Sie Antworten zu unseren handverlesenen Möbeln, Bestellabläufen, Speditionslieferungen und Rückgabemöglichkeiten.'
              : 'Find answers regarding our curated furniture collections, order process, insured freight logistics, and returns.'}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16" aria-label="Frequently asked questions">
        <div className="container mx-auto max-w-4xl">
          <div className="divide-y divide-[#DCE5DE] border-y border-[#DCE5DE] bg-white px-5 sm:px-8 rounded-2xl shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-bold text-[#1E2621] marker:content-none sm:py-6 sm:text-lg">
                  <span>{faq.question}</span>
                  <Plus
                    className="h-5 w-5 shrink-0 text-[#D1A966] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <div className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-[#5C6B61] sm:text-base">
                  <p>{faq.answer}</p>
                  {faq.linkHref && faq.linkLabel && (
                    <Link
                      href={faq.linkHref}
                      className="mt-3 inline-flex items-center gap-1.5 font-semibold text-[#1D2E24] underline decoration-[#D1A966] decoration-2 underline-offset-4"
                    >
                      {faq.linkLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#1D2E24] to-[#142019] p-6 text-[#F6F8F5] sm:flex-row sm:items-center sm:p-8 border border-[#D1A966]/20">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl text-[#D1A966]">
                {isGerman ? 'Haben Sie weitere Fragen?' : 'Have More Questions?'}
              </h2>
              <p className="mt-2 text-sm text-[#F6F8F5]/80 sm:text-base">
                {isGerman
                  ? 'Unser Team steht Ihnen rund um die Uhr per Live-Chat oder Kontaktformular zur Verfügung.'
                  : 'Our customer support team is available Mo-Fr 09:00-17:00 via instant Live Chat or our contact form.'}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#D1A966] px-5 py-3 text-sm font-bold text-[#142019] transition-colors hover:bg-[#DEBC80]"
            >
              {isGerman ? 'Kontakt aufnehmen' : 'Contact Support'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
