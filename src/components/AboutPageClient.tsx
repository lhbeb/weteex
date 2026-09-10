"use client";

import Link from 'next/link';
import { CheckCircle2, Headphones, MapPin, PackageCheck, ShieldCheck } from 'lucide-react';

export default function AboutPageClient() {
  return <main className="bg-[#F6F8F5] text-[#1D2E24]">
    <section className="bg-[#142019] text-white"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D1A966]">About Weteextees</p>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">Furniture selected for lasting comfort and character.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#DCE5DE]">Weteextees is a United States online furniture store focused on modern chairs, tables, natural materials, and timeless pieces for everyday homes.</p>
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {[['Curated quality', 'We assess construction, materials, dimensions, and finish before a product enters our catalog.', PackageCheck], ['Clear product details', 'Accurate specifications and product photography help customers choose with confidence.', CheckCircle2], ['Insured US delivery', 'Orders ship within the United States with tracking and insured delivery.', ShieldCheck]].map(([title, copy, Icon]: any) => <article key={title} className="rounded-2xl border border-[#DCE5DE] bg-white p-7"><Icon className="h-7 w-7 text-[#9A7438]"/><h2 className="mt-5 text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-[#5C6B61]">{copy}</p></article>)}
      </div>
      <div className="mt-12 grid gap-6 rounded-2xl border border-[#DCE5DE] bg-white p-8 md:grid-cols-2">
        <div><h2 className="text-2xl font-semibold">Our promise</h2><p className="mt-4 leading-7 text-[#5C6B61]">We provide transparent USD pricing, free insured delivery across the United States, a 30-day return policy, and helpful customer support.</p></div>
        <div className="space-y-5 text-[#5C6B61]"><div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[#9A7438]"/><p><strong className="block text-[#1D2E24]">United States</strong>900 AZ-66, Peach Springs, AZ 86434</p></div><div className="flex gap-3"><Headphones className="mt-0.5 h-5 w-5 text-[#9A7438]"/><p><strong className="block text-[#1D2E24]">Customer support</strong>Live chat or contact@weteextees.com</p></div></div>
      </div>
      <div className="mt-10 text-center"><Link href="/#collection" className="inline-flex rounded-full bg-[#1D2E24] px-7 py-3 font-semibold text-white hover:bg-[#2D4034]">Shop the collection</Link></div>
    </section>
  </main>;
}
