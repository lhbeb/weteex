import Link from 'next/link';
import { Clock3, MapPin, PackageCheck, ShieldCheck } from 'lucide-react';

const pickupSteps = [
  {
    title: 'Place your order first',
    body: 'Select your antique or modern furniture piece online and confirm your order before making collection arrangements.',
    icon: PackageCheck,
  },
  {
    title: 'Wait for collection confirmation',
    body: 'Our team will contact you once your piece is inspected, wrapped, and ready, confirming the appointment time and collection location.',
    icon: ShieldCheck,
  },
  {
    title: 'Bring your order details & transport',
    body: 'Have your order confirmation, valid ID, and suitable vehicle or protective blankets ready for safe transit.',
    icon: Clock3,
  },
];

export default function LocalPickupPage() {
  return (
    <div className="min-h-screen bg-[#F6F8F5] py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[32px] border border-[#DCE5DE] bg-white shadow-sm">
          <section className="bg-gradient-to-br from-[#1D2E24] via-[#1D2E24] to-[#142019] px-6 py-10 text-[#F6F8F5] sm:px-10 sm:py-12 border-b border-[#D1A966]/20">
            <div className="inline-flex items-center rounded-full border border-[#D1A966]/30 bg-[#1D2E24] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D1A966]">
              Collection Guide
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl text-[#F6F8F5]">
              Collect your Weteextees piece safely
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#F6F8F5]/85 sm:text-base">
              Eligible furniture and antique collectibles may be collected by prior arrangement. This page explains what to expect, what to bring, and how collection appointments work.
            </p>
          </section>

          <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1.2fr)_360px]">
            <div className="space-y-8">
              <section className="rounded-[24px] border border-[#DCE5DE] bg-white p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-[#1E2621]">How collection works</h2>
                <div className="mt-6 grid gap-4">
                  {pickupSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="rounded-[20px] border border-[#DCE5DE] bg-[#F6F8F5] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-[#1E2621]">{step.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-[#5C6B61]">{step.body}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[24px] border border-[#DCE5DE] bg-white p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-[#1E2621]">Before you arrive</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5C6B61]">
                  <li>Ensure you have received a collection-ready confirmation from our team.</li>
                  <li>Bring valid photo ID, your order number, and your confirmation email.</li>
                  <li>If a courier or representative is collecting on your behalf, notify us in advance.</li>
                  <li>Ensure your vehicle has adequate space, padding, straps, and protective blankets for fragile antiques or furniture.</li>
                </ul>
              </section>

              <section className="rounded-[24px] border border-[#DCE5DE] bg-white p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-[#1E2621]">Need help first?</h2>
                <p className="mt-3 text-sm leading-7 text-[#5C6B61]">
                  If you are unsure whether a piece can be collected locally, contact us before placing your order so we can confirm storage location, loading assistance, and available time slots.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:contact@weteextees.com"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#1D2E24] px-5 py-3 text-sm font-semibold text-[#F6F8F5] transition hover:bg-[#142019]"
                  >
                    Email Support
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#1D2E24]/20 bg-white px-5 py-3 text-sm font-semibold text-[#1D2E24] transition hover:bg-[#F6F8F5]"
                  >
                    Contact Page
                  </Link>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-[24px] border border-[#DCE5DE] bg-[#F6F8F5] p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-[#1E2621]">Pickup location</h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-[#5C6B61]">
                      <address className="not-italic">
                        <span className="block font-semibold text-[#1E2621]">By appointment only</span>
                        The registered office is an administrative location.
                        <br />
                        Your collection depot address is confirmed in writing
                        <br />
                        once your piece has been prepared for handover.
                      </address>

                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-[#DCE5DE] bg-[#F6F8F5] p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#1E2621]">Collection timing</h2>
                    <p className="mt-3 text-sm leading-7 text-[#5C6B61]">
                      Collection appointments are confirmed directly by our team once packaging and pre-handover checks are completed. Please do not travel without written confirmation.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-[#DCE5DE] bg-white p-6">
                <h2 className="text-lg font-semibold text-[#1E2621]">Important note</h2>
                <p className="mt-3 text-sm leading-7 text-[#5C6B61]">
                  Collection availability varies by item. Delicate or oversized pieces may be direct courier delivery only. Please wait for written scheduling confirmation.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
