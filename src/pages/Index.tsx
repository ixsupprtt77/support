import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import DeviceShowcase from "@/components/DeviceShowcase";
import SupportCategories from "@/components/SupportCategories";
import ProcessShowcase from "@/components/ProcessShowcase";
import HowItWorks from "@/components/HowItWorks";
import RemoteSupportBanner from "@/components/RemoteSupportBanner";
import SupportTeam from "@/components/SupportTeam";
import PopularIssues from "@/components/PopularIssues";
import WarrantyAccordion from "@/components/WarrantyAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <DeviceShowcase />
      <SupportCategories />
      <ProcessShowcase />
      <HowItWorks />
      <RemoteSupportBanner />
      <SupportTeam />
      <PopularIssues />
      <WarrantyAccordion />
      <TestimonialCarousel />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
