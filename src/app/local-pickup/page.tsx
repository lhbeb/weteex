import Link from 'next/link';
import { Clock3, MapPin, PackageCheck, ShieldCheck } from 'lucide-react';

const pickupSteps = [
  {
    title: 'Place your order first',
    body: 'Choose your excavator online and confirm the order before making any collection arrangements.',
    icon: PackageCheck,
  },
  {
    title: 'Wait for pickup confirmation',
    body: 'We will contact you when the machine is prepared and provide the confirmed collection location and requirements.',
    icon: ShieldCheck,
  },
  {
    title: 'Bring your order details',
    body: 'Have your order confirmation, valid ID, and suitable insured machinery transport ready for collection.',
    icon: Clock3,
  },
];

export default function LocalPickupPage() {
  return (
    <div className="min-h-screen bg-[#f1f6fb] py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[32px] border border-[#d8e7f5] bg-white shadow-[0_24px_80px_rgba(0,48,153,0.10)]">
          <section className="bg-gradient-to-br from-[#01428a] via-[#01428a] to-[#01428a] px-6 py-10 text-[#f1f6fb] sm:px-10 sm:py-12">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d8941a]">
              Excavator Collection Guide
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Collect your Weteex / Teextees excavator safely
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#dbe8f5] sm:text-base">
              Eligible excavators may be collected by prior arrangement. This page explains what to expect, what to bring, and how collection works once your machine is ready.
            </p>
          </section>

          <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1.2fr)_360px]">
            <div className="space-y-8">
              <section className="rounded-[24px] border border-[#dbe8f5] bg-white p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-[#262626]">How excavator collection works</h2>
                <div className="mt-6 grid gap-4">
                  {pickupSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="rounded-[20px] border border-[#e5eef8] bg-[#f7faff] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#edf4fb] text-[#01428a]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-[#262626]">{step.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-[#5f6e82]">{step.body}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[24px] border border-[#dbe8f5] bg-white p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-[#262626]">Before you arrive</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f6e82]">
                  <li>Make sure you have received a pickup-ready confirmation from our team.</li>
                  <li>Bring a valid photo ID, your order number, and any requested company documentation.</li>
                  <li>If someone else is collecting for you, contact us in advance so we can note it on the order.</li>
                  <li>Use suitable, insured transport with the correct load capacity, restraints, and loading arrangements.</li>
                </ul>
              </section>

              <section className="rounded-[24px] border border-[#dbe8f5] bg-white p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-[#262626]">Need help first?</h2>
                <p className="mt-3 text-sm leading-7 text-[#5f6e82]">
                  If you are unsure whether an excavator can be collected, contact us before placing the order so we can confirm the machine location, site access, loading arrangements, and timing.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:contact@weteextees.com"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#01428a] px-5 py-3 text-sm font-semibold text-[#f1f6fb] transition hover:bg-[#002b59]"
                  >
                    Email Support
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#01428a]/20 bg-white px-5 py-3 text-sm font-semibold text-[#01428a] transition hover:bg-[#edf4fb]"
                  >
                    Contact Page
                  </Link>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-[24px] border border-[#dbe8f5] bg-[#f7faff] p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#edf4fb] text-[#01428a]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-[#262626]">Pickup location</h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-[#5f6e82]">
                      <address className="not-italic">
                        <span className="block font-semibold text-[#262626]">By appointment only</span>
                        The registered office is not a public machinery yard.
                        <br />
                        Your collection location is confirmed in writing
                        <br />
                        after the order and transport arrangements are approved.
                      </address>

                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-[#dbe8f5] bg-[#f7faff] p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#edf4fb] text-[#01428a]">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#262626]">Collection timing</h2>
                    <p className="mt-3 text-sm leading-7 text-[#5f6e82]">
                      Collection timing is confirmed directly by our team after the excavator is prepared. Please do not travel before you receive written collection confirmation.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-[#dbe8f5] bg-white p-6">
                <h2 className="text-lg font-semibold text-[#262626]">Important note</h2>
                <p className="mt-3 text-sm leading-7 text-[#5f6e82]">
                  Collection availability varies by machine. Some excavators are delivery-only. Wait for written confirmation before travelling or dispatching a haulier.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
