"use client";

import Link from 'next/link';
import { CheckCircle2, Clock, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

const facts = [
  { icon: Truck, label: 'Versandkosten', value: 'Kostenlos (0,00 €)' },
  { icon: PackageCheck, label: 'Bearbeitungszeit', value: '1 Werktag' },
  { icon: Clock, label: 'Lieferzeit', value: '3–4 Werktage' },
  { icon: ShieldCheck, label: 'Absicherung', value: 'Versicherter Versand' },
];

export default function ShippingPolicyClient() {
  return (
    <main className="bg-[#F6F8F5] text-[#1D2E24]">
      <section className="border-b border-[#DCE5DE] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <nav className="mb-6 text-sm text-[#5C6B61]"><Link href="/" className="hover:text-[#1D2E24]">Startseite</Link> / Versandrichtlinie</nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#9A7438]">Lieferung innerhalb Deutschlands</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Versand- und Lieferbedingungen</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5C6B61]">Wir liefern ausschließlich innerhalb Deutschlands. Jede Bestellung beinhaltet kostenlosen versicherten Versand und eine Sendungsverfolgung.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value }) => <div key={label} className="rounded-2xl border border-[#DCE5DE] bg-white p-6"><Icon className="mb-4 h-6 w-6 text-[#9A7438]"/><p className="text-sm text-[#6C796F]">{label}</p><p className="mt-1 font-semibold">{value}</p></div>)}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#DCE5DE] bg-white p-7">
            <h2 className="text-2xl font-semibold">Lieferablauf</h2>
            <ul className="mt-5 space-y-4 text-[#4E5D53]">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9A7438]"/><span>Bestellungen werden innerhalb eines Werktags bearbeitet.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9A7438]"/><span>Die Beförderung dauert in der Regel 3–4 Werktage. (4-5 Werktage Gesamt).</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9A7438]"/><span>Sobald die Bestellung versendet wurde, erhalten Sie die Sendungsverfolgung per E-Mail.</span></li>
            </ul>
          </article>
          <article className="rounded-2xl border border-[#DCE5DE] bg-white p-7">
            <h2 className="text-2xl font-semibold">Standort</h2>
            <div className="mt-5 flex gap-3 text-[#4E5D53]"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#9A7438]"/><p><strong className="block text-[#1D2E24]">Deutschland</strong>Hohenstaufenring 78<br/>50674 Köln/Cologne</p></div>
            <p className="mt-6 text-sm leading-6 text-[#6C796F]">Bestellungen können nur an gültige Lieferadressen innerhalb Deutschlands zugestellt werden.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
