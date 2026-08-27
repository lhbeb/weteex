import FeaturedProduct from './FeaturedProduct';
import type { Product } from '@/types/product';

interface TyphonSpotlightProps {
  product: Product;
}

const TyphonSpotlight = ({ product }: TyphonSpotlightProps) => (
  <section className="bg-[#F6F8F5] py-12 md:py-16" aria-labelledby="typhon-spotlight-title">
    <div className="container mx-auto px-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-left md:mb-10">
          <h2 id="typhon-spotlight-title" className="mb-4 text-3xl font-bold text-[#1E2621] md:text-4xl">
            Featured Highlight
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-[#5C6B61]">
            Discover handcrafted details, authentic materials, and timeless aesthetic design curated for discerning collectors and contemporary living spaces.
          </p>
        </div>

        <div>
          <FeaturedProduct
            product={product}
            largeImage
          />
        </div>
      </div>
    </div>
  </section>
);

export default TyphonSpotlight;
