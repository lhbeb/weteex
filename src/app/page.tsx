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
        product.category === 'Modern Chairs & Furniture' ||
        product.collections?.includes('modern-furniture') ||
        /\b(?:chair|table|desk|sofa|dining|rattan|wood|boucle|ceramic|marble|stoel|tafel|sessel)\b/i.test(
          `${product.title || ''} ${product.category || ''}`,
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
          title="Ausgewählte moderne Möbel &amp; Esszimmerkollektionen"
          titleEn="Featured Modern Furniture &amp; Dining Collections"
          subtitle="Entdecken Sie handgefertigte moderne Stühle, Naturrattan-Sitzmöbel, massive Esstische aus Walnussholz und edle Marmorplatten."
          subtitleEn="Discover handcrafted designer chairs, natural rattan seating, solid walnut dining tables, and luxury marble surfaces."
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
              title="Alle Möbel &amp; Stühle Kollektion"
              titleEn="All Furniture &amp; Chairs Collection"
              editorialCard={{
                title: 'Echte Handwerkskunst. Zeitloser Charakter.',
                titleEn: 'True Craftsmanship. Timeless Character.',
                description:
                  'Von modernen Esszimmerstühlen und maßgefertigten Esstischen bis hin zu zertifizierten Naturrattan-Möbeln und Steinoberflächen – finden Sie handgefertigte Stücke, die Persönlichkeit und Eleganz in jedes Zuhause bringen.',
                descriptionEn:
                  'From modern dining chairs and custom-crafted tables to certified natural rattan furniture and stone surfaces — discover handcrafted pieces that bring character and elegance to any space.',
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
