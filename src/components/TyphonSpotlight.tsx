import FeaturedProduct from './FeaturedProduct';
import type { Product } from '@/types/product';

interface TyphonSpotlightProps {
  product: Product;
}

const TyphonSpotlight = ({ product }: TyphonSpotlightProps) => (
  <section className="bg-gray-100 py-12 md:py-16" aria-labelledby="typhon-spotlight-title">
    <div className="container mx-auto px-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-left md:mb-10">
          <h2 id="typhon-spotlight-title" className="mb-4 text-3xl font-bold text-[#262626] md:text-4xl">
            TYPHON
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
            Discover the TYPHON TERROR XXV, a compact 2.7-ton excavator with a 25.1 HP Kubota diesel engine, retractable tracks, boom swing, and an enclosed AC and heater cabin for year-round work.
          </p>
        </div>

        <div>
          <FeaturedProduct
            product={{
              ...product,
              description: 'Built for compact construction sites, landscaping, trenching, and property work with dependable Kubota diesel power and comfortable all-season operation.',
            }}
            largeImage
          />
        </div>
      </div>
    </div>
  </section>
);

export default TyphonSpotlight;
