import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSellerByUsername } from '@/lib/supabase/sellers';
import SellerPageClient from './SellerPageClient';

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const seller = await getSellerByUsername(username);

  if (!seller) {
    return {
      title: 'Seller Not Found | Weteex / Teextees',
      description: 'The requested seller profile could not be found.',
    };
  }

  return {
    title: `${seller.name} | Weteex / Teextees Seller`,
    description: seller.bio || `Shop products from ${seller.name} on Weteex / Teextees.`,
    openGraph: {
      title: `${seller.name} - Weteex / Teextees`,
      description: seller.bio || `Check out ${seller.name}'s profile and listings on Weteex / Teextees.`,
      images: seller.avatarUrl ? [{ url: seller.avatarUrl }] : [],
    },
  };
}

export default async function SellerPage({ params }: Props) {
  const { username } = await params;
  const seller = await getSellerByUsername(username);

  if (!seller) {
    notFound();
  }

  return <SellerPageClient seller={seller} />;
}
