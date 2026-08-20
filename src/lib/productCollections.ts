export const PRODUCT_COLLECTION_OPTIONS = [
  { value: 'excavators', label: 'Excavators' },
  { value: 'attachments', label: 'Excavator Attachments' },
] as const;

export function getCollectionsForCategory(category: string): string[] {
  const normalized = category.toLowerCase().trim();

  if (/attachment|hydraulic thumb|bucket|auger|ripper/.test(normalized)) {
    return ['attachments'];
  }

  if (
    /excavator/.test(
      normalized,
    )
  ) {
    return ['excavators'];
  }

  return ['excavators'];
}
