"use client";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import SkeletonCard from "@/components/ui/skeleton/SkeletonCard";
import React from "react";

const CustomerSkeleton = () => {
  return (
    <CustomSection
      contentClassName="flex gap-5 items-center"
      className="mt-[100px]">
      <SkeletonCard />
      <SkeletonCard className="xl:block lg:block md:block sm:hidden xs:hidden" />
      <SkeletonCard className="xl:block lg:hidden md:hidden sm:hidden xs:hidden" />
      <SkeletonCard className="xl:block lg:block md:hidden sm:hidden xs:hidden" />
    </CustomSection>
  );
};

export default CustomerSkeleton;
