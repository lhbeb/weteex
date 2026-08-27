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
    const featuredProductResults = await getFeaturedProducts();

    // Filter strictly for verified furniture and chair products
    const featuredProducts = featuredProductResults.filter(
      (product) =>
        product.isFeatured === true ||
        product.category === 'Modern Chairs & Furniture' ||
        product.collections?.includes('modern-furniture') ||
        /chair|table|desk|sofa|dining|rattan|wood|boucl|ceramic|marble/.test(
          `${product.title || ''} ${product.category || ''}`.toLowerCase(),
        ),
    );

    return (
      <>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Hero />

        <PopularCategories products={featuredProducts} />

        <CategorySection
          products={featuredProducts}
          title="Featured Modern Furniture & Dining Collections"
          subtitle="Explore handcrafted modern chairs, natural rattan seating, solid walnut dining tables, and marble centerpieces."
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
              title="All Furniture & Chairs Collection"
              editorialCard={{
                title: 'Authentic Craftsmanship. Timeless Character.',
                description:
                  'From mid-century modern chairs and bespoke dining tables to certified natural rattan seating and stone surfaces, find handcrafted pieces that bring personality and comfort to every space.',
              }}
              randomizeForVisitor
              visitorShuffleKey="home-furniture"
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
