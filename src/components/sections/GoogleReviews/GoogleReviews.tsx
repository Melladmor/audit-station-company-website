import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import GoogleReviewsContainer from "./GoogleReviewsContainer";
import fetchPublicData from "@/lib/api/fetchPublicData";

const GoogleReviews = async () => {
  const t = await getTranslations("sections.googlereviews");
  const reviewData = await fetchPublicData({ url: "google_review" });

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <GoogleReviewsContainer data={reviewData} />
    </CustomSection>
  );
};

export default GoogleReviews;
