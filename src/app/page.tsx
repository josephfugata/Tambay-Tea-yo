import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import OurStory from '@/components/landing/OurStory';
import ArtOfBrewing from '@/components/landing/ArtOfBrewing';
import MenuSection from '@/components/landing/MenuSection';
import FlavorJourney from '@/components/landing/FlavorJourney';
import ToppingPicker from '@/components/landing/ToppingPicker';
import ThirdPlace from '@/components/landing/ThirdPlace';
import MadeForYou from '@/components/landing/MadeForYou';
import DailyRitual from '@/components/landing/DailyRitual';
import CustomerReviews from '@/components/landing/CustomerReviews';
import CommunitySpotlight from '@/components/landing/CommunitySpotlight';
import BehindTheCup from '@/components/landing/BehindTheCup';
import StoreLocator from '@/components/landing/StoreLocator';
import SustainabilityPledge from '@/components/landing/SustainabilityPledge';
import SocialFeed from '@/components/landing/SocialFeed';
import NightCap from '@/components/landing/NightCap';
import Footer from '@/components/landing/Footer';
import FloatingPearls from '@/components/landing/FloatingPearls';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <FloatingPearls />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OurStory />
        <ArtOfBrewing />
        <MenuSection />
        <FlavorJourney />
        <ToppingPicker />
        <ThirdPlace />
        <MadeForYou />
        <DailyRitual />
        <CustomerReviews />
        <CommunitySpotlight />
        <BehindTheCup />
        <StoreLocator />
        <SustainabilityPledge />
        <SocialFeed />
        <NightCap />
      </main>
      <Footer />
    </div>
  );
}
