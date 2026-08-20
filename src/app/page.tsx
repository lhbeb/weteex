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

    const excavatorProducts = featuredProducts
      .filter(p =>
        p.collections?.includes('excavators') ||
        p.category?.trim().toLowerCase() === 'excavators' ||
        p.category?.trim().toLowerCase().includes('excavator')
      );

    const attachmentProducts = featuredProducts.filter((product) => {
      const productText = `${product.title} ${product.category}`.toLowerCase();
      return product.collections?.includes('attachments') ||
        /attachment|hydraulic thumb|bucket|auger|ripper/.test(productText);
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
        title="Best-Selling Excavators and Attachments"
        subtitle="Explore AGT mini excavators, compact 1-ton machines, and practical attachments for businesses and contractors."
        maxDisplay={FEATURED_PRODUCT_LIMIT}
        shuffleForVisitor
        visitorShuffleKey="home-featured"
      />

      <SameDayShipping />

      {excavatorProducts.length > 0 && (
        <Suspense fallback={null}>
          <ProductGrid
            products={excavatorProducts}
            sectionId="excavators"
            title=""
            editorialCard={{
              title: 'Compact Machines. More Ways to Work.',
              description:
                'Compare AGT mini excavators, compact 1-ton machines, and available attachments alongside engine, pilot-control, cab, air-conditioning, side-swing, and hydraulic-thumb configurations. Choose the setup your work demands at a competitive price.',
            }}
            randomizeForVisitor
            visitorShuffleKey="home-excavators"
          />
        </Suspense>
      )}

      {attachmentProducts.length > 0 && (
        <Suspense fallback={null}>
          <ProductGrid
            products={attachmentProducts}
            sectionId="excavator-attachments"
            title="Attachments That Expand What Your Excavator Can Do"
            randomizeForVisitor
            visitorShuffleKey="home-excavator-attachments"
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
          <h2 className="text-2xl font-bold text-[#262626] mb-4">Unable to load machinery</h2>
          <p className="text-gray-600">Please refresh the page or try again later.</p>
        </div>
      </>
    );
  }
}
