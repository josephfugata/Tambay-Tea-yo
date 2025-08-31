import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import MenuSection from '@/components/landing/MenuSection';
import ToppingPicker from '@/components/landing/ToppingPicker';
import CustomerReviews from '@/components/landing/CustomerReviews';
import PromoCodeGenerator from '@/components/landing/PromoCodeGenerator';
import StoreLocator from '@/components/landing/StoreLocator';
import SocialFeed from '@/components/landing/SocialFeed';
import Footer from '@/components/landing/Footer';
import FloatingPearls from '@/components/landing/FloatingPearls';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <FloatingPearls />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
        <ToppingPicker />
        <PromoCodeGenerator />
        <CustomerReviews />
        <StoreLocator />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
