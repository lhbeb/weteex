import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

interface CategoryDefinition {
  name: string;
  query: string;
  matcher: (p: Product) => boolean;
}

const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  {
    name: 'Moderne Esszimmerstühle',
    query: 'chair',
    matcher: (p) =>
      (p.slug.includes('chair') || p.slug.includes('ely') || p.slug.includes('muret') || p.slug.includes('stoel')) &&
      !p.slug.includes('rattan') &&
      !p.slug.includes('table'),
  },
  {
    name: 'Massivholz & Rattan',
    query: 'rattan',
    matcher: (p) =>
      p.slug.includes('rattan') ||
      p.slug.includes('wicker') ||
      p.slug.includes('ruben') ||
      p.slug.includes('rotan') ||
      p.slug.includes('swing'),
  },
  {
    name: 'Ess- & Couchtische',
    query: 'table',
    matcher: (p) =>
      (p.slug.includes('table') || p.slug.includes('tafel') || p.slug.includes('savis')) &&
      !p.slug.includes('marble') &&
      !p.slug.includes('ceramic'),
  },
  {
    name: 'Marmor- & Keramikplatten',
    query: 'marble',
    matcher: (p) =>
      p.slug.includes('marble') ||
      p.slug.includes('marmer') ||
      p.slug.includes('ceramic') ||
      p.slug.includes('keramisch'),
  },
];

interface PopularCategoriesProps {
  products: Product[];
}

export default function PopularCategories({ products }: PopularCategoriesProps) {
  const usedImageUrls = new Set<string>();

  const categories = CATEGORY_DEFINITIONS.map((def, index) => {
    const matchedProducts = products.filter(def.matcher);

    // Pick an unused image first, otherwise fallback to first matched or distributed product
    let chosenProduct = matchedProducts.find(
      (p) => p.images?.[0] && !usedImageUrls.has(p.images[0]),
    );

    if (!chosenProduct) {
      chosenProduct = matchedProducts[0] || products[index % products.length];
    }

    if (chosenProduct?.images?.[0]) {
      usedImageUrls.add(chosenProduct.images[0]);
    }

    return {
      name: def.name,
      query: def.query,
      count: matchedProducts.length || 1,
      image: chosenProduct?.images?.[0] || '/bg.png',
    };
  }).filter((category) => category.image);

  if (categories.length === 0) return null;

  const gridColsClass =
    categories.length === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : categories.length === 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';

  return (
    <section className="w-full bg-[#F6F8F5] py-12 sm:py-16 md:py-20" aria-labelledby="popular-categories-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-12 text-left">
            <h2
              id="popular-categories-title"
              className="text-3xl font-extrabold tracking-tight text-[#1D2E24] sm:text-4xl md:text-5xl"
            >
              Entdecken Sie unsere Möbelkollektionen
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5C6B61] max-w-3xl">
              Entdecken Sie ergonomische Esszimmerstühle, handgeflochtenes Rattan, Tische aus massivem Eichen- und Walnussholz sowie luxuriöse Keramikplatten.
            </p>
          </div>

          {/* Centered grid dynamically fitting category count */}
          <div className={`grid ${gridColsClass} gap-5 sm:gap-6 w-full`}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/search?query=${encodeURIComponent(category.query || category.name)}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#DCE5DE] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#D1A966]/60"
                aria-label={`Shop ${category.name}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-white p-4 sm:p-6">
                  <Image
                    src={category.image}
                    alt={`${category.name} collection`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category Banner */}
                <div className="mt-auto flex items-center justify-between bg-[#1D2E24] px-5 py-4 text-[#F6F8F5] transition-colors duration-300 group-hover:bg-[#142019]">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold leading-tight tracking-wide group-hover:text-[#D1A966] transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
