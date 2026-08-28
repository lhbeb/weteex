export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const STORE_FAQS_DE: readonly StoreFaq[] = [
  {
    question: 'Auf welche Möbel ist Weteextees spezialisiert?',
    answer:
      'Weteextees ist Ihr Online-Shop für handgefertigte moderne Esszimmerstühle, Naturrattan- und Massivholzmöbel, stilvolle Esstische und zeitlose Wohnaccessoires. Jedes Stück überzeugt durch hochwertige Verarbeitung und edle Materialien.',
  },
  {
    question: 'Wie wird die Qualität und Materialverarbeitung sichergestellt?',
    answer:
      'Jedes Möbelstück wird vor dem Versand einer sorgfältigen Qualitätskontrolle unterzogen. Detaillierte Maße, Holzarten, Polsterstoffe und Pflegehinweise finden Sie direkt auf den Produktseiten.',
  },
  {
    question: 'Wie gebe ich eine Bestellung auf?',
    answer:
      'Wählen Sie Ihr gewünschtes Möbelstück aus, prüfen Sie die Abmessungen und legen Sie den Artikel in den Warenkorb. Anschließend führen wir Sie durch den sicheren Bezahlvorgang.',
  },
  {
    question: 'Wohin liefern Sie und wie werden empfindliche Möbel transportiert?',
    answer:
      'Wir liefern versandkostenfrei nach ganz Deutschland, in die EU sowie in die USA. Große oder empfindliche Möbelstücke werden in verstärkten Spezialverpackungen durch erfahrene Speditionen zugestellt.',
    linkHref: '/shipping-policy',
    linkLabel: 'Zu unseren Versandrichtlinien',
  },
  {
    question: 'Wie kann ich meine Sendung verfolgen?',
    answer:
      'Sobald Ihre Bestellung an die Spedition übergeben wurde, erhalten Sie eine Versandbestätigung mit Tracking-Nummer per E-Mail. Zudem können Sie den Status auf unserer Seite zur Sendungsverfolgung einsehen.',
    linkHref: '/track',
    linkLabel: 'Sendung verfolgen',
  },
  {
    question: 'Wie funktioniert die Rückgabe?',
    answer:
      'Sie können unbenutzte Artikel innerhalb von 30 Kalendertagen nach Erhalt in der Originalverpackung an uns zurückgeben. Alle Details finden Sie in unserer Widerrufsbelehrung & Rückgaberichtlinie.',
    linkHref: '/return-policy',
    linkLabel: 'Zur Widerrufsbelehrung & Rückgabe',
  },
  {
    question: 'Kann ich eine Bestellung nach dem Absenden ändern oder stornieren?',
    answer:
      'Bitte kontaktieren Sie uns schnellstmöglich per 24/7 Live-Chat oder E-Mail. Solange die Ware noch nicht verpackt und an den Transporteur übergeben wurde, passen wir Ihre Bestellung gerne an.',
  },
  {
    question: 'Wie erreiche ich den Kundenservice von Weteextees?',
    answer:
      'Sie erreichen unser Support-Team rund um die Uhr (24/7) über den Live-Chat auf unserer Website oder per E-Mail an contact@weteextees.com.',
    linkHref: '/contact',
    linkLabel: 'Kundenservice kontaktieren',
  },
];

export const STORE_FAQS_EN: readonly StoreFaq[] = [
  {
    question: 'What furniture does Weteextees specialize in?',
    answer:
      'Weteextees is your premier destination for handcrafted modern dining chairs, natural rattan and solid wood furniture, designer dining tables, and timeless home accents. Each piece is crafted from premium materials for enduring quality.',
  },
  {
    question: 'How do you ensure premium quality and craftsmanship?',
    answer:
      'Every piece undergoes rigorous inspection before dispatch. Comprehensive dimensions, wood varieties, upholstery fabrics, and care instructions are detailed directly on each product page.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Select your desired furniture piece, verify specifications and sizing, and add it to your shopping cart. Follow the streamlined, SSL-encrypted checkout to complete your purchase securely.',
  },
  {
    question: 'Where do you ship, and how is delicate furniture handled?',
    answer:
      'We provide insured freight shipping to the United States, Germany, the EU, and worldwide. Heavy or fragile items are securely packed with reinforced edge protection and transported via specialized logistics partners.',
    linkHref: '/shipping-policy',
    linkLabel: 'View Shipping Policy',
  },
  {
    question: 'How can I track my order delivery?',
    answer:
      'Once your order has been dispatched with our freight carriers, you will receive an email confirmation with your real-time tracking number. You can also monitor your shipment anytime on our Order Tracking page.',
    linkHref: '/track',
    linkLabel: 'Track Shipment',
  },
  {
    question: 'What is your return and refund policy?',
    answer:
      'You can return unused items in their original packaging within 30 calendar days of delivery. For full instructions, please consult our Returns & Refunds Policy page.',
    linkHref: '/return-policy',
    linkLabel: 'View Returns Policy',
  },
  {
    question: 'Can I modify or cancel my order after placing it?',
    answer:
      'Please reach out immediately via our 24/7 Live Chat or email. As long as your order has not been picked and handed over to the freight carrier, we will gladly adjust it for you.',
  },
  {
    question: 'How do I reach Weteextees customer support?',
    answer:
      'Our dedicated customer care team is available 24/7 via the instant Live Chat on our website or by email at contact@weteextees.com.',
    linkHref: '/contact',
    linkLabel: 'Contact Customer Support',
  },
];

export const STORE_FAQS = STORE_FAQS_DE;

export function getStoreFaqs(isGerman: boolean): readonly StoreFaq[] {
  return isGerman ? STORE_FAQS_DE : STORE_FAQS_EN;
}
