import React from "react";
import CallBack from "@/components/sections/CallBack/CallBack";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import OurHappyCustomers from "@/components/sections/OurHappyCustomer/OurHappyCustomers";
import AboutUsSection from "@/components/sections/AboutUs/AboutUsSection";
import OurServicesSection from "@/components/sections/OurServices/OurServicesSection";
import PackagesSection from "@/components/sections/Packages/PackagesSection";
import OurPlatform from "@/components/sections/OurPlatform/OurPlatform";
import TrainingPrograms from "@/components/sections/TrainingPrograms/TrainingPrograms";
import TaxStation from "@/components/sections/TaxStation/TaxStation";
import RewardsProgram from "@/components/sections/RewardsProgram/RewardsProgram";
import OurTeam from "@/components/sections/OurTeam/OurTeam";
import News from "@/components/sections/News/News";
import GoogleReviews from "@/components/sections/GoogleReviews/GoogleReviews";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurHappyCustomers />
      <AboutUsSection />
      <OurServicesSection />
      <PackagesSection />
      <OurPlatform />
      <TrainingPrograms />
      <TaxStation />
      <RewardsProgram />
      <OurTeam />
      <News />
      <GoogleReviews />
      <CallBack />
    </>
  );
}
