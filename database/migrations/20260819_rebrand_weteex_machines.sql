-- Rebrand legacy official-store records to Weteextees.
-- Safe to run more than once.

UPDATE public.sellers
SET
  name = 'Weteextees',
  username = 'weteexmachines',
  updated_at = NOW()
WHERE lower(username) IN ('tazoota', 'official-tazoota', 'weteexmachines')
   OR lower(name) IN ('tazoota', 'weteex machines', 'weteextees machines');

UPDATE public.products
SET
  brand = 'Weteextees',
  updated_at = NOW()
WHERE lower(brand) IN ('tazoota', 'weteex machines', 'weteextees machines');

UPDATE public.products
SET
  payee_email = 'admin@weteextees.com',
  updated_at = NOW()
WHERE lower(payee_email) = 'admin@tazoota.com';
