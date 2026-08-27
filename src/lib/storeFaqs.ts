export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const STORE_FAQS: readonly StoreFaq[] = [
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
      'Wir liefern versandkostenfrei nach ganz Deutschland und in die EU. Große oder empfindliche Möbelstücke werden in verstärkten Spezialverpackungen durch erfahrene Speditionen zugestellt.',
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
