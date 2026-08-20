import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

const POPULAR_CATEGORY_NAMES = [
  'AGT Mini Excavators',
  'Mini Excavators',
  'Excavator Attachments',
] as const;

interface PopularCategoriesProps {
  products: Product[];
}

function matchesCategory(product: Product, categoryName: string): boolean {
  const productText = [product.title, product.description, product.category]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  const target = categoryName.trim().toLowerCase();
  if (target === 'agt mini excavators') {
    return productText.includes('agt') && productText.includes('excavator');
  }
  if (target === 'mini excavators') {
    return productText.includes('mini') && productText.includes('excavator');
  }
  if (target === 'excavator attachments') {
    return productText.includes('attachment') || productText.includes('hydraulic thumb');
  }
  return false;
}

export default function PopularCategories({ products }: PopularCategoriesProps) {
  const categories = POPULAR_CATEGORY_NAMES.map((name) => {
    const categoryProducts = products.filter((product) =>
      matchesCategory(product, name),
    );

    const chosenProduct =
      categoryProducts.find((product) => product.isFeatured && product.images?.[0]) ||
      categoryProducts.find((product) => product.images?.[0]);

    return {
      name,
      count: categoryProducts.length,
      image: chosenProduct?.images[0],
    };
  }).filter((category) => category.count > 0 && category.image);

  if (categories.length === 0) return null;

  const gridColsClass =
    categories.length === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : categories.length === 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';

  return (
    <section className="w-full bg-[#f4f8fc] py-12 sm:py-16 md:py-20" aria-labelledby="popular-categories-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-12 text-left">
            <h2
              id="popular-categories-title"
              className="text-3xl font-extrabold tracking-tight text-[#01428a] sm:text-4xl md:text-5xl"
            >
              Shop Our Core Machinery Ranges
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl">
              Explore AGT mini excavators, compact excavators, and attachments for a wider range of jobs.
            </p>
          </div>

          {/* Centered grid dynamically fitting category count */}
          <div className={`grid ${gridColsClass} gap-5 sm:gap-6 w-full`}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/search?query=${encodeURIComponent(category.name)}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#01428a]/15 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#01428a]/40"
                aria-label={`Shop ${category.name}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-white p-4 sm:p-6">
                  <Image
                    src={category.image!}
                    alt={`${category.name} collection`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category Banner */}
                <div className="mt-auto flex items-center justify-between bg-[#01428a] px-5 py-4 text-[#f1f6fb] transition-colors duration-300 group-hover:bg-[#01428a]">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold leading-tight tracking-wide">
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
