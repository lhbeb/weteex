"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";
import { Loader2 } from "lucide-react";

interface SearchPageClientProps {
  initialQuery?: string;
  initialCategory?: string;
}

const CATALOG_CATEGORIES = [
  "Modern Chairs & Furniture",
  "Authentic Antiques",
  "Vintage Collectibles",
  "Decorative Pieces",
  "Tables & Accents",
] as const;

function getExactCatalogCategory(value: string): string {
  const normalizedValue = value.trim().toLowerCase();

  return (
    CATALOG_CATEGORIES.find(
      (category) => category.toLowerCase() === normalizedValue,
    ) || ""
  );
}

/**
 * Advanced search algorithm that scores products based on relevance
 */
function advancedSearch(products: Product[], query: string): Product[] {
  if (!query.trim()) {
    return products;
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Score each product based on how well it matches
  const scoredProducts = products.map((product) => {
    let score = 0;

    // Normalize all searchable fields - handle null/undefined safely
    const title = (product.title || "").toLowerCase();
    const description = (product.description || "").toLowerCase();
    const category = (product.category || "").toLowerCase();
    const brand = (product.brand || "").toLowerCase();

    // Check for exact phrase matches (highest score)
    if (title.includes(normalizedQuery)) score += 100;
    if (category.includes(normalizedQuery)) score += 50;
    if (brand.includes(normalizedQuery)) score += 40;
    if (description.includes(normalizedQuery)) score += 20;

    // Check for individual word matches
    queryWords.forEach((word) => {
      if (title.includes(word)) score += 20;
      if (category.includes(word)) score += 15;
      if (brand.includes(word)) score += 10;
      if (description.includes(word)) score += 5;
    });

    return { product, score };
  });

  // Filter products with score > 0 or return fallback list if broad search
  const filtered = scoredProducts
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.product);

  return filtered.length > 0 ? filtered : products;
}

export default function SearchPageClient({ initialQuery, initialCategory }: SearchPageClientProps) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query") || initialQuery || "";
  const categoryParam = searchParams.get("category") || initialCategory || "";
  // Older and cached navbar links may use category names. Treat known catalog
  // names as exact categories so accessory copy cannot leak into the results.
  const exactCategory = categoryParam.trim() || getExactCatalogCategory(queryParam);
  const activeTerm = exactCategory || queryParam;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination constants
  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  
  // Reset to page 1 when the search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [queryParam, exactCategory]);

  // Fetch and search products
  useEffect(() => {
    const fetchAndSearch = async () => {
      if (!activeTerm.trim()) {
        setProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setCurrentPage(1); // Reset page when new search starts

      try {
        // Fetch all products from the API
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const allProducts: Product[] = await response.json();

        const filteredProducts = exactCategory
          ? allProducts.filter(
              (product) =>
                String(product.category || '').trim().toLowerCase() ===
                exactCategory.toLowerCase(),
            )
          : advancedSearch(allProducts, queryParam);

        setProducts(filteredProducts);
      } catch (err) {
        console.error("Search error:", err);
        setError(err instanceof Error ? err.message : "Failed to search products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSearch();
  }, [queryParam, exactCategory, activeTerm]);

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-[#01428a] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading &quot;{activeTerm}&quot;...</p>
          <p className="text-gray-500 text-sm mt-2">Searching our curated antique &amp; furniture catalog</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#F6F8F5] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <p className="text-red-600 text-lg mb-2">Search Error</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </main>
    );
  }

  if (!activeTerm.trim()) {
    return (
      <main className="min-h-screen bg-[#F6F8F5]">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-[#5C6B61] text-lg">Search by piece name, era, designer, furniture style, or material</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F6F8F5]">
      {products.length === 0 ? (
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-[#1E2621] text-lg mb-2 font-semibold">
            No matching items found for &quot;{activeTerm}&quot;
          </p>
          <p className="text-[#5C6B61] text-sm">
            Try searching with different keywords or check your spelling
          </p>
        </div>
      ) : (
        <>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-[#1E2621] mb-2">
              {exactCategory ? exactCategory : <>Search Results for &quot;{queryParam}&quot;</>}
            </h1>
            <p className="text-[#5C6B61]">
              Found {products.length} {products.length === 1 ? "item" : "items"}
            </p>
          </div>
          
          <div className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showFullImage />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#1D2E24]/10 hover:text-[#1D2E24]"
                  }`}
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-[#1E2621] font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#1D2E24]/10 hover:text-[#1D2E24]"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}
