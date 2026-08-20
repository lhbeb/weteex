-- Rebrand legacy official-store records to Weteex / Teextees.
-- Safe to run more than once.

UPDATE public.sellers
SET
  name = 'Weteex / Teextees',
  username = 'weteexmachines',
  updated_at = NOW()
WHERE lower(username) IN ('tazoota', 'official-tazoota', 'weteexmachines')
   OR lower(name) IN ('tazoota', 'weteex machines', 'teextees / weteex machines');

UPDATE public.products
SET
  brand = 'Weteex / Teextees',
  updated_at = NOW()
WHERE lower(brand) IN ('tazoota', 'weteex machines', 'teextees / weteex machines');

UPDATE public.products
SET
  payee_email = 'admin@weteextees.com',
  updated_at = NOW()
WHERE lower(payee_email) = 'admin@tazoota.com';
