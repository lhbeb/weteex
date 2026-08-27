export const PRODUCT_COLLECTION_OPTIONS = [
  { value: 'modern-furniture', label: 'Modern Chairs & Furniture' },
  { value: 'antiques', label: 'Authentic Antiques' },
  { value: 'collectibles', label: 'Vintage Collectibles' },
  { value: 'decor', label: 'Decorative Pieces' },
] as const;

export function getCollectionsForCategory(category: string): string[] {
  const normalized = category.toLowerCase().trim();

  if (/chair|table|desk|sofa|furniture|stool|bench|modern/.test(normalized)) {
    return ['modern-furniture'];
  }

  if (/antique|vintage|heritage|estate|century|victorian/.test(normalized)) {
    return ['antiques'];
  }

  if (/collectible|statue|sculpture|clock|figure|rare|relic/.test(normalized)) {
    return ['collectibles'];
  }

  if (/decor|vase|lamp|lighting|ornament|mirror|glass|art|bowl/.test(normalized)) {
    return ['decor'];
  }

  return ['modern-furniture'];
}
