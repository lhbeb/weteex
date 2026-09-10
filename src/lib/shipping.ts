export interface ShippingData {
  fullName?: string;
  countryCode: string;
  country: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  zipCode: string;
  state: string;
  email: string;
}

export interface CountryOption {
  code: string;
  name: string;
}

interface RegionOption {
  code: string;
  name: string;
}

export interface AddressConfig {
  streetLabel: string;
  streetPlaceholder: string;
  line2Label: string;
  line2Placeholder: string;
  cityLabel: string;
  cityPlaceholder: string;
  stateLabel: string;
  statePlaceholder: string;
  zipLabel: string;
  zipPlaceholder: string;
  zipPattern: string;
  zipTitle: string;
  zipMaxLength: number;
  zipInputMode: 'text' | 'numeric';
  regions: RegionOption[];
  postalBeforeCity?: boolean;
}

const US_REGIONS: RegionOption[] = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'],
  ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District of Columbia'],
  ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'],
  ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'],
  ['ME', 'Maine'], ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'],
  ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'],
  ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'], ['OK', 'Oklahoma'],
  ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'],
  ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'],
  ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
].map(([code, name]) => ({ code, name }));

export const PAYPAL_ELIGIBLE_COUNTRIES: CountryOption[] = [
  { code: 'US', name: 'United States' },
];
export const FEATURED_COUNTRIES: CountryOption[] = PAYPAL_ELIGIBLE_COUNTRIES;
export const OTHER_COUNTRIES: CountryOption[] = [];
export const ALL_COUNTRIES: CountryOption[] = FEATURED_COUNTRIES;

const US_ADDRESS_CONFIG: AddressConfig = {
  streetLabel: 'Street address *',
  streetPlaceholder: 'Street name and building number',
  line2Label: 'Apartment, suite, or unit',
  line2Placeholder: 'Optional',
  cityLabel: 'City *',
  cityPlaceholder: 'Enter your city',
  stateLabel: 'State *',
  statePlaceholder: 'Select or enter a state',
  zipLabel: 'ZIP code *',
  zipPlaceholder: 'e.g. 10001',
  zipPattern: '\\d{5}(-\\d{4})?',
  zipTitle: 'Enter a 5-digit ZIP code or ZIP+4',
  zipMaxLength: 10,
  zipInputMode: 'numeric',
  regions: US_REGIONS,
};

export function isPaypalEligibleCountry(countryCode: string): boolean {
  return countryCode.toUpperCase() === 'US';
}

export function isBig4Country(countryCode: string): boolean {
  return isPaypalEligibleCountry(countryCode);
}

export function isPaypalCheckoutFlow(checkoutFlow?: string | null): boolean {
  return Boolean(checkoutFlow?.startsWith('paypal-'));
}

export function usesCountryFirstAddress(_checkoutFlow?: string | null): boolean {
  return true;
}

export function getCountryName(countryCode: string): string {
  return countryCode.toUpperCase() === 'US' ? 'United States' : '';
}

export function getAddressConfig(_countryCode?: string): AddressConfig {
  return US_ADDRESS_CONFIG;
}

export function getLegacyAddressConfig(_isUK?: boolean): AddressConfig {
  return US_ADDRESS_CONFIG;
}

export function getRegionCode(_countryCode: string, regionName: string): string {
  const region = US_REGIONS.find(option =>
    option.name.toLowerCase() === regionName.trim().toLowerCase() ||
    option.code.toLowerCase() === regionName.trim().toLowerCase()
  );
  return region?.code || regionName.trim();
}

export function normalizePostalCode(value: string, _countryCode?: string): string {
  return value.replace(/[^0-9-]/g, '').slice(0, 10);
}

export function isPostalCodeValid(value: string, countryCode: string): boolean {
  return countryCode.toUpperCase() === 'US' && /^\d{5}(-\d{4})?$/.test(value.trim());
}

export function normalizeShippingData(data: Partial<ShippingData>): ShippingData {
  return {
    fullName: String(data.fullName || '').trim(),
    countryCode: 'US',
    country: 'United States',
    streetAddress: String(data.streetAddress || '').trim(),
    addressLine2: String(data.addressLine2 || '').trim(),
    city: String(data.city || '').trim(),
    zipCode: normalizePostalCode(String(data.zipCode || '').trim()),
    state: String(data.state || '').trim(),
    email: String(data.email || '').trim(),
  };
}

export function formatShippingAddressLines(data: Partial<ShippingData>): string[] {
  const address = normalizeShippingData(data);
  return [
    address.fullName,
    address.streetAddress,
    address.addressLine2,
    address.city,
    [address.state, address.zipCode].filter(Boolean).join(', '),
    address.country,
  ].filter((line): line is string => Boolean(line));
}

export function buildPaypalAddressFields(data: Partial<ShippingData>): Record<string, string> {
  const address = normalizeShippingData(data);
  if (!address.streetAddress || !address.city || !address.state || !address.zipCode) {
    return { no_shipping: '1' };
  }

  const fields: Record<string, string> = {
    no_shipping: '0',
    address_override: '1',
    address1: address.streetAddress,
    city: address.city,
    state: getRegionCode('US', address.state),
    zip: address.zipCode,
    country: 'US',
    email: address.email,
  };

  if (address.fullName) {
    const parts = address.fullName.split(/\s+/);
    fields.first_name = parts[0] || '';
    if (parts.length > 1) fields.last_name = parts.slice(1).join(' ');
  }
  if (address.addressLine2) fields.address2 = address.addressLine2;
  return fields;
}
