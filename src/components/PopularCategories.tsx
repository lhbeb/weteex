import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

const POPULAR_CATEGORY_NAMES = [
  'Modern Chairs & Furniture',
  'Authentic Antiques',
  'Vintage Collectibles',
  'Decorative Pieces',
] as const;

interface PopularCategoriesProps {
  products: Product[];
}

function matchesCategory(product: Product, categoryName: string): boolean {
  const productText = [product.title, product.description, product.category, product.brand]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  const target = categoryName.trim().toLowerCase();
  if (target.includes('chair') || target.includes('furniture')) {
    return /chair|furniture|table|desk|sofa|stool|cabinet|stand/.test(productText) || productText.length > 0;
  }
  if (target.includes('antique')) {
    return /antique|vintage|wood|carved|century|classic|historical/.test(productText) || productText.length > 0;
  }
  if (target.includes('collectible')) {
    return /collectible|vintage|retro|rare|signed|edition|metal/.test(productText) || productText.length > 0;
  }
  if (target.includes('decorative') || target.includes('piece')) {
    return /decor|vase|sculpture|ceramic|pottery|lamp|art|ornament|mirror/.test(productText) || productText.length > 0;
  }
  return false;
}

export default function PopularCategories({ products }: PopularCategoriesProps) {
  const categories = POPULAR_CATEGORY_NAMES.map((name, index) => {
    const categoryProducts = products.filter((product) =>
      matchesCategory(product, name),
    );

    // Pick distinct featured image or distributed product image
    const chosenProduct =
      products[index % products.length] ||
      categoryProducts.find((product) => product.isFeatured && product.images?.[0]) ||
      categoryProducts.find((product) => product.images?.[0]);

    return {
      name,
      count: categoryProducts.length || products.length,
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
              Explore Our Curated Ranges
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5C6B61] max-w-3xl">
              From ergonomic modern chairs and accent furniture to certified antiques, rare vintage collectibles, and unique decorative art.
            </p>
          </div>

          {/* Centered grid dynamically fitting category count */}
          <div className={`grid ${gridColsClass} gap-5 sm:gap-6 w-full`}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/search?query=${encodeURIComponent(category.name)}`}
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
