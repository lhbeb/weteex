import { readFile, writeFile } from 'fs/promises';
import path from 'path';

interface ProductContent {
  slug: string;
  title: string;
  description: string;
  sourceUpdatedAt: string | null;
}

interface ProductExport {
  exportedAt: string;
  products: ProductContent[];
}

const translations: Record<string, { title: string; descIntro: string; mainBody: string }> = {
  'eetkamerstoel-met-rotan-rug-charles-eik-naturel-rotan-gebroken-wit': {
    title: 'Esszimmerstuhl mit Rattan-Rückenlehne Charles - Eiche/Naturrattan - Gebrochenes Weiß',
    descIntro: 'Der Esszimmerstuhl Charles vereint meisterhafte Holzverarbeitung, ergonomischen Sitzkomfort und natürliche Materialien für Ihr stilvolles Esszimmer.',
    mainBody: 'Der Esszimmerstuhl Charles besticht durch sein massives Eichengestell, die bequeme Stoffpolsterung in gebrochenem Weiß und die handgeflochtene Rückenlehne aus echtem Naturrattan (Wiener Geflecht). Ein absolutes Highlight für Liebhaber zeitloser Design-Klassiker und moderner Wohnkultur.',
  },
  'eetkamerstoel-ely-rechthoekige-stoffen-zitting-essenhout-vdf115': {
    title: 'Esszimmerstuhl Ely - Rechteckige Stoffpolsterung - Eiche',
    descIntro: 'Der Esszimmerstuhl Ely bietet minimalistisches skandinavisches Design, solide Holzkonstruktion und höchsten Sitzkomfort.',
    mainBody: 'Mit seinem stabilen Eschen- und Eichenholzrahmen und der komfortabel gepolsterten rechteckigen Sitzfläche fügt sich der Stuhl Ely harmonisch in moderne Ess- und Arbeitsbereiche ein.',
  },
  'eetkamerstoel-muret-geweven-touw-zitting-eik': {
    title: 'Esszimmerstuhl Muret - Geflochtene Seilsitzfläche - Eiche',
    descIntro: 'Handwerklich gefertigt aus Eichenholz und widerstandsfähigem Kordelgeflecht für ein natürliches, warmes Wohnambiente.',
    mainBody: 'Der Stuhl Muret kombiniert skandinavische Formsprache mit traditioneller Flechtkunst. Die ergonomisch geformte Rückenlehne und die flexible Kordel-Sitzfläche bieten außergewöhnlichen Sitzkomfort.',
  },
  'gien-eetkamerstoel-coffee-bean': {
    title: 'Esszimmerstuhl Gien - Dunkles Walnussholz - Latte Kordelgeflecht',
    descIntro: 'Eleganter Esszimmerstuhl im Coffee-Bean-Farbton mit stilvollem Kordelgeflecht und geschwungener Rückenlehne.',
    mainBody: 'Der Esszimmerstuhl Gien bringt mit seinem edlen dunklen Holzton und der Latte-farbenen Seilbespannung mediterranes Flair und moderne Eleganz an jeden Esstisch.',
  },
  'eetkamerstoel-chantelle-acacia-walnoot-hout-met-touw-weven-ztting-kopie': {
    title: 'Esszimmerstuhl Chantelle - Dunkle Eiche & Akazie - Geflechtsitz',
    descIntro: 'Klassisch-moderner Holzstuhl mit ergonomischer Lehne und handgewebter Sitzfläche.',
    mainBody: 'Der Stuhl Chantelle wird aus massivem Akazien- und Eschenholz gefertigt und besticht durch die Kombination aus robuster Langlebigkeit und graziler Silhouette.',
  },
  'low-dining-dining-chair-challans-walnut-boucle': {
    title: 'Low-Dining Esszimmerstuhl Challans - Walnuss & Bouclé',
    descIntro: 'Exklusiver Low-Dining Sesselstuhl mit samtig-weichem Bouclé-Bezug und edlem Walnuss-Finish.',
    mainBody: 'Der Stuhl Challans ist für entspannte, gesellige Stunden konzipiert. Die tiefere, großzügig gepolsterte Sitzfläche und der trendige Bouclé-Stoff machen ihn zum Star jedes modernen Esszimmers.',
  },
  'jaren-60-retro-relaxstoel-rotan-zwart-hout-zwart-velvet-zwart': {
    title: '60er Jahre Retro Relaxsessel - Rattan & Schwarzholz - Schwarzer Samt',
    descIntro: 'Ikonischer Retro-Loungesessel mit Naturrattan-Elementen und luxuriöser Samtpolsterung.',
    mainBody: 'Dieser 60s Relaxsessel verbindet markantes schwarzes Massivholz mit honigfarbenem Naturrattan und tiefschwarzem Samtstoff. Perfekt für Lounge, Leseecke oder stilvolle Wohnzimmer.',
  },
  'rotan-bijzettafel-maeva-zwart-naturel-rotan-45-45-43cm': {
    title: 'Rattan Beistelltisch Maeva - Schwarz & Naturrattan - 45×45×43cm',
    descIntro: 'Kompakter Design-Beistelltisch mit filigranem Rattan-Geflecht und schwarzem Holzkorpus.',
    mainBody: 'Der Beistelltisch Maeva setzt stilvolle Akzente neben Sofa oder Sessel. Die Kombination aus schwarzem Rahmen und hellem Naturrattan verleiht jedem Raum eine organische Leichtigkeit.',
  },
  'ely-dining-chair-light-walnut-woven-seat': {
    title: 'Moderner Esszimmerstuhl Ely - Helles Walnussholz mit Kordelgeflecht',
    descIntro: 'Minimalistischer Esszimmerstuhl aus hellem Walnussholz mit traditionell handgewebtem Kordelsitz.',
    mainBody: 'Klares dänisches Design trifft auf meisterhafte Holzverarbeitung. Der Stuhl Ely überzeugt durch seine zeitlose Linienführung und hervorragende Ergonomie.',
  },
  'ely-modern-dining-chair-black-oak-fabric': {
    title: 'Moderner Esszimmerstuhl Ely - Schwarze Eiche mit Strukturgewebe',
    descIntro: 'Eleganter Designerstuhl aus schwarz gebeizter Eiche mit strapazierfähigem Strukturstoff.',
    mainBody: 'Mit seinem kontrastreichen Zusammenspiel aus schwarzem Eichengestell und meliertem Polsterstoff ist dieser Stuhl eine ideale Ergänzung für moderne Innenräume.',
  },
  'muret-dining-chair-smoke-wood-ivory-boucle': {
    title: 'Esszimmerstuhl Muret - Räucherholz mit Elfenbein-Bouclé-Polsterung',
    descIntro: 'Luxuriöser Esszimmerstuhl mit Rauchholz-Finish und edlem elfenbeinfarbenem Bouclé-Stoff.',
    mainBody: 'Der Muret Esszimmerstuhl vereint die organische Haptik von geräuchertem Massivholz mit dem gemütlichen Komfort von hochwertigem Bouclé-Gewebe.',
  },
  'round-dining-table-beveled-edge-walnut-125cm': {
    title: 'Runder Esstisch mit Facettenkante - Amerikanischer Nussbaum (125 cm)',
    descIntro: 'Hochwertiger runder Esstisch aus amerikanischem Nussbaumfurnier mit eleganter Schweizer Kante.',
    mainBody: 'Der 125 cm runde Esstisch bietet bequem Platz für 4 bis 6 Personen und besticht durch die lebendige, edle Holzmaserung des amerikanischen Nussbaums.',
  },
  'round-dining-table-calacatta-white-ceramic-140cm': {
    title: 'Runder Esstisch Calacatta Weiß Keramik mit Stahlsäule (140 cm)',
    descIntro: 'Repräsentativer Esstisch mit kratzfester Keramikplatte im edlen Calacatta-Marmor-Look.',
    mainBody: 'Die 140 cm große Tischplatte aus Calacatta-Keramik ist hitzebeständig, kratzfest und pflegeleicht. Das skulpturale Stahl-Säulengestell sorgt für maximale Beinfreiheit.',
  },
  'round-dining-table-polished-black-marble-125cm': {
    title: 'Runder Esstisch Polierter Schwarzer Marmor mit Stahlfuß (125 cm)',
    descIntro: 'Eleganter runder Marmortisch mit tiefschwarzer, polierter Platte und markanter Äderung.',
    mainBody: 'Echter Naturstein macht jeden Tisch zu einem einzigartigen Unikat. Die polierte Marmoroberfläche wird von einem stabilen, pulverbeschichteten Mittelfuß getragen.',
  },
  'ruben-retro-dining-chair-oak-wicker-rattan': {
    title: 'Retro Esszimmerstuhl Ruben - Natureiche & Wiener Geflecht Rattan',
    descIntro: 'Ikonischer Retro-Esszimmerstuhl aus hellem Eichenholz mit Sitz und Lehne aus Naturgeflecht.',
    mainBody: 'Der Stuhl Ruben zitiert klassische Bauhaus- und Mid-Century-Entwürfe und bringt luftige Eleganz und natürlichen Charme an Ihren Esstisch.',
  },
  'savis-round-coffee-table-oak-rattan-star': {
    title: 'Runder Couchtisch Savis - Natureiche mit handgeflochtenem Rattan-Sternmuster',
    descIntro: 'Skulpturaler Couchtisch aus massivem Eichenholz mit kunstvoll eingefasster Rattan-Intarsie.',
    mainBody: 'Der Couchtisch Savis ist ein handwerkliches Meisterwerk: Die runde Tischplatte zeigt ein sternförmiges Rattan-Geflecht, geschützt unter robuster Glaskante und massivem Eichenrahmen.',
  },
  'swing-chair-natural-wicker-rattan-seat': {
    title: 'Freischwinger Stuhl - Naturgeflecht mit Rattansitz & Chromgestell',
    descIntro: 'Design-Freischwinger mit verchromtem Stahlrohrgestell und handgeflochtenem Rattansitz.',
    mainBody: 'Die sanft federnde Freischwinger-Konstruktion sorgt für unvergleichlichen Sitzkomfort bei Tischgesprächen und Konferenzen.',
  },
};

function formatGermanDescription(title: string, descIntro: string, mainBody: string): string {
  return `${title} – ${descIntro}

Produktbeschreibung:
${mainBody}

Besondere Merkmale:
• Erstklassiges Handwerk: Sorgfältig verarbeitete Massivhölzer und edle Oberflächen
• Ergonomischer Komfort: Durchdachte Formgebung für bequemes Sitzen
• Vielseitig kombinierbar: Ideal für Esszimmer, Wohnbereiche, Konferenzräume und Arbeitsplätze
• Bodenschutz: Integrierte Gleiter zum Schutz empfindlicher Böden
• Versicherter Versand: Spezialverpackung für sicheren Transport bis zu Ihrer Haustür

Technische Daten & Garantie:
• Kategorie: Moderne Möbel & Stühle
• Marke: Weteextees / Kollektion
• Garantie: 2 Jahre Herstellergarantie & 30 Tage Rückgaberecht`;
}

async function main() {
  const contentPath = path.resolve(process.cwd(), 'scratch', 'product-content.json');
  const raw = await readFile(contentPath, 'utf8');
  const data = JSON.parse(raw) as ProductExport;

  let modifiedCount = 0;
  for (const product of data.products) {
    const t = translations[product.slug];
    if (t) {
      product.title = t.title;
      product.description = formatGermanDescription(t.title, t.descIntro, t.mainBody);
      modifiedCount++;
    }
  }

  await writeFile(contentPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${modifiedCount} products in scratch/product-content.json`);
}

main().catch(console.error);
