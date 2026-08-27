import React, { Suspense } from 'react';
import Hero from '@/components/Hero';
import SameDayShipping from '@/components/SameDayShipping';
import ProductGrid from '@/components/ProductGrid';
import HomeReviews from '@/components/HomeReviews';
import CategorySection from '@/components/CategorySection';
import PopularCategories from '@/components/PopularCategories';
import TyphonSpotlight from '@/components/TyphonSpotlight';
import { getFeaturedProducts, getProductBySlug } from '@/lib/data';
import { homeReviews, homeReviewsStats } from '@/lib/homeReviews';
import ScrollToTop from '@/components/ScrollToTop';
import { FEATURED_PRODUCT_LIMIT } from '@/config/products';

export default async function HomePage() {
  try {
    // Treat featured status as the homepage's data boundary. Keeping this
    // defensive check here prevents any future data-source regression from
    // leaking a non-featured product into a homepage section.
    const [featuredProductResults, typhonProduct] = await Promise.all([
      getFeaturedProducts(),
      getProductBySlug('pkubotad1105retractabletracksaccabinkLvM'),
    ]);

    const featuredProducts = featuredProductResults.filter(
      (product) => product.isFeatured === true,
    );

    const decorativeProducts = featuredProducts.filter((product) => {
      const text = `${product.title || ''} ${product.category || ''} ${product.brand || ''}`.toLowerCase();
      return (
        product.collections?.includes('decor') ||
        product.collections?.includes('collectibles') ||
        /decor|vase|art|antique|collectible|vintage|ornament|lamp|mirror|accent|sculpture/.test(text)
      );
    });

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
      <Hero />

      {typhonProduct && <TyphonSpotlight product={typhonProduct} />}

      <PopularCategories products={featuredProducts} />

      <CategorySection
        products={featuredProducts}
        title="Best-Selling Antiques & Modern Furniture"
        subtitle="Explore authentic antiques, modern chairs, unique vintage collectibles, and one-of-a-kind decorative pieces."
        maxDisplay={FEATURED_PRODUCT_LIMIT}
        shuffleForVisitor
        visitorShuffleKey="home-featured"
      />

      <SameDayShipping />

      {featuredProducts.length > 0 && (
        <Suspense fallback={null}>
          <ProductGrid
            products={featuredProducts}
            sectionId="collection"
            title=""
            editorialCard={{
              title: 'Authentic Craftsmanship. Timeless Character.',
              description:
                'From mid-century modern chairs and bespoke furniture to certified vintage collectibles and antique decorative pieces, find handcrafted items that bring personality and elegance to every space.',
            }}
            randomizeForVisitor
            visitorShuffleKey="home-furniture"
          />
        </Suspense>
      )}

      {decorativeProducts.length > 0 && (
        <Suspense fallback={null}>
          <ProductGrid
            products={decorativeProducts}
            sectionId="decorative-pieces"
            title="Unique Decorative Pieces & Vintage Accents"
            randomizeForVisitor
            visitorShuffleKey="home-decor"
          />
        </Suspense>
      )}

      <HomeReviews
        reviews={homeReviews}
        averageRating={homeReviewsStats.averageRating}
        totalReviews={homeReviewsStats.totalReviews}
      />
    </>
  );
  } catch (error) {
    console.error('Error loading homepage:', error);
    return (
      <>
        <Hero />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-[#262626] mb-4">Unable to load collection</h2>
          <p className="text-gray-600">Please refresh the page or try again later.</p>
        </div>
      </>
    );
  }
}
